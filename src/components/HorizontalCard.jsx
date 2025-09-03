// src/components/HorizontalCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export const HorizontalCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row">
        <img 
          src={article.imageUrl} 
          alt={article.title}
          className="w-full md:w-1/3 h-48 md:h-full object-cover"
        />
        <div className="p-4 flex flex-col justify-center">
          <span className="text-sm font-semibold text-blue-600">{article.category}</span>
          <h3 className="text-lg font-bold mt-1 group-hover:text-blue-600">
            {article.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm hidden md:block">
            {article.description}
          </p>
        </div>
      </div>
    </Link>
  );
};