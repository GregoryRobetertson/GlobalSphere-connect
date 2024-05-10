'use client';
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function LocalNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {                const response = await axios.get("/data.json");
                setNews(response.data.articles);
                console.log(response.data.articles);
            } catch (error) {
                console.error('Error loading data', error);
            }
        }
        fetchNews();
    }, []);

    return (
        <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-10">Worldwide News</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {news.map((item, index) => (
                <NewsCard key={index} article={item} />
            ))}
        </div>
    </section>
    
    );
}
