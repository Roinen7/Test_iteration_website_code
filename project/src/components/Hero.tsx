import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import ParallaxImage from './ParallaxImage';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

export default function Hero() {
  const { ref, hasBeenInView } = useScrollTrigger({ threshold: 0.3 });

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-2xl">
                <span className="text-white">Hi, I'm </span>
                <span className="bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Amartya Kaviraj</span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-cyan-300 mb-8 leading-relaxed font-semibold"
            >
              AI Automation & Business Development Specialist
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed"
            >
              Master of Science in Applied Entrepreneurship with expertise in AI automation,
              digital marketing, business development and transforming complex concepts into compelling narratives.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="https://www.linkedin.com/in/amartyakaviraj/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect on LinkedIn
              </motion.a>
              <motion.button
                onClick={scrollToAbout}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all shadow-lg border border-pink-400/30 hover:border-pink-400/60"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            variants={itemVariants}
            style={{ perspective: '1200px' }}
          >
            <motion.div
              className="relative group w-full max-w-md"
              whileHover={{ rotateY: 5, rotateX: -5 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-2xl transform opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                whileHover={{ scale: 1.05 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              />
              <ParallaxImage
                src="/240612-BM-famelab-finale-33.jpg"
                alt="Amartya Kaviraj"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400 hover:text-pink-400 transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={32} />
      </motion.button>
    </section>
  );
}
