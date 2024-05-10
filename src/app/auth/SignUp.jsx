'use client'; 
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { auth } from '../firebaseConfig';
export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState();
  const [error, setError] = useState('');
  const router = useRouter();
  async function handleSubmit (e){
    e.preventDefault();
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {displayName: username});
       setUsername('')
       setEmail('');
       setPassword('');
       setError('');
       router.push('/') 
    } catch (error) {
        console.error('Failed to create user');
    }
  }
    return (
        <form onSubmit={handleSubmit}>
        {error && <Alert variant={'danger'}>{error[error.message]}</Alert>}
      <label>
          Email:
          <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="username@example.com" value={email} name="email" />
      </label>
      <label>
          Password:
          <input type="password" onChange={(e) => setPassword(e.target.value)}  value={password} name="password"/>
      </label>
      <button className="btn btn-primary">Signin!</button>
  </form>
    )
}