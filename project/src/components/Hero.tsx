import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-pink-400 animate-gradient">Amartya Kaviraj</span>
            </h1>

            <p className="text-xl lg:text-2xl text-cyan-300 mb-8 leading-relaxed font-semibold">
              AI Automation & Business Development Specialist
            </p>

            <p className="text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
              Master of Science in Applied Entrepreneurship with expertise in AI automation,
              digital marketing, and transforming complex concepts into compelling narratives.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="https://www.linkedin.com/in/amartyakaviraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all hover:scale-105 shadow-lg shadow-cyan-500/50"
              >
                Connect on LinkedIn
              </a>
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 shadow-lg border border-pink-400/30 hover:border-pink-400/60"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center animate-slide-in-right">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-2xl transform rotate-3 opacity-70 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
              <img
                src="/240612-BM-famelab-finale-33.jpg"
                alt="Amartya Kaviraj"
                className="relative rounded-2xl shadow-2xl w-full max-w-md h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-pink-400 transition-colors animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
