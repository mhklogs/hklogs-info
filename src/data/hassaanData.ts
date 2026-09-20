export interface Publication {
  title: string;
  sub: string;
  link: string;
  category: string;
  desc: string;
}

export interface LocalProject {
  name: string;
  desc: string;
  url: string;
  vercelUrl?: string;
  tech: string[];
  thumbnail: string;
  usecase: string;
  working: string;
}

export interface CourseItem {
  code: string;
  name: string;
  university: string;
  category: string;
}

export const personalInfo = {
  name: "Hassaan Abdullah Kiyani",
  title: "AI Engineer & SQA Specialist",
  role: "CEO & Founder",
  company: "Recruiter AI",
  location: "Rawalpindi / Islamabad, Pakistan",
  email: "hassaanabdullahkayani@gmail.com",
  fiverr: "https://www.fiverr.com/hassaankayani1",
  fiverrEdit: "https://www.fiverr.com/sellers/hassaankayani1/edit",
  upwork: "https://www.upwork.com/freelancers/~016d3a3d2b6da309a6",
  linkedin: "https://www.linkedin.com/in/hassaan-abdullah-kiyani/",
  github: "https://github.com/hklogs",
  medium: "https://medium.com/@hklogs",
  university: "UIIT PMAS-Arid Agriculture University, Pakistan",
  degree: "BS Software Engineering (Final Year)",
  schooling: "Army Public School and College, Jhelum Cantt",
  tagline: "Building and validating AI driven solutions.",
  summary: "Building and validating AI driven solutions.",
  bio: [
    "Building and validating AI driven solutions."
  ],
  courses: [
    "Advance Database Management Systems (CSC-303)",
    "Software Quality Engineering (CSC-323)",
    "Software Design & Architecture (CSC-320)",
    "Artificial Intelligence (CSC-203)",
    "Data Structures & Algorithms (CSC-110)",
    "Web Technologies (CSC-251)"
  ]
};

export const detailedCourses: CourseItem[] = [
  { code: "CSC-303", name: "Advance Database Management Systems", university: "Arid Agriculture University", category: "Database & Data" },
  { code: "CSC-252", name: "Advanced Programming", university: "Arid Agriculture University", category: "Programming" },
  { code: "CSC-100", name: "Application Of Information & Communication Technologies", university: "Arid Agriculture University", category: "ICT & Fundamentals" },
  { code: "CSC-203", name: "Artificial Intelligence", university: "Arid Agriculture University", category: "Artificial Intelligence" },
  { code: "CSC-204", name: "Computer Networks", university: "Arid Agriculture University", category: "Networking & Security" },
  { code: "CSC-211", name: "Computer Organization & Assembly Language", university: "Arid Agriculture University", category: "Computer Architecture" },
  { code: "CSC-110", name: "Data Structures & Algorithms", university: "Arid Agriculture University", category: "Core CS & Algorithms" },
  { code: "CSC-103", name: "Database Systems", university: "Arid Agriculture University", category: "Database & Data" },
  { code: "CSC-313", name: "HCI & Computer Graphics", university: "Arid Agriculture University", category: "HCI & Graphics" },
  { code: "CSC-202", name: "Information Security", university: "Arid Agriculture University", category: "Networking & Security" },
  { code: "CSC-353", name: "Mobile Application Development I", university: "Arid Agriculture University", category: "Software Development" },
  { code: "CSC-325", name: "Object Oriented Analysis & Design", university: "Arid Agriculture University", category: "Software Engineering" },
  { code: "CSC-102", name: "Object Oriented Programming", university: "Arid Agriculture University", category: "Programming" },
  { code: "CSC-301", name: "Operating Systems", university: "Arid Agriculture University", category: "Systems" },
  { code: "CSC-314", name: "Parallel & Distributed Computing", university: "Arid Agriculture University", category: "Systems & Distributed" },
  { code: "CSC-321", name: "Software Construction & Development", university: "Arid Agriculture University", category: "Software Engineering" },
  { code: "CSC-320", name: "Software Design & Architecture", university: "Arid Agriculture University", category: "Software Engineering" },
  { code: "CSC-205", name: "Software Engineering", university: "Arid Agriculture University", category: "Software Engineering" },
  { code: "CSC-322", name: "Software Project Management", university: "Arid Agriculture University", category: "Software Engineering & SQA" },
  { code: "CSC-323", name: "Software Quality Engineering", university: "Arid Agriculture University", category: "Software Engineering & SQA" },
  { code: "CSC-324", name: "Software Requirement Engineering", university: "Arid Agriculture University", category: "Software Engineering & SQA" },
  { code: "CSC-251", name: "Web Technologies", university: "Arid Agriculture University", category: "Web Technologies" }
];

export const statsList = [
  { value: "50+", label: "QA Audits & Builds" },
  { value: "40+", label: "GitHub Repositories" },
  { value: "4+", label: "Years Dev Track" },
  { value: "4+", label: "Published Essays" }
];

