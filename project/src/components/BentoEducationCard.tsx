import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Award } from 'lucide-react';

interface BentoEducationProps {
  degree: string;
  institution: string;
  period: string;
  grade: string;
  color: string;
  thesis?: {
    title: string;
    grade: string;
    link?: string;
  };
  size?: 'small' | 'medium' | 'large';
}

export default function BentoEducationCard({
  degree,
  institution,
  period,
  grade,
  color,
  thesis,
  size = 'medium',
}: BentoEducationProps): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 row-span-2',
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: 2 },
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
        onHoverStart={() => thesis && setIsExpanded(true)}
        onHoverEnd={() => thesis && setIsExpanded(false)}
        onClick={() => thesis && setIsExpanded(!isExpanded)}
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
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex-1">
                {degree}
              </h3>
              <motion.div
                className={`px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${color}`}
                whileHover={{ scale: 1.05 }}
              >
                {grade}
              </motion.div>
            </div>
            <p className={`text-sm text-transparent bg-clip-text bg-gradient-to-r ${color} font-semibold`}>
              {institution}
            </p>
            <p className="text-xs text-slate-400 mt-2">{period}</p>
          </div>

          {/* Thesis section - expanded */}
          {thesis && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isExpanded ? 'visible' : 'hidden'}
            >
              <div className="border-t border-cyan-400/20 pt-4 mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award size={14} className="text-cyan-400" />
                  <p className="text-sm font-semibold text-cyan-300">Master Thesis</p>
                </div>
                <p className="text-sm text-slate-300 mb-3">{thesis.title}</p>
                <div className="flex items-center justify-between gap-2">
                  <span className={`px-3 py-1 rounded-lg text-xs font-bold text-white bg-gradient-to-r ${color}`}>
                    Grade: {thesis.grade}
                  </span>
                  {thesis.link && (
                    <motion.a
                      href={thesis.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r ${color} text-white rounded-lg font-medium text-xs hover:scale-105 transition-transform shadow-lg`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read Thesis
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* Toggle button */}
          {thesis && (
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="absolute bottom-6 right-6 p-2 bg-cyan-500/20 rounded-lg text-cyan-400 hover:bg-cyan-500/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
