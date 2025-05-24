
import React from 'react';
import { Github, Instagram, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-display font-bold bg-gradient-to-r from-warm-200 to-warm-400 bg-clip-text text-transparent">
              BENi-Aditya
            </h2>
            <p className="mt-2 text-background/70 max-w-xs">
              Developer, creator, and innovator working on technology that makes a difference.
            </p>
          </div>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/BENi-Aditya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-warm-200 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.instagram.com/aditya.beni_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-warm-200 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.youtube.com/@BENiTech-o8o" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-warm-200 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/aditya-tripathi-55371533b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-background/70 hover:text-warm-200 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

            </div>
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Aditya Beni. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
