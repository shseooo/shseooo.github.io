import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import { listBlogPosts } from '../../utils/github';

export default function BlogEditorPage() {
  const { t, lang } = useTranslation();
  const [searchParams] = React.useSearchParams();
  const slug = searchParams.get('slug') || '';
  const [posts, setPosts] = React.useState<Array<{ slug: string; lang: string; path: string }>>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const allPosts = await listBlogPosts();
      setPosts(allPosts);
      setLoading(false);
    }

    loadPosts();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Editor</h1>

      {/* Post selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Select a post to edit:</label>
        <select className="w-full md:w-64 p-2 border rounded">
          <option value="">-- Select --</option>
          {posts.map((post) => (
            <option key={post.path} value={post.slug}>
              {post.slug} ({post.lang})
            </option>
          ))}
        </select>
      </div>

      {/* Editor will be rendered based on selected slug */}
      <div className="p-8 border rounded-lg bg-gray-50">
        <p className="text-gray-500 text-center">
          Select a post from the dropdown above, or create a new one.
        </p>
      </div>
    </div>
  );
}
