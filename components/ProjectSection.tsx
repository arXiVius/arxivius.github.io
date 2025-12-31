
import React from 'react';
import { Project } from '../types';

interface ProjectSectionProps {
  title: string;
  subtitle?: string;
  projects: Project[];
  isFlagship?: boolean;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ title, subtitle, projects, isFlagship }) => {
  return (
    <div className="mb-20">
      <div className="flex flex-col mb-8">
        <h2 className="text-sm uppercase tracking-[0.2em] text-app-text-muted font-medium mb-1">{title}</h2>
        {subtitle && <p className="text-xs text-app-text-muted italic opacity-70">{subtitle}</p>}
      </div>
      
      <div className={`grid gap-6 ${isFlagship ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`group relative p-6 border border-app-border bg-app-surface hover:bg-app-surface-hover hover:border-app-text-muted transition-all duration-300 rounded-xl overflow-hidden flex flex-col ${isFlagship ? 'p-8 md:p-12 border-app-text-muted/20 bg-app-surface' : ''}`}
          >
            {isFlagship && (
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-app-text to-transparent opacity-20"></div>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <h3 className={`font-bold ${isFlagship ? 'text-3xl' : 'text-xl'} text-app-text group-hover:text-app-text transition-colors`}>
                {project.name}
              </h3>
              {project.status && (
                <span className="px-2 py-0.5 text-[10px] bg-app-text text-app-bg font-bold uppercase rounded-sm">
                  {project.status}
                </span>
              )}
            </div>
            
            <p className={`text-app-text-muted leading-relaxed mb-6 ${isFlagship ? 'text-lg max-w-2xl text-app-text/80' : 'text-sm'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.api && (
                <span className="text-[10px] px-2 py-0.5 border border-app-border text-app-text-muted rounded uppercase tracking-wider">
                  API: {project.api}
                </span>
              )}
              {project.type && (
                <span className="text-[10px] px-2 py-0.5 border border-app-border text-app-text-muted rounded uppercase tracking-wider">
                  {project.type}
                </span>
              )}
            </div>

            <div className="mt-auto flex flex-wrap gap-4 items-center">
              {project.url && (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-app-bg bg-app-text hover:opacity-90 transition-all px-3 py-1.5 rounded-lg border border-transparent shadow-sm"
                >
                  Open App
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              {project.repo && (
                <a 
                  href={`https://github.com/arxivius/${project.repo}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-app-text-muted hover:text-app-text underline decoration-app-text-muted/20 underline-offset-4 transition-all"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
