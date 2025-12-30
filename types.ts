
export interface Project {
  name: string;
  description: string;
  repo?: string;
  url?: string;
  status?: string;
  type?: string;
  notes?: string[];
  api?: string;
  constraints?: string[];
}

export interface PortfolioData {
  identity: {
    handle: string;
    full_name: string;
    preferred_name: string;
    birth: {
      date: string;
      city: string;
    };
  };
  location: {
    current: {
      city: string;
      country: string;
    };
  };
  technical_profile: {
    primary_focus: string;
    languages: string[];
    approach: string[];
  };
  projects: {
    flagship: Project;
    frontend_showcase: {
      group_name: string;
      projects: Project[];
    };
    ai_and_tools: Project[];
    other_projects: string[];
  };
}
