"use client";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebaseConfig";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginWithGoogle({ getUser }) {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      getUser(user);
    } catch (error) {}
  }

  return (
    <div
      onClick={handleGoogleSignIn}
      className="cursor-pointer px-4 py-2 rounded-full text-white text-sm tracking-wider font-semibold bg-blue-600 hover:bg-blue-700 focus:bg-blue-800 active:bg-blue-600 w-44"
    >
      Login with google
    </div>
  );
}
