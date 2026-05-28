import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{t('about.title')}</h1>
      <p className="text-gray-600 mb-6">{t('about.description')}</p>

      <div className="prose max-w-none">
        <p>This is a static blog built with Astro and deployed on GitHub Pages. All blog posts are stored as MDX files in the repository and can be edited through the admin interface.</p>

        <h2>Features</h2>
        <ul>
          <li>Multi-language support (Korean, English, Japanese)</li>
          <li>MDX editing with GitHub API integration</li>
          <li>Static site generation with Astro</li>
          <li>Responsive design with Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
