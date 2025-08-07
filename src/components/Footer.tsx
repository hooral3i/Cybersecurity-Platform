// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primaryBg text-primaryText border-t border-gray-700 mt-12 py-8 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4 text-lg font-semibold text-accentBlue">
          {t('welcome_title')}
        </p>
        <p className="mb-4 text-primaryText">
          © 2025 جميع الحقوق محفوظة.
        </p>
        <div className="flex justify-center space-x-6 text-2xl">
          <a href="https://github.com/hooral3i" target="_blank" rel="noopener noreferrer" className="hover:text-accentBlue transition-colors duration-300" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/hawra%E2%80%99a-amer-92669b35a/" target="_blank" rel="noopener noreferrer" className="hover:text-accentBlue transition-colors duration-300" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:hooraledani@gmail.com" className="hover:text-accentBlue transition-colors duration-300" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
