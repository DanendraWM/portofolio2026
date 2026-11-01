export type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
};

export type Education = {
  degree: string;
  school: string;
  period: string;
  note?: string;
};

export type Achievement = {
  /** The large word on the card; reads together with the title. */
  highlight: string;
  title: string;
  issuer: string;
  year: string;
  detail: string;
  image: { src: string; alt: string };
};

export type FeaturedProject = {
  slug: string;
  title: string;
  context: string;
  problem: string;
  solution: string;
  impact: string;
  tech: string[];
};

/** Smaller tools and assigned tasks: no problem/solution/impact story to tell. */
export type SmallProject = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
};

export type Content = {
  meta: { title: string; description: string; ogLocale: string };
  ui: { skipToContent: string; toggleTheme: string; switchLanguage: string };
  hero: {
    role: string;
    tagline: string;
    location: string;
    facts: string[];
    viewProjects: string;
    contactMe: string;
    portraitAlt: string;
    nodes: { request: string; api: string; database: string; response: string };
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    quickFacts: { label: string; value: string }[];
  };
  achievements: { label: string; title: string; items: Achievement[] };
  experience: {
    label: string;
    title: string;
    jobs: Job[];
    educationLabel: string;
    education: Education[];
  };
  projects: {
    label: string;
    title: string;
    problem: string;
    solution: string;
    impact: string;
    smallLabel: string;
    featured: FeaturedProject[];
    small: SmallProject[];
  };
  skills: {
    label: string;
    title: string;
    groups: { label: string; items: string[] }[];
    certificationsLabel: string;
    certifications: { title: string; issuer: string; year?: string }[];
  };
  services: {
    label: string;
    title: string;
    items: { title: string; description: string }[];
  };
  contact: {
    label: string;
    title: string;
    direct: string;
    form: {
      name: string;
      contact: string;
      message: string;
      send: string;
      sending: string;
      sent: string;
      errorValidation: string;
      errorRateLimit: string;
      errorGeneric: string;
    };
  };
};
