'use client';
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function LocalNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get (`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                console.log(response.data);
                setNews(response.data.articles);
            } catch (error) {  
                console.error('Error loading data', error);
            }    
        }
        fetchNews();
    }, []);

    return (
        <div>
            {news.map((item, index) => (
                <NewsCard key={index} article={item} />
            ))}
        </div>
    );
}
