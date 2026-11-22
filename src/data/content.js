const content = {
  "nav": {
    "items": [
      "About",
      "Experience",
      "Projects",
      "Skills",
      "Contact"
    ]
  },
  "hero": {
    "name": "Hoang Chu",
    "tagline": "Computer science, mathematics, and machine learning.",
    "phrases": [
      "machine learning",
      "software engineering",
      "mathematics"
    ],
    "statusBadges": [
      "Computer Science · Mathematics · Statistics",
      "Pitzer College & Claremont Graduate University"
    ]
  },
  "about": {
    "bio": "I'm Hoang Chu, pursuing a combined bachelor’s and master’s in Computer Science, Mathematics, and Statistics at Pitzer College and Claremont Graduate University.\n\nMy experience spans business AI agents at Adobe, storage systems at Intercontinental Exchange, and front-end engineering at Periwinkle Trading. My projects include open-source course scheduling, retrieval-augmented generation, and an FPL injury-news monitoring project.\n\nGPA: 3.963 undergraduate · 4.0 graduate."
  },
  "experience": {
    "entries": [
      {
        "company": "Adobe Inc",
        "role": "Machine Learning Engineer Intern · Business AI Agent Team",
        "date": "May – August 2026 · Seattle, WA",
        "bullets": [
          "Built a centralized prompt retrieval and management service integrating Langfuse for generative creative workflows.",
          "Implemented conversation summarization using Claude AI and trained SentenceTransformers for intent and entity extraction to normalize semantically equivalent advertiser prompts.",
          "Developed an MCP server with GraphQL integration for persistent LLM memory CRUD operations and structured assistant state.",
          "Built automated LLM evaluation infrastructure with Langfuse and GitHub Actions to test MCP tools and prompt variations for behavioral regressions."
        ]
      },
      {
        "company": "Intercontinental Exchange",
        "role": "Software Engineer Intern · Storage Team",
        "date": "June – August 2025 · Atlanta, GA",
        "bullets": [
          "Developed inventory-based stale-object cleanup for a multi-cloud financial data platform, reconciling AWS S3 and Azure Blob inventory snapshots against application metadata.",
          "Replaced exhaustive prefix scans with inventory-based discovery and scheduled reconciliation tasks.",
          "Engineered a distributed deletion pipeline with rate limiting and bounded worker queues to control concurrency and memory consumption.",
          "Parallelized deletion-task enqueueing with multithreading and batched queue writes."
        ]
      },
      {
        "company": "Periwinkle Trading",
        "role": "Software Engineer Intern · Front-End",
        "date": "January – May 2024 · Washington, DC",
        "bullets": [
          "Implemented role-based access control in NestJS with authorization middleware and audit logging for protected research endpoints.",
          "Built MongoDB aggregation pipelines for trading and signal events, integrating Redis caching to support near-real-time research dashboards.",
          "Designed a Python library for repeatable Jupyter execution using a versioned compute DAG, dependency invalidation, memoization, and topological scheduling."
        ]
      }
    ]
  },
  "projects": {
    "entries": [
      {
        "title": "Hyperschedule",
        "subtitle": "Open Source Contributor · 2023–2025",
        "description": "Contributed to a full-stack course search platform aggregating data from five university APIs. Built an asynchronous API client and weighted round-robin load balancer, designed PostgreSQL read replicas with asynchronous replication, and wrote a BeautifulSoup scraper with a custom snapshot queue to address periodically missing values.",
        "tech": [
          "Python",
          "BeautifulSoup",
          "PostgreSQL",
          "Async APIs",
          "Load Balancing"
        ],
        "metrics": "Used by 4,163 of 6,000 students; 4,500+ requests/hour; 60% lower primary database load.",
        "link": null
      },
      {
        "title": "RAG Law Partner",
        "subtitle": "Independent Project · 2025",
        "description": "Built a retrieval-augmented legal assistant using the OpenAI API and a vector database for semantic search over 10,000+ law documents. Added user-rating feedback to refine retrieval and ranking, and optimized chunking with sliding windows and semantic boundaries to preserve legal context.",
        "tech": [
          "OpenAI API",
          "RAG",
          "Vector Search",
          "Text Chunking"
        ],
        "link": null
      },
      {
        "title": "Fantasy Premier League Player Recommendation",
        "subtitle": "Independent Project · 2026",
        "description": "Developed an automated agent to monitor football injury news, identify affected players, and estimate their probability of missing upcoming matches to inform Fantasy Premier League player recommendations.",
        "tech": [
          "News Extraction",
          "LLM Agents",
          "Probabilistic Modeling",
          "Fantasy Premier League"
        ],
        "link": null
      },
      {
        "title": "ImageBERT Dataset Pipeline",
        "subtitle": "Distributed ML Data Infrastructure",
        "description": "Developed a distributed web-scraping prototype in Go to generate webpage screenshots paired with token bounding boxes for visual language-model pretraining. Implemented leader–worker URL assignment over RPC, concurrent headless Chrome scraping, and DOM Range-based token localization. Added screenshot-based text visibility checks, CSV annotation export, and Python/OpenCV tools to inspect generated samples.",
        "tech": [
          "Go",
          "RPC",
          "chromedp",
          "JavaScript",
          "Python",
          "OpenCV"
        ],
        "link": null
      }
    ]
  },
  "awards": {
    "entries": []
  },
  "skills": {
    "categories": [
      {
        "label": "Programming Languages",
        "color": "yellow",
        "items": [
          "Python",
          "C++",
          "SQL",
          "Java",
          "JavaScript",
          "TypeScript"
        ]
      },
      {
        "label": "Data & Machine Learning",
        "color": "mint",
        "items": [
          "BeautifulSoup",
          "PySpark",
          "PyTorch",
          "PostgreSQL"
        ]
      },
      {
        "label": "Software & Infrastructure",
        "color": "peach",
        "items": [
          "Django",
          "Flask",
          "Docker",
          "Kubernetes",
          "REST APIs",
          "React",
          "Git"
        ]
      },
      {
        "label": "Coursework",
        "color": "yellow",
        "items": [
          "Probability & Statistics",
          "Linear & Real Analysis",
          "Machine Learning",
          "Deep Learning",
          "NLP",
          "Computer Systems",
          "Data Structures & Algorithms",
          "Generative AI"
        ]
      }
    ]
  },
  "contact": {
    "email": "harrychu301@gmail.com",
    "github": "https://github.com/Renaxis-Math",
    "linkedin": "https://linkedin.com/in/harryc223",
    "inviteLine": "Let’s connect about machine learning, software engineering, mathematics, or a project you’re working on."
  }
};

export default content;
