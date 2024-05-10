'use client';

import LoginWithGoogle from './LoginWithGoogle';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header({ getUser }) {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex items-center justify-between w-full">
        <Link className="text-xl font-bold" href="/">
          Community Site
        </Link>
        <nav>
          <button onClick={toggleMenu} className="lg:hidden">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-16 6h16'}
              />
            </svg>
          </button>
          <ul
            className={`${
              isOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row gap-x-5 items-center mt-3`}
          >
            <li>
           <Link
  className="hover:text-blue-500 text-gray-700"
  href="/dashboard"
>
  Dashboard
</Link>
            </li>
            {user ? (
              <li>
                <button
                  onClick={() => signOut(auth)}
                  className="text-gray-700 hover:text-blue-500"
                >
                  Logout
                </button>
              </li>
            ) : (
              <li>
                <LoginWithGoogle getUser={getUser} />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}  