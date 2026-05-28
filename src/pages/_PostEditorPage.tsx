import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSearchParams } from 'react-router-dom';
import MarkdownEditor from '../../components/MarkdownEditor';

export default function PostEditorPage() {
  const { t, lang } = useTranslation();
  const [searchParams] = useSearchParams();
  const slug = searchParams.get('slug') || '';
  const [saved, setSaved] = React.useState(false);

  const handleSaved = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleDelete = () => {
    // Redirect back to blog editor list
    window.location.href = '/blog/editor';
  };

  if (!slug) {
    return (
      <div className="p-8">
        <p className="text-gray-500">Please select a post to edit from the Blog Editor page.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      {saved && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          Post saved successfully!
        </div>
      )}
      <MarkdownEditor
        slug={slug}
        lang={lang}
        onSaved={handleSaved}
        onDelete={handleDelete}
      />
    </div>
  );
}
