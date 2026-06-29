import { Mail, Linkedin, MapPin, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const colorMap: { [key: string]: { light: string; dark: string } } = {
  cyan: { light: '#06b6d4', dark: '#0891b2' },
  pink: { light: '#ec4899', dark: '#be185d' },
  purple: { light: '#a855f7', dark: '#7e22ce' },
  emerald: { light: '#10b981', dark: '#047857' },
};

export default function Contact() {
  const { ref, hasBeenInView } = useScrollTrigger({ threshold: 0.3 });

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

  const contactItems = [
    {
      icon: Mail,
      title: 'Email',
      content: 'amartya.kaviraj@gmail.com',
      href: 'mailto:amartya.kaviraj@gmail.com',
      colorKey: 'cyan',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      content: 'linkedin.com/in/amartyakaviraj',
      href: 'https://www.linkedin.com/in/amartyakaviraj/',
      colorKey: 'pink',
      external: true,
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Bielefeld, North Rhine-Westphalia, Germany',
      colorKey: 'purple',
    },
    {
      icon: FileText,
      title: 'Resume',
      content: 'Download CV',
      href: '/cv_amartyakaviraj_2025.pdf',
      colorKey: 'emerald',
      external: true,
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 text-white scroll-mt-16 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p
            className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Interested in AI automation, digital marketing innovation, or exchanging ideas about
            the future of technology in business? Let's connect!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const Component = item.href ? motion.a : motion.div;
            const colors = colorMap[item.colorKey];

            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <Component
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  className="bg-gray-900/80 rounded-xl p-6 hover:bg-gray-800 transition-all border border-cyan-400/20 hover:border-cyan-400/50 w-full text-center backdrop-blur-sm h-full cursor-pointer flex flex-col items-center justify-center"
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)',
                  }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.dark} 100%)`,
                      boxShadow: `0 8px 16px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.1)`,
                      transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                    }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-xs break-words">{item.content}</p>
                </Component>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center border-t border-cyan-400/20 pt-8"
        >
          <motion.p
            className="text-slate-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            &copy; 2025 Amartya Kaviraj. All rights reserved.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
