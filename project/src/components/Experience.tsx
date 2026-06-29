import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { useState } from 'react';
import BentoExperienceCard from './BentoExperienceCard';
import BentoEducationCard from './BentoEducationCard';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

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
    recommendationLink: '/Recommendation_Letter_Zalando.pdf',
  },
  {
    company: 'AI Appetite',
    position: 'Founder & Chief Architect',
    period: 'November 2025 - Present',
    location: 'Bielefeld, North Rhine-Westphalia, Germany',
    description: [
      'Architected and deployed an autonomous content generation engine that curates and publishes weekly B2B tech newsletters with zero human intervention.',
      'Engineered multi-agent workflows integrating multiple LLMs to systematically scrape, rank, and summarize high-impact journalism from verified global sources.',
      'Connected cloud databases (Google Sheets & Notion APIs) with communication nodes to automate high-volume subscriber database segmentation and data logging.',
      'Programmed advanced automated fallback protocols and backup agent architectures to handle payload distribution and eliminate system API rate limits.',
      'Maintained absolute premium quality control by acting as the final human-in-the-loop anchor for editorial proofing and layout validation.',
    ],
    color: 'from-sky-500 to-indigo-500',
  },
  {
    company: 'Pictura',
    position: 'Co-Founder & CEO',
    period: 'November 2022 - January 2025',
    location: 'Bielefeld, North Rhine-Westphalia, Germany',
    description: [
      'Co-founded and built a decentralized Web3 social media platform from the ground up, scaling early user acquisition to onboard 850 active beta test users.',
      'Formulated the platform’s core branding, marketing frameworks, and go-to-market strategy to systematically validate product-market fit.',
      'Secured venture acceptance into prominent regional startup incubators, accelerating development through Campus Foundry (Lemgo) and Garage33 (Paderborn).',
      'Engineered investor pitch decks and pitched the startup to German venture capitalists and US-based investors in New York through the STEP USA program.',
    ],
    color: 'from-emerald-500 to-cyan-500',
  },
  {
    company: 'TH OWL University of Applied Sciences and Arts',
    position: 'Research Assistant – Project & Academic Support',
    period: 'April 2023 - April 2024',
    location: 'Lemgo, North Rhine-Westphalia, Germany',
    description: [
      'Coordinated key third-party funded projects, including "Exist Women" and "Impact Unicorn," ensuring all institutional deliverables met strict government deadlines.',
      'Managed high-level stakeholder communication and resource planning at the InnovationSPIN, interfacing directly with industry partners and student startups.',
      'Streamlined departmental administration by executing precise timeline tracking, project reporting, and CRM system maintenance using Scrum/Kanban workflows.',
      'Developed digital education media and presentation architectures for university modules like "Start-Up Engineering" and "Rhetoric and Presentation".',
      'Coached student founding teams on their pitch decks and public speaking techniques to systematically improve pitch delivery within the university ecosystem.',
    ],
    color: 'from-fuchsia-500 to-violet-500',
    recommendationLink: '/Recommendation_Letter_TH_OWL_SHK.pdf',
  },
  {
    company: 'TH OWL University of Applied Sciences and Arts',
    position: 'Research Assistant',
    period: 'April 2024 - July 2024',
    location: 'Lemgo, North Rhine-Westphalia, Germany',
    description: [
      'Promoted TH OWL to international students as official social media influencer',
      'Showcased faculty, facilities, studies and life at the university via social media channels',
      'Created engaging content highlighting university experience and opportunities in Germany, garnering over 26,000 views in 3 months across all platfroms.',
      'Managed communication with multiple stakeholders—including faculty, international student groups, and external partners—to design and execute campaigns that increased international student engagement by 35% over three months.',
    ],
    color: 'from-purple-500 to-pink-500',
    recommendationLink: '/Recommendation_Letter_TH_OWL.pdf',
  },
  {
    company: 'Dunzo',
    position: 'Project Management Associate',
    period: 'October 2021 - September 2022',
    location: 'Greater Bengaluru Area, India',
    description: [
      'Monitored real-time batching metrics using SQL and Metabase to optimize high-volume operations and maintain a 95%+ on-time delivery rate.',
      'Served as the central contact for Product, Catalog, and City teams, resolving cross-functional bottlenecks and balancing rider supply with inventory accuracy during peaks.',
      'Prepared Weekly Business Reviews in Advanced Excel and Google Slides to track KPIs and present growth opportunities to leadership.',
      'Led process-improvement pilots that reduced merchant prep time and store-level delays by ~15% through simplified order-acceptance workflows.',
    ],
    color: 'from-orange-500 to-pink-500',
    recommendationLink: '/Recommendation_letter_Dunzo.pdf',
  },
  {
    company: 'MYNTRA',
    position: 'Marketing And Business Development Intern',
    period: 'August 2020 - March 2021',
    location: 'Greater Bengaluru Area, India',
    description: [
      'Monitored GMV and ROI via Excel dashboards, producing weekly reports that uncovered strategic growth opportunities.',
      'Streamlined brand onboarding and inventory workflows with automated trackers, reducing turnaround times by 20–30%.',
      'Executed influencer and brand campaigns—scouting talent, negotiating performance-based deals, and coordinating launches for events like EORS.',
      'Drove revenue uplift through competitor analysis and trend research, collaborating on visibility plans and promotional pricing strategies.',
    ],
    color: 'from-yellow-500 to-pink-500',
    recommendationLink: '/Recommendation_Letter_Myntra.pdf',
  },
  {
    company: 'Netaji Subhas Open University (NSOU)',
    position: 'Teaching Assistant (Linguistics and Literature analysis)',
    period: 'October 2019 - June 2020',
    location: 'Kolkata, West Bengal, India',
    description: [
      'Delivered foundational instruction in core English modules, facilitating tutorials in linguistics and literary analysis for first-semester undergraduates.',
      'Led close reading sessions to identify narrative techniques, stylistic elements, and historical contexts in prose and poetry.',
      'Provided detailed feedback on essays and assignments to strengthen argumentation, clarity, and technical terminology use.',
      'Co-developed academic resources and conducted rubric-based grading to support student progress.',
    ],
    color: 'from-emerald-500 to-cyan-500',
    recommendationLink: '/Recommendation_Letter_NSOU.pdf',
  },
];

