import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('contact.title')}</h1>
      <p className="text-gray-600 mb-6">{t('contact.description')}</p>

      <div className="prose max-w-none">
        <p>You can reach me through:</p>
        <ul>
          <li>GitHub: <a href="https://github.com" className="text-blue-600 hover:underline">GitHub Profile</a></li>
          <li>Email: <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">contact@example.com</a></li>
        </ul>
      </div>
    </div>
  );
}
