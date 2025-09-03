// src/components/SideArticleCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';

export const SideArticleCard = ({ article }) => {
  return (
    <Link to={`/article/${article.id}`} className="block group">
      <div className="flex items-center space-x-4">
        {/* الصورة المصغرة */}
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-24 h-24 object-cover rounded-lg"
        />
        {/* العنوان */}
        <div>
          <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h4>
        </div>
      </div>
    </Link>
  );
};