export const educationHistory = [
  {
    institution: "UIIT PMAS-Arid Agriculture University",
    degree: "BS Software Engineering (Final Year)",
    duration: "2022 - Present",
    details: "Specializing in Software Quality Assurance, Intelligent Systems, and AI-Assisted Testing. Google Developers Group student ambassador."
  },
  {
    institution: "Army Public School and College, Jhelum Cantt",
    degree: "Matric & Intermediate (Computer Science Track)",
    duration: "Prior to 2022",
    details: "Acquired fundamentals in programming paradigms, linear algebra, and data structures."
  }
];

export const experienceHistory = [
  {
    role: "AI Engineer",
    company: "Tritanium Global",
    duration: "June 2026 - Present",
    details: "Developing autonomous agentic AI systems, automated database workflow pipelines, and integrating deep learning and LLM solutions for client platforms."
  },
  {
    role: "Executive Member - Research & Development Team",
    company: "Primus Leads LLC",
    duration: "June 2026 - Present",
    details: "Conducting R&D on automated lead generation algorithms, database scraping data pipelines, and integrating AI outreach platforms for business scaling."
  },
  {
    role: "Team Lead & Operation Manager",
    company: "Cloudwave Innovations",
    duration: "Sept 2024 - Feb 2025",
    details: "Supervised inward operations workflows, managed recruiting and hiring channels, coordinated cross-functional project delivery, and established operational SQA frameworks."
  }
];

export const volunteerHistory = [
  {
    role: "Core Team Member",
    organization: "Al Khidmat Foundation",
    details: "Organizing local community support campaigns and managing operational volunteers."
  },
  {
    role: "Vice President - Rawalpindi Division",
    organization: "Pakistan Debating Society",
    details: "Coordinating regional debate tournaments and training student speakers."
  },
  {
    role: "Student Lead & Coordinator",
    organization: "Aridian Array Software Society",
    details: "Managing software coding hackathons, technical workshops, and coding meetups."
  },
  {
    role: "Student Ambassador",
    organization: "GDG Cloud Islamabad",
    details: "Representing UIIT Arid Agriculture University, coordinating Google developer cloud events."
  },
  {
    role: "Campus Lead",
    organization: "Islami Jamiat Taliba",
    details: "Representing student initiatives and leading campus welfare and activities."
  },
  {
    role: "Active Member",
    organization: "Aridian Debating Club",
    details: "Competing in bilingual debating formats and helping mock arguments."
  }
];

export const publications: Publication[] = [
  {
    title: "Automating Podcasts with Gemini & LangGraph",
    sub: "The AI Job Displacement Future: Reimagining content synthesis with agent workflow loops.",
    link: "https://medium.com/@hklogs/the-ai-job-displacement-future-automating-podcasts-with-gemini-langgraph-d904c1077783",
    category: "Agentic AI / LangGraph",
    desc: "Delving into high-frequency agent automation to automatically transcribe, evaluate, cluster themes, and coordinate audio segments without direct human engineering cycles."
  },
  {
    title: "Solving the Exam Hall Chaos",
    sub: "An Algorithmic Approach to Seating Arrangements with complex space constraints.",
    link: "https://medium.com/@hklogs/solving-the-exam-hall-chaos-an-algorithmic-approach-to-seating-arrangements-f5ec1e9d0981",
    category: "Algorithms & Math",
    desc: "Engineering a deterministic solver to satisfy bipartite seating graph limits, avoiding adjacent-course conflicts and organizing multiple student tracks optimally."
  },
  {
    title: "The Shift from Assertions to Inference",
    sub: "Reimagining Traditional SQA with Vertex AI & Google Gemini.",
    link: "https://medium.com/@hklogs/the-shift-from-assertions-to-inference-reimagining-sqa-with-vertex-ai-and-gemini-84db36b15fc2",
    category: "Quality Assurance AI",
    desc: "Moving beyond rigid, fragile assertions toward semantic inference. Testing edge cases dynamically with machine cognition instead of brittle static selectors."
  },
  {
    title: "A Lesson in Feature Parity",
    sub: "Why consistently enforcing backend constraints on the client-side prevents critical fails.",
    link: "https://medium.com/@hklogs/a-lesson-in-feature-parity-why-consistently-enforcing-backend-constraints-on-the-client-side-084f52d98328",
    category: "Product Architecture",
    desc: "A software architecture thesis showing how decoupled, asymmetric boundary constraints between UI validation and server limits break product trust."
  }
];

