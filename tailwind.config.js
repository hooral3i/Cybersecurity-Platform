/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // تم تثبيت الوضع الداكن بشكل دائم
  darkMode: 'class', // سيبقى هذا الخيار لكن لن نستخدم التبديل الديناميكي
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // الألوان الجديدة للوضع الداكن (الآن هي الألوان الأساسية)
        primaryBg: '#000000', // الخلفية الأساسية (أسود)
        primaryText: '#FFFFFF', // لون النص الأساسي (أبيض)
        cardBg: '#2B334A', // خلفية البطاقات/الأقسام
        accentBlue: '#5DADE2', // لون التمييز/الأزرار/الروابط

        // ألوان الخطأ والنجاح
        errorRed: '#E74C3C',
        successGreen: '#27AE60',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}