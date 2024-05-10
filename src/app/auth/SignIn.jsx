'use client';
import { useRouter } from "next/router";
import { useState } from "react"
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import Alert from 'react-bootstrap/Alert';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

async function handleSubmit(e) {
    e.preventDefault();
    try {
        await signInWithEmailAndPassword(auth, email, password);
        setEmail('');
        setPassword('');
        setError('');
        router.push('/')
    } catch (error) {
        console.error('Error signing in', error);
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