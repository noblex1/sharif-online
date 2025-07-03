
import { Book, Code, Arrow } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <Book className="h-8 w-8 text-neon-cyan" />,
      title: "University for Development Studies",
      description: "Computer Science Student",
      year: "2022 - Present"
    },
    {
      icon: <Code className="h-8 w-8 text-neon-blue" />,
      title: "HackerBoost",
      description: "Active Member & Developer",
      year: "2023 - Present"
    }
  ];

  const skills = [
    "Artificial Intelligence",
    "Cybersecurity",
    "Software Engineering",
    "Python Development",
    "JavaScript/React",
    "Machine Learning"
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <div className="glass-effect p-8 rounded-2xl hover-glow">
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                I'm a passionate Computer Science student from{' '}
                <span className="text-neon-cyan font-semibold">Kumasi, Ghana</span>, 
                currently pursuing my degree at the University for Development Studies. 
                My journey in technology is driven by an insatiable curiosity about{' '}
                <span className="text-neon-blue font-semibold">Artificial Intelligence</span> and{' '}
                <span className="text-neon-cyan font-semibold">Cybersecurity</span>.
              </p>
              
              <p className="text-lg leading-relaxed text-gray-300 mb-6">
                As a budding software engineer, I believe in the power of code to solve 
                real-world problems and create meaningful impact. I'm actively involved 
                with <span className="text-neon-blue font-semibold">HackerBoost</span>, 
                where I collaborate with like-minded developers to build innovative solutions.
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                When I'm not coding, you'll find me exploring the latest developments in 
                AI research, studying cybersecurity frameworks, or contributing to open-source 
                projects that make technology more accessible to everyone.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="glass-effect p-4 rounded-lg text-center hover-glow cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-sm font-medium text-neon-cyan">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-orbitron font-bold text-center mb-8 text-gradient">
              Education & Experience
            </h3>
            
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="relative glass-effect p-6 rounded-2xl hover-glow"
              >
                {/* Timeline Line */}
                {index < achievements.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-neon-cyan to-transparent"></div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 glass-effect rounded-full">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-400 mb-2">{achievement.description}</p>
                    <span className="text-neon-cyan text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
