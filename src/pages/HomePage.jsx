// import React, { useState, useEffect } from "react";
// import { ArticleCard } from "../components/ArticleCard"; 
// import { articles as apiArticles } from "../data"; 
// import { Header } from '../components/Header'; // تأكد من المسار الصحيح ,حل المشكله الصففحه البيضاء فى بدجدايه المشروع

// export function HomePage() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     setArticles(apiArticles);
//   }, []); // [] تعني أن هذا التأثير يعمل مرة واحدة فقط عند تحميل المكون

//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <Header />
//       <main className="container mx-auto p-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {articles.map(article => (
//             <ArticleCard
//               key={article.id} // المفتاح مهم جداً في الرياكت للمساعدة في الأداء
//               id={article.id}
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


// src/pages/HomePage.jsx

// import React, { useState, useEffect } from "react";
// import { ArticleCard } from "../components/ArticleCard"; 
// import { FeaturedArticle } from "../components/FeaturedArticle"; // <-- استيراد المكون الجديد
// import { articles as apiArticles } from "../data"; 

// export function HomePage() {
//   const [featuredArticle, setFeaturedArticle] = useState(null);
//   const [otherArticles, setOtherArticles] = useState([]);

//   useEffect(() => {
//     // ابحث عن المقال المحدد كـ featured
//     const mainArticle = apiArticles.find(a => a.featured);
//     setFeaturedArticle(mainArticle);

//     // احصل على كل المقالات الأخرى
//     const regularArticles = apiArticles.filter(a => !a.featured);
//     setOtherArticles(regularArticles);
//   }, []);

//   return (
//     <main className="container mx-auto p-4">
      
//       {/* القسم الأول: عرض المقال الرئيسي */}
//       <section className="mb-12">
//         <FeaturedArticle article={featuredArticle} />
//       </section>

//       {/* القسم الثاني: عرض باقي المقالات في شبكة */}
//       <section>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {otherArticles.map(article => (
//             <ArticleCard 
//               key={article.id}
//               id={article.id}
//               imageUrl={article.imageUrl}
//               category={article.category}
//               title={article.title}
//             />
//           ))}
//         </div>
//       </section>
      
//     </main>
//   );
// }


// src/pages/HomePage.jsx

import React, { useState, useEffect } from "react";
import { ArticleCard } from "../components/ArticleCard"; 
import { FeaturedArticle } from "../components/FeaturedArticle";
import { Sidebar } from "../components/Sidebar"; // <-- استيراد الشريط الجانبي
import { articles as apiArticles } from "../data"; 

export function HomePage() {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [mainArticles, setMainArticles] = useState([]);
  const [sidebarArticles, setSidebarArticles] = useState([]);

  useEffect(() => {
    // فصل المقال الرئيسي
    const mainArticle = apiArticles.find(a => a.featured);
    setFeaturedArticle(mainArticle);

    // فصل باقي المقالات
    const regularArticles = apiArticles.filter(a => !a.featured);
    
    // قسمناها إلى مقالات للشبكة الرئيسية ومقالات للشريط الجانبي
    setMainArticles(regularArticles.slice(0, 4)); // أول 4 مقالات للشبكة
    setSidebarArticles(regularArticles.slice(4)); // الباقي للشريط الجانبي

  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* قسم المقال الرئيسي */}
      <section className="mb-8">
        <FeaturedArticle article={featuredArticle} />
      </section>

      {/* قسم المحتوى الرئيسي والشريط الجانبي */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* العمود الرئيسي (يأخذ ثلثي المساحة) */}
        <main className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainArticles.map(article => (
              <ArticleCard 
                key={article.id}
                id={article.id}
                imageUrl={article.imageUrl}
                category={article.category}
                title={article.title}
              />
            ))}
          </div>
        </main>
        
        {/* الشريط الجانبي (يأخذ ثلث المساحة) */}
        <div className="lg:col-span-1">
          <Sidebar articles={sidebarArticles} />
        </div>

      </div>
    </div>
  );
}