
import React, { useState, useRef } from 'react';
import AgeCounter from './components/AgeCounter';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';
import { DATA } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light' | 'colorful'>(() => {
    return (localStorage.getItem('app-theme') as 'dark' | 'light' | 'colorful') || 'dark';
  });
  
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'colorful';
      return 'dark';
    });
  };


  return (
    <div className="min-h-screen selection:bg-app-text selection:text-app-bg bg-app-bg text-app-text transition-colors duration-300">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(var(--border-main)_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>


      <header className="max-w-6xl mx-auto px-6 pt-16 pb-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex-1">
            <h1 
              onClick={toggleTheme}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-4 cursor-pointer select-none relative transition-all duration-300 active:scale-[0.98]"
              style={{
                backgroundImage: 'linear-gradient(to bottom, var(--text-main) 20%, var(--text-muted) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              } as React.CSSProperties}
            >
              {DATA.identity.handle}
            </h1>
            <p className="text-app-text-muted text-lg md:text-xl font-medium mb-6 max-w-xl">
              Focusing on <span className="text-app-text opacity-90">frontend fundamentals</span>, 
              UI/UX interaction, and building minimalist tools. Fluent across <span className="text-app-text opacity-80">all mainstream languages</span> from low-level Rust/C to high-level Ruby/Python.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-app-text-muted opacity-80">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Jakarta, Indonesia
              </span>
              <span>9th Grade</span>
              <a 
                href="https://github.com/arxivius" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-app-text transition-colors"
              >
                github.com/arxivius
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-auto">
            <AgeCounter birthDate={DATA.identity.birth.date} />
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-32 relative z-10">
        {/* Technical Stack */}
        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-app-text-muted font-medium mb-8">Technical Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-app-text-muted opacity-80 mb-4 text-sm font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.technical_profile.languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-app-surface border border-app-border text-app-text-muted rounded-md text-sm mono">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-app-text-muted opacity-80 mb-4 text-sm font-semibold">Approach</h3>
              <ul className="space-y-2">
                {DATA.technical_profile.approach.map((item, idx) => (
                  <li key={idx} className="text-sm text-app-text-muted flex items-start gap-3">
                    <span className="text-app-text-muted opacity-40 font-mono">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <ProjectSection 
          title="Flagship Project" 
          projects={[DATA.projects.flagship]} 
          isFlagship={true} 
        />

        <ProjectSection 
          title={DATA.projects.frontend_showcase.group_name} 
          subtitle="Interaction quality & UI playgrounds" 
          projects={DATA.projects.frontend_showcase.projects} 
        />

        <ProjectSection 
          title="AI & Utilities" 
          projects={DATA.projects.ai_and_tools} 
        />

        <section className="mb-24">
          <h2 className="text-sm uppercase tracking-[0.2em] text-app-text-muted font-medium mb-8">Others</h2>
          <div className="flex flex-wrap gap-3">
            {DATA.projects.other_projects.map((name, idx) => (
              <a 
                key={idx} 
                href={`https://github.com/arxivius/${name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-app-border text-app-text-muted rounded-lg text-sm font-mono hover:text-app-text hover:border-app-border transition-all"
              >
                {name}
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-24 pt-16 border-t border-app-border">
          <h2 className="text-sm uppercase tracking-[0.2em] text-app-text-muted font-medium mb-8">Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="mailto:attayaarka76p@gmail.com" 
              className="group p-6 border border-app-border bg-app-surface hover:border-app-text-muted transition-all rounded-xl"
            >
              <span className="block text-xs uppercase tracking-widest text-app-text-muted mb-2 font-mono">Email</span>
              <span className="text-lg text-app-text-muted group-hover:text-app-text transition-colors truncate">attayaarka76p@gmail.com</span>
            </a>
            <a 
              href="https://github.com/arxivius" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 border border-app-border bg-app-surface hover:border-app-text-muted transition-all rounded-xl"
            >
              <span className="block text-xs uppercase tracking-widest text-app-text-muted mb-2 font-mono">Github</span>
              <span className="text-lg text-app-text-muted group-hover:text-app-text transition-colors">github/arxivius</span>
            </a>
            <a 
              href="https://instagram.com/sum.rov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 border border-app-border bg-app-surface hover:border-app-text-muted transition-all rounded-xl"
            >
              <span className="block text-xs uppercase tracking-widest text-app-text-muted mb-2 font-mono">Instagram</span>
              <span className="text-lg text-app-text-muted group-hover:text-app-text transition-colors">@sum.rov</span>
            </a>
          </div>

          <ContactForm />
        </section>

        {/* Footer info */}
        <footer className="pt-16 border-t border-app-border flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-app-text-muted text-sm italic">
            "Frictionless note-taking... Monkeytype clones... Faith-based UI."
          </div>
          <div className="text-app-text-muted text-xs text-right lowercase font-normal">
            btw i made <a href="https://pageshyt.vercel.app" className="hover:text-app-text hover:underline transition-all font-medium">pageshyt</a>
          </div>
        </footer>
      </main>

    </div>
  );
};

export default App;
