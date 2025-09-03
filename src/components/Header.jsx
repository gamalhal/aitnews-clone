// // src/components/Header.jsx
// import React from 'react';

// export const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center">
//       <div className="text-2xl font-bold text-blue-600">البوابة التقنية</div>
//       <nav>
//         <ul className="flex space-x-6">
//           <li><a href="#" className="hover:text-blue-500">الأخبار التقنية</a></li>
//           <li><a href="#" className="hover:text-blue-500">أجهزة محمولة</a></li>
//           {/* ... باقي الأقسام */}
//         </ul>
//       </nav>
//       <div>
//         {/* هنا يمكن إضافة أيقونة البحث */}
//       </div>
//     </header>
//   );
// };


// src/components/Header.jsx

// import React from 'react';
// import { Link } from 'react-router-dom'; // سنستخدم Link لجعل الشعار قابلاً للنقر

// export const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      
//       {/* الشعار أصبح رابطًا للصفحة الرئيسية */}
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         البوابة التقنية
//       </Link>
      
//       <nav>
//         {/* أضفنا المزيد من الأقسام بناءً على الموقع الأصلي */}
//         <ul className="hidden md:flex space-x-6">
//           <li><Link to="/" className="hover:text-blue-500">الرئيسية</Link></li>
//           <li><Link to="/" className="hover:text-blue-500">الأخبار التقنية</Link></li>
//           <li><Link to="/" className="hover:text-blue-500">أجهزة محمولة</Link></li>
//           <li><Link to="/" className="hover:text-blue-500">دراسات وتقارير</Link></li>
//           <li><Link to="/" className="hover:text-blue-500">الأمن السيبراني</Link></li>
//         </ul>
//       </nav>

//       <div>
//         {/* أيقونة بحث بسيطة كمثال */}
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//       </div>
//     </header>
//   );
// };


// src/components/Header.jsx (تعديل)

import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        البوابة التقنية
      </Link>
      
      <nav>
        <ul className="hidden md:flex space-x-6">
          {/* تم تحويل الروابط إلى مكون Link */}
          <li><Link to="/" className="hover:text-blue-500">الرئيسية</Link></li>
          <li><Link to="/category/الأخبار التقنية" className="hover:text-blue-500">الأخبار التقنية</Link></li>
          <li><Link to="/category/أجهزة محمولة" className="hover:text-blue-500">أجهزة محمولة</Link></li>
          <li><Link to="/category/دراسات وتقارير" className="hover:text-blue-500">دراسات وتقارير</Link></li>
          <li><Link to="/category/الأمن السيبراني" className="hover:text-blue-500">الأمن السيبراني</Link></li>
        </ul>
      </nav>

      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </header>
  );
};