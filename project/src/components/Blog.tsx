import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Background from './Background';
import AIAppetite from './AIAppetite';
import { ArrowRight } from 'lucide-react';
import { fetchPosts, initStoryblokBridge } from '../lib/storyblok';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

// Start with a minimal list containing the real post so it appears on /blog
// Keep the shape so additional posts can be added following the same structure.
const blogPosts: BlogPostData[] = [
  {
    id: 'is-ai-just-a-massive-bubble',
    title: 'Is AI Just a Massive Bubble? My Thoughts on "AI Eating the World"',
    excerpt:
      'A perspective on whether AI is overhyped or the start of a platform shift — my read on Benedict Evans and the industry-wide capex race.',
    date: '',
    image: '/Is_AI_a_Bubble.jpg',
  },
];

export default function Blog() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPostData[]>(blogPosts);

  const handlePostClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

  useEffect(() => {
    let mounted = true;
    // initialize Storyblok bridge for visual editing
    initStoryblokBridge();

    fetchPosts()
      .then((fetched) => {
        if (!mounted) return;
        if (fetched && fetched.length > 0) {
          // map Storyblok shape to our BlogPostData
          const mapped = fetched.map((p: any) => ({
            id: p.slug || p.id,
            title: p.title,
            excerpt: p.excerpt || '',
            date: '',
            image: p.image || p.image?.filename || p.image || '',
          }));
          setPosts(mapped);
        }
      })
      .catch(() => {
        // ignore, keep fallback posts
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Navigation />
        
        {/* Blog Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-4">Blog</h1>
              <p className="text-xl text-slate-300">Insights on AI, Business, technology, and innovation</p>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mt-6"></div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post) => (
                <button
                  key={post.id}
                  onClick={() => handlePostClick(post.id)}
                  className="group bg-gray-900/60 rounded-2xl shadow-lg border border-cyan-400/20 overflow-hidden hover:border-cyan-400/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
                >
                  {/* Post Image */}
                  <div className="overflow-hidden h-48 bg-gray-800">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 text-left line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-300 text-sm mb-4 text-left line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-end">
                      <ArrowRight size={18} className="text-pink-500 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-2">
              <h2 className="text-4xl font-bold text-white mb-2">Want to stay up to date with the latest and greatest in the realm of AI?</h2>
            </div>
            <AIAppetite compact />
          </div>
        </section>
      </div>
    </div>
  );
}
