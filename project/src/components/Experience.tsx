import { Briefcase, Calendar, FileText } from 'lucide-react';

const experiences = [
  {
    company: 'Zalando',
    position: 'Junior Sales Assistant (Working Student)',
    period: 'April 2025 - Present',
    location: 'Bielefeld, North Rhine-Westphalia, Germany',
    description: [
      'Integral to store commercial success by executing critical retail logistics and inventory control functions',
      'Orchestrate end-to-end merchandise lifecycle from stockroom processing to strategic placement',
      'Maintain rigorous inventory integrity by analyzing stock flow data to forecast replenishment needs',
      'Optimize processes by identifying bottlenecks and collaborating with sales teams to align operations with real-time trends',
    ],
    color: 'from-cyan-500 to-pink-500',
  },
  {
    company: 'TH OWL University of Applied Sciences and Arts',
    position: 'Research Assistant',
    period: 'April 2024 - July 2024',
    location: 'Lemgo, North Rhine-Westphalia, Germany',
    description: [
      'Promoted TH OWL to international students as official social media influencer',
      'Showcased faculty, facilities, studies and life at the university via social media channels',
      'Created engaging content highlighting university experience and opportunities in Germany',
    ],
    color: 'from-purple-500 to-pink-500',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-16 relative overflow-hidden">
      {/* Background overlays removed to use global Background component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-900/80 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-cyan-400/20 hover:border-cyan-400/50"
            >
              <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    <p className="text-xl text-cyan-400 font-semibold mb-2">{exp.company}</p>
                    <p className="text-slate-400 text-sm">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300 bg-gray-800/80 px-4 py-2 rounded-lg border border-cyan-400/20">
                    <Calendar size={18} />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <Briefcase size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                {exp.position === 'Research Assistant' && (
                  <div className="mt-6 flex justify-end">
                    <a
                      href="/Recommendation_Letter_TH_OWL.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
                    >
                      Recommendation Letter
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/cv_amartyakaviraj_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 w-full sm:w-auto justify-center px-5 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white text-sm rounded-lg font-medium hover:scale-105 transition-all shadow-lg shadow-pink-500/20 border border-cyan-400/20"
          >
            <FileText size={18} />
            Check out my Resume
          </a>
        </div>

        <div className="mt-12 bg-gray-900/80 rounded-xl shadow-lg p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Education</h3>
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h4 className="text-xl font-bold text-white">Master of Science - Applied Entrepreneurship</h4>
              <p className="text-cyan-400 font-semibold">University of Applied Sciences and Arts</p>
              <p className="text-slate-400 mb-2">October 2022 - November 2025</p>
              <p className="text-slate-300 font-medium">Grade: 1.7</p>
              <div className="mt-3 pl-4 border-l-2 border-cyan-400/40">
                <p className="text-slate-300 font-medium mb-2">Master Thesis</p>
                <p className="text-slate-400 text-sm mt-1">Topic: Harnessing AI in Digital Marketing: A comprehensive exploration of emerging tools and transformative potential in 2025</p>
                <p className="text-slate-300 font-medium mt-2">Grade: 1.0</p>
                <a
                  href="https://www.researchgate.net/publication/398030996_Harnessing_AI_in_Digital_Marketing_A_Comprehensive_Exploration_of_Emerging_Tools_and_Transformative_Potential_in_2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white text-sm rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
                >
                  Read Thesis
                </a>
              </div>
            </div>
            <div className="border-l-4 border-pink-500 pl-6">
              <h4 className="text-xl font-bold text-white">Bachelor of Arts - English Language and Literature</h4>
              <p className="text-pink-400 font-semibold">Netaji Subhash Open University, Kolkata</p>
              <p className="text-slate-400 mb-2">March 2019 - October 2021</p>
              <p className="text-slate-300 font-medium">Grade: 1.0</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
