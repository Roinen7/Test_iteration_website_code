import { Sparkles, Lightbulb, Rocket, Trophy } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 scroll-mt-16 relative overflow-hidden">
      {/* Background overlays removed to use global Background component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-2xl transform -rotate-2 opacity-70"></div>
            <img
              src="/WhatsApp Image 2024-04-19 at 13.32.19_225a2b70.jpg"
              alt="Amartya Kaviraj speaking"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-slate-200 leading-relaxed">
              I'm a recent Master of Science graduate in Applied Entrepreneurship with a passion
              for AI automation, digital marketing, and strategic communication. As a no-code AI
              agent enthusiast, I explore how intelligent automation can transform business workflows,
              combining technical expertise with strategic business insight.
            </p>

            <p className="text-lg text-slate-200 leading-relaxed">
              My entrepreneurship education has equipped me with strong skills in business development,
              project management, team leadership, and cross-functional collaboration. I thrive in dynamic
              environments where innovation meets practical implementation, and I'm driven by a commitment
              to continuous learning and adaptability.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Award-Winning Communicator</h3>
            <p className="text-slate-300">
              Multiple victories in communication competitions and hackathons, acclaimed for translating
              complex concepts into compelling narratives.
            </p>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
            <p className="text-slate-300">
              Specialized in AI tool implementation and integration for business environments,
              with a focus on making AI accessible and actionable.
            </p>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Creative Background</h3>
            <p className="text-slate-300">
              From running a YouTube channel to mastering photo, video, and sound editing,
              driven by a passion for digital creation.
            </p>
          </div>

          <div className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
            <p className="text-slate-300">
              Committed to staying at the forefront of digital marketing, AI automation,
              and business innovation through ongoing education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
