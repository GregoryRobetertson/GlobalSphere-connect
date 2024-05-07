import Header from "./components/Header";
import Hero from "./components/Hero";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";
import { auth } from "./firebaseConfig";


export default function Home() {
  auth;
  return (
    <main>
      <Header/>
      <Hero/>
      <h1>Hello Community</h1>
      <LocalNews/>
      <Sponsors/>
      
    </main>
  );
}
