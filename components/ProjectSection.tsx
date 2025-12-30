
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
        <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium mb-1">{title}</h2>
        {subtitle && <p className="text-xs text-zinc-600 italic">{subtitle}</p>}
      </div>
      
      <div className={`grid gap-6 ${isFlagship ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className={`group relative p-6 border border-zinc-900 bg-[#080808] hover:bg-[#0a0a0a] hover:border-zinc-800 transition-all duration-300 rounded-xl overflow-hidden flex flex-col ${isFlagship ? 'p-8 md:p-12 border-zinc-800 bg-[#0a0a0a]' : ''}`}
          >
            {isFlagship && (
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white to-transparent opacity-50"></div>
            )}
            
            <div className="flex justify-between items-start mb-4">
              <h3 className={`font-bold ${isFlagship ? 'text-3xl' : 'text-xl'} text-zinc-100 group-hover:text-white transition-colors`}>
                {project.name}
              </h3>
              {project.status && (
                <span className="px-2 py-0.5 text-[10px] bg-zinc-100 text-black font-bold uppercase rounded-sm">
                  {project.status}
                </span>
              )}
            </div>
            
            <p className={`text-zinc-400 leading-relaxed mb-6 ${isFlagship ? 'text-lg max-w-2xl' : 'text-sm'}`}>
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.api && (
                <span className="text-[10px] px-2 py-0.5 border border-zinc-800 text-zinc-500 rounded uppercase tracking-wider">
                  API: {project.api}
                </span>
              )}
              {project.type && (
                <span className="text-[10px] px-2 py-0.5 border border-zinc-800 text-zinc-500 rounded uppercase tracking-wider">
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
                  className="inline-flex items-center gap-2 text-xs font-bold text-zinc-100 hover:text-white transition-all bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 group-hover:border-zinc-600"
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
                  className="text-xs font-medium text-white/50 hover:text-white underline decoration-white/10 underline-offset-4 transition-all"
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
