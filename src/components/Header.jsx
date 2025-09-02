// src/components/Header.jsx
import React from 'react';

export const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-600">البوابة التقنية</div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-blue-500">الأخبار التقنية</a></li>
          <li><a href="#" className="hover:text-blue-500">أجهزة محمولة</a></li>
          {/* ... باقي الأقسام */}
        </ul>
      </nav>
      <div>
        {/* هنا يمكن إضافة أيقونة البحث */}
      </div>
    </header>
  );
};