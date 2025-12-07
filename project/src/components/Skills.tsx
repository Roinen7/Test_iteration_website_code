import { Brain, TrendingUp, Users, Code, Globe, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'AI & Automation',
    icon: Brain,
    skills: ['• Generative AI for Sales', '• AI Agent Development', '• No-Code AI Tools', '• Process Automation'],
    color: 'emerald',
    textColor: 'text-emerald-400',
  },
  {
    title: 'Business & Marketing',
    icon: TrendingUp,
    skills: ['• Digital Marketing', '• Strategic Communication', '• Business Development', '• Change Management'],
    color: 'blue',
    textColor: 'text-blue-400',
  },
  {
    title: 'Leadership & Management',
    icon: Users,
    skills: ['• Team Leadership', '• Project Management', '• Cross-functional Collaboration', '• Entrepreneurship'],
    color: 'violet',
    textColor: 'text-violet-400',
  },
  {
    title: 'Creative & Technical',
    icon: Code,
    skills: ['• Video Editing (Da Vinci Resolve, Premier Pro, Capcut)', '• Photo Editing (Photoshop, Lightroom)', '• Sound Editing (Audition, Audacity)', '• Content Creation', '• MS Office', '• Google G Suite', '• Trello', '• Notion', '• Slack', '• Zapier', '• N8n'],
    color: 'orange',
    textColor: 'text-orange-400',
  },
  {
    title: 'Languages',
    icon: Globe,
    skills: ['• English (Native)', '• German (Upper Intermediate)', '• Bengali (Native)', '• Hindi (Professional)'],
    color: 'teal',
    textColor: 'text-teal-400',
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
    ],
    color: 'rose',
    textColor: 'text-rose-400',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-16 relative overflow-hidden">
      {/* Background overlays removed to use global Background component */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-slide-up relative z-10">
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
                  {category.skills.map((skill: any, idx: number) => {
                    const isObject = typeof skill === 'object' && skill !== null;
                    return (
                      <li key={idx} className="flex items-start gap-2 text-slate-300 hover:text-slate-100 transition-colors">
                        <div className={`w-1.5 h-1.5 bg-${category.color}-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-${category.color}-500/50`}></div>
                        {isObject ? (
                          <a
                            href={skill.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-rose-400 transition-all transform hover:scale-105 no-underline"
                          >
                            {skill.label}
                          </a>
                        ) : (
                          <span>{skill}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center bg-gray-900/80 rounded-xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-4">What I live by</h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            "I believe that knowledge is never complete—there's always something new emerging and new to learn. This philosophy drives me to always stay curious and fuels my commitment to staying at the forefront of digital marketing, AI automation, and business innovation."
          </p>
        </div>
      </div>
    </section>
  );
}
