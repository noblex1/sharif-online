
import { useState } from 'react';

const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const techStack = {
    languages: [
      { name: 'Python', level: 90, icon: '🐍' },
      { name: 'JavaScript', level: 85, icon: '⚡' },
      { name: 'TypeScript', level: 80, icon: '🔷' },
      { name: 'C++', level: 75, icon: '⚙️' },
      { name: 'Java', level: 70, icon: '☕' },
    ],
    frameworks: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'Node.js', level: 85, icon: '🟢' },
      { name: 'TensorFlow', level: 80, icon: '🧠' },
      { name: 'FastAPI', level: 75, icon: '🚀' },
      { name: 'Express', level: 70, icon: '🌐' },
    ],
    tools: [
      { name: 'Git', level: 90, icon: '📝' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Linux', level: 85, icon: '🐧' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'Kali Linux', level: 80, icon: '🔒' },
    ]
  };

  const categories = [
    { key: 'languages', label: 'Languages', icon: '💻' },
    { key: 'frameworks', label: 'Frameworks', icon: '🛠️' },
    { key: 'tools', label: 'Tools', icon: '⚡' }
  ];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Technologies and tools I use to bring ideas to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="glass-effect p-2 rounded-2xl">
            <div className="flex gap-2">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-slate-900'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techStack[activeCategory as keyof typeof techStack].map((tech, index) => (
              <div
                key={tech.name}
                className="glass-effect p-6 rounded-2xl hover-glow group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-neon-cyan transition-colors">
                      {tech.name}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">{tech.level}%</span>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${tech.level}%`,
                      boxShadow: '0 0 10px rgba(0, 245, 255, 0.5)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Tech Icons */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl opacity-10 animate-float"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${4 + (i % 3)}s`
              }}
            >
              {['🚀', '⚡', '🔥', '💎', '🌟', '⚙️', '🔧', '💻'][i]}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
