import { Award, Mic, Zap } from 'lucide-react';

const awards = [
  {
    title: 'FameLab Germany Finalist',
    description: 'Recognized as a finalist in the FameLab Germany Finals for exceptional science communication skills, translating complex scientific concepts into engaging presentations for general audiences.',
    icon: Mic,
    color: 'from-cyan-500 to-cyan-600',
    image: '/240612-BM-famelab-finale-87.jpg',
    link: 'https://youtu.be/sOYGxLXAZVg',
  },
  {
    title: 'CIIT Science Slam 2023 Winner',
    description: 'Won the CIIT Science Slam 2023 while representing my university, demonstrating exceptional ability to captivate audiences with compelling storytelling and scientific insight.',
    icon: Award,
    color: 'from-pink-500 to-pink-600',
    image: '/Ciit-ScienceSlam-2023-0311.jpg',
    link: 'https://www.linkedin.com/posts/amartyakaviraj_i-am-extremely-delighted-to-share-that-a-activity-7162872795792666624-tbJD',
  },
  {
    title: 'Hinterland Hack - Schnelleker Logistics Challenge Winner',
    description: 'Won the Schnelleker Logistics Challenge in the Hinterland Hack competition. Built a working AI Agent prototype with my team to solve the company\'s enormous Tender Document evaluation challenges.',
    icon: Zap,
    color: 'from-purple-500 to-purple-600',
    image: '/Kopie von 20250921_Founders_Foundation_01562.jpg',
    link: 'https://www.linkedin.com/posts/amartyakaviraj_hinterlandhack2025-hinterlandhack-ai-activity-7376338894457569280-w_Kz',
  },
];

export default function Awards() {
  return (
    <section id="awards" className="py-20 bg-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Awards & Recognition</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            Recognized for excellence in communication, innovation, and scientific storytelling
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            const hasImage = award.image;
            const content = (
              <>
                <div className={`h-2 bg-gradient-to-r ${award.color}`}></div>
                {hasImage && (
                  <div className="w-full h-48 overflow-hidden">
                    <img
                      src={hasImage}
                      alt={award.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{award.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{award.description}</p>
                </div>
              </>
            );

            return award.link ? (
              <a
                key={index}
                href={award.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-cyan-400/20 hover:border-cyan-400/50 block cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="bg-gray-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border border-cyan-400/20 hover:border-cyan-400/50"
              >
                {content}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
