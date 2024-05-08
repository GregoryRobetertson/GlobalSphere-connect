'use client';
import { signInWithPopup } from "firebase/auth"
import { useState } from "react"


export default function LogInWithGppgle({getUser}) {
async function handleGoogleSignIn(){
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user
        getUser(user);
    } catch (error) {
        
    }
}
    return (
        <button  onClick={handleGoogleSignIn} className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600">
       Log in with Google
        </button>
    )
} 