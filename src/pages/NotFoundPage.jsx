// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-6xl font-extrabold text-blue-600">404</h1>
      <h2 className="text-2xl font-bold text-gray-800 mt-4">الصفحة غير موجودة</h2>
      <p className="text-gray-600 mt-2">عذرًا، لا يمكننا العثور على الصفحة التي تبحث عنها.</p>
      <Link 
        to="/" 
        className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
};