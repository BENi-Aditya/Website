
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'lucide-react';

const Projects = () => {
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

  const projects = [
    {
      title: "VibeCode",
      description: "A cloud-based coding tool where you describe the app or website you want in plain English, and the system sets up the development environment, writes code, runs tests, and deploys it live. Designed for people with great ideas who aren't trained programmers.",
      image: "/Images/Vibecode.png",
      isHighlight: true,
      isUnderConstruction: true,
      repoUrl: "https://github.com/BENi-Aditya/VibeCode",
      liveUrl: "https://vibecode.org.in"
    },
    {
      title: "Blind Accessibility Device",
      description: "A wearable gadget for visually impaired users that recognizes hand gestures and turns them into text or spoken words. It also uses distance sensors to warn about obstacles, helping users move safely while bridging communication gaps.",
      image: "/Images/blind.png",
      isHighlight: true,
      isUnderConstruction: true,
      repoUrl: "https://github.com/BENi-Aditya/BlindAccessibilityDevice"
    },
    {
      title: "SeaUP",
      description: "A small robotic system that uses a camera to spot floating plastic in water, with mechanical arms to pick it up and sort it for recycling. The system can identify different types of plastic, making sorting faster and preventing trash from returning to waterways.",
      image: "/Images/SeaUp.JPG",
      isHighlight: false,
      isUnderConstruction: false,
      repoUrl: "https://github.com/BENi-Aditya/SeaUP"
    },
    {
      title: "NutriScan AI",
      description: "A phone app that lets you point your camera at any food item to instantly get nutrition information like calories, fat, sugar, and allergens. It works by matching images to a database, breaking down nutritional data so users can make informed choices.",
      image: "/Images/NutriScan.png",
      isHighlight: false,
      isUnderConstruction: false,
      repoUrl: "https://github.com/BENi-Aditya/NutriScanAI"
    },
    {
      title: "MayDay App",
      description: "A personal planner app where you type or speak your to-do list and deadlines, and it automatically organizes your calendar, adjusting tasks if schedules change. It simplifies planning without requiring users to manage multiple calendars or reminders.",
      image: "/Images/MayDay.png",
      isHighlight: false,
      isUnderConstruction: false,
      repoUrl: "https://github.com/BENi-Aditya/MayDayApp"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="mb-16 text-center reveal">
          <h2 className="text-4xl font-display font-bold mb-4">My Projects</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            From robotics to AI, I'm passionate about using technology to solve real-world problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              isHighlight={project.isHighlight}
              isUnderConstruction={project.isUnderConstruction}
              repoUrl={project.repoUrl}
              liveUrl={project.liveUrl}
              className={`reveal delay-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
