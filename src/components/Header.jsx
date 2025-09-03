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

// import React from 'react';
// import { Link } from 'react-router-dom';

// export const Header = () => {
//   return (
//     <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
//       <Link to="/" className="text-2xl font-bold text-blue-600">
//         البوابة التقنية
//       </Link>
      
//       <nav>
//         <ul className="hidden md:flex space-x-6">
//           {/* تم تحويل الروابط إلى مكون Link */}
//           <li><Link to="/" className="hover:text-blue-500">الرئيسية</Link></li>
//           <li><Link to="/category/الأخبار التقنية" className="hover:text-blue-500">الأخبار التقنية</Link></li>
//           <li><Link to="/category/أجهزة محمولة" className="hover:text-blue-500">أجهزة محمولة</Link></li>
//           <li><Link to="/category/دراسات وتقارير" className="hover:text-blue-500">دراسات وتقارير</Link></li>
//           <li><Link to="/category/الأمن السيبراني" className="hover:text-blue-500">الأمن السيبراني</Link></li>
//         </ul>
//       </nav>

//       <div>
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//       </div>
//     </header>
//   );
// };



// src/components/Header.jsx

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Header = () => {
//   // حالة لتتبع ما إذا كانت قائمة الجوال مفتوحة أم لا
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-50">
//       <div className="container mx-auto p-4 flex justify-between items-center">
//         {/* الشعار */}
//         <Link to="/" className="text-2xl font-bold text-blue-600">
//           البوابة التقنية
//         </Link>

//         {/* قائمة سطح المكتب (تختفي على الجوال) */}
//         <nav className="hidden md:block">
//           <ul className="flex space-x-6">
//             <li><Link to="/" className="hover:text-blue-500">الرئيسية</Link></li>
//             <li><Link to="/category/الأخبار التقنية" className="hover:text-blue-500">الأخبار التقنية</Link></li>
//             <li><Link to="/category/أجهزة محمولة" className="hover:text-blue-500">أجهزة محمولة</Link></li>
//             <li><Link to="/category/دراسات وتقارير" className="hover:text-blue-500">دراسات وتقارير</Link></li>
//           </ul>
//         </nav>

//         {/* أيقونة البحث */}
//         <div>
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-500 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//         </div>

//         {/* زر قائمة الهامبرغر (يظهر على الجوال فقط) */}
//         <div className="md:hidden">
//           <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* القائمة المنسدلة للجوال */}
//       {/* يتم عرضها فقط إذا كانت isMenuOpen تساوي true */}
//       {isMenuOpen && (
//         <nav className="md:hidden bg-white px-4 pt-2 pb-4">
//           <ul className="flex flex-col space-y-2">
//             <li><Link to="/" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link></li>
//             <li><Link to="/category/الأخبار التقنية" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>الأخبار التقنية</Link></li>
//             <li><Link to="/category/أجهزة محمولة" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>أجهزة محمولة</Link></li>
//             <li><Link to="/category/دراسات وتقارير" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>دراسات وتقارير</Link></li>
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };


// src/components/Header.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
      setIsMenuOpen(false); // أغلق القائمة بعد البحث
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        {/* الشعار */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          البوابة التقنية
        </Link>

        {/* قائمة سطح المكتب (تختفي على الجوال) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-blue-500">الرئيسية</Link>
          <Link to="/category/الأخبار التقنية" className="hover:text-blue-500">الأخبار التقنية</Link>
          <Link to="/category/أجهزة محمولة" className="hover:text-blue-500">أجهزة محمولة</Link>
          
          {/* نموذج البحث المدمج في قائمة سطح المكتب */}
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث..."
              className="border rounded-l-md px-2 py-1 w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded-r-md hover:bg-blue-700">
              بحث
            </button>
          </form>
        </nav>

        {/* زر قائمة الهامبرغر (يظهر على الجوال فقط) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* القائمة المنسدلة للجوال */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 border-t">
          <ul className="flex flex-col space-y-2">
            <li><Link to="/" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link></li>
            <li><Link to="/category/الأخبار التقنية" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>الأخبار التقنية</Link></li>
            <li><Link to="/category/أجهزة محمولة" className="block py-2 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>أجهزة محمولة</Link></li>
          </ul>
           {/* نموذج البحث في قائمة الجوال */}
           <form onSubmit={handleSearchSubmit} className="flex items-center mt-4">
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن مقال..."
              className="border rounded-l-md px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded-r-md hover:bg-blue-700">
              بحث
            </button>
          </form>
        </nav>
      )}
    </header>
  );
};
