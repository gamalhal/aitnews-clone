// src/pages/CategoryPage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import { articles } from '../data';
import { ArticleCard } from '../components/ArticleCard';

export const CategoryPage = () => {
  const { categoryName } = useParams();

  // فلترة المقالات لعرض فقط تلك التي تنتمي للقسم الحالي
  const filteredArticles = articles.filter(
    article => article.category === categoryName
  );

  return (
    <main className="container mx-auto p-4">
      {/* عنوان ديناميكي يعرض اسم القسم الحالي */}
      <h1 className="text-3xl font-bold my-6 border-b-2 border-blue-600 pb-2">
        قسم: {categoryName}
      </h1>

      {/* التحقق إذا كان القسم فارغًا */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard 
              key={article.id}
              id={article.id}
              imageUrl={article.imageUrl}
              category={article.category}
              title={article.title}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          عذراً، لا توجد مقالات في هذا القسم حاليًا.
        </p>
      )}
    </main>
  );
};