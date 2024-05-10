'use client';
import { deleteDoc, doc } from 'firebase/firestore';
import React, { useState } from 'react'
import AddComment from '@/app/components/AddComment';
import Modal from '@/app/components/Modal';
import ViewComments from '@/app/components/ViewComments';


import { Accordion } from 'react-bootstrap';
import Trash from '@/app/components/svgs/Trash';
import Edit from '@/app/components/svgs/Edit';

export default function Post({post, user}) {
    const [show, setShow] = useState(false);

    function onShow(bool) {
        setShow(bool);
    }

    async function handleDelete() {
        const postRef = doc(db, 'posts', post.id);
        try {
            await deleteDoc(postRef);
        } catch (error) {
            console.error('Error deleting doc', error);
        }
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
  )
}
