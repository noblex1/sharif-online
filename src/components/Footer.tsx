
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-orbitron font-bold text-gradient mb-2">
              Sharif Iddrisu
            </h3>
            <p className="text-gray-400">
              Building the future with code, one project at a time.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sharifiddrisu"
              className="glass-effect p-3 rounded-full hover-glow transition-all"
            >
              <Github className="h-5 w-5 text-neon-cyan" />
            </a>
            <a
              href="https://linkedin.com/in/sharif-iddrisu"
              className="glass-effect p-3 rounded-full hover-glow transition-all"
            >
              <Linkedin className="h-5 w-5 text-neon-blue" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 Sharif Iddrisu. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed & Developed with 💙 by{' '}
              <span className="text-neon-cyan">Sharif Iddrisu</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
