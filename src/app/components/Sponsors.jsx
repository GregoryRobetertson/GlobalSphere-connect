import Image from "next/image";
import { sponsors } from "./sponsorsList";


export default function Sponsors() {
    return (
        <section className="text-center">
        <h2 className="text-4xl font-bold mt-20 mb-16">Meet Our Sponsors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16">
            {sponsors.map((sponsor, index) => (
                <div key={index} className="bg-gray-300 rounded-lg p-8">
                    <img
                        src={`/${sponsor.src}.png`}
                        alt={sponsor.name + " Logo"}
                        className="mx-auto w-32 h-32 object-contain"
                    />
                    <h3 className="text-xl font-bold mt-4 mb-2">{sponsor.name}</h3>
                    <p className="text-gray-700 mb-4">{sponsor.description}</p>
                    <p className="text-blue-500">{sponsor.contact}</p>
                </div>
            ))}
        </div>
    </section>
    );
}
