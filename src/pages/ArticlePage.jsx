// src/pages/ArticlePage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data';

export const ArticlePage = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id == id);

  if (!article) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">عذراً، لم يتم العثور على المقال!</h1>
      </div>
    );
  }

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto p-4 max-w-3xl">
        
        <div className="text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-blue-600">الرئيسية</Link>
          <span className="mx-2">&gt;</span>
          <Link to={`/category/${article.category}`} className="hover:text-blue-600">{article.category}</Link>
        </div>

        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 my-4 leading-tight">
          {article.title}
        </h1>
        
        <div className="flex items-center space-x-4 text-gray-600 mb-6">
          <span>بواسطة: <strong>{article.author}</strong></span>
          <span>•</span>
          <span>{article.date}</span>
        </div>
        
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full rounded-lg shadow-lg mb-8" 
        />
        
        <div className="prose prose-lg max-w-none">
          <p>
            {article.content || "لا يتوفر محتوى حاليًا لهذا المقال."}
          </p>
        </div>

      </div>
    </div>
  );
};