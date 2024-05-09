'use client'

import Image from "next/image";
import { sponsors } from "./sponsorsList";

export default function() {
    return (
        <section className="m-5">
        <h2>Meet Our Sponsors</h2>
        <div className="flex flex-wrap justify center gap-4 p-5">

           {sponsors.map((sponsor, index) => (
<div key={index}> 
<Image
width={150}
height={150}
src={`/${sponsor.src}.png`}
alt={sponsor.name + "Logo"}
className="rounded-lg shawdow-lg"
/>
<h3 className="p-1.5">{sponsor.name}</h3>
<p>{sponsor.description}</p>
<p>{sponsor.contact}</p>
</div>

           ))}
        </div>
   </section>
  




      
       
    )
}