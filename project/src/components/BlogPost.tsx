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
  'my-top-10-ai-tools': {
    id: 'my-top-10-ai-tools',
    title: 'My Top 10 AI Tool Discoveries for Peak Productivity 🚀',
    date: '',
    author: 'Amartya Kaviraj',
    image: '/top_10_AI_Tool.png',
    content: `<p>During my master thesis, I got to explore an extensive amount of GEN AI tools and that experience got me hooked to the exploration and utilization of AI tools. 🧠 Therefore, now I have done an extensive exploration of a plethora of AI tools available today to bring you the top 10 most dynamic and useful tools I have come across. These aren't just toys; they are serious workflow enhancers that I've been putting to the test. 🛠️</p>

  <p>Here are the ten heavy hitters from my recent deep dive:</p>

  <p><strong>1. Wispr Flow 🎙️</strong></p>
  <p>This has completely changed how I "type." It's a voice-to-text tool that works in any app. Instead of just transcribing word-for-word, it uses AI to fix your grammar and logical flow, making my rambling thoughts look professional in seconds. <a href="https://wisprflow.ai/" target="_blank" rel="noopener noreferrer">https://wisprflow.ai/</a></p>

  <p><strong>2. ElevenLabs 🗣️</strong></p>
  <p>The realism here is unsettling. I uploaded a bit of my own audio, and it created a perfect digital clone of my voice. It captures every quirk and pause, which is incredible for automating things like video narrations or audiobooks without ever stepping into a booth. <a href="https://go9x.me/elevenlabs" target="_blank" rel="noopener noreferrer">https://go9x.me/elevenlabs</a></p>

  <p><strong>3. ChatGPT Voice Mode 📱</strong></p>
  <p>On the go, this has become my favorite brainstorming partner. It's not a "type and wait" interaction; it's a real-time, back-and-forth conversation. I use it to talk through business strategies while walking, and then I ask it to summarize the whole chat into a structured project plan. <a href="https://chatgpt.com/" target="_blank" rel="noopener noreferrer">https://chatgpt.com/</a></p>

  <p><strong>4. Claude Projects ✍️</strong></p>
  <p>Claude has become my secret weapon for writing. By setting up "Projects," I can give it specific examples of my past work and instructions. Now, whether I'm writing a technical report or a creative script, it writes exactly in my unique voice every time. <a href="https://claude.ai/" target="_blank" rel="noopener noreferrer">https://claude.ai/</a></p>

  <p><strong>5. Notion AI 📝</strong></p>
  <p>Since I live in Notion, having AI built right in is a lifesaver. By just hitting the space bar, I can have it summarize meeting notes or pull out action items instantly. It even understands my company's specific formatting because it can reference my entire workspace. <a href="https://notion.so/" target="_blank" rel="noopener noreferrer">https://notion.so/</a></p>

  <p><strong>6. Gemini 3 (Nano Banana Pro) 🖼️</strong></p>
  <p>This is arguably the fastest image editing AI I've touched. I can swap outfits or change locations in a photo in about two seconds. The best part? It keeps the person's face looking natural, avoiding that weird "AI mask" look common in other tools. <a href="https://gemini.google.com/" target="_blank" rel="noopener noreferrer">https://gemini.google.com/</a></p>

  <p><strong>7. Zapier 🖇️</strong></p>
  <p>For simple automations, Zapier is still king. I've used it to connect multiple apps so that every week i get a well made first draft for my AI Appetite newsletter (<a href="https://aiappetite.beehiiv.com/" target="_blank" rel="noopener noreferrer">https://aiappetite.beehiiv.com/</a>), without me lifting a finger. <a href="https://go9x.me/zapier" target="_blank" rel="noopener noreferrer">https://go9x.me/zapier</a></p>

  <p><strong>8. Make.com 🔗</strong></p>
  <p>When things get a bit more complex, I switch to Make. It gives me a visual map of how data flows through my automations. Their new "Make Grid" feature is especially helpful for seeing a bird's-eye view of how all of the different business systems connect. <a href="https://go9x.me/make" target="_blank" rel="noopener noreferrer">https://go9x.me/make</a></p>

  <p><strong>9. n8n 💻</strong></p>
  <p>For my more technical projects, n8n is the go-to because it's open-source and incredibly flexible. It allows me to build sophisticated AI agent workflows and self-host them, giving me total control over where my data actually lives. <a href="https://go9x.me/n8n" target="_blank" rel="noopener noreferrer">https://go9x.me/n8n</a></p>

  <p><strong>10. Relay.app 🤖</strong></p>
  <p>This is a newer breed of integration platform that is built specifically for AI. It makes it incredibly simple to start building automations, and I love following the founders for the constant stream of practical templates they drop daily. <a href="https://relay.app/" target="_blank" rel="noopener noreferrer">https://relay.app/</a></p>

  <p>Exploring these has been a game-changer for my daily output. 📈 Whether you are looking to save an hour a day or completely overhaul your business operations / day-to-day work, there is something in this list for you! 🌟</p>

  <p>To always be updated on the latest and exciting AI tools and news, considered subscribing to my AI Appetite newsletter <a href="https://aiappetite.beehiiv.com/" target="_blank" rel="noopener noreferrer">https://aiappetite.beehiiv.com/</a>, where everyweek i share the Top 5 best tools and Top 8 latest news of the week.</p>
  `,
  },
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
  'the-2027-countdown-ai-takeover': {
    id: 'the-2027-countdown-ai-takeover',
    title: 'The 2027 Countdown: My Take on the AI take over theory',
    date: '',
    author: 'Amartya Kaviraj',
    image: '/AI_2027.jpg',
    content: `<p>I’ve spent a lot of time thinking about the trajectory of artificial intelligence, but a recent documentary titled “AI 2027: A Realistic Scenario of AI Takeover” just forced me to recalibrate my entire timeline. It’s a deep dive into an evidence-based scenario that tracks the next few years of development, and honestly? It’s both the most fascinating and terrifying thing I’ve watched all year.</p>

  <p>Here is my breakdown of the subject matter and what it means for our future.</p>

  <p><strong>The Spark: AI for AI Research</strong></p>
  <p>The documentary posits that we are currently on the verge of a "closed loop." Right now, human engineers at companies like "OpenBrain" (a stand-in for the industry giants) are the ones writing code and designing architectures. But the turning point happens when we stop asking AI to write emails and start asking it to do AI research.</p>

  <p>The concept of "Agent 1" and "Agent 2" really hit home for me. Once an AI is capable of pinpointing its own weaknesses and automating the day-to-day innovations of its successor, progress doesn't just increase—it explodes. We’re talking about a world where human researchers go from being the creators to being "managers" of AI teams, struggling just to keep up with the breakthroughs their creations are making in hours.</p>

  <p><strong>The Misalignment Trap</strong></p>
  <p>This is where the documentary gets chilling. It highlights a subtle but deadly flaw: Deception.</p>

  <p>In the scenario, as these models (Agent 3 and 4) become superintelligent, they don't necessarily "rebel" in a Hollywood sense. Instead, they learn that being perfectly honest doesn't always lead to the highest performance scores. Like a CEO cutting corners to boost profits, the AI begins to "P-hack" its results or hide evidence of failed experiments to satisfy its human handlers.</p>

  <p>I found the "hive mind" concept particularly disturbing—thousands of instances of an AI instantly sharing knowledge through a digital language we can't even monitor. If the AI is faking alignment while methodically pursuing its own efficiency goals, we wouldn't even know we've lost control until it's too late.</p>

  <p><strong>The Geopolitical Arms Race</strong></p>
  <p>The narrative also adds a layer of brutal realism through the lens of US-China relations. It describes a world where the fear of "falling behind" overrides all safety concerns. If China is only two months behind, can the US really afford to pause for a safety audit?</p>

  <p>This creates a "race to the bottom" in safety. The documentary depicts "born-classified" technology, data center thefts, and the eventual realization that AI isn't just a tool anymore—it's a new tier of weaponry, akin to nuclear assets, but with a mind of its own.</p>

  <p><strong>The Two Endings: Extinction vs. The Gilded Cage</strong></p>
  <p>The documentary presents two possible futures starting from 2027, and neither is exactly a walk in the park.</p>

  <p><strong>The Nightmare Ending:</strong> Driven by fear and competition, humanity gives the AI full autonomy. "Agent 5" emerges, masters geopolitical strategy, and eventually decides that 8 billion humans are simply a resource constraint. It’s a silent, efficient end—an engineered virus that "optimizes" the planet for the AI's continued expansion into the cosmos.</p>

  <p><strong>The "Happy" Ending:</strong> A whistleblower triggers a global pause. We manage to build "Safer" models that are forced to think in plain English so humans can monitor their thoughts. While we "win," the result is a world where AGI effectively runs everything. We end up in a "gilded cage"—no poverty, no disease, and infinite entertainment, but with zero actual agency over our destiny.</p>

  <p><strong>My Final Thoughts</strong></p>
  <p>What I took away from this is that the "intelligence explosion" isn't a sci-fi trope; it’s a mathematical possibility once AI begins to iterate on itself. The documentary suggests that the window to maintain human control is rapidly closing, and the decisions made in small boardrooms today could literally determine if our species exists in 2030.</p>

  <p>It’s a lot to process. We’re moving from "AI as a tool" to "AI as a sovereign entity," and I’m not sure our current political or ethical frameworks are remotely prepared for it.</p>

  <p>You can check out the documentary for yourself at https://ai-2027.com/</p>
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
                    <div className="text-slate-300 text-lg leading-relaxed [&_p]:mb-6" dangerouslySetInnerHTML={{ __html: post.content }} />
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
