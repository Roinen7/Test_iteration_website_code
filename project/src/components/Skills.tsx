import { Brain, TrendingUp, Users, Code, Globe, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

const colorMap: { [key: string]: { light: string; dark: string } } = {
  emerald: { light: '#10b981', dark: '#047857' },
  blue: { light: '#3b82f6', dark: '#1e40af' },
  violet: { light: '#a78bfa', dark: '#6d28d9' },
  orange: { light: '#fb923c', dark: '#b45309' },
  teal: { light: '#14b8a6', dark: '#0d9488' },
  rose: { light: '#fb7185', dark: '#be123c' },
};

const skillCategories = [
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['• Generative AI for Sales', '• AI Agent Development', '• Multi-LLM pipeline engineering', '• Autonomous curation engines', '• No-Code AI Tools', '• Process Automation'],
    color: 'emerald',
    textColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
  },
  {
    title: 'Business, Strategy and Marketing',
    icon: TrendingUp,
    skills: ['• Digital Marketing', '• Strategic Communication', '• Business Development', '• Change Management', '• Go-to-market (GTM) strategy', '• MVP Development & Validation', '• B2B Content Strategy'],
    color: 'blue',
    textColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    title: 'Venture Leadership and Management',
    icon: Users,
    skills: ['• Team Leadership', '• Project Management', '• Cross-functional Collaboration', '• Entrepreneurship', '• Venture management', '• Public grant administration', '• External stakeholder engagement'],
    color: 'violet',
    textColor: 'text-violet-400',
    bgColor: 'bg-violet-500/10',
  },
  {
    title: 'Creative & Technical',
    icon: Code,
    skills: ['• Video Editing (Da Vinci Resolve, Premier Pro, Capcut)', '• Photo Editing (Photoshop, Lightroom)', '• Sound Editing (Audition, Audacity)', '• Content Creation', '• Agile and Lean frameworks', '• Pitch deck design', '• CRM system management', '• MS Office, Google G Suite', '• Trello, Notion, Slack', '• Zapier, Clawedbot, N8n'],
    color: 'orange',
    textColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['• English (Native)', '• German (Upper Intermediate)', '• Bengali (Native)', '• Hindi (Professional)'],
    color: 'teal',
    textColor: 'text-teal-400',
    bgColor: 'bg-teal-500/10',
  },
  {
    title: 'Certifications',
    icon: Award,
    skills: [
      { label: '• Wharton Entrepreneurship Specialization', href: '/Wharton_Entrepreneurship_specialization_Certificate.pdf' },
      { label: '• Fundamentals of Management', href: '/Fundamentals_of_Management_UCI_Certificate.pdf' },
      { label: '• Building and Deploying GenAI Agents for Process Automation', href: '/Building_and_Deplying_AI_agents_for_Process_Automation_Certificate.pdf' },
      { label: '• NaWik Communication Masterclass', href: '/NaWik_Communication_Masterclass_certificate.pdf' },
      { label: '• INSEAD Blockchain Revolution Specialization', href: '/INSEAD_Blockchain_Revolution_specialization_certificate.pdf' },
      { label: '• McKinsey Forward Program', href: 'https://www.credly.com/badges/2b59e77a-1707-40c7-bc06-d984f647ad76/linked_in_profile' },
    ],
    color: 'rose',
    textColor: 'text-rose-400',
    bgColor: 'bg-rose-500/10',
  },
];

export default function Skills() {
  const { ref, hasBeenInView } = useScrollTrigger({ threshold: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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

  return (
    <section ref={ref} id="skills" className="py-20 scroll-mt-16 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(34, 211, 238, 0.15)',
                }}
                className={`bg-gray-900/80 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 transition-all backdrop-blur-sm cursor-pointer ${category.bgColor}`}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.dark} 100%)`,
                    boxShadow: `0 8px 16px rgba(0, 0, 0, 0.4), inset -2px -2px 4px rgba(0, 0, 0, 0.3), inset 2px 2px 4px rgba(255, 255, 255, 0.1)`,
                    transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)',
                  }}
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-white" size={24} />
                </motion.div>
                <h3 className={`text-xl font-bold ${category.textColor} mb-4`}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill: any, idx: number) => {
                    const isObject = typeof skill === 'object' && skill !== null;
                    const isCertifications = category.title === 'Certifications';
                    return (
                      <motion.li
                        key={idx}
                        className={`flex items-start gap-2 text-slate-300 ${isCertifications ? 'hover:text-slate-100 transition-colors' : ''}`}
                        whileHover={isCertifications ? { x: 5 } : undefined}
                      >
                        <div className={`w-1.5 h-1.5 bg-${category.color}-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-${category.color}-500/50`} />
                        {isObject ? (
                          <motion.a
                            href={skill.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-400 transition-all transform no-underline"
                            whileHover={{ scale: 1.05 }}
                          >
                            {skill.label}
                          </motion.a>
                        ) : (
                          <span>{skill}</span>
                        )}
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-gray-900/80 rounded-xl p-8 border border-cyan-400/20 backdrop-blur-sm"
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 mb-4">
            What I live by
          </h3>
          <motion.p
            className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            "I believe that knowledge is never complete—there's always something new emerging and new to learn. This philosophy drives me to always stay curious and fuels my commitment to staying at the forefront of digital marketing, AI automation, and business innovation."
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
