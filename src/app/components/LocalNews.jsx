"use client";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";

export default function LocalNews() {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(`https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=f99a5be2836b4f2556a9210782282c81`);
        setNews(response.data.articles);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading data", error);
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <section className="my-40">
      <h2 className="text-center mb-20">In the Know: Local News!</h2>
      {!isLoading ? (
        <div className="flex gap-5 flex-wrap justify-center">
          {news.map((item, index) => (
            <NewsCard key={index} article={item}  />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
}
