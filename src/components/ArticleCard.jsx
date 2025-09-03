// // src/components/ArticleCard.jsx
// import React from 'react';

// export const ArticleCard = ({ imageUrl, category, title }) => {
//   return (
//     <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
//       <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <span className="text-sm text-blue-500 font-semibold">{category}</span>
//         <h3 className="text-lg font-bold mt-2 h-20">{title}</h3>
//       </div>
//     </div>
  

//   );
// };

// src/components/ArticleCard.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';

// export const ArticleCard = ({ id, imageUrl, category, title }) => { 
//   return (
//     <Link to={`/article/${id}`}> 
//       {/* تم تعديل هذا الـ div ليحتوي على التصميم الجديد */}
//       <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        
//         <img 
//           src={imageUrl} 
//           alt={title} 
//           className="w-full h-48 object-cover" 
//         />
        
//         {/* هذا div جديد لتنظيم محتوى النص */}
//         <div className="p-4">
//           <span className="block mb-2 text-sm font-semibold text-blue-600">
//             {category}
//           </span>
//           <h3 className="text-lg font-bold text-gray-900 h-20">
//             {title}
//           </h3>
//         </div>

//       </div>
//     </Link>
//   );
// };




// src/components/ArticleCard.jsx
// ... (import statements)
export const ArticleCard = ({ id, imageUrl, category, title, date }) => { // 1. استقبل date
    // ... (كود الـ Link والـ div الرئيسي)
    <div className="p-4">
      <span className="block mb-2 ...">{category}</span>
      <h3 className="text-lg font-bold ...">{title}</h3>
      {/* 2. أضف سطر التاريخ */}
      <p className="text-xs text-gray-500 mt-2">{date}</p>
    </div>
    // ...
};