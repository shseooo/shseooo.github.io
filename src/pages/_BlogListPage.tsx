import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { listBlogPosts } from '../utils/github';

export default function BlogListPage() {
  const { t, lang } = useTranslation();
  const [posts, setPosts] = React.useState<Array<{ slug: string; lang: string; path: string }>>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadPosts() {
      setLoading(true);
      const allPosts = await listBlogPosts();
      // Filter by current language
      const filtered = allPosts.filter(p => p.lang === lang);
      setPosts(filtered);
      setLoading(false);
    }

    loadPosts();
  }, [lang]);

  if (loading) {
    return <div className="p-8 text-center">Loading posts...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts found. Create your first post!</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <div key={post.path} className="p-4 border rounded hover:shadow-md transition">
              <h2 className="text-xl font-semibold">{post.slug}</h2>
              <p className="text-sm text-gray-500">{post.path}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
