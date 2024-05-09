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
  return (
    <main>
      <Header  getUser={getUser}/>
      <Hero/>
      <LocalNews/>
      <Sponsors/>
      
    </main>
  );
}
