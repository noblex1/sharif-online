
import { useState } from 'react';
import { Github, Linkedin, Arrow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Ready to collaborate on something amazing? Let's build the future together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-blue mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-neon-cyan mb-2">Location</h4>
                  <p className="text-gray-300">Kumasi, Ashanti Region, Ghana</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-cyan mb-2">Education</h4>
                  <p className="text-gray-300">University for Development Studies</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-neon-cyan mb-2">Interests</h4>
                  <p className="text-gray-300">AI Development, Cybersecurity, Open Source</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sharifiddrisu"
                  className="flex-1 glass-effect p-4 rounded-xl hover-glow flex items-center justify-center gap-3 text-neon-cyan hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/sharif-iddrisu"
                  className="flex-1 glass-effect p-4 rounded-xl hover-glow flex items-center justify-center gap-3 text-neon-blue hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-effect border-white/20 focus:border-neon-cyan bg-transparent text-white placeholder:text-gray-400"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-effect border-white/20 focus:border-neon-cyan bg-transparent text-white placeholder:text-gray-400"
                    required
                  />
                </div>
              </div>
              
              <div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="glass-effect border-white/20 focus:border-neon-cyan bg-transparent text-white placeholder:text-gray-400"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="glass-effect border-white/20 focus:border-neon-cyan bg-transparent text-white placeholder:text-gray-400 resize-none"
                  required
                />
              </div>
              
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-neon-cyan to-neon-blue hover:from-neon-blue hover:to-neon-cyan font-semibold py-3 hover:scale-105 transition-all"
              >
                Send Message
                <Arrow className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
