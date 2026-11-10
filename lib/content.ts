export type ProjectCategory = "AI & Agents" | "Backend" | "Distributed Systems";

export interface SocialLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  role: string;
  location: string;
  status: string;
  introduction: string;
  email: string | null;
  linkedIn: string | null;
  github: string;
  resumePath: string | null;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  detail?: string;
}

export interface SkillGroup {
  title: string;
  description: string;
  skills: string[];
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  category: ProjectCategory;
  secondaryCategories: ProjectCategory[];
  summary: string;
  problem: string;
  role: string;
  impact: string;
  metric: string;
  metricLabel: string;
  stack: string[];
  architecture: string[];
  sections: Array<{ title: string; body: string }>;
}

export const profile: Profile = {
  name: "Vinh Duy Le",
  role: "Backend & AI Engineer",
  location: "Santa Clara, California",
  status: "Open to backend, AI engineer, and software engineer roles",
  introduction:
    "I build reliable agentic systems and production backend services — from LLM tool orchestration to event-driven search infrastructure.",
  email: "leduyvinh91@gmail.com",
  linkedIn: "https://www.linkedin.com/in/vinhduyle",
  github: "https://github.com/VinhDuyLe",
  resumePath: "/vinh-le-resume.pdf",
};

export const resumeAnswers = [
  {
    keywords: ["ai", "agent", "llm", "mcp", "gemini", "planner"],
    answer: "Vinh builds production agentic systems with MCP, Google ADK, OneTwo, Gemini, typed tool contracts, asynchronous dispatch, tracing, and fallback handling.",
  },
  {
    keywords: ["backend", "java", "spring", "api", "microservice"],
    answer: "Vinh brings five-plus years of backend experience across Java, Spring Boot, Python, FastAPI, secure REST APIs, microservices, and production reliability patterns.",
  },
  {
    keywords: ["distributed", "kafka", "search", "elasticsearch", "scale"],
    answer: "Vinh has built Kafka-based data pipelines, Elasticsearch search under 50 milliseconds, and decoupled service integrations that reduced synchronization latency by 90%.",
  },
  {
    keywords: ["test", "quality", "reliable", "reliability"],
    answer: "Vinh has delivered 100-plus unit and integration tests, 90% test coverage, resilient remote calls, structured error handling, and centralized trace logging.",
  },
  {
    keywords: ["education", "degree", "school", "university"],
    answer: "Vinh earned an MS in Computer Science from Santa Clara University with a 3.8 GPA and also holds a Bachelor of Economics.",
  },
  {
    keywords: ["role", "job", "hire", "available", "looking"],
    answer: "Vinh is actively exploring backend engineer, AI engineer, and software engineer opportunities where dependable systems and applied AI meet.",
  },
  {
    keywords: ["contact", "email", "reach"],
    answer: "You can reach Vinh directly at leduyvinh91@gmail.com or connect with him on LinkedIn.",
  },
];

