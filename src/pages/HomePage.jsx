// src/pages/HomePage.jsx

import React, { useState, useEffect } from "react";
import { ArticleCard } from "../components/ArticleCard"; 
import { FeaturedArticle } from "../components/FeaturedArticle";
import { Sidebar } from "../components/Sidebar";
import { HorizontalCard } from '../components/HorizontalCard';
import { articles as apiArticles } from "../data"; 

export function HomePage() {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [mainArticles, setMainArticles] = useState([]);
  const [sidebarArticles, setSidebarArticles] = useState([]);

  useEffect(() => {
    const mainArticle = apiArticles.find(a => a.featured);
    setFeaturedArticle(mainArticle);

    const regularArticles = apiArticles.filter(a => !a.featured);
    
    setMainArticles(regularArticles.slice(0, 4));
    setSidebarArticles(regularArticles.slice(4));
  }, []);

  return (
    <div className="container mx-auto p-4">
      
      <section className="mb-8">
        <FeaturedArticle article={featuredArticle} />
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <main className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainArticles.map(article => (
              <ArticleCard 
                key={article.id}
                id={article.id}
                imageUrl={article.imageUrl}
                category={article.category}
                title={article.title}
              />
            ))}
          </div>
        </main>
        
        <div className="lg:col-span-1">
          <Sidebar articles={sidebarArticles} />
        </div>
      </div>

      <section>
        <h2 className="text-2xl font-bold border-b-2 border-blue-600 pb-2 mb-6">
          اختيارات المحرر
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sidebarArticles.slice(0, 2).map(article => (
            <HorizontalCard key={article.id} article={article} />
          ))}
        </div>
      </section>
      
    </div>
  );
}