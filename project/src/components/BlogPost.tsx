import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from './Navigation';
import Background from './Background';

interface BlogPostContent {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

// Sample blog post content
const blogPostsContent: Record<string, BlogPostContent> = {
  'the-year-of-agents': {
    id: 'the-year-of-agents',
    title: 'The year of agents',
    date: 'December 10, 2024',
    author: 'Amartya Kaviraj',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=1200&h=600&fit=crop',
    content: `Last year was widely anticipated to be the year of AI, and it indeed turned out to be the year of significant advancements in artificial intelligence. One of the most exciting developments has been the emergence of intelligent agents—autonomous systems capable of making decisions and taking actions with minimal human intervention.

These AI agents represent a paradigm shift in how we approach problem-solving and automation. Unlike traditional software that requires explicit instructions for every action, agents can reason, learn, and adapt to new situations in real-time.

The implications are profound. From autonomous vehicles to intelligent customer service systems, AI agents are beginning to reshape industries across the board. Businesses that fail to understand and adopt this technology risk falling behind their competitors.

In this post, we'll explore what makes 2024 the year of agents, the underlying technologies that power them, and how you can prepare your organization for this transformation.`,
  },
  'what-should-you-expect-from-ai': {
    id: 'what-should-you-expect-from-ai',
    title: 'What should you expect from AI in the near term?',
    date: 'December 5, 2024',
    author: 'Amartya Kaviraj',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=1200&h=600&fit=crop',
    content: `Many people I speak to either underestimate AI by highlighting all the limitations the technology currently has, or overestimate it by believing we're on the verge of artificial general intelligence. The truth, as usual, lies somewhere in between.

In the near term, we can expect AI to continue improving in narrow domains where it excels. Language models will become more efficient, multimodal AI will mature, and specialized AI applications will proliferate across industries.

However, we should also be realistic about the limitations. Current AI systems still struggle with common sense reasoning, they require significant amounts of data to train effectively, and they can produce confident-sounding but incorrect outputs—a phenomenon known as hallucination.

The most successful implementations of AI in the coming months will be those that augment human capabilities rather than replace them entirely. This human-in-the-loop approach will remain essential for maintaining quality and safety in critical applications.

Let's explore what's actually coming down the pipeline and what remains firmly in the realm of science fiction.`,
  },
  'digitizing-unstructured-accounting-data': {
    id: 'digitizing-unstructured-accounting-data',
    title: 'Digitizing Unstructured Accounting Data with LLMs',
    date: 'November 28, 2024',
    author: 'Amartya Kaviraj',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=1200&h=600&fit=crop',
    content: `Dealing with unstructured accounting data can be a nightmare, especially when it comes in the form of scanned documents, PDFs, and handwritten notes. Large Language Models (LLMs) offer a powerful solution to this persistent challenge.

Traditional OCR and data extraction methods often fail when dealing with the variety and complexity of real-world accounting documents. They struggle with poor image quality, unusual layouts, and context-dependent information extraction.

LLMs, on the other hand, can understand context and can handle a wide variety of document formats and styles. They can extract relevant information from complex documents, categorize transactions, and even flag potential errors or anomalies.

In this post, we'll walk through a practical implementation of using LLMs to digitize unstructured accounting data. We'll cover everything from document preprocessing to validation and integration with existing accounting systems.`,
  },
  'training-fine-tuning-agents': {
    id: 'training-fine-tuning-agents',
    title: 'Training, Fine-tuning, and Deployment of AI Agents',
    date: 'November 20, 2024',
    author: 'Amartya Kaviraj',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=1200&h=600&fit=crop',
    content: `The landscape of AI has evolved dramatically with the emergence of sophisticated AI agents. But how do you actually train, fine-tune, and deploy these systems in production?

Training an AI agent involves more than just feeding data to a model. You need to define the agent's objectives, set up the appropriate reward mechanisms, and create feedback loops that help the agent learn from its experiences.

Fine-tuning is where domain-specific knowledge comes into play. By training your agent on data specific to your problem domain, you can significantly improve its performance and reduce errors.

Deployment is where things get tricky. You need to monitor the agent's performance, implement safeguards to prevent unwanted behavior, and create feedback mechanisms for continuous improvement.

Let's dive deep into each of these phases and explore best practices for each stage of the AI agent lifecycle.`,
  },
  'why-ai-projects-go-wrong': {
    id: 'why-ai-projects-go-wrong',
    title: 'Why AI projects go wrong',
    date: 'November 15, 2024',
    author: 'Amartya Kaviraj',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=1200&h=600&fit=crop',
    content: `Despite the immense potential of AI, many projects fail to deliver the expected results. The reasons are often not technical—they're organizational, strategic, or rooted in unrealistic expectations.

One common pitfall is starting with the technology rather than the problem. Successful AI projects begin with a clear understanding of what problem they're trying to solve and whether AI is actually the right solution.

Another issue is poor data quality. "Garbage in, garbage out" remains one of the most fundamental principles in machine learning. Many organizations underestimate the time and resources required to prepare, clean, and label training data.

Integration challenges are also frequently underestimated. Building a machine learning model is one thing; integrating it into an existing production system with appropriate monitoring, error handling, and rollback procedures is quite another.

In this post, we'll examine the most common failure modes of AI projects and discuss strategies to avoid them.`,
  },
  'guide-to-ai-terminology': {
    id: 'guide-to-ai-terminology',
    title: 'Our guide to the words and terminology you need to know',
    date: 'November 10, 2024',
    author: 'Amartya Kaviraj',
    image: 'https://images.unsplash.com/photo-1677442d019cecf3da4870c7432ed4b9c1e35a7c?w=1200&h=600&fit=crop',
    content: `The world of AI is filled with technical jargon and terminology that can be confusing, even for those working in the field. From neural networks to transformers, from embeddings to attention mechanisms, understanding these concepts is essential for anyone wanting to stay informed about AI developments.

In this comprehensive guide, we'll break down the most important AI terminology into digestible, non-technical explanations. Whether you're a business executive trying to understand AI capabilities or a developer looking to refresh your knowledge, this guide has something for you.

We'll cover foundational concepts like machine learning and deep learning, explain how modern language models work, and discuss emerging concepts like agents and multimodal AI.

By the end of this guide, you'll have a solid understanding of the language of AI and be able to follow discussions about the latest developments in the field.`,
  },
};

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();

  const post = postId ? blogPostsContent[postId] : null;

  if (!post) {
    return (
      <div className="relative min-h-screen overflow-hidden">
        <Background />
        <div className="relative z-10">
          <Navigation />
          <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Post not found</h1>
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-pink-600 transition-all hover:scale-105"
              >
                <ArrowLeft size={20} />
                Back to Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Navigation />

        {/* Back Button */}
        <div className="pt-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-8">
            <button
              onClick={() => navigate('/blog')}
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </button>
          </div>
        </div>

        {/* Post Header */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-slate-400 mb-8">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>

            <div className="w-full h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-900/60 rounded-2xl border border-cyan-400/20 p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <div className="space-y-6">
                  {post.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-300 text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Post Footer */}
              <div className="mt-12 pt-8 border-t border-cyan-400/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-400 mb-2">Written by</p>
                    <p className="text-xl font-bold text-white">{post.author}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 mb-2">Published on</p>
                    <p className="text-lg text-cyan-400 font-semibold">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Blog Link */}
            <div className="mt-12 text-center">
              <button
                onClick={() => navigate('/blog')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-pink-600 transition-all hover:scale-105"
              >
                <ArrowLeft size={20} />
                Back to all posts
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
