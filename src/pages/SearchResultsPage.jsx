// src/pages/SearchResultsPage.jsx

import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { articles } from '../data';
import { ArticleCard } from '../components/ArticleCard';

export const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); // الحصول على كلمة البحث من الرابط ?q=...

  // فلترة المقالات التي يحتوي عنوانها أو محتواها على كلمة البحث
  const filteredArticles = articles.filter(article => 
    article.title.includes(query) || article.content.includes(query)
  );

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-6">
        نتائج البحث عن: <span className="text-blue-600">{query}</span>
      </h1>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <ArticleCard 
              key={article.id}
              id={article.id}
              imageUrl={article.imageUrl}
              category={article.category}
              title={article.title}
              date={article.date}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          عذراً، لم يتم العثور على نتائج تطابق بحثك.
        </p>
      )}
    </main>
  );
};