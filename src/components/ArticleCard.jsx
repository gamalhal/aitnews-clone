// src/components/ArticleCard.jsx
import React from 'react';

export const ArticleCard = ({ imageUrl, category, title }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="text-sm text-blue-500 font-semibold">{category}</span>
        <h3 className="text-lg font-bold mt-2 h-20">{title}</h3>
      </div>
    </div>
  );
};