const education = [
  {
    degree: 'Master of Science - Applied Entrepreneurship',
    institution: 'University of Applied Sciences and Arts',
    period: 'October 2022 - November 2025',
    grade: '1.7',
    color: 'from-cyan-500 to-blue-500',
    thesis: {
      title: 'Harnessing AI in Digital Marketing: A comprehensive exploration of emerging tools and transformative potential in 2025',
      grade: '1.0',
      link: 'https://www.researchgate.net/publication/398030996_Harnessing_AI_in_Digital_Marketing_A_Comprehensive_Exploration_of_Emerging_Tools_and_Transformative_Potential_in_2025',
    },
  },
  {
    degree: 'Bachelor of Arts - English Language and Literature',
    institution: 'Netaji Subhash Open University, Kolkata',
    period: 'March 2019 - October 2021',
    grade: '1.0',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function Experience() {
  const { ref, hasBeenInView } = useScrollTrigger({ threshold: 0.1 });
  const [showAllExperience, setShowAllExperience] = useState(false);

  const visibleExperiences = showAllExperience ? experiences : experiences.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const titleVariants = {
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
    <section ref={ref} id="experience" className="py-20 scroll-mt-16 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={hasBeenInView ? 'visible' : 'hidden'}
      >
        {/* Title */}
        <motion.div variants={titleVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '5rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Bento Grid - Experience */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
        >
          {visibleExperiences.map((exp, index) => (
            <BentoExperienceCard
              key={index}
              {...exp}
              size={index === 0 ? 'large' : 'medium'}
            />
          ))}
        </motion.div>

        {/* Show More/Less Button */}
        {experiences.length > 3 && (
          <motion.div className="text-center mb-12">
            <motion.button
              onClick={() => setShowAllExperience(!showAllExperience)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAllExperience ? 'Show Less Experiences' : 'Show More Experiences'}
            </motion.button>
          </motion.div>
        )}

        {/* Resume Button */}
        <motion.div
          className="text-center mb-12"
          variants={titleVariants}
        >
          <motion.a
            href="/cv_amartyakaviraj_2025.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-all shadow-lg shadow-pink-500/20 border border-cyan-400/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FileText size={20} />
            Check out my Resume
          </motion.a>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={titleVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* Bento Grid - Education */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {education.map((edu, index) => (
            <BentoEducationCard
              key={index}
              {...edu}
              size={index === 0 ? 'medium' : 'medium'}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
