import { Mail, Linkedin, MapPin, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white scroll-mt-16 relative overflow-hidden">
      {/* Background overlays removed to use global Background component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Interested in AI automation, digital marketing innovation, or exchanging ideas about
            the future of technology in business? Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16 justify-items-center">
          <a
            href="mailto:amartya.kaviraj@gmail.com"
            className="bg-gray-900/80 rounded-xl p-6 hover:bg-gray-800 transition-all hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/50 w-full max-w-xs text-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Mail size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Email</h3>
            <p className="text-slate-300 text-xs break-words">amartya.kaviraj@gmail.com</p>
          </a>

          <a
            href="https://www.linkedin.com/in/amartyakaviraj/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/80 rounded-xl p-6 hover:bg-gray-800 transition-all hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/50 w-full max-w-xs text-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <Linkedin size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">LinkedIn</h3>
            <p className="text-slate-300 text-xs break-words whitespace-normal">linkedin.com/in/amartyakaviraj</p>
          </a>

          <div className="bg-gray-900/80 rounded-xl p-6 border border-cyan-400/20 w-full max-w-xs text-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <MapPin size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Location</h3>
            <p className="text-slate-300 text-xs">Bielefeld, North Rhine-Westphalia, Germany</p>
          </div>

          {/* Phone and WhatsApp tiles removed as requested */}

          <a
            href="/cv_amartyakaviraj_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900/80 rounded-xl p-6 hover:bg-gray-800 transition-all hover:scale-105 border border-cyan-400/20 hover:border-cyan-400/50 w-full max-w-xs text-center"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 mx-auto">
              <FileText size={20} />
            </div>
            <h3 className="text-base font-bold mb-2">Resume</h3>
            <p className="text-slate-300 text-xs">Download CV</p>
          </a>
        </div>

        <div className="text-center border-t border-cyan-400/20 pt-8">
          <p className="text-slate-400">
            &copy; 2025 Amartya Kaviraj. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