export const projects: Project[] = [
  {
    slug: "test-automation-ai-assistant",
    index: "01",
    title: "Test Automation AI Assistant",
    eyebrow: "Developer tooling · Professional case study",
    category: "AI & Agents",
    secondaryCategories: ["Backend"],
    summary:
      "An MCP-powered assistant embedded directly in VS Code, bringing code explanation and automated test generation into the active developer workflow.",
    problem:
      "Developers needed AI-assisted test workflows without losing context by moving between their editor and a browser-based tool.",
    role: "Software Engineer — MCP integration and backend protocol implementation",
    impact: "Eliminated browser-based context switching for supported developer workflows.",
    metric: "IDE-native",
    metricLabel: "developer workflow",
    stack: ["Python 3", "MCP", "Google ADK", "JSON-RPC 2.0", "AsyncIO", "Pytest"],
    architecture: ["VS Code", "Coding Agent", "MCP Server", "Tool Executors"],
    sections: [
      {
        title: "The challenge",
        body: "The existing assistant experience lived outside the editor. That separation forced developers to move code and context between tools, interrupting the task they were trying to complete.",
      },
      {
        title: "Protocol boundary",
        body: "I implemented an MCP server supporting standardized capability discovery and invocation. The boundary let the coding agent discover tools dynamically while keeping execution logic within the backend.",
      },
      {
        title: "Reliable invocation",
        body: "The request pipeline serializes JSON-RPC messages, validates tool arguments, routes payloads to internal executors, and returns structured failures. AsyncIO keeps tool execution non-blocking while Pytest coverage exercises protocol and error paths.",
      },
    ],
  },
  {
    slug: "agent-planner",
    index: "02",
    title: "Planner Agent & Tool Orchestration",
    eyebrow: "Agent architecture · Professional case study",
    category: "AI & Agents",
    secondaryCategories: ["Backend"],
    summary:
      "A conversational planner that encapsulates 20 specialized tools behind one stable interface, with asynchronous dispatch, trace logging, and fallback handling.",
    problem:
      "Exposing every backend tool directly increased prompt overhead and tightly coupled the IDE agent to a changing set of tool schemas.",
    role: "Software Engineer — planner, orchestration, and observability",
    impact: "Reduced prompt context token overhead by 20% while isolating the IDE agent from backend schema churn.",
    metric: "20%",
    metricLabel: "less prompt context overhead",
    stack: ["Python 3", "OneTwo", "Gemini API", "Pydantic", "AsyncIO", "JSON Schema"],
    architecture: ["User Intent", "Planner Agent", "Async Dispatcher", "20 Subtools"],
    sections: [
      {
        title: "The orchestration problem",
        body: "A growing tool catalog made the upstream agent responsible for too much schema knowledge. It also consumed context that was better spent understanding the developer's task.",
      },
      {
        title: "One conversational entry point",
        body: "I built the planner with the Google DeepMind OneTwo framework and Gemini APIs. Pydantic models define the planner boundary, while the planner selects and sequences specialized capabilities behind it.",
      },
      {
        title: "Operations by design",
        body: "The dispatch engine executes tools asynchronously and normalizes observations for the planner. Centralized tracing and fallback handling make failures visible and reduce the time needed to isolate tool-level problems.",
      },
    ],
  },
  {
    slug: "event-driven-search",
    index: "03",
    title: "Event-Driven Search Platform",
    eyebrow: "Search infrastructure · Professional case study",
    category: "Distributed Systems",
    secondaryCategories: ["Backend"],
    summary:
      "A book discovery platform combining Spring Boot search, Kafka-based ingestion, Elasticsearch indexing, and asynchronous Python analytics.",
    problem:
      "A growing catalog needed dependable ingestion, fast full-text retrieval, and real-time analytics without coupling each workload into one service.",
    role: "Software Developer — search, streaming ingestion, and analytics services",
    impact: "Delivered robust full-text search with query latency under 50ms.",
    metric: "<50ms",
    metricLabel: "search query latency",
    stack: ["Java", "Spring Boot", "Kafka", "Elasticsearch", "Hibernate Search", "FastAPI", "Pandas"],
    architecture: ["Catalog Producer", "Kafka", "Indexing Consumer", "Elasticsearch"],
    sections: [
      {
        title: "The data path",
        body: "Java producers stream catalog records into Kafka topics. Consumers validate, filter, and batch messages before indexing them into Elasticsearch, separating ingestion throughput from search availability.",
      },
      {
        title: "Search as a service",
        body: "Spring Boot and Hibernate Search connect the domain model to Elasticsearch full-text capabilities while preserving durable persistence through Hibernate ORM.",
      },
      {
        title: "Independent analytics",
        body: "A FastAPI service uses Pandas for book metadata aggregation. Asynchronous event loops and connection pooling support concurrent requests without placing analytics work on the primary search path.",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "AI systems",
    description: "Agents that plan, call tools, and fail visibly.",
    skills: ["MCP", "Google ADK", "OneTwo", "Gemini API", "LLM orchestration", "Pydantic"],
  },
  {
    title: "Backend",
    description: "Services built around explicit contracts and operational clarity.",
    skills: ["Java", "Python", "Spring Boot", "FastAPI", "REST", "JSON-RPC", "SQL"],
  },
  {
    title: "Distributed systems",
    description: "Asynchronous data flows designed for scale and recovery.",
    skills: ["Kafka", "Elasticsearch", "Redis", "PostgreSQL", "Docker", "Kubernetes", "AWS", "GCP"],
  },
];

export const experience: Experience[] = [
  {
    company: "Quanta Manufacturing",
    role: "Software Engineer",
    location: "Fremont, CA",
    period: "Feb 2026 — Present",
    summary: "Building IDE-integrated AI assistance and agent orchestration infrastructure.",
    highlights: [
      "Integrated a test automation AI assistant into VS Code using MCP.",
      "Built standardized tool discovery, invocation, and JSON-RPC request handling.",
      "Developed a planner that encapsulates 20 subtools and reduces context overhead by 20%.",
    ],
  },
  {
    company: "Frugal Innovation Hub",
    role: "Software Developer",
    location: "Santa Clara, CA",
    period: "Jun 2024 — Jan 2026",
    summary: "Developed search, streaming ingestion, and analytics services for a book platform.",
    highlights: [
      "Delivered Spring Boot and Elasticsearch search with latency under 50ms.",
      "Built Kafka producers and consumers for validated, batch-indexed catalog ingestion.",
      "Created an asynchronous FastAPI analytics service with Pandas.",
    ],
  },
  {
    company: "OpenKnect Inc",
    role: "Software Engineer Intern",
    location: "Maryland",
    period: "Mar 2023 — Sep 2023",
    summary: "Improved microservice resilience and test confidence.",
    highlights: [
      "Applied Resilience4j circuit breakers, retries, and rate limiters to remote calls.",
      "Built 100+ unit and integration tests across five services, reaching 90% coverage.",
    ],
  },
  {
    company: "Khanh Loi JSC",
    role: "Software Engineer",
    location: "Vietnam",
    period: "Jan 2020 — May 2022",
    summary: "Built secure service APIs and asynchronous integrations for hospitality platforms.",
    highlights: [
      "Developed 20+ Spring Boot REST APIs with JWT security and Swagger documentation.",
      "Connected booking and discovery services through Kafka and Protobuf, reducing synchronization latency by 90%.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Santa Clara University",
    degree: "Master of Science, Computer Science",
    period: "Aug 2022 — Jan 2025",
    detail: "GPA 3.8",
  },
  {
    school: "University of Economics Ho Chi Minh City",
    degree: "Bachelor of Economics",
    period: "Sep 2009 — May 2013",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
