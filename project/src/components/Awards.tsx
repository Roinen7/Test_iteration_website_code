import { Award, Mic, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxImage from './ParallaxImage';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

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
  const { ref, hasBeenInView } = useScrollTrigger({ threshold: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -3 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <section ref={ref} id="awards" className="py-20 scroll-mt-16 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Awards & Recognition</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Recognized for excellence in communication, innovation, and scientific storytelling
          </motion.p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => {
            const Icon = award.icon;
            const hasImage = award.image;
            const colorName = award.color.includes('cyan') ? 'cyan' : award.color.includes('pink') ? 'pink' : 'purple';
            const hoverColorClass = colorName === 'cyan' ? 'group-hover:text-cyan-400' : colorName === 'pink' ? 'group-hover:text-pink-400' : 'group-hover:text-purple-400';

            const content = (
              <>
                <div className={`h-2 bg-gradient-to-r ${award.color}`} />
                {hasImage && (
                  <motion.div
                    className="w-full h-48 overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ParallaxImage
                      src={hasImage}
                      alt={award.title}
                      className="w-full h-48"
                      speed={0.4}
                    />
                  </motion.div>
                )}
                <div className="p-8">
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-br ${award.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-white" size={32} />
                  </motion.div>
                  <h3 className={`text-2xl font-bold text-white mb-4 transition-colors ${hoverColorClass}`}>
                    {award.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{award.description}</p>
                </div>
              </>
            );

            return (
              <motion.div key={index} variants={itemVariants}>
                {award.link ? (
                  <motion.a
                    href={award.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-cyan-400/20 hover:border-cyan-400/50 block cursor-pointer backdrop-blur-sm"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    className="group bg-gray-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-cyan-400/20 hover:border-cyan-400/50 backdrop-blur-sm"
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    {content}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
