const content = {
  "nav": {
    "items": [
      "About",
      "Experience",
      "Projects",
      "Skills"
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
    "bio": "I'm Hoang Chu, pursuing a combined bachelor’s and master’s in Computer Science, Mathematics, and Statistics at Pitzer College and Claremont Graduate University.\n\nMy experience spans Adobe Express at Adobe, storage systems at Intercontinental Exchange, and backend engineering at Periwinkle Trading. My projects include open-source course scheduling, retrieval-augmented generation, and an FPL injury-news monitoring project.\n\nGPA: 3.963 undergraduate · 4.0 graduate."
  },
  "experience": {
    "entries": [
      {
        "company": "Adobe Inc",
        "role": "Software Engineer Intern · Adobe Express Agentic AI",
        "date": "May – August 2026 · Seattle, WA",
        "bullets": [
          "Built a prompt management service integrating Langfuse, using a Hash Map for environment-specific version resolution and an LRU Cache for prompt retrieval, cutting iteration time by 75% from > 2 hours to ~ 30 minutes.",
          "Fine-tuned SentenceTransformers with contrastive learning and in-batch negatives to retrieve canonical intent-entity pairs via cosine similarity, mapping semantically equivalent advertiser prompts into consistent creative controls.",
          "Engineered an incremental conversation summarization pipeline using Claude Opus API, applying token-budget thresholds and sliding-window context retention to compress older messages across 10,000+ daily conversations.",
          "Implemented persistent agent memory via MCP tools with schema-validated CRUD operations, idempotent writes, and optimistic concurrency control to prevent duplicate or conflicting updates across hourly user preference writes.",
          "Built an automated LLM regression testing framework using Langfuse and GitHub Actions, utilizing bounded asynchronous task queues and concurrent workers to compare prompt versions and validate MCP tool execution."
        ]
      },
      {
        "company": "Intercontinental Exchange",
        "role": "Software Engineer Intern · Storage Infrastructure",
        "date": "June – August 2025 · Atlanta, GA",
        "bullets": [
          "Engineered partitioned Hash Anti-Joins to reconcile AWS S3 and Azure Blob inventory snapshots with active object metadata, replacing exhaustive prefix scans to eliminate 6.8M daily calls and yield $7.84M in annual net savings.",
          "Engineered a distributed deletion pipeline using hierarchical Token Buckets, Semaphores, and Bounded Queues to control request rates, in-flight operations, and memory consumption, supporting cleanup of up to 5 PB/day of data.",
          "Parallelized deletion task enqueueing using Thread Pools and a Producer-Consumer architecture with batched queue writes, eliminating sequential I/O bottlenecks and reducing processing runtime by 66% from 6 hours to 2 hours.",
          "Built Grafana dashboards tracking 20+ operational metrics, including queue depth and deletion throughput, using timestamp-based timeout detection to identify stalled deletion tasks across 1,000,000+ daily cleanup candidates."
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
  }
};

export default content;