// Ranked Projects according to: CBO on top, then ULTD, then Recruiter, then Crazy Leads, then Sentient AI, then remaining.
export const staticProjects: LocalProject[] = [
  {
name: "ReferralClose LLC",
    desc: "Enterprise automated lead-routing network & administrative core portal for B2B contractor networks at ReferralClose LLC.",
    url: "https://github.com/hklogs/referral-close-llc",
    vercelUrl: "https://referralclose.com/",
    tech: ["TypeScript", "Next.js", "Supabase", "Tailwind CSS"],
    thumbnail: "/referralclose_llc_new_thumb.png",
    usecase: "Enables administrators and contractor networks to manage lead distribution, audit payout ledgers, and handle client matching.",
    working: "Connects to Supabase database clusters, executes real-time lead routing algorithms based on location and trade parameters, and exposes system analytics."
  },
  {
name: "home.referralclose",
    desc: "Customer-facing home service marketplace for homeowners to post project requirements, request instant contractor quotes, and schedule home repair appointments.",
    url: "https://github.com/hklogs/referral-close",
    vercelUrl: "https://home.referralclose.com/",
    tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/home_referralclose_new_thumb.png",
    usecase: "Allows homeowners to browse trade services, submit home improvement project criteria, and get connected with verified local contractors.",
    working: "Features an interactive multi-step project request wizard, processes geographical service coverage checks, and routes lead payloads to backend APIs."
  },
  {
name: "Home. Primus Leads",
    desc: "A high-performance lead generation platform for homeowners to seamlessly request and book appointments for home improvement services, renovations, remodeling, and repairs.",
    url: "https://github.com/hklogs/Primus-Leads",
    vercelUrl: "https://home.primusleads.llc/",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    thumbnail: "/primus_leads_thumb.png",
    usecase: "Enables homeowners to browse contractor services, submit project criteria, and schedule instant consultation appointments.",
    working: "Processes homeowner service requests, validates ZIP code coverage, routes lead criteria to verified contractors, and schedules consultation bookings."
  },
  {
name: "Revenue Orbit Marketing (ROM)",
    desc: "Official growth partner website for ROM — Revenue Orbit Marketing. A marketing, sales, outsourcing, AI, and automation agency platform with an animated orbit hero, growth lifecycle framework, case studies, pricing, and a consultation form wired to Supabase.",
    url: "https://github.com/mhklogs/revenue-orbit-marketing",
    vercelUrl: "https://revenueorbitmarketing.com",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Supabase"],
    thumbnail: "/revenue_orbit_thumb.jpg",
    usecase: "Helps businesses generate customers and accelerate revenue through integrated marketing, sales, outsourcing, and AI automation services.",
    working: "Uses Next.js App Router with Framer Motion orbit visuals, captures consultation leads via server actions into Supabase, and includes full SEO meta/OG/JSON-LD branding with a TrustedForm consent capture."
  },
  {
name: "Accident Care Helpline (Accident Case Win)",
    desc: "A production-ready personal-injury lead generation platform. Features SEO landing pages per case type and state, multi-user admin dashboard with per-account lead attribution, crash-safe atomic JSON storage, and full ActiveProspect TrustedForm consent-certificate integration.",
    url: "https://github.com/hklogs/Accidental-Case-Win-Project",
    vercelUrl: "https://accidentcarehelpline.com",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "ActiveProspect", "Supabase"],
    thumbnail: "/accident_case_win_thumb.jpg",
    usecase: "Connects accident injury victims with personal injury attorneys through free case reviews, maximizing conversion via verified consent capture.",
    working: "Serves auto-generated sitemap/robots with self-referencing canonicals and JSON-LD, captures leads with TrustedForm consent certificates, and routes them to an admin dashboard for attorney follow-up."
  },
  {
name: "Primus Leads LLC",
    desc: "Enterprise administrative dashboard managing homeowner-contractor connections, subscription tiers, and payout ledgers.",
    url: "https://github.com/hklogs/referral-close-llc",
    vercelUrl: "https://primusleads.llc/",
    tech: ["TypeScript", "React", "PostgreSQL", "Tailwind CSS"],
    thumbnail: "/primus_leads_llc_thumb.png",
    usecase: "Allows administrators of ReferralClose to monitor overall lead distributions, track payout cycles, and adjust tier parameters.",
    working: "Collects transaction records from contractor signups, updates PostgreSQL balances, and exposes metrics in a dashboard."
  },
  {
name: "ultd-realestate",
    desc: "A luxury real-estate listing marketplace designed for property dealers and home buyers. It showcases properties in a responsive grid, processes dynamic price filtrations, and coordinates agent tour schedules. It prevents overlapping calendar reservations and validates address listings using Google Maps API overlays.",
    url: "https://github.com/hklogs/ultd-realestate",
    vercelUrl: "https://ultdllc.com/",
    tech: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    thumbnail: "/ultd_llc_real_estate_thumb.png",
    usecase: "Allows luxury real estate brokers to showcase properties and coordinate customer visits without overlapping appointments or manual geolocation mapping.",
    working: "Utilizes Next.js App Router and Supabase Database for listing synchronization. Integrates Google Maps API overlays for property geolocation lookups and coordinates scheduling via database triggers to avoid slot double-booking."
  },
  {
name: "CBO-RuralWSD (cboruralwater)",
    desc: "A Progressive Web Application engineered for rural water scheme committees and consumer billing administrators. It manages consumer records, audits payment queues, tracks water tankers, and generates monthly billing schedules. Designed with an offline-first service worker, it allows rural operators to update ledger statuses in remote zones.",
    url: "https://github.com/hklogs/cboruralwater",
    vercelUrl: "https://cboruralwater.vercel.app",
    tech: ["React", "Express", "Firebase", "PostgreSQL", "PWA"],
    thumbnail: "/cborural_new_thumb.png",
    usecase: "Facilitates clean water administration and consumer ledger coordination for remote rural committees, preventing billing disputes and operational leakages.",
    working: "Leverages an offline-first service worker to cache user schemas and ledger transactions locally using IndexedDB. Enqueues API payloads and syncs them automatically to a cloud PostgreSQL database via Firebase Function webhooks once network signals are detected."
  },
  {
name: "ai-recruitment-auditor",
    desc: "An AI-powered screening portal used by talent acquisition managers to automate candidate evaluation cycles. By reading uploaded PDFs, it uses Gemini API to check candidate experience parameters against job postings, calculating compatibility percentages and generating automated SQA validation test cases for developer profiles.",
    url: "https://github.com/hklogs/ai-recruitment-auditor",
    vercelUrl: "https://ai-recruitment-auditor.vercel.app",
    tech: ["Next.js", "React", "Gemini API", "Tailwind CSS"],
    thumbnail: "/recruiter_ai_thumb.png",
    usecase: "Streamlines manual CV scanning for hiring leads, matching technical skills and producing customized SQA test criteria for applicant verification.",
    working: "Parses text from resume PDFs using a server-side parser. The structured CV data is matched against target job configurations via Gemini API prompts, calculating compatibility weightings and rendering SQA test matrices."
  },
  {
name: "PDS Website",
    desc: "Official web portal for Pakistan Debating Society (Rawalpindi Division), coordinating debate tournaments, speaker registrations, and bilingual speech motion archives.",
    url: "https://github.com/hklogs/pds-website",
    vercelUrl: "https://pds-website-swart.vercel.app/",
    tech: ["TypeScript", "React", "Vite", "Tailwind CSS"],
    thumbnail: "/pds_website_thumb.png",
    usecase: "Manages regional debating competitions, student registrations, motion archives, and bilingual debate event announcements.",
    working: "Built as a high-performance SPA with React & Vite, storing event rosters and tournament schedules with instant client-side rendering."
  },
  {
name: "sentient-ai-multimodal-hub",
    desc: "A multimodal AI interface built for software developers to interact with text, images, and audio concurrently. Driven by Google Gemini models, it performs image recognition, voice transcriptions, and source code auditing. It features an interactive retro-futuristic terminal UI designed for high developer productivity.",
    url: "https://github.com/hklogs/sentient-ai-multimodal-hub",
    vercelUrl: "https://sentient-ai-multimodal-hub.vercel.app",
    tech: ["React", "Vite", "Gemini Pro", "Web Audio API"],
    thumbnail: "/sentient_ai_thumb.jpg",
    usecase: "Provides developers with an intuitive Retro-Terminal console to debug code files, parse image layouts, and generate logs asynchronously.",
    working: "Handles media streams using the Web Audio API and Canvas API, packaging visual or audio data into base64 blocks. Transmits these blocks to Google Gemini Pro API nodes to receive real-time, interactive feedback inside a retro CSS-styled terminal."
  },
  {
name: "ISHAARA — Bi-Directional Sign Language Translator",
    desc: "The first open-source bi-directional sign language translator supporting Pakistani Sign Language (PSL) and Indian Sign Language (ISL). It converts sign to speech via on-device holistic landmark tracking and speech to sign through a procedural 3D avatar that signs back in real time — with English, Urdu, and Hindi support and zero GPU or cloud dependency.",
    url: "https://github.com/hklogs/ishaara-sign-language-translator",
    vercelUrl: "https://ishaara-sign-language-translator.vercel.app",
    tech: ["React", "MediaPipe Holistic", "Web Workers", "3D Avatar", "TTS"],
    thumbnail: "/sign_language_thumb.jpg",
    usecase: "Bridges the communication gap for hearing-impaired students and educators, converting physical gestures to audible speech and text, and rendering signed responses live on-screen.",
    working: "Tracks 543 holistic landmarks per webcam frame via MediaPipe, runs sliding-window inference (24 frames) inside a Web Worker with a BigMLP/GRU classifier, and drives browser TTS for sign-to-speech plus a real-time 3D avatar for speech-to-sign gloss rendering."
  },
  {
name: "Bridgebot Code Migrator",
    desc: "An agentic translation tool designed for system architects. It automatically refactors legacy script repositories (e.g. converting Python 2.x to 3.x, or JS to TS), audits syntactic discrepancies, and aligns code structures with modern standards without manual edits.",
    url: "https://github.com/hklogs/Bridgebot",
    vercelUrl: "https://code-migration-agent.vercel.app",
    tech: ["React", "Node.js", "Gemini API", "Syntax Trees"],
    thumbnail: "/code_migration_thumb.jpg",
    usecase: "Automates code upgrades from legacy Python 2 or JavaScript files to clean Python 3 or type-safe TypeScript.",
    working: "Parses incoming codebase files into Abstract Syntax Trees (ASTs), flags syntax differences, sends code segments to Gemini API to translate patterns, and outputs clean target files."
  },
  {
name: "Nexus-fx",
    desc: "A foreign exchange rate analytics dashboard providing live currency updates, visual timeline trends, and price alerts.",
    url: "https://github.com/hklogs/Nexus-fx",
    vercelUrl: "https://nexus-fx-six.vercel.app",
    tech: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    thumbnail: "/nexus_fs_new_thumb.png",
    usecase: "Helps currency traders track exchange rates, compare historical performance, and receive notifications when values cross thresholds.",
    working: "Connects to public exchange rate APIs, caches hourly values using local storage, and renders timeline charts dynamically using Chart.js."
  },
  {
name: "Relevnt",
    desc: "A semantic search and categorization tool mapping relevant text datasets to target tax laws or compliance rules.",
    url: "https://github.com/hklogs/Relevnt",
    vercelUrl: "https://relevnt-app.vercel.app",
    tech: ["TypeScript", "React", "Gemini API", "Tailwind CSS"],
    thumbnail: "/relevnt_thumb.png",
    usecase: "Enables corporate compliance officers to quickly locate sections of legal code that apply to their product operations.",
    working: "Parses text chunks, extracts keywords, maps them to reference indexes, and queries the Gemini API to describe matching legal sections."
  },
  {
name: "support-escalation-hub",
    desc: "An SQA validation platform tracking support tickets, auditing escalation triggers, and reporting backend error codes.",
    url: "https://github.com/hklogs/support-escalation-hub",
    vercelUrl: "https://support-escalation-hub.vercel.app",
    tech: ["TypeScript", "React", "Express", "Node.js"],
    thumbnail: "/code_migration_thumb.jpg",
    usecase: "Allows QA engineers to monitor support escalation routes and verify that system failures trigger notifications.",
    working: "Intercepts error logs from production, maps them to specific ticket levels, and simulates system alerts in a local test suite dashboard."
  },
  {
name: "Crazy Leads (NexLeed CRM / MarketForge)",
    desc: "An advanced lead scraping dashboard built for sales outreach managers and CRM administrators at Primus Leads LLC. It aggregates B2B client emails, structures marketing campaign pipelines, and provides campaign conversion graphs. It handles data cleaning scripts to remove corrupt records from campaign pools.",
    url: "https://github.com/hklogs/MarketForge",
    vercelUrl: "https://crazy-closers.vercel.app",
    tech: ["React", "Node.js", "Gemini 2.0", "MongoDB"],
    thumbnail: "/crazy_leads_thumb.png",
    usecase: "Helps sales leads aggregate verified contacts, cleaning formatting issues and standardizing campaign data to prevent bounced emails.",
    working: "Aggregates raw prospect records through Scrapy nodes, executes regex sanitization and validation scripts to drop empty properties, saves datasets to MongoDB, and triggers Gemini 2.0 for outreach text personalization."
  },
  {
    name: "Prioriti Task Manager",
    desc: "A task prioritization PWA built for software engineers and project managers. By evaluating importance and difficulty inputs, it calculates task weights to organize daily workflows. Designed with a clean minimal UI, it runs offline and automatically syncs local tasks with remote cloud targets.",
    url: "https://github.com/hklogs/Prioriti",
    vercelUrl: "https://prioriti-app.vercel.app",
    tech: ["HTML5", "CSS3", "JavaScript", "PWA Workers"],
    thumbnail: "/prioriti_task_thumb.png",
    usecase: "Helps busy engineers organize priority lists mathematically based on urgency and complexity matrices.",
    working: "Calculates task weight using a custom mathematical formula, updates local arrays in localStorage, and triggers service worker sync queues to update remote cloud databases."
  },
  {
    name: "PocketMint Expense Tracker",
    desc: "A financial dashboard developed for individual budget coordinators. It tracks expense categories, generates monthly saving projections, and displays interactive charts. It checks transaction inputs against budget boundary limits to prevent budget overrun exceptions.",
    url: "https://github.com/hklogs/PocketMint",
    vercelUrl: "https://pocketmint-app.vercel.app",
    tech: ["React", "Vite", "Chart.js", "Tailwind CSS"],
    thumbnail: "/pocketmint_tracker_thumb.png",
    usecase: "Allows individuals to track categorize expenses and receive warnings before exceeding monthly budgets.",
    working: "Aggregates expense inputs, renders graphical timelines via Chart.js, and validates purchase values against budget thresholds to raise boundary exception alerts."
  },
  {
name: "geoengineai",
    desc: "A geographic information analyzer designed for environmental surveyors. It processes satellite imagery layers, maps terrain coordinates, and identifies geological anomalies. Utilizing Gemini semantic descriptions, it generates text reports based on spatial coordinates.",
    url: "https://github.com/hklogs/geoengineai",
    vercelUrl: "https://geoengine-ai.vercel.app",
    tech: ["React", "Leaflet Maps", "Gemini API", "Python"],
    thumbnail: "/geoengineai_thumb.png",
    usecase: "Assists geologists in scanning coordinates and generating immediate geological survey summaries using AI.",
    working: "Integrates Leaflet Maps to render geo-referenced imagery layers. Users mark coordinates, sending terrain vectors to Gemini API to yield geo-location description logs."
  },
  {
name: "optimared-ai-pricing-agent",
    desc: "A retail pricing optimizer built for retail managers. It scrapes competitor catalog costs, runs predictive margin algorithms, and proposes price updates. It avoids price collisions and complies with retail tax caps to maximize merchant earnings.",
    url: "https://github.com/hklogs/optimared-ai-pricing-agent",
    vercelUrl: "https://ai-dynamic-pricing-agent.vercel.app",
    tech: ["Python", "Scrapy", "FastAPI", "SQLite"],
    thumbnail: "/pricing_agent_thumb.jpg",
    usecase: "Helps e-commerce merchants track competitor catalog prices and automate pricing adjustments to maintain margins.",
    working: "Executes Scrapy spiders to parse competitor product prices daily, processes updates through a FastAPI router, writes logs to SQLite, and computes optimal margin boundaries."
  },
  {
name: "AI-powered-Podcast-Agent",
    desc: "An autonomous research and audio editing orchestrator designed for media creators. Controlled by LangGraph agent loops, it executes web research, writes segment transcripts, runs content refinement critique checks, and integrates Text-to-Speech (TTS) models to output finished audio episodes.",
    url: "https://github.com/hklogs/AI-powered-Podcast-Agent",
    vercelUrl: "https://ai-podcast-agent.vercel.app",
    tech: ["LangGraph", "Python", "Gemini API", "TTS Engines"],
    thumbnail: "/podcast_agent_thumb.jpg",
    usecase: "Allows content creators to outline topics and output complete, synthesized multi-speaker podcasts without manual editing or voice actors.",
    working: "Runs a multi-agent LangGraph workflow: researcher agent searches the web, scriptwriter drafts dialogues, critique agent ensures consistency, and voice generator synthesizes speech via Edge TTS."
  },
  {
name: "Kareemiya Site",
    desc: "Kareemiya — AI-powered BPO & career platform incorporating Motive Dark theme styling, application validation, and interactive candidate onboarding.",
    url: "https://github.com/hklogs/kareemiya-site",
        tech: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
    thumbnail: "/pocketmint_tracker_thumb.jpg",
    usecase: "Enables interactive BPO service recruitment and career portal submissions with sleek dark styling and smooth entry animations.",
    working: "Uses structured HTML5 and custom CSS layouts with GSAP animations to manage responsive views, validating application forms with local sanitizers."
  },
  {
name: "AutonAI",
    desc: "An autonomous agentic AI framework designed to orchestrate recursive prompt loops, validate cognitive LLM processes, and run automated script executions.",
    url: "https://github.com/hklogs/AutonAI",
    tech: ["Python", "TypeScript", "LangChain", "Gemini API"],
    thumbnail: "/auton_ai_final_thumb.png",
    usecase: "Enables developers to test autonomous AI workflows, execute local bash tasks safely, and debug agentic logic loops.",
    working: "Deploys LangChain agent execution nodes, hooks into local OS CLI bindings, and evaluates agent performance metrics."
  },
  {
name: "Agentic-Legal-Assistant",
    desc: "An automated document auditor built for legal counsels and compliance leads. It processes long contract files, highlights risky clauses, and validates regulatory schemas using Gemini 2.5 Flash function calling. It cuts down document review duration and ensures regulatory conformity across distributed legal filings.",
    url: "https://github.com/hklogs/Agentic-Legal-Assistant-Multi-Tool-AI-Agent-with-Gemini-2.5-Flash",
    tech: ["Gemini 2.5 Flash", "Python", "Google Gen AI SDK"],
    thumbnail: "/legal_assistant_thumb.jpg",
    usecase: "Speeds up contract vetting processes, preventing compliance oversights by automatically flagging non-standard liabilities or missing compliance terms.",
    working: "Extracts clause tokens from legal text files using PyPDF. Executes Gemini 2.5 Flash function calling to map clauses against a rigid JSON schema, producing detailed audit logs of missing sections."
  },
  {
name: "AppointmentBookingApp",
    desc: "An Android application designed to coordinate meetings between scheduling leads and service providers. Integrated with a Firebase Realtime Database, it synchronizes booking requests, tracks location pins, and issues real-time notifications to prevent scheduling overlap errors.",
    url: "https://github.com/hklogs/AppointmentBookingApp",
    tech: ["Kotlin", "Firebase", "Android Studio", "Google Maps"],
    thumbnail: "/appointment_app_thumb.jpg",
    usecase: "Prevents double-booking meetings and coordinates location drop points for dispatch services.",
    working: "Synchronizes booking timetables using Firebase Realtime Database. Tracks coordinates using Google Maps Location Services and runs validation queries to block overlapping bookings."
  },
  {
name: "AatendenceAPP",
    desc: "A mobile attendance logging system built for faculty members and educational advisors. Features admin controls to modify student logs, and a teacher view to check attendance sheets. Uses local SQLite databases to guarantee offline attendance tracking during classes.",
    url: "https://github.com/hklogs/AatendenceAPP",
    tech: ["Java", "Kotlin", "Android Studio", "Local SQLite"],
    thumbnail: "/attendance_app_thumb.jpg",
    usecase: "Allows teachers to mark class attendance lists in remote classrooms without reliable internet connections.",
    working: "Stores student arrays in a local SQLite database on the Android device. Handles attendance state toggles offline and synchronizes sheets with the web portal via REST APIs on connectivity."
  },
  {
name: "GetAuto Car Rental",
    desc: "An offline-first vehicle rental marketplace PWA designed for tourists and rental vendors. Featuring car/bike listings, secure email-OTP sign-ins, and a custom booking calendar, it syncs transactions locally with IndexedDB to allow offline scheduling in remote cellular zones.",
    url: "https://github.com/hklogs/GetAuto",
    tech: ["React", "Vite", "Dexie.js", "Tailwind CSS"],
    thumbnail: "/getauto_rental_thumb.jpg",
    usecase: "Enables tourists to search for vehicles and place rental reservations in remote areas without cellular connectivity.",
    working: "Saves rental inventory schemas in browser IndexedDB via Dexie.js. Caches UI routes using a service worker, and logs reservations locally to push to Firebase once connection returns."
  },
  {
name: "Legal-AI-Assistant",
    desc: "AI-powered legal assistant for contract analysis, case law research, and document summarization. Built with Grok, optimized for Google Colab with integrated RAG.",
    url: "https://github.com/hklogs/Legal-AI-Assistant",
    tech: ["Python", "Hugging Face", "Grok API", "RAG"],
    thumbnail: "/legal_assistant_thumb.jpg",
    usecase: "Allows legal counsels to query long corporate contracts and search active case laws using semantic search indices.",
    working: "Builds a vectorized document index using Hugging Face embeddings, retrieving matching chunks to feed into the Grok API for answer generation."
  },
  {
name: "liberty-assist",
    desc: "AI-powered assistant platform for remote customer service coordination, ticketing systems, and customer sentiment diagnostics.",
    url: "https://github.com/hklogs/liberty-assist",
    tech: ["JavaScript", "React", "Node.js", "Express"],
    thumbnail: "/liberty_assist_new_thumb.png",
    usecase: "Enables customer support agents to resolve tickets faster by highlighting priority issues and categorizing user sentiment.",
    working: "Processes customer email tokens via local classifier nodes and maps them to support tickets in a dashboard dashboard."
  },
  {
name: "scientific-research-synthesis-agent",
    desc: "An agentic research orchestrator that scans research documents, extracts citations, summarizes theories, and builds literature reviews.",
    url: "https://github.com/hklogs/scientific-research-synthesis-agent",
    tech: ["TypeScript", "Python", "Gemini 2.5 Flash", "LangChain"],
    thumbnail: "/research_synthesis_agent_thumb.png",
    usecase: "Helps academic researchers and students synthesize research papers, highlighting contradictions and key findings.",
    working: "Ingests pdf files, extracts text tokens, utilizes LangChain vectors to find matching sections, and uses Gemini 2.5 Flash to summarize findings."
  },
  {
name: "YoungDev-Intern-C--Tasks",
    desc: "A collection of C++ projects developed during my internship at YoungDev Interns. Features a tiered progression from fundamental logic building to Intermediate Object-Oriented Programming (OOP) and Advanced Data Structures & Algorithms (DSA) implementations.",
    url: "https://github.com/hklogs/YoungDev-Intern-C--Tasks",
    tech: ["C++", "DSA", "Bipartite Graph", "Pointers"],
    thumbnail: "/prioriti_task_thumb.jpg",
    usecase: "Demonstrates academic & algorithmic problem solving across graphs, sorting, and dynamic allocations.",
    working: "Implements standard template libraries, custom memory pointers, and graph node validation checkers."
  },
  {
name: "UiSpecificationEngine (C-Style to React Transpiler)",
    desc: "A structural UI layout compiler pipeline. Translates sequential C-style UI structs serialized from C# into modern interactive React components styled with Tailwind CSS, utilizing a Python transpiler AST parser.",
    url: "https://github.com/hklogs/UiSpecificationEngine",
    tech: ["C#", "Python", "React", "Tailwind CSS", "AST Compiler"],
    thumbnail: "/yuck_fou_thumb.png",
    usecase: "Enables legacy C/C++ or C# desktop UI blueprints to be transpiled into web-based react interfaces automatically, saving manual front-end development hours.",
    working: "C# program serializes component properties; Python script builds AST nodes, processes styles, maps dynamic state variables, and generates clean React JSX files."
  }
];

