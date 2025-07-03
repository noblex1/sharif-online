
import { useState, useEffect } from 'react';
import { ArrowDown, Code, Github, Linkedin } from 'lucide-react';
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300f5ff' fill-opacity='0.03'%3E%3Cpath d='M20 20L0 0v40l20-20zM40 0v40L20 20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto rounded-full glass-effect p-2 animate-pulse">
            <img
              src="/lovable-uploads/47270500-3f91-4048-8652-075af9ffa050.png"
              alt="Sharif Iddrisu"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-cyan-400 rounded-full animate-spin"></div>
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-light text-gray-300 mb-2">
            👋 Hi, I'm <span className="text-gradient font-semibold">Sharif Iddrisu</span>
          </h1>
        </div>

        {/* Animated Tagline */}
        <div className="mb-8 h-20 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient animate-fade-in">
            {taglines[currentTagline]}
          </h2>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Computer Science Student | Software Engineer | Passionate About{' '}
          <span className="text-cyan-400">Artificial Intelligence</span> and{' '}
          <span className="text-blue-400">Cybersecurity</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="glass-effect hover-glow px-8 py-4 text-lg font-semibold"
          >
            <Code className="mr-2 h-5 w-5" />
            View Projects
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-effect hover-glow px-8 py-4 text-lg border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900"
          >
            Download Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/sharifiddrisu" className="glass-effect p-3 rounded-full hover-glow">
            <Github className="h-6 w-6 text-cyan-400" />
          </a>
          <a href="https://linkedin.com/in/sharif-iddrisu" className="glass-effect p-3 rounded-full hover-glow">
            <Linkedin className="h-6 w-6 text-cyan-400" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown className="h-8 w-8 text-cyan-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
