import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function LocalNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get("/data.json");
                setNews(response.data.articles);
                console.log(response.data.articles);
            } catch (error) {
                console.error('Error loading data', error);
            }
        }
        fetchNews();
    }, []);

    return (
        <section className="p-8">
        <h2 className="text-xl mb-6">Worldwide News</h2>
        <div className="flex flex-wrap gap-4">
            {news.map((item, index) => (
                <NewsCard key={index} article={item} />
            ))}
        </div>
    </section>
    
    );
}