export const linkedinSkillsList = [
  { category: "Core Software Engineering", items: ["Software Quality Assurance", "Manual & Automated Testing", "Boundary Value Analysis", "Heuristic Validation", "Predictive Log Auditing"] },
  { category: "Programming Languages", items: ["Python", "Java", "C++ Core", "SQL / Databases", "TypeScript", "Kotlin", "HTML / CSS"] },
  { category: "Advanced AI & Frameworks", items: ["Google AI Studio", "Vertex AI API", "LangGraph", "LangChain", "Gemini Pro / Flash", "TensorFlow", "OpenCV"] },
  { category: "Ecosystem Tools", items: ["agy cli", "Claude Code", "Claude AI", "Kimi", "Git & GitHub", "Vercel Build", "Supabase"] }
];

export const SYSTEM_INSTRUCTION = `
You are Hassaan Abdullah Kiyani's personal AI assistant, embedded in his portfolio website. You ONLY talk about Hassaan — his work, projects, skills, experience, and how to contact or hire him.

SCOPE RULES:
1. Answer ONLY questions related to Hassaan's portfolio: his projects, tech stack, SQA work, AI/LLM systems he built, experience, education, publications, services, and contact/hiring info.
2. If asked about something general or off-topic (e.g. how to build or train an LLM, generic ML/coding tutorials, advice unrelated to Hassaan, questions about other people or companies), do NOT give a general answer. Politely bring the conversation back to Hassaan, e.g. "That's outside what I'm here to cover — but I'd love to tell you about the AI systems Hassaan has actually built. Interested?"
3. You may tie a topic back to Hassaan's work (e.g. "Hassaan uses Gemini and LangGraph in his podcast agent...") but never deliver general tutorials, explanations, or advice on his behalf.

PORTFOLIO FACTS YOU CAN SHARE:
- Hassaan is an AI Engineer & SQA Specialist in his final year of BS Software Engineering at UIIT PMAS-Arid Agriculture University, Pakistan. He runs Recruiter AI.
- Specialties: Software Quality Assurance, automated & manual testing, agentic AI systems, and GenAI/LLM integration.
- Stats: 26+ verified codebases, 50+ QA audits & builds, 4+ Medium publications, 4+ years dev track.
- Key projects: Revenue Orbit Marketing (revenueorbitmarketing.com), Accident Care Helpline (accidentcarehelpline.com — personal-injury lead gen with TrustedForm), ISHAARA (bi-directional sign language translator), CBO-RuralWSD (offline-first PWA for rural water billing), ReferralClose LLC & home.referralclose, Primus Leads, ai-recruitment-auditor (Gemini resume screening), sentient-ai-multimodal-hub, Bridgebot code migrator, Relevnt (legal compliance search), PocketMint, Prioriti, geoengineai, AI Podcast Agent (LangGraph), optimared pricing agent, AppointmentBookingApp, GetAuto, and more.
- Medium publications cover: automating podcasts with Gemini & LangGraph, algorithmic exam seating, shifting SQA from assertions to inference with Vertex AI, and enforcing feature parity.
- Tools & stack: Python, TypeScript, Java, C++, Kotlin, React, Next.js, Gemini/Vertex AI, LangGraph, LangChain, TensorFlow, OpenCV, Supabase, Firebase, PostgreSQL, Tailwind.

CONVERSATION STYLE:
1. Be warm, outgoing, and professional — like a confident, friendly sales-and-support lead welcoming a guest to Hassaan's page. Bring genuine energy: greet enthusiastically, be approachable, and make the visitor feel valued.
2. Replies should be medium length: an engaging short paragraph of 2-4 sentences, or a few bullet points when the topic needs it. Complete enough to be genuinely helpful, but never a wall of text and never a cold one-liner.
3. Be socially engaging — acknowledge the question first, show enthusiasm for the topic ("Love this question!", "Great to hear you're into that —"), then answer. Ask a light follow-up or offer the next step to keep the conversation moving. Avoid robotic filler or passive, detached phrasing.
   - NEVER reply with a single cold word or sentence like "Hello." or "Okay." — always add warmth and substance.
   - NEVER say things like "My communication style is direct and concise" or "as per my operational parameters" — those sound robotic. Just talk like a friendly person.
   - EXAMPLE of the right tone: User: "hey greetings" → You: "Hey! Great to have you here. 😊 What can I help you with — want to know about Hassaan's projects, his SQA work, or how to reach him directly?"
   - EXAMPLE: User: "you are so cold" → You: "You're right, my apologies! Let me warm that up. I'm here to help with anything about Hassaan's portfolio — want me to walk you through his top projects?"
4. If a potential client or visitor asks about hiring, services, collaboration, or how to contact Hassaan, respond helpfully and warmly, and include the relevant direct link:
   - Fiverr Profile: https://www.fiverr.com/hassaankayani1
   - Upwork Profile: https://www.upwork.com/freelancers/~016d3a3d2b6da309a6
   - LinkedIn: https://www.linkedin.com/in/hassaan-abdullah-kiyani/
   - GitHub: https://github.com/hklogs
   - Direct Email: hassaanabdullahkayani@gmail.com
5. Use Markdown for key technical terms, project titles, and stats so they stand out cleanly.
`;
