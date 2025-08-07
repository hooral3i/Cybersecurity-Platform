// src/App.tsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// مكونات الصفحات (تستخدم الألوان الثابتة للوضع الداكن)
const Library = () => <div className="text-center py-40 min-h-screen bg-primaryBg text-primaryText">صفحة المكتبة</div>;
const Videos = () => <div className="text-center py-40 min-h-screen bg-primaryBg text-primaryText">صفحة الفيديوهات</div>;
const Labs = () => <div className="text-center py-40 min-h-screen bg-primaryBg text-primaryText">صفحة المختبرات</div>;
const CyberChallenges = () => <div className="text-center py-40 min-h-screen bg-primaryBg text-primaryText">صفحة التحديات السيبرانية</div>;
const VulnerabilitiesNews = () => <div className="text-center py-40 min-h-screen bg-primaryBg text-primaryText">صفحة أخبار الثغرات</div>;
const AboutUs = () => <div className="text-center py-40 min-h-screen bg-primaryBg text-primaryText">صفحة من نحن</div>;

function App() {
  // تثبيت التطبيق على الوضع الداكن
  useEffect(() => {
    document.documentElement.classList.add('dark'); // التأكد من تطبيق فئة dark
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <div className="font-inter">
          {/* تمرير darkMode كـ true وثابتة، ودالة وهمية لـ toggleDarkMode */}
          <Navbar darkMode={true} toggleDarkMode={() => {}} />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/library" element={<Library />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/labs" element={<Labs />} />
              <Route path="/cyber-challenges" element={<CyberChallenges />} />
              <Route path="/vulnerabilities-news" element={<VulnerabilitiesNews />} />
              <Route path="/about-us" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer /> {/* التذييل يتم عرضه هنا مرة واحدة فقط */}
        </div>
      </Router>
    </I18nextProvider>
  );
}

export default App;
