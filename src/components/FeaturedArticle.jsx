// src/components/FeaturedArticle.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export const FeaturedArticle = ({ article }) => {
  if (!article) return null; // لا تعرض شيئًا إذا لم يكن هناك مقال

  return (
    <Link to={`/article/${article.id}`} className="block group">
      <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* طبقة سوداء شفافة لتحسين قراءة النص فوق الصورة */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 p-6">
          <span className="bg-blue-600 text-white px-3 py-1 text-sm font-semibold rounded">
            {article.category}
          </span>
          <h2 className="text-3xl font-bold text-white mt-4 leading-tight">
            {article.title}
          </h2>
          <p className="text-gray-300 mt-2 hidden md:block">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};