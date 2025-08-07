import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './i18n'; // استيراد ملف تهيئة i18n
import { I18nextProvider } from 'react-i18next'; // استيراد I18nextProvider
import i18n from './i18n'; // استيراد i18n instance

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}> {/* هذا هو الإصلاح الحاسم لمشكلة الترجمة */}
      <App />
    </I18nextProvider>
  </React.StrictMode>,
);
