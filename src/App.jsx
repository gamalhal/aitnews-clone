// // src/App.jsx
// import React from 'react';
// import { Header } from './components/Header';
// import { ArticleCard } from './components/ArticleCard';
// // سنحذف محتوى App.css الافتراضي ونعتمد على Tailwind

// function App() {
//   // بيانات مؤقتة لعرضها
//   const sampleArticle = {
//     imageUrl: "https://aitnews.com/wp-content/uploads/2025/09/Meta-AI-Project-Collapse.jpg",
//     category: "الأخبار التقنية",
//     title: "خلافات متصاعدة.. مشروع ميتا الطموح للذكاء الاصطناعي على شفا الانهيار"
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <main className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold my-6">أحدث المستجدات التقنية:</h1>
//         {/* هنا سنعرض شبكة من المقالات */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           <ArticleCard {...sampleArticle} />
//           <ArticleCard {...sampleArticle} />
//           <ArticleCard {...sampleArticle} />
//           {/* كرر البطاقة عدة مرات لترى التصميم */}
//         </div>
//       </main>
//       {/* يمكن إضافة الفوتر هنا لاحقاً */}
//     </div>
//   );
// }

// export default App;

// src/App.jsx (تعديل)
// import React, { useState, useEffect } from 'react';
// import { Header } from './components/Header';
// import { ArticleCard } from './components/ArticleCard';
// import { articles as apiArticles } from './data'; // استيراد بياناتنا

// function App() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     // في مشروع حقيقي، ستكون هنا عملية fetch من API
//     // الآن، نحن فقط نضبط الحالة من ملفنا المحلي
//     setArticles(apiArticles);
//   }, []); // [] تعني أن هذا التأثير يعمل مرة واحدة فقط عند تحميل المكون

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <main className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold my-6">أحدث المستجدات التقنية:</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.map(article => (
//             <ArticleCard 
//               key={article.id} // المفتاح مهم جداً في الرياكت للمساعدة في الأداء
//               imageUrl={article.imageUrl}
//               category={article.category}
//               title={article.title}
//             />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;



// src/App.jsx (تعديل نهائي)


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
// import { HomePage } from './pages/HomePage';
// // سنقوم بإنشاء ArticlePage في الخطوة التالية

// function App() {
//   return (
//     <Router>
//       <div className="bg-gray-100 min-h-screen">
//         <Header />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           {/* <Route path="/article/:id" element={<ArticlePage />} /> */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;



// src/App.jsx

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Header } from './components/Header';
// import { HomePage } from './pages/HomePage';
// import { ArticlePage } from './pages/ArticlePage'; // تأكد من إنشاء هذا الملف
// import { Footer } from './components/Footer'; // <-- 1. استورد الفوتر

// function App() {
//   return (
//     <Router>
//       {/* استخدمنا flexbox لجعل الفوتر يلتصق بأسفل الصفحة حتى لو كان المحتوى قليلاً */}
//       <div className="flex flex-col min-h-screen bg-gray-100">
//         <Header />
        
//         {/* main سيأخذ كل المساحة المتاحة */}
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/article/:id" element={<ArticlePage />} />
//           </Routes>
//         </main>
        
//         <Footer /> {/* <-- 2. أضف الفوتر هنا في النهاية */}
//       </div>
//     </Router>
//   );
// }

// export default App;

// src/App.jsx (تعديل)

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ArticlePage } from './pages/ArticlePage';
import { Footer } from './components/Footer';
import { CategoryPage } from './pages/CategoryPage'; // <-- 1. استورد صفحة القسم

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            {/* 2. أضف المسار الديناميكي للأقسام */}
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;