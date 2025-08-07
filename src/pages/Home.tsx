// src/pages/Home.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBook, FaVideo, FaFlask, FaFlag, FaNewspaper, FaInfoCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    document.title = `${t('welcome_title')} - ${t('home_title_short')}`;
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [t, i18n.language]);
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      y: -10,
      boxShadow: '0 15px 30px rgba(93, 173, 226, 0.2)', // ظل أزرق خفيف
      transition: {
        duration: 0.3,
      },
    },
  };

  const sections = [
    { title: t('library_title'), description: t('library_description_short'), icon: <FaBook size={48} />, link: '/library' },
    { title: t('videos_title'), description: t('videos_description_short'), icon: <FaVideo size={48} />, link: '/videos' },
    { title: t('labs_title'), description: t('labs_description_short'), icon: <FaFlask size={48} />, link: '/labs' },
    { title: t('challenges_title'), description: t('challenges_description_short'), icon: <FaFlag size={48} />, link: '/cyber-challenges' },
    { title: t('news_title'), description: t('news_description_short'), icon: <FaNewspaper size={48} />, link: '/vulnerabilities-news' },
    { title: t('about_title'), description: t('about_description_short'), icon: <FaInfoCircle size={48} />, link: '/about-us' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-primaryBg text-primaryText transition-colors duration-500"
    >
      {/* قسم البطل (Hero Section) */}
      <section className="bg-primaryBg text-primaryText py-20 md:py-32 px-6">
        <div className="container mx-auto text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 text-accentBlue"
          >
            {t('home_title')} {/* تم تغيير هذا ليستخدم مفتاح الترجمة home_title */}
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-medium mb-8 max-w-2xl mx-auto text-accentBlue"
          >
            {t('home_description')}
          </motion.p>
          {/* تم إلغاء زر "ابدأ الآن" */}
        </div>
      </section>

      {/* قسم الميزات (Features Section) */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        {/* تم إلغاء عبارة "اكتشف مسارك" */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="flex flex-col items-center justify-center p-8 bg-cardBg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-gray-700"
            >
              <Link to={section.link} className="flex flex-col items-center w-full h-full">
                <div className="flex justify-center items-center w-20 h-20 rounded-full bg-primaryBg text-accentBlue mb-6 shadow-md">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-accentBlue">{section.title}</h3>
                <p className="text-primaryText text-sm flex-grow">{section.description}</p>
                <button className="mt-6 bg-accentBlue hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow transition-all duration-300">
                  {t('explore_button')}
                </button>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
