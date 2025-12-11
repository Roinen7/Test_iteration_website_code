export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'the-year-of-agents',
    title: 'The year of agents',
    excerpt: 'Last year was widely anticipated to be the year of AI, and it indeed turned out to be the year of...',
    content: `Last year was widely anticipated to be the year of AI, and it indeed turned out to be the year of autonomous AI agents. We saw unprecedented growth in agent-based technologies, with major breakthroughs in multi-step reasoning, tool use, and autonomous decision-making.

The landscape has shifted dramatically. What were once theoretical concepts are now production-ready systems powering real-world applications across industries. From customer service automation to complex data analysis, AI agents have proven their value.

In this post, we'll explore the key trends that defined 2024 in the world of AI agents, the technologies that made them possible, and what we can expect in the coming year.`,
    image: '/blog-agent.jpg',
    date: '2024-12-10',
    category: 'AI & Automation',
  },
  {
    id: '2',
    slug: 'what-should-you-expect-from-ai',
    title: 'What should you expect from AI in the near term?',
    excerpt: 'Many people speak to either underestimate AI by highlighting all the limitations the technology...',
    content: `The hype around artificial intelligence has led to a fascinating dichotomy in expectations. Some view AI as the solution to every problem, while others dismiss it based on current limitations.

The truth, as with most things, lies somewhere in between. Understanding what AI can and cannot do is crucial for making informed decisions about implementation and strategy.

In this comprehensive guide, we'll break down realistic expectations for AI adoption, the timeline for various capabilities, and how to prepare your organization for the AI-driven future.`,
    image: '/blog-ai-expectations.jpg',
    date: '2024-12-05',
    category: 'AI & Automation',
  },
  {
    id: '3',
    slug: 'digitizing-unstructured-accounting-data',
    title: 'Digitizing Unstructured Accounting Data with LLMs',
    excerpt: 'Dealing with unstructured accounting data can be a nightmare, especially when it comes in the form...',
    content: `Unstructured accounting data—invoices, receipts, contracts, and handwritten notes—has long been a challenge for organizations. Manual entry is error-prone and time-consuming, while traditional OCR solutions often struggle with complex documents.

Large Language Models are changing this equation. With their ability to understand context, extract relevant information, and validate data quality, LLMs are revolutionizing how we handle accounting documentation.

This post explores practical approaches to digitizing unstructured accounting data using LLMs, including real-world case studies and implementation best practices.`,
    image: '/blog-accounting.jpg',
    date: '2024-11-28',
    category: 'Business',
  },
  {
    id: '4',
    slug: 'understanding-vector-databases',
    title: 'Understanding Vector Databases for AI',
    excerpt: 'Vector databases have become essential infrastructure for modern AI applications. Learn why...',
    content: `Vector databases are becoming the backbone of modern AI applications. Unlike traditional relational databases, vector databases are optimized for storing and searching high-dimensional vector data.

This shift is fundamental to building scalable, performant AI systems. Whether you're building recommendation systems, semantic search, or RAG applications, understanding vector databases is crucial.

In this deep dive, we'll explore what vector databases are, how they work, when to use them, and a comparison of popular options in the market.`,
    image: '/blog-vectors.jpg',
    date: '2024-11-20',
    category: 'Technology',
  },
  {
    id: '5',
    slug: 'marketing-automation-trends',
    title: 'Marketing Automation Trends in 2024',
    excerpt: 'The marketing automation landscape is evolving rapidly. Discover the trends shaping the industry...',
    content: `Marketing automation has matured significantly. What started as email sequence tools has evolved into comprehensive platforms that power entire customer journeys.

The convergence of AI, data analytics, and real-time personalization is creating new possibilities for marketing teams. Understanding these trends is essential for staying competitive.

This article covers the top marketing automation trends of 2024, including AI-driven personalization, first-party data strategies, and omnichannel automation.`,
    image: '/blog-marketing.jpg',
    date: '2024-11-15',
    category: 'Marketing',
  },
  {
    id: '6',
    slug: 'building-effective-ai-workflows',
    title: 'Building Effective AI Workflows',
    excerpt: 'Not all AI implementations succeed. Learn the key principles for building workflows that deliver...',
    content: `Building effective AI workflows requires more than just deploying a model. Success comes from understanding your business problem, designing the right system architecture, and continuously optimizing based on real-world results.

Many organizations struggle with AI projects because they focus too much on the technology and not enough on the workflow design. This post shares lessons learned from successful implementations.

We'll cover workflow design patterns, integration strategies, monitoring and optimization, and common pitfalls to avoid.`,
    image: '/blog-workflows.jpg',
    date: '2024-11-10',
    category: 'AI & Automation',
  },
];
