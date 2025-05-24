
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
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
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute w-[200%] h-full bg-gradient-warm opacity-10 animate-wave"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:order-2 flex-shrink-0">
            <div className="relative w-64 h-auto border-4 border-warm-300 shadow-lg rounded-full overflow-hidden">
              <img 
                src="/Images/MyPhoto.jpg" 
                alt="Aditya Tripathi" 
                className="w-full h-auto object-contain" 
              />
            </div>
          </div>
          <div className="md:order-1 max-w-3xl text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 reveal">
              Hi, I'm <span className="text-gradient">Aditya Tripathi</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4 reveal" style={{ transitionDelay: '0.1s' }}>
              I create innovative solutions through code, design, and technology. Turning complex problems into elegant, accessible experiences is what drives me.
            </p>

            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start reveal" style={{ transitionDelay: '0.2s' }}>
              <Button 
                asChild 
                className="bg-gradient-warm hover:opacity-90 transition-opacity text-white"
              >
                <a href="#projects">
                  View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                asChild
                className="border-warm-400 text-foreground hover:bg-warm-100/50"
              >
                <a href="https://github.com/BENi-Aditya" target="_blank" rel="noopener noreferrer">
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

