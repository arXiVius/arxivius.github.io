
import { PortfolioData } from './types';

export const DATA: PortfolioData = {
  identity: {
    handle: "arXiVius",
    full_name: "Attaya Arka Putera Arifin",
    preferred_name: "Attaya",
    birth: {
      date: "2011-05-31",
      city: "Depok"
    }
  },
  location: {
    current: {
      city: "Jakarta",
      country: "Indonesia"
    }
  },
  technical_profile: {
    primary_focus: "frontend",
    languages: [
      "TypeScript", 
      "JavaScript", 
      "HTML", 
      "CSS", 
      "Python", 
      "C", 
      "Rust", 
      "Ruby", 
      "PHP", 
      "Go", 
      "Java", 
      "Swift",
      "Shell"
    ],
    approach: [
      "frontend fundamentals over heavy frameworks",
      "minimalism",
      "clarity",
      "high-polish UI",
      "intentional constraints",
      "polyglot mindset (fluent in most mainstream languages)"
    ]
  },
  projects: {
    flagship: {
      name: "ImanGo",
      repo: "iman-go",
      status: "completed",
      type: "research competition project",
      description: "A full web application exploring how modern software and thoughtful UI/UX can support meaningful, faith-based learning experiences."
    },
    frontend_showcase: {
      group_name: "ShytSuite",
      projects: [
        { 
          name: "dumpShyt", 
          repo: "dumpshyt",
          url: "https://dumpshyt.vercel.app",
          description: "Frictionless note-taking site with automatic saving and zero user actions." 
        },
        { 
          name: "typeShyt", 
          repo: "typeshyt",
          url: "https://typeshyt.vercel.app",
          description: "Monkeytype-style typing test focused on pure minimalism." 
        },
        { 
          name: "thys", 
          repo: "thys",
          url: "https://thys.vercel.app",
          description: "One-page site that only displays its own description." 
        },
        { 
          name: "whosimply", 
          repo: "whosimply",
          url: "https://whosimply.vercel.app",
          description: "Minimalist decision tool using name lists and commands." 
        },
        { 
          name: "pageShyt", 
          repo: "pageshyt",
          url: "https://pageshyt.vercel.app",
          description: "The homesite for ShytSuite." 
        }
      ]
    },
    ai_and_tools: [
      { 
        name: "kahooty", 
        repo: "kahooty",
        description: "Kahoot answer finder by game PIN or quiz URL." 
      },
      { 
        name: "quiz-craft-scribe", 
        repo: "quiz-craft-scribe",
        description: "AI-powered quiz maker using the Gemini API." 
      },
      { 
        name: "christos-ai", 
        repo: "christos-ai",
        description: "AI website builder that generates full multi-page sites using only HTML, CSS, and JavaScript.", 
        api: "Gemini", 
        constraints: ["no frameworks"] 
      }
    ],
    other_projects: ["its_done", "pomo", "slab", "yaknew-cli", "capitalizer", "wiki.", "codra.", "hello"]
  }
};
