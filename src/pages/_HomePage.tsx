import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('home.title')}</h1>
      <p className="text-gray-600 mb-6">{t('home.description')}</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">{t('home.blog.title')}</h2>
          <p className="text-gray-600 mb-4">{t('home.blog.description')}</p>
        </div>

        <div className="p-6 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">{t('home.about.title')}</h2>
          <p className="text-gray-600 mb-4">{t('home.about.description')}</p>
        </div>
      </div>
    </div>
  );
}
