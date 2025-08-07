// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('home_title_short'), path: '/' },
    { name: t('library_title'), path: '/library' },
    { name: t('videos_title'), path: '/videos' },
    { name: t('labs_title'), path: '/labs' },
    { name: t('challenges_title'), path: '/cyber-challenges' },
    { name: t('news_title'), path: '/vulnerabilities-news' },
    { name: t('about_title'), path: '/about-us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
      className="fixed top-0 left-0 w-full z-50 bg-primaryBg/80 backdrop-blur-md shadow-md transition-colors duration-500"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* شعار الموقع (صورة فقط) - تأكد من أن ملف الشعار اسمه logo.png في مجلد public */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="Cybersecurity Platform Logo" className="h-8 w-8" />
        </Link>

        {/* روابط التنقل لسطح المكتب */}
        {/* تم إزالة الشرط الذي كان يعكس ترتيب الأزرار */}
        <div className="hidden md:flex items-center gap-10 flex-row">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-primaryText hover:text-accentBlue transition-colors duration-300 font-medium p-2 rounded-md
                ${isActive(link.path) ? 'text-accentBlue' : ''}
                hover:shadow-lg hover:shadow-accentBlue/20`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.span
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-accentBlue"
                />
              )}
            </Link>
          ))}
          {/* زر تبديل اللغة (زر واحد) */}
          <button
            onClick={changeLanguage}
            className="p-2 rounded-full bg-cardBg text-primaryText hover:bg-gray-700 transition-colors duration-300"
            aria-label="Switch language"
          >
            {i18n.language === 'ar' ? t('english') : t('arabic')}
          </button>
        </div>

        {/* زر قائمة الجوال (Hamburger menu) */}
        <div className="md:hidden flex items-center">
          {/* زر تبديل اللغة في الجوال */}
          <button
            onClick={changeLanguage}
            className="p-2 rounded-full bg-cardBg text-primaryText hover:bg-gray-700 transition-colors duration-300 mr-2"
            aria-label="Switch language"
          >
            {i18n.language === 'ar' ? t('english') : t('arabic')}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primaryText text-2xl focus:outline-none"
            aria-label="Open mobile menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* قائمة الجوال (تظهر عند الفتح) */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-primaryBg shadow-lg"
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium py-2 w-full text-center hover:bg-cardBg transition-colors duration-300
                ${isActive(link.path) ? 'text-accentBlue' : 'text-primaryText'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
