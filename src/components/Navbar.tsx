
import React, { useState, useEffect } from 'react';
import { Github, Instagram, Youtube, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-gradient">
          BENi
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com/BENi-Aditya" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.instagram.com/aditya.beni_/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href="https://www.youtube.com/@BENiTech-o8o" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/aditya-tripathi-55371533b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
