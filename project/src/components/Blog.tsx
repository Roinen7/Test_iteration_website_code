import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import Background from './Background';
import AIAppetite from './AIAppetite';
import { ArrowRight } from 'lucide-react';

interface BlogPostData {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}

const blogPosts: BlogPostData[] = [
  {
    id: 'the-year-of-agents',
    title: 'The year of agents',
    excerpt: 'Last year was widely anticipated to be the year of AI, and it indeed turned out to be the year of...',
    date: 'December 10, 2024',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=500&h=300&fit=crop',
  },
  {
    id: 'what-should-you-expect-from-ai',
    title: 'What should you expect from AI in the near term?',
    excerpt: 'Many people I speak to either underestimate AI by highlighting all the limitations the technology...',
    date: 'December 5, 2024',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=500&h=300&fit=crop',
  },
  {
    id: 'digitizing-unstructured-accounting-data',
    title: 'Digitizing Unstructured Accounting Data with LLMs',
    excerpt: 'Dealing with unstructured accounting data can be a nightmare, especially when it comes in the form...',
    date: 'November 28, 2024',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=500&h=300&fit=crop',
  },
  {
    id: 'training-fine-tuning-agents',
    title: 'Training, Fine-tuning, and Deployment of AI Agents',
    excerpt: 'The landscape of AI has evolved dramatically with the emergence of sophisticated AI agents...',
    date: 'November 20, 2024',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=500&h=300&fit=crop',
  },
  {
    id: 'why-ai-projects-go-wrong',
    title: 'Why AI projects go wrong',
    excerpt: 'Despite the immense potential of AI, many projects fail to deliver the expected results...',
    date: 'November 15, 2024',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=500&h=300&fit=crop',
  },
  {
    id: 'guide-to-ai-terminology',
    title: 'Our guide to the words and terminology you need to know',
    excerpt: 'The world of AI is filled with technical jargon and terminology that can be confusing...',
    date: 'November 10, 2024',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=500&h=300&fit=crop',
  },
];

export default function Blog() {
  const navigate = useNavigate();

  const handlePostClick = (postId: string) => {
    navigate(`/blog/${postId}`);
  };

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
              <p className="text-xl text-slate-300">Insights on AI, technology, and innovation</p>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto mt-6"></div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
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

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-cyan-400">{post.date}</span>
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
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Check out my free weekly AI Newsletter</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
            </div>
            <AIAppetite />
          </div>
        </section>
      </div>
    </div>
  );
}
