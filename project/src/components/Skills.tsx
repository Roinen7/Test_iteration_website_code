import { Brain, TrendingUp, Users, Code, Globe, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['Generative AI for Sales', 'AI Agent Development', 'No-Code AI Tools', 'Process Automation'],
    color: 'emerald',
    textColor: 'text-emerald-400',
  },
  {
    title: 'Business & Marketing',
    icon: TrendingUp,
    skills: ['Digital Marketing', 'Strategic Communication', 'Business Development', 'Change Management'],
    color: 'blue',
    textColor: 'text-blue-400',
  },
  {
    title: 'Leadership & Management',
    icon: Users,
    skills: ['Team Leadership', 'Project Management', 'Cross-functional Collaboration', 'Entrepreneurship'],
    color: 'violet',
    textColor: 'text-violet-400',
  },
  {
    title: 'Creative & Technical',
    icon: Code,
    skills: ['Video Editing (Da Vinci Resolve, Premier Pro, Capcut)', 'Photo Editing (Photoshop, Lightroom)', 'Sound Editing (Audition, Audacity)', 'Content Creation', 'MS Office', 'Google G Suite', 'Trello', 'Notion', 'Slack', 'Zapier', 'N8n'],
    color: 'orange',
    textColor: 'text-orange-400',
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['English (Native)', 'Bengali (Native)', 'Hindi (Professional)', 'German (Upper Intermediate)'],
    color: 'teal',
    textColor: 'text-teal-400',
  },
  {
    title: 'Certifications',
    icon: Award,
    skills: ['Entrepreneurship Specialization', 'Blockchain Revolution', 'Building and Deploying GenAI Agents for Process Automation', 'Presentation Masterclass'],
    color: 'rose',
    textColor: 'text-rose-400',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-900/80 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/50 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-${category.color}-500 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className={`text-xl font-bold ${category.textColor} mb-4`}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300">
                      <div className={`w-1.5 h-1.5 bg-${category.color}-400 rounded-full`}></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gray-900/80 rounded-xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">What I live by</h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            "I believe that knowledge is never complete—there's always something new emerging.
            This philosophy drives my commitment to staying at the forefront of digital marketing,
            AI automation, and business innovation."
          </p>
        </div>
      </div>
    </section>
  );
}
