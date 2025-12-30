
import React, { useState, useRef } from 'react';
import AgeCounter from './components/AgeCounter';
import ProjectSection from './components/ProjectSection';
import ContactForm from './components/ContactForm';
import EasterEgg from './components/EasterEgg';
import { DATA } from './constants';

const App: React.FC = () => {
  const [tapCount, setTapCount] = useState(0);
  const tapTimeout = useRef<number | null>(null);

  const handleTitleTap = () => {
    if (tapTimeout.current) clearTimeout(tapTimeout.current);
    
    const newCount = tapCount + 1;
    setTapCount(newCount);
    
    if (newCount >= 7) {
      window.dispatchEvent(new CustomEvent('trigger-arquando'));
      setTapCount(0);
    } else {
      tapTimeout.current = window.setTimeout(() => setTapCount(0), 1000);
    }
  };

  return (
    <div className="min-h-screen selection:bg-white selection:text-black">
      {/* Background patterns */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:40px_40px]"></div>
      </div>

      <header className="max-w-6xl mx-auto px-6 pt-16 pb-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex-1">
            <h1 
              onClick={handleTitleTap}
              className="text-5xl md:text-8xl font-black tracking-tighter mb-4 text-zinc-50 cursor-pointer select-none active:opacity-80 transition-opacity"
            >
              {DATA.identity.handle}
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl font-medium mb-6 max-w-xl">
              Focusing on <span className="text-zinc-200">frontend fundamentals</span>, 
              UI/UX interaction, and building minimalist tools. Fluent across <span className="text-zinc-300">all mainstream languages</span> from low-level Rust/C to high-level Ruby/Python.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-mono text-zinc-600">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                Jakarta, Indonesia
              </span>
              <span>9th Grade</span>
              <a 
                href="https://github.com/arxivius" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-zinc-200 transition-colors"
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
          <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium mb-8">Technical Profile</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-zinc-400 mb-4 text-sm font-semibold">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {DATA.technical_profile.languages.map((lang, idx) => (
                  <span key={idx} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300 rounded-md text-sm mono">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-zinc-400 mb-4 text-sm font-semibold">Approach</h3>
              <ul className="space-y-2">
                {DATA.technical_profile.approach.map((item, idx) => (
                  <li key={idx} className="text-sm text-zinc-500 flex items-start gap-3">
                    <span className="text-zinc-700 font-mono">—</span>
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
          <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium mb-8">Others</h2>
          <div className="flex flex-wrap gap-3">
            {DATA.projects.other_projects.map((name, idx) => (
              <a 
                key={idx} 
                href={`https://github.com/arxivius/${name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-zinc-900 text-zinc-600 rounded-lg text-sm font-mono hover:text-zinc-400 hover:border-zinc-800 transition-all"
              >
                {name}
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-24 pt-16 border-t border-zinc-900">
          <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500 font-medium mb-8">Connect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="mailto:attayaarka76p@gmail.com" 
              className="group p-6 border border-zinc-900 bg-[#080808] hover:border-zinc-700 transition-all rounded-xl"
            >
              <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-2 font-mono">Email</span>
              <span className="text-lg text-zinc-300 group-hover:text-white transition-colors truncate">attayaarka76p@gmail.com</span>
            </a>
            <a 
              href="https://github.com/arxivius" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 border border-zinc-900 bg-[#080808] hover:border-zinc-700 transition-all rounded-xl"
            >
              <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-2 font-mono">Github</span>
              <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">github/arxivius</span>
            </a>
            <a 
              href="https://instagram.com/sum.rov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group p-6 border border-zinc-900 bg-[#080808] hover:border-zinc-700 transition-all rounded-xl"
            >
              <span className="block text-xs uppercase tracking-widest text-zinc-600 mb-2 font-mono">Instagram</span>
              <span className="text-lg text-zinc-300 group-hover:text-white transition-colors">@sum.rov</span>
            </a>
          </div>

          <ContactForm />
        </section>

        {/* Footer info */}
        <footer className="pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-600 text-sm italic">
            "Frictionless note-taking... Monkeytype clones... Faith-based UI."
          </div>
          <div className="text-zinc-500 text-xs text-right lowercase font-normal">
            btw i made <a href="https://pageshyt.vercel.app" className="hover:text-zinc-300 hover:underline transition-all font-medium">pageshyt</a>
          </div>
        </footer>
      </main>

      <EasterEgg />
    </div>
  );
};

export default App;
