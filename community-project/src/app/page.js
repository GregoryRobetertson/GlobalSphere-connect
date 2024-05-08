'use client';
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";


export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    onAuthStateChanged(auth,( user) =>  {
      
    })
  })
function getUser(user) {
  setUser(user);
}

  auth;
  return (
    <main>
      {console.log(user)}
      <Header  getUser={getUser}/>
      <Hero/>
      <h1 className="m-5">Hello Community</h1>
      <LocalNews/>
      <Sponsors/>
      
    </main>
  );
}
