
import { useState, useEffect } from 'react';
import { ArrowDown, Code, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    "Building the Future with Code",
    "AI & Cybersecurity Enthusiast", 
    "Crafting Intelligent Solutions"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [taglines.length]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300f5ff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Profile Section */}
        <div className="mb-8 sm:mb-12 relative">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto rounded-full glass-effect p-1 neon-glow">
            <img
              src="/lovable-uploads/47270500-3f91-4048-8652-075af9ffa050.png"
              alt="Sharif Iddrisu"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-cyan-400 rounded-full animate-spin opacity-60"></div>
          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 border-2 border-blue-400 rounded-full animate-pulse opacity-40"></div>
        </div>

        {/* Enhanced Greeting */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 mb-3 sm:mb-4">
            👋 Hello, I'm{' '}
            <span className="text-gradient font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Sharif Iddrisu
            </span>
          </h1>
        </div>

        {/* Enhanced Animated Tagline */}
        <div className="mb-8 sm:mb-12 h-16 sm:h-20 lg:h-24 flex items-center justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-orbitron font-bold text-gradient bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            {taglines[currentTagline]}
          </h2>
        </div>

        {/* Enhanced Subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed px-4">
          Computer Science Student | Software Engineer | Passionate About{' '}
          <span className="text-cyan-400 font-medium">Artificial Intelligence</span> and{' '}
          <span className="text-blue-400 font-medium">Cybersecurity</span>
        </p>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 lg:mb-20 px-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto glass-effect hover-glow px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 border-0 shadow-lg"
          >
            <Code className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto glass-effect hover-glow px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 shadow-lg"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>

        {/* Enhanced Social Links */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          <a 
            href="https://github.com/sharifiddrisu" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect p-3 sm:p-4 rounded-full hover-glow transition-all duration-300 group"
          >
            <Github className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 group-hover:text-white transition-colors" />
          </a>
          <a 
            href="https://linkedin.com/in/sharif-iddrisu" 
            target="_blank"
            rel="noopener noreferrer"
            className="glass-effect p-3 sm:p-4 rounded-full hover-glow transition-all duration-300 group"
          >
            <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ArrowDown className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400 mx-auto opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
