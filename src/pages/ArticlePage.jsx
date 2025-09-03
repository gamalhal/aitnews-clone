// src/pages/ArticlePage.jsx

import React from 'react';
import { useParams } from 'react-router-dom'; // 1. نستورد أداة للحصول على الـ id
import { articles } from '../data'; // 2. نستورد بياناتنا

// تأكد من استخدام "export const" لتجنب أخطاء الاستيراد
export const ArticlePage = () => {
  // 3. نحصل على الـ id من الرابط
  const { id } = useParams();
  
  // 4. نبحث عن المقال الذي يطابق الـ id
  // ملاحظة: الـ id من الرابط يكون نصًا (string)، والـ id في بياناتنا رقم (number).
  // لذلك نحول الـ id إلى رقم ونستخدم المقارنة الصارمة.
  const article = articles.find(a => a.id === parseInt(id, 10));

  // 5. في حال لم يتم العثور على المقال (رابط خاطئ)
  if (!article) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold">عذراً، لم يتم العثور على المقال!</h1>
      </div>
    );
  }

  // 6. نعرض تفاصيل المقال الذي تم العثور عليه
  return (
    <div className="container mx-auto p-4 max-w-3xl">
      {/* العنوان والفئة */}
      <span className="block mb-2 text-base font-semibold text-blue-600">
        {article.category}
      </span>
      <h1 className="text-4xl font-extrabold text-gray-900 my-4 leading-tight">
        {article.title}
      </h1>
      
      {/* صورة المقال الرئيسية */}
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className="w-full rounded-lg shadow-lg mb-8" 
      />
      
      {/* محتوى المقال (نص مؤقت حاليًا) */}
      <div className="prose lg:prose-xl max-w-none">
        <p>
          هذا النص هو محتوى تجريبي للمقال الكامل. في مشروع حقيقي، سيتم جلب هذا المحتوى من قاعدة البيانات. يمكنك هنا إضافة عدة فقرات لوصف الموضوع بالتفصيل وشرح النقاط المختلفة المتعلقة بالعنوان. 
        </p>
        <p>
          الهدف هو محاكاة شكل المقال الإخباري الكامل، مع عناوين فرعية، صور إضافية، أو حتى فيديوهات إذا تطلب الأمر.
        </p>
      </div>
    </div>
  );
};