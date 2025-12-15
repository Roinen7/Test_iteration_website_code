import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Navigation from './Navigation';
import Background from './Background';
import { fetchPost, initStoryblokBridge } from '../lib/storyblok';

interface BlogPostContent {
  id: string;
  title: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

// Keep a minimal set of content so the template structure remains.
const blogPostsContent: Record<string, BlogPostContent> = {
  'is-ai-just-a-massive-bubble': {
    id: 'is-ai-just-a-massive-bubble',
    title: 'Is AI Just a Massive Bubble? My Thoughts on "AI Eating the World"',
    date: '',
    author: 'Amartya Kaviraj',
    image: '/Is_AI_a_Bubble.jpg',
    content: `<p>Lately, I’ve been scrolling through endless comments online claiming that AI is overhyped, that LLMs have hit a wall, and that we’re in the middle of a massive bubble waiting to burst. It’s a valid fear. But recently, I came across a report by tech analyst Benedict Evans titled "AI Eats the World," and it completely shifted my perspective. It made me realize that we aren't just looking at a fancy new tool; we are staring down the barrel of a generational platform shift.</p>

  <p>Here’s my take on what’s actually happening, based on the data and the history of tech revolutions.</p>

  <p><strong>The New "Platform Shift"</strong></p>
  <p>First off, I think we need to stop asking if AI is a feature and start seeing it as a platform. Evans compares this to the shift from mainframes to PCs, or the web to smartphones. In every previous shift, the "new thing" eventually swallowed everything else.</p>

  <p>I loved the analogy of the flower seller. Twenty years ago, a flower seller didn't need the internet. Then, suddenly, they needed a website. Now, they’re using Generative AI to design better ads or write catchy social media captions for their bouquets. The technology becomes invisible because it just becomes how we do things.</p>

  <p>But history also teaches us a brutal lesson about dominance. Microsoft owned the PC era, yet they completely missed the mobile shift, losing out to Apple and Android. It explains why companies like Mark Zuckerberg’s Meta or Satya Nadella’s Microsoft are betting the farm on AI right now. They know that if you miss a platform shift, you don't just lose money—you lose relevance.</p>

  <p><strong>The Capex Wars: Fear of Missing Out</strong></p>
  <p>One thing that really stood out to me is the sheer amount of money being poured into this—roughly $400 billion in capital expenditure by the big tech giants in 2025 alone. It sounds insane, right? But as Sundar Pichai put it, the risk of underinvesting is significantly greater than the risk of overinvesting.</p>

  <p>These companies are terrified. They know that even if they burn billions now, it’s better than waking up in five years to find they’ve become the next Nokia or Kodak. It’s an arms race, plain and simple. We are seeing data center construction overtake office construction in the US. That is a wild statistic that shows exactly where the physical economy is heading.</p>

  <p><strong>The "Infinite Intern"</strong></p>
  <p>The concept that resonated with me the most was the idea of AI as "infinite interns." Imagine you have access to thousands of smart, energetic workers who are essentially free, but they have a 5% error rate. What do you do with them?</p>

  <p>You probably wouldn't let them run your nuclear power plant. But you would let them generate marketing content, write first drafts of code, or handle basic customer queries. We are seeing this explosion in advertising and content creation because the cost of producing "good enough" material has dropped to zero. I used to be skeptical about AI-generated content, but if the error rate is acceptable—like a slightly off lip-sync in a video—we generally don't care as long as the content is engaging.</p>

  <p><strong>The Usage Paradox</strong></p>
  <p>Here is the weird part, though. While weekly usage of AI tools like ChatGPT is massive (over 20% of the US population), daily usage is still surprisingly low. It seems we are still in the experimentation phase. We use it when we need it, but it hasn't fully integrated into our daily "toothbrush" routine yet.</p>

  <p>This tells me that we are still early. The "killer app" that forces us to use AI every single hour hasn't been built yet, or perhaps we just haven't figured out how to unbundle these massive models into specific, reliable tools.</p>

  <p><strong>My Final Verdict</strong></p>
  <p>So, is it a bubble? Maybe a little. There will be winners and losers—just like Yahoo and Netscape died so Google and Facebook could live. But when the dust settles, the world will look different.</p>

  <p>The models themselves are becoming commodities; the real value will come from distribution, brand, and—crucially—curation. In a world flooded with AI-generated "slop," the human ability to curate, verify, and add authenticity will be more valuable than ever.</p>

  <p>Of course some jobs are going to vanish, just like it happens after the emergence of every new significant technology, but it will also create new jobs and opportunities. The question is, what new jobs are we going to create in their place? I don't have the answer yet, but I’m certainly not betting against the technology.</p>

  <p>Thank you very much for reading the blog; I hope you found some clarity or useful information regarding the current AI market. You can find the link to Benedict Evans' latest report here: <a href="https://www.ben-evans.com/presentations" target="_blank" rel="noopener noreferrer">https://www.ben-evans.com/presentations</a></p>
  `,
  },
};

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostContent | null>(postId ? blogPostsContent[postId] : null);

  useEffect(() => {
    let mounted = true;
    initStoryblokBridge();
    if (!postId) return;
    fetchPost(postId)
      .then((p) => {
        if (!mounted || !p) return;
        setPost({
          id: p.id,
          title: p.title,
          date: '',
          author: (p.content && p.content.author) || 'Amartya Kaviraj',
          image: p.image || '',
          content: typeof p.content === 'string' ? p.content : (p.content?.body ? p.content.body.map((b:any)=> b.children?.map((c:any)=>c.text).join('') ).join('\n\n') : (p.content?.long_text || '')),
        });
      })
      .catch(() => {
        // keep fallback
      });

    return () => { mounted = false; };
  }, [postId]);

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

            <div className="flex items-center text-slate-400 mb-8">
              <div className="flex items-center gap-4">
                <span>{post.author}</span>
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
                  {post.content && post.content.includes('<') ? (
                    <div className="text-slate-300 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
                  ) : (
                    post.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-slate-300 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))
                  )}
                </div>
              </div>

              {/* Post Footer */}
              <div className="mt-12 pt-8 border-t border-cyan-400/20">
                <div>
                  <p className="text-slate-400 mb-2">Written by</p>
                  <p className="text-xl font-bold text-white">{post.author}</p>
                </div>
              </div>
            </div>

            {/* Next Article */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-white mb-4">Next Article</h3>
              {(() => {
                const keys = Object.keys(blogPostsContent);
                const currentIndex = keys.findIndex((k) => k === post.id);
                const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % keys.length;
                const nextPost = blogPostsContent[keys[nextIndex]];
                return (
                  <button
                      onClick={() => navigate(`/blog/${nextPost.id}`)}
                      className="group w-full bg-gray-900/60 rounded-2xl shadow-lg border border-cyan-400/20 overflow-hidden hover:border-cyan-400/50 transition-all hover:shadow-xl hover:scale-105 min-h-[12rem]"
                    >
                      <div className="flex flex-col md:flex-row items-stretch">
                        <div className="w-full md:w-1/3 h-56 md:h-auto overflow-hidden bg-gray-800 flex-shrink-0">
                          <img src={nextPost.image} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="p-6 flex-1 text-left relative flex flex-col">
                          <h4 className="text-2xl font-bold text-white mb-2">{nextPost.title}</h4>
                          <p className="text-slate-300 mb-4 line-clamp-3">{nextPost.content.split('\n\n')[0]}</p>
                          <div className="flex-1"></div>
                          <div className="absolute right-6 bottom-3">
                            <ArrowRight size={20} className="text-pink-400" />
                          </div>
                        </div>
                      </div>
                    </button>
                );
              })()}
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
