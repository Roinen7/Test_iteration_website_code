import { Mail, ExternalLink } from 'lucide-react';

export default function AIAppetite() {
  return (
    <section id="aiappetite" className="py-20 bg-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900/80 rounded-2xl shadow-2xl p-8 md:p-12 border border-cyan-400/20">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  src="/AIappetite.png.png"
                  alt="AI Appetite Logo"
                  className="w-32 h-32 rounded-2xl shadow-xl"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="mb-3 inline-block md:block">
                  <h2 className="text-4xl font-bold text-white mb-2">AI Appetite</h2>
                  <p className="text-cyan-400 text-lg font-semibold">Weekly AI Newsletter</p>
                </div>

                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Feed your curiosity with AI Appetite — your free weekly bite of what's new and next in artificial intelligence.
                </p>

                <p className="text-slate-400 mb-8">
                  A fully automated AI Agent newsletter created and distributed weekly featuring the top AI news of the week and the most exciting new and upcoming AI tools. Designed to keep you informed and inspired on the latest in AI innovation.
                </p>

                <a
                  href="https://aiappetite.beehiiv.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-pink-600 transition-all hover:scale-105 shadow-lg shadow-cyan-500/50"
                >
                  Subscribe Now
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-cyan-400/20">
              <h3 className="text-xl font-bold text-white mb-4">What You'll Get:</h3>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Top AI News of the Week</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Emerging AI Tools & Technologies</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Expert Insights & Analysis</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <div className="w-1.5 h-1.5 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Actionable AI Intelligence</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
