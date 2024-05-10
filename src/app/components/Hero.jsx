'use client';
import react from "react";
import LogInWithGoogle from "./LoginWithGoogle";
export default function Hero({getuser}) {
    return (
        <section className="py-10 px-5 bg-blue-100 text-center">
            <h2 className="text-3x1 font-bold text-gray-800 mb-3">Welcome to our Commuinity Marketplace</h2>
            <p className="text-gray-700 mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illum aliquid dolorem laboriosam repellat, expedita vel distinctio a blanditiis aspernatur animi consequuntur mollitia quis libero eligendi tempore dignissimos optio recusandae.</p>
            <p className="text-grey-700 mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente possimus eveniet, officia pariatur ea quibusdam iste consequuntur architecto dicta alias eius nulla eaque neque perspiciatis impedit. Nihil quidem sequi quis!</p>
            <p className="text-grey-700 mb-5">
                Why wait? Join us now and start sharing your items with your neighbor!
            </p>
        </section>
    )
}