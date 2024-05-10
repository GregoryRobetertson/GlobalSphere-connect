'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogInWithGoogle from './LoginWithGoogle';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useEffect, useState } from 'react';

export default function Header({getUser}) {
  const [user, setUser] = useState(null);
useEffect(() => {
  onAuthStateChanged(auth, (user) => {
   setUser(user);
  }, [])
})

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Community Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            <Nav className="ml-auto">
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
                <LogInWithGoogle getUser={getUser} />
              </li>
            )}

              </Nav>
        </Container>
      </Navbar>
    )
}