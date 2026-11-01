import type { Content } from "@/types/content";

// Keep client and product names out of the project text: describe the work, not the system.
export const en: Content = {
  meta: {
    title: "Danendra Wyanta Mustofa | Technical Support & Backend Developer",
    description:
      "Technical support engineer in Jakarta growing into backend development. 3+ years with production applications, PHP, Laravel, and Oracle. Open to backend roles and small-business projects.",
    ogLocale: "en_US",
  },
  ui: {
    skipToContent: "Skip to content",
    toggleTheme: "Toggle color theme",
    switchLanguage: "Change language",
  },
  hero: {
    role: "Technical Support & Backend Developer",
    tagline: "I keep production applications healthy, and I'm growing into backend engineering.",
    location: "West Jakarta, Indonesia",
    facts: ["3+ years in production support", "1st place, hackathon 2025", "Best Employee, division 2025"],
    viewProjects: "View projects",
    contactMe: "Contact me",
    portraitAlt: "Portrait of Danendra in a blue plaid shirt",
    nodes: {
      request: "validated input",
      api: "REST · Laravel",
      database: "Oracle · MySQL",
      response: "200 OK",
    },
  },
  about: {
    label: "about",
    title: "I start from what's broken, then work back through the system.",
    paragraphs: [
      "I've spent 3+ years supporting business applications: tracing production issues with SQL, testing releases before they ship, and tightening request validation against malicious input.",
      "Backend is where I'm headed. I've built internal tools with Laravel and designed the APIs behind web and mobile apps, and I'm currently learning the basics of cyber security.",
    ],
    quickFacts: [
      { label: "looking for", value: "Backend roles and small-business projects" },
      { label: "based in", value: "West Jakarta, Indonesia" },
      { label: "education", value: "Bachelor's in Information Systems, 2026" },
      { label: "languages", value: "Indonesian, English" },
    ],
  },
  achievements: {
    label: "highlights",
    title: "Recognized for the work, not just the job title.",
    items: [
      {
        highlight: "1st",
        title: "Clash of Code Hackathon",
        issuer: "Happy Healthy, PT Neuronworks Indonesia",
        year: "2025",
        detail: "Led a team of 3 and built the backend and API for a web and mobile support ticketing app.",
        image: {
          src: "/images/hackathon.jpg",
          alt: "A team of three with medals, holding the 1st place Clash of Code certificate",
        },
      },
      {
        highlight: "Best",
        title: "Employee Division of the Year",
        issuer: "PT Neuronworks Indonesia",
        year: "2025",
        detail: "Recognized as the best employee in my division.",
        image: {
          src: "/images/best-employee.jpg",
          alt: "Danendra receiving the Best Employee Division of the Year 2025 certificate on stage",
        },
      },
    ],
  },
  experience: {
    label: "experience",
    title: "From the office network to production applications.",
    jobs: [
      {
        role: "Technical Support & Maintenance",
        company: "PT Neuronworks Indonesia",
        period: "Mar 2023 – Present",
        points: [
          "Test application changes before production deployment, investigate defects, and coordinate fixes with development teams.",
          "Investigate production issues using SQL and Oracle Database, applying validated data corrections when required.",
          "Manage application version updates through Git for an enterprise PHP application.",
          "Review application behavior for security weaknesses and strengthen request validation against malicious input and SQL injection.",
        ],
      },
      {
        role: "IT Support Technician",
        company: "PT Infomedia Solusi Humanika",
        period: "Dec 2021 – Mar 2023",
        points: [
          "Kept the office network available, supporting Cisco and MikroTik devices.",
          "Provided day-to-day troubleshooting for hardware, software, and network issues.",
          "Built internal Laravel tools, including an SNMP monitoring tool and a paperless handover application.",
        ],
      },
      {
        role: "Junior Data Analyst",
        company: "PT Nitoza Indonesia Mandiri",
        period: "Sep 2021 – Nov 2021",
        points: ["Managed and validated application data, and prepared data structures for a web application using a NoSQL database."],
      },
    ],
    educationLabel: "education",
    education: [
      {
        degree: "Bachelor's Degree, Information Systems",
        school: "Universitas Bina Sarana Informatika",
        period: "Graduated Feb 2026",
        note: "GPA 3.60/4.00",
      },
      {
        degree: "Software Engineering",
        school: "SMK Telkom Jakarta",
        period: "2018 – 2021",
      },
    ],
  },
  projects: {
    label: "projects",
    title: "What I've worked on.",
    problem: "problem",
    solution: "solution",
    impact: "impact",
    smallLabel: "smaller tools and assigned tasks",
    featured: [
      {
        slug: "support-ticketing",
        title: "Office support ticketing app",
        context: "1st place, internal hackathon 2025 · Team of 3 · Team lead and backend",
        problem: "When something broke at the office, like the Wi-Fi going down, reports had no single place to go and were hard to follow up.",
        solution: "A web and mobile app where every problem starts as a ticket. I built the backend and the API that both clients use.",
        impact: "Won 1st place at the hackathon.",
        tech: ["REST API", "Backend", "Web", "Mobile"],
      },
      {
        slug: "paperless-monitoring",
        title: "Paperless handover and machine monitoring",
        context: "Undergraduate thesis · Internal tool",
        problem: "Handover records were kept on paper, and machine status wasn't available in one place.",
        solution: "A Laravel app for handovers with item details, history, and digital signatures, plus an SNMP integration that collects machine metrics and sends them to the app.",
        impact: "Replaced paper-based handover records with one digital workflow.",
        tech: ["Laravel", "PHP", "Node.js", "SNMP", "REST API"],
      },
      {
        slug: "enterprise-maintenance",
        title: "Enterprise application maintenance",
        context: "PT Neuronworks Indonesia · Technical support",
        problem: "A large order-handling application used by operational teams needs issues traced and fixed quickly, without breaking production.",
        solution: "Trace defects through the code and the database, test changes before release, and support the security team in closing off fraud risks.",
        impact: "Helps keep the service stable for its operational users.",
        tech: ["PHP", "Oracle Database", "SQL", "Git"],
      },
      {
        slug: "security-review",
        title: "Application security checks",
        context: "PT Neuronworks Indonesia · VAPT support",
        problem: "A web application needed checking for SQL injection as part of a vulnerability assessment.",
        solution: "Checked the application's inputs for SQL injection, and strengthened request validation against malicious input.",
        impact: "Reduced the risk from malicious input.",
        tech: ["SQL", "Request validation", "PHP"],
      },
    ],
    small: [
      {
        slug: "telegram-bot",
        title: "Team Telegram bot",
        summary: "A bot that connects team workflows to Telegram for integration and automation.",
        tech: ["Telegram Bot API", "Node.js"],
      },
      {
        slug: "case-recap",
        title: "Daily case recap",
        summary: "A small script that turns a day's Telegram case chat into an Excel report.",
        tech: ["Scripting", "Excel"],
      },
      {
        slug: "order-flow-tests",
        title: "Order flow test automation",
        summary: "An assigned task: Playwright tests for the order flow of an enterprise system.",
        tech: ["Playwright"],
      },
    ],
  },
  skills: {
    label: "skills",
    title: "What I use day to day, and what I'm still learning.",
    groups: [
      { label: "backend and web", items: ["PHP", "Laravel", "CodeIgniter", "Node.js", "JavaScript", "REST APIs", "Next.js"] },
      { label: "database", items: ["Oracle Database", "SQL", "MySQL", "MongoDB"] },
      { label: "support and tools", items: ["Git", "Troubleshooting", "Software testing", "Request validation", "SNMP", "Cisco", "MikroTik"] },
      { label: "currently learning", items: ["Cyber security basics", "Automation", "Playwright"] },
    ],
    certificationsLabel: "certifications",
    certifications: [
      { title: "Back-End Developer Expert with JavaScript", issuer: "Dicoding Indonesia", year: "2025" },
      { title: "Next.js Fullstack", issuer: "BuildWithAngga" },
      { title: "Laravel 12 + React", issuer: "BuildWithAngga" },
      { title: "Laravel + Flutter", issuer: "BuildWithAngga" },
      { title: "Web Security", issuer: "BuildWithAngga" },
    ],
  },
  services: {
    label: "for small businesses",
    title: "Need a website or a small tool for your business?",
    items: [
      { title: "Business websites", description: "A fast, simple website so customers can find your business and contact you." },
      { title: "Internal tools", description: "Small web apps that replace paper forms and scattered spreadsheets." },
      { title: "Telegram bots", description: "Bots for notifications and routine tasks your team repeats every day." },
    ],
  },
  contact: {
    label: "contact",
    title: "Hiring, or have a project in mind? Let's talk.",
    direct: "Prefer something direct? These work too.",
    form: {
      name: "Name",
      contact: "Email or WhatsApp",
      message: "Message",
      send: "Send message",
      sending: "Sending…",
      sent: "Message sent. I'll get back to you soon.",
      errorValidation: "Check your name, contact, and message, then try again.",
      errorRateLimit: "Too many messages. Try again in a few minutes.",
      errorGeneric: "Your message couldn't be sent. Email me instead.",
    },
  },
};
