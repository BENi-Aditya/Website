
import React, { useEffect } from 'react';

const About = () => {
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
    <section id="about" className="py-24 bg-warm-50/50 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-warm-200 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-warm-400 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 reveal">
            <div className="relative">
              <div className="w-full h-80 md:h-[450px] bg-gradient-warm rounded-2xl overflow-hidden">
                <img 
                  src="/Images/AboutMe.heic" 
                  alt="Aditya Beni" 
                  className="w-full h-full object-cover mix-blend-overlay"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-xl border-4 border-background bg-white p-4 shadow-xl">
                <img 
                  src="/Images/AboutMe(1).jpg" 
                  alt="Creative workspace" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-display font-bold mb-6 reveal">About Me</h2>
            <div className="space-y-4 text-lg">
              <p className="reveal" style={{ transitionDelay: '0.1s' }}>
                I'm a developer and creator passionate about building technology that makes a real difference in people's lives. From environmental conservation to accessibility, my projects aim to address meaningful challenges.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.15s' }}>
                Currently a Grade 12 student at <span className="font-semibold">DLF Public School</span>, balancing academics with my passion for technology and innovation.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.2s' }}>
                With a background spanning robotics, AI, and software development, I bring a multidisciplinary approach to problem-solving. My GitHub repositories showcase a variety of projects that reflect my interests and technical abilities.
              </p>
              <p className="reveal" style={{ transitionDelay: '0.3s' }}>
                When I'm not coding, I create content for my YouTube channels, where I share both technical content on <a href="https://www.youtube.com/@BENiTech-o8o" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:underline">BENiTech</a> and creative films on <a href="https://www.youtube.com/@benifilms9223" target="_blank" rel="noopener noreferrer" className="text-warm-500 hover:underline">BENi Films</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
