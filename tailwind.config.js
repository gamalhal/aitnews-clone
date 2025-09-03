/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // للبحث في ملف HTML الرئيسي
    "./src/**/*.{js,ts,jsx,tsx}", // للبحث في جميع ملفات رياكت داخل مجلد src
  ],
  theme: {
    extend: {
      // هنا يمكنك إضافة ألوان أو خطوط مخصصة في المستقبل
    },
  },
  plugins: [],
}


