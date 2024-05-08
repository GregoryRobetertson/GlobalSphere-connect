'use client';
import react from "react";
import LogInWithGoogle from "./LoginWithGoogle";
export default function Hero({getuser}) {
    return (
        <section className="m-2.5 bg-cyan-200">
            <h2 className="p-5">Welcome to our Commuinity Marketplace</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint illum aliquid dolorem laboriosam repellat, expedita vel distinctio a blanditiis aspernatur animi consequuntur mollitia quis libero eligendi tempore dignissimos optio recusandae.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente possimus eveniet, officia pariatur ea quibusdam iste consequuntur architecto dicta alias eius nulla eaque neque perspiciatis impedit. Nihil quidem sequi quis!</p>
            <p>
                Why wait? Join us now and start sharing your items with your neighbor!
            </p>
<LogInWithGoogle getuser={getuser}/>
        </section>
    )
}