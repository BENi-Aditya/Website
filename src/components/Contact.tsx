
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Youtube, Mail, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-4xl font-display font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-foreground/70 mb-8">
            Interested in collaborating or learning more about my projects? Reach out through any of my social channels or check out my repositories on GitHub.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 reveal" style={{ transitionDelay: '0.1s' }}>
            <a 
              href="https://github.com/BENi-Aditya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.instagram.com/aditya.beni_/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#E1306C] text-white hover:bg-[#E1306C]/90 transition-colors"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a 
              href="https://www.youtube.com/@BENiTech-o8o" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF0000] text-white hover:bg-[#FF0000]/90 transition-colors"
            >
              <Youtube size={20} />
              <span>BENi Tech</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/aditya-tripathi-55371533b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#0077B5] text-white hover:bg-[#0077B5]/90 transition-colors"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div 
            className="bg-gradient-to-r from-warm-100 to-warm-300 rounded-xl p-8 shadow-lg reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold font-display mb-4">Work With Me</h3>
            <p className="mb-6">
              Have a project in mind? I'm always open to discussing new opportunities and collaborations.
            </p>
            <div className="flex items-center justify-center bg-warm-100 rounded-lg p-4 border border-warm-300">
              <Mail className="text-warm-500 mr-3" size={20} />
              <span className="text-foreground font-medium select-all">aditya.tripathi.beni@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
