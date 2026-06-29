import { Sparkles, Lightbulb, Rocket, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxImage from './ParallaxImage';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const colorMap: { [key: string]: { light: string; dark: string } } = {
  cyan: { light: '#06b6d4', dark: '#0891b2' },
  pink: { light: '#ec4899', dark: '#be185d' },
  purple: { light: '#a855f7', dark: '#7e22ce' },
};

export default function About() {
  const { ref, hasBeenInView } = useScrollTrigger({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section ref={ref} id="about" className="py-20 scroll-mt-16 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div variants={itemVariants} className="relative">
            <ParallaxImage
              src="/WhatsApp Image 2024-04-19 at 13.32.19_225a2b70.jpg"
              alt="Amartya Kaviraj speaking"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
              speed={0.5}
            />
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-6">
            <motion.p variants={itemVariants} className="text-lg text-slate-200 leading-relaxed">
              I'm a recent Master of Science graduate in Applied Entrepreneurship with a passion
              for AI automation, digital marketing, and strategic communication. As a no-code AI
              agent enthusiast, I explore how intelligent automation can transform business workflows,
              combining technical expertise with strategic business insight.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-200 leading-relaxed">
              My entrepreneurship education has equipped me with strong skills in business development,
              project management, team leadership, and cross-functional collaboration. I thrive in dynamic
              environments where innovation meets practical implementation, and I'm driven by a commitment
              to continuous learning and adaptability.
            </motion.p>
          </motion.div>
        </div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50 backdrop-blur-sm"
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${colorMap.cyan.light} 0%, ${colorMap.cyan.dark} 100%)`,
                boxShadow: `0 8px 16px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.1)`,
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Trophy className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Award-Winning Communicator</h3>
            <p className="text-slate-300">
              Multiple victories in communication competitions and hackathons, acclaimed for translating
              complex concepts into compelling narratives.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50 backdrop-blur-sm"
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${colorMap.pink.light} 0%, ${colorMap.pink.dark} 100%)`,
                boxShadow: `0 8px 16px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.1)`,
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">AI Innovation</h3>
            <p className="text-slate-300">
              Specialized in AI tool implementation and integration for business environments,
              with a focus on making AI accessible and actionable.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50 backdrop-blur-sm"
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${colorMap.purple.light} 0%, ${colorMap.purple.dark} 100%)`,
                boxShadow: `0 8px 16px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.1)`,
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Lightbulb className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Creative Background</h3>
            <p className="text-slate-300">
              From running a YouTube channel to mastering photo, video, and sound editing,
              driven by a passion for digital creation.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-gray-900/80 p-6 rounded-xl hover:shadow-lg transition-shadow border border-cyan-400/20 hover:border-cyan-400/50 backdrop-blur-sm"
          >
            <motion.div
              className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${colorMap.cyan.light} 0%, ${colorMap.pink.light} 100%)`,
                boxShadow: `0 8px 16px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.1)`,
                transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
              }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Rocket className="text-white" size={24} />
            </motion.div>
            <h3 className="text-xl font-bold text-white mb-2">Continuous Learner</h3>
            <p className="text-slate-300">
              Committed to staying at the forefront of digital marketing, AI automation,
              and business innovation through ongoing education.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
