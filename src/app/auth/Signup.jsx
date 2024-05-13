'use client';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebaseConfig';
import Alert from 'react-bootstrap/Alert';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, { displayName: username });
      setUsername('');
      setEmail('');
      setPassword('');
      setError('');
      router.push('/');
    } catch (error) {
      console.error('It didnt create a user', error);
      setError(error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      {error && <Alert variant={'danger'}>{error}</Alert>}
      <label className="block mb-4">
        <span className="text-gray-700">Username:</span>
        <input
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="User Name"
          type="text"
          value={username}
          name="username"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Email:</span>
        <input
          onChange={(e) => {
            setError('');
            setEmail(e.target.value);
          }}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          placeholder="username@example.com"
          type="email"
          value={email}
          name="email"
        />
      </label>
      <label className="block mb-4">
        <span className="text-gray-700">Password:</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          type="password"
          value={password}
          name="password"
        />
      </label>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Sign up!
      </button>
    </form>
  );
}
