import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Post from './Post';
import { auth, db } from '@/app/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  useEffect(() => {
    const userId = auth.currentUser?.uid;

    if (user) {
      const showMine = checked ? where('userId', '==', userId) : '';
      const q = query(collection(db, 'posts'), showMine); // Pass 'showMine' to query if checked is true
      const unsub = onSnapshot(q, (snapshot) => {
        const todoArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(todoArray);
      });
      return () => unsub();
    }
  }, [user, checked]); // Add 'checked' to the dependency array

  const handleCheckboxChange = () => {
    setChecked(!checked); // Toggle the checked state
  };

  return (
    <section className="flex w-100 flex-column">
      <label>
        Show only my posts:
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
        />
      </label>
      {posts.map((post) => (
        <Post key={post.id} user={user} post={post} />
      ))}
    </section>
  );
}
