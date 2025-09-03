import React, { useState, useEffect } from "react";
import { ArticleCard } from "../components/ArticleCard"; 
import { articles as apiArticles } from "../data"; 
import { Header } from '../components/Header'; // تأكد من المسار الصحيح ,حل المشكله الصففحه البيضاء فى بدجدايه المشروع

export function HomePage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(apiArticles);
  }, []); // [] تعني أن هذا التأثير يعمل مرة واحدة فقط عند تحميل المكون

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(article => (
            <ArticleCard
              key={article.id} // المفتاح مهم جداً في الرياكت للمساعدة في الأداء
              id={article.id}
              imageUrl={article.imageUrl}
              category={article.category}
              title={article.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}