import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Calendar, Briefcase } from 'lucide-react';

interface BentoExperienceProps {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string[];
  color: string;
  recommendationLink?: string;
  isExpanded?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function BentoExperienceCard({
  company,
  position,
  period,
  location,
  description,
  color,
  recommendationLink,
  isExpanded: initialExpanded = false,
  size = 'medium',
}: BentoExperienceProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-4 row-span-1',
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
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

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`${sizeClasses[size]} cursor-pointer group self-start`}
    >
      <motion.div
        className={`relative rounded-2xl overflow-visible backdrop-blur-md border border-cyan-400/30 p-6 
          bg-gradient-to-br from-gray-900/80 via-gray-900/60 to-gray-800/40
          hover:border-cyan-400/60 transition-all duration-300
          shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10`}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-300 rounded-2xl`}
          animate={{ opacity: isExpanded ? 0.1 : 0 }}
        />

        {/* Top accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
              {position}
            </h3>
            <p className={`text-lg text-transparent bg-clip-text bg-gradient-to-r ${color} font-semibold`}>
              {company}
            </p>
            <p className="text-sm text-slate-400 mt-1">{location}</p>
          </div>

          {/* Period badge */}
          <div className="flex items-center gap-2 text-slate-300 bg-gray-800/60 px-3 py-1.5 rounded-lg border border-cyan-400/20 w-fit text-sm font-medium mb-4">
            <Calendar size={14} />
            <span>{period}</span>
          </div>

          {/* Description - expanded */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate={isExpanded ? 'visible' : 'hidden'}
          >
            <ul className="space-y-2 mb-4 text-sm text-slate-300">
              {description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Briefcase size={14} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {recommendationLink && (
              <motion.a
                href={recommendationLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-4 py-2 bg-gradient-to-r ${color} text-white text-xs rounded-lg font-medium 
                  hover:scale-105 transition-transform shadow-lg`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Recommendation Letter
              </motion.a>
            )}
          </motion.div>

          {/* Toggle button */}
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute bottom-6 right-6 p-2 bg-cyan-500/20 rounded-lg text-cyan-400 hover:bg-cyan-500/40 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
