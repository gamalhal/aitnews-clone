// src/components/Footer.jsx

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} كافة الحقوق محفوظة لموقع البوابة التقنية (نسخة مقلدة)
          </p>
          
          {/* يمكنك إضافة روابط للسوشيال ميديا هنا في المستقبل */}
          <div className="flex space-x-4">
            {/* مثال */}
            <a href="#" className="hover:text-blue-400">فيسبوك</a>
            <a href="#" className="hover:text-blue-400">تويتر</a>
          </div>
        </div>
      </div>
    </footer>
  );
};