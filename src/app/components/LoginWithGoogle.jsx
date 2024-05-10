"use client";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";

export default function LogInWithGoogle({ getUser }) {
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      getUser(user);
      console.log("User signed in:", user);
    } catch (error) {
      console.error("Error signing in with google:", error);
    }
  }
  return (
    <button
      onClick={handleGoogleSignIn}
      className="text-gray-700 hover:text-blue-500"
    >
      Login
    </button>
  );
}
