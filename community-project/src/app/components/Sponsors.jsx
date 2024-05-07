'use client'
import Sponsors from "./Sponsors";

export default function() {
    return (
        <section>
        <h2>Meet Our Sponsors</h2>
        <div className="flex flex-wrap justify center gap-4 p-5">

           {Sponsors.map((sponsor, index) => (
<div key={index}> 
<Image
width={150}
height={150}
src={'/sponsors/${sponsor.src}.png'}
alt={sponsor.name + "Logo"}
className="rounded-lg shawdow-lg"
/>
<h3>{sponsor.name}</h3>
<p>{sponsor.description}</p>
<p>{sponsor.contact}</p>
</div>

           ))}
        </div>
   </section>
  




      
       
    )
}