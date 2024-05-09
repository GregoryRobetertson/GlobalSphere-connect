'use client';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogInWithGoogle from './LoginWithGoogle';
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function Header(getUser) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Community Site</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
         
            <Nav className="ml-auto">

   <LogInWithGoogle getUser={getUser}/>
   <div className='btn btn-primary' onClick={()=> signOut(auth)}>Sign Out</div>
              <Nav.Link href="#home">Sign up</Nav.Link>
              <Nav.Link href="#link">Sign in</Nav.Link>
              </Nav>
        </Container>
      </Navbar>
    )
}