
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Construction, Github, Link, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  isHighlight?: boolean;
  isUnderConstruction?: boolean;
  repoUrl?: string;
  liveUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  isHighlight = false,
  isUnderConstruction = false,
  repoUrl,
  liveUrl,
  className
}) => {
  return (
    <div className={cn(
      'group relative overflow-hidden rounded-xl transition-all duration-500 hover:shadow-2xl',
      isHighlight ? 'md:col-span-2' : '',
      className
    )}>
      <Card className={cn(
        'h-full border-none overflow-hidden bg-white transition-all duration-300 flex flex-col',
        isHighlight ? 'bg-gradient-to-br from-warm-50 to-white' : ''
      )}>
        <div className={cn(
          "relative overflow-hidden",
          isHighlight ? "h-80" : "h-64"
        )}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        </div>
        
        <div className="relative z-10">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-display">{title}</CardTitle>
              {isUnderConstruction && (
                <div className="construction-badge flex items-center">
                  <Construction className="h-3 w-3 mr-1" />
                  <span>In Progress</span>
                </div>
              )}
            </div>
            {isHighlight && (
              <Badge variant="outline" className="bg-warm-300/30 text-warm-500 border-warm-200 mt-2">
                Featured Project
              </Badge>
            )}
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base text-foreground/80">
              {description}
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-3">
            {repoUrl && (
              <a 
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-warm-500 hover:text-warm-600 transition-colors"
              >
                <Github size={16} className="mr-1" />
                <span>View Repository</span>
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-warm-500 hover:text-warm-600 transition-colors"
              >
                <ExternalLink size={16} className="mr-1" />
                <span>Visit Website</span>
              </a>
            )}
          </CardFooter>
        </div>
      </Card>
      
      {isHighlight && (
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-warm opacity-20 rounded-full blur-3xl animate-pulse-slow" />
      )}
    </div>
  );
};

export default ProjectCard;
