// src/components/Sidebar.jsx

import React from 'react';
import { SideArticleCard } from './SideArticleCard';

export const Sidebar = ({ articles }) => {
  return (
    <aside className="space-y-6">
      <h2 className="text-xl font-bold border-b-2 border-blue-600 pb-2">
        أبرز الموضوعات
      </h2>
      <div className="space-y-4">
        {articles.map(article => (
          <SideArticleCard key={article.id} article={article} />
        ))}
      </div>
    </aside>
  );
};