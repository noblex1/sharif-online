
import { Github, Arrow } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "NetWard AI",
      description: "Advanced phishing detection system using machine learning algorithms to protect users from malicious websites and emails.",
      technologies: ["Python", "TensorFlow", "React", "Node.js"],
      category: "Cybersecurity",
      status: "In Development",
      gradient: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "Smart ChatBot",
      description: "NLP-powered conversational AI assistant that understands context and provides intelligent responses for various domains.",
      technologies: ["Python", "OpenAI", "FastAPI", "React"],
      category: "Artificial Intelligence",
      status: "Completed",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "SecurePass",
      description: "Advanced password generator and manager with encryption, breach monitoring, and secure vault functionality.",
      technologies: ["JavaScript", "Electron", "Node.js", "MongoDB"],
      category: "Cybersecurity",
      status: "Completed",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "CyberVault",
      description: "Data protection tracker that monitors file integrity, detects unauthorized access, and provides security analytics.",
      technologies: ["Python", "SQLite", "Tkinter", "Cryptography"],
      category: "Security Analytics",
      status: "In Development",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Explore my latest work in AI, cybersecurity, and software development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div key={project.id} className="group perspective">
              <div className="relative preserve-3d transition-all duration-700 hover:rotate-y-12">
                {/* Project Card */}
                <div className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 h-full">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-blue/20 text-neon-cyan border border-neon-cyan/30">
                          {project.category}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                            : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-3 py-1 bg-slate-800/50 text-gray-300 rounded-full border border-slate-700 hover:border-neon-cyan/50 transition-colors cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 glass-effect border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan hover:text-slate-900 group-hover:scale-105 transition-all"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-cyan group-hover:scale-105 transition-all"
                    >
                      Live Demo
                      <Arrow className="ml-2 h-4 w-4 rotate-45" />
                    </Button>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 -z-10 blur-xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="glass-effect border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-slate-900 px-8 py-4"
          >
            View All Projects
            <Arrow className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
