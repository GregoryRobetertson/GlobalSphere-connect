'use client';
import Sponsors from "./Sponsors";

export default function Sponsors() {
    return (
        <section>
        <h2>Meet Our Sponsors</h2>
        <div className=" text-center flex flex-wrap justify center gap-4 p-5">

           {Sponsors.map(())}
        </div>
   </section>
       
    )
}