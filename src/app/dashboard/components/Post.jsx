import { useState, useEffect } from 'react';
import { Accordion } from 'react-bootstrap';
import { db } from '@/app/firebaseConfig';
import { doc, deleteDoc, getDoc } from 'firebase/firestore';

import AddComment from '@/app/components/AddComment';
import Modal from '@/app/components/Modal';
import ViewComments from '@/app/components/ViewComments';
import Edit from '@/app/components/svgs/Edit';
import Trash from '@/app/components/svgs/Trash';

export default function Post({ post, user }) {
  const [show, setShow] = useState(false);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const docRef = doc(db, 'posts', post.id);
        const docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          setDeleted(true);
        }
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    }

    fetchData();
  }, [post.id]);

  function onShow(bool) {
    setShow(bool);
  }

  async function handleDelete() {
    const postRef = doc(db, 'posts', post.id);
    try {
      await deleteDoc(postRef);
      setShow(false);
      setDeleted(true);
    } catch (error) {
      console.error('error deleting doc', error);
    }
  }

  if (deleted) {
    return null; // Don't render anything if the post is deleted
  }

  return (
    <>
      {show && <Modal id={post.id} onShow={onShow} isNew={false} />}
      <div className="bg-white border border-gray-200 shadow-custom w-full lg:w-2/3 mx-auto my-4 rounded-lg overflow-hidden font-sans">
        <div className="px-4 py-4">
          <p className="text-sm text-gray-600">{post.displayName}</p>
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p>{post.description}</p>
          {user && (
            <>
              {user.uid === post.userId && (
                <div className="flex space-x-2 mt-2">
                  <Trash handleDelete={handleDelete} />
                  <div onClick={() => setShow(true)}>
                    <Edit />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
        <AddComment post={post} />
        <div className="w-full lg:w-2/3 mx-auto">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Comments</Accordion.Header>
              <Accordion.Body>
                <ViewComments post={post} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
}
