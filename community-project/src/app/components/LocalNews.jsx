'use client';
import react, { useEffect, useState } from "react";
import axios from 'axios'; 
import NewsCard from "./NewsCard";
export default function LocalNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        async function fetchNews() {
 try {
            const response = await axios.get(`https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=us&max=10&apikey=${process.env.NEXT_PUBLIC_API_KEY}`)
       setNews(response.data)
        } catch (error) {
            setNews(response.data.articles);
            
            console.error('Error loading data', error);
        }
            
        }
       
    })
     return(
        <div>
        {news.map((item, index) => {
<NewsCard  key={index} article={item}/>
        })}
        </div>
     )
}