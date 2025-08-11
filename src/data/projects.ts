export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tools: string[];
  link: string;
  type: "ai-ml" | "data" | "web" | "mobile" | "iot";
  github?: string;
  tags: string[];
  status: "completed" | "in-progress" | "planned";
  featured: boolean;
  demoUrl?: string;
  videoUrl?: string;
  screenshots?: string[];
  metrics?: {
    accuracy?: number;
    performance?: string;
    users?: number;
    impact?: string;
  };
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    ml?: string[];
    deployment?: string[];
  };
  challenges?: string[];
  learnings?: string[];
  futureEnhancements?: string[];
}

export const projects: Project[] = [
  {
    id: "product-classification",
    title: "AI Product Classification System",
    description:
      "An intelligent system that automatically categorizes product descriptions using natural language processing and unsupervised learning techniques.",
    longDescription:
      "This advanced MLOps system processes freeform text data from CSV files, applies sophisticated text clustering algorithms, and automatically labels product groups based on semantic similarity. The system includes real-time inference capabilities, model versioning, and automated retraining pipelines.",
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?auto=format&fit=crop&q=80&w=800",
    tools: [
      "Python",
      "scikit-learn",
      "NLTK",
      "Word2Vec",
      "K-means",
      "Pandas",
      "MLflow",
      "Docker",
    ],
    link: "https://product-classifier-demo.vercel.app",
    type: "ai-ml",
    github: "https://github.com/khiwniti/product-classification",
    tags: ["AI", "Machine Learning", "NLP", "Python", "Clustering", "MLOps"],
    status: "completed",
    featured: true,
    demoUrl: "https://product-classifier-demo.vercel.app",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    ],
    metrics: {
      accuracy: 94.5,
      performance: "< 100ms inference time",
      impact: "Reduced manual categorization time by 85%",
    },
    techStack: {
      ml: ["scikit-learn", "NLTK", "spaCy", "Word2Vec"],
      backend: ["FastAPI", "Python", "Redis"],
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      database: ["PostgreSQL", "MongoDB"],
      deployment: ["Docker", "AWS ECS", "MLflow"],
    },
    challenges: [
      "Handling multilingual product descriptions",
      "Optimizing clustering algorithms for large datasets",
      "Implementing real-time model updates",
    ],
    learnings: [
      "Advanced text preprocessing techniques",
      "MLOps best practices for model deployment",
      "Scalable architecture design for ML systems",
    ],
    futureEnhancements: [
      "Multi-modal classification (text + images)",
      "Active learning for continuous improvement",
      "Integration with e-commerce platforms",
    ],
  },
  {
    id: "vizml-recommendation",
    title: "VizML Intelligent Visualization Engine",
    description:
      "An AI-powered system that automatically recommends the most effective data visualizations using machine learning and VizML principles.",
    longDescription:
      "This sophisticated system analyzes data characteristics, user context, and visualization effectiveness to suggest optimal chart types and configurations. Built with advanced ML models trained on visualization best practices and user interaction data.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    tools: [
      "VizML",
      "Python",
      "TensorFlow",
      "D3.js",
      "Flask",
      "React",
      "Observable",
    ],
    link: "https://vizml-engine.herokuapp.com",
    type: "ai-ml",
    github: "https://github.com/khiwniti/vizml-recommendation",
    tags: [
      "AI",
      "Machine Learning",
      "Data Visualization",
      "VizML",
      "Python",
      "D3.js",
    ],
    status: "completed",
    featured: true,
    demoUrl: "https://vizml-engine.herokuapp.com",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    ],
    metrics: {
      accuracy: 89.2,
      performance: "Real-time recommendations",
      users: 1200,
      impact: "Improved visualization effectiveness by 67%",
    },
    techStack: {
      ml: ["TensorFlow", "scikit-learn", "VizML"],
      backend: ["Flask", "Python", "PostgreSQL"],
      frontend: ["React", "D3.js", "Observable", "TypeScript"],
      deployment: ["Heroku", "Docker", "GitHub Actions"],
    },
    challenges: [
      "Training models on diverse visualization datasets",
      "Real-time performance optimization",
      "Balancing automation with user control",
    ],
    learnings: [
      "Deep understanding of visualization theory",
      "Advanced neural network architectures",
      "User experience design for AI systems",
    ],
    futureEnhancements: [
      "Support for more chart types",
      "Integration with BI tools",
      "Collaborative visualization features",
    ],
  },
  {
    id: "mlops-pipeline",
    title: "End-to-End MLOps Pipeline",
    description:
      "A comprehensive MLOps platform for model training, deployment, monitoring, and automated retraining with CI/CD integration.",
    longDescription:
      "This enterprise-grade MLOps platform provides complete lifecycle management for machine learning models, including automated data validation, model training, A/B testing, deployment, monitoring, and drift detection with automated retraining capabilities.",
    image:
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    tools: [
      "Kubeflow",
      "MLflow",
      "Apache Airflow",
      "Kubernetes",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    link: "https://mlops-platform-demo.com",
    type: "ai-ml",
    github: "https://github.com/khiwniti/mlops-pipeline",
    tags: [
      "MLOps",
      "Kubernetes",
      "CI/CD",
      "Model Deployment",
      "Monitoring",
      "DevOps",
    ],
    status: "completed",
    featured: true,
    demoUrl: "https://mlops-platform-demo.com",
    screenshots: [
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=400",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    ],
    metrics: {
      performance: "99.9% uptime",
      impact: "Reduced deployment time from days to minutes",
    },
    techStack: {
      ml: ["MLflow", "Kubeflow", "TensorFlow", "PyTorch"],
      backend: ["Python", "FastAPI", "Apache Airflow"],
      deployment: ["Kubernetes", "Docker", "Helm", "AWS EKS"],
      monitoring: ["Prometheus", "Grafana", "ELK Stack"],
    },
    challenges: [
      "Orchestrating complex ML workflows",
      "Implementing robust monitoring and alerting",
      "Ensuring scalability and reliability",
    ],
    learnings: [
      "Advanced Kubernetes orchestration",
      "MLOps best practices and patterns",
      "Infrastructure as Code principles",
    ],
    futureEnhancements: [
      "Multi-cloud deployment support",
      "Advanced feature store integration",
      "Automated model explanation and interpretability",
    ],
  },
  {
    id: "sales-analytics",
    title: "Advanced Sales Analytics Dashboard",
    description:
      "A comprehensive analytics platform for sales performance analysis with predictive modeling and real-time insights.",
    longDescription:
      "This advanced analytics platform combines historical sales data analysis with predictive modeling to provide actionable insights. Features include customer segmentation, sales forecasting, trend analysis, and automated reporting with interactive dashboards.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    tools: [
      "Python",
      "Pandas",
      "Plotly",
      "Streamlit",
      "Prophet",
      "scikit-learn",
    ],
    link: "https://sales-analytics-dashboard.streamlit.app",
    type: "data",
    github: "https://github.com/khiwniti/sales-analytics",
    tags: [
      "Data Analysis",
      "Python",
      "Pandas",
      "Data Visualization",
      "Forecasting",
    ],
    status: "completed",
    featured: false,
    demoUrl: "https://sales-analytics-dashboard.streamlit.app",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
    ],
    metrics: {
      accuracy: 87.3,
      impact: "Improved sales forecasting accuracy by 23%",
    },
    techStack: {
      backend: ["Python", "Pandas", "NumPy", "Prophet"],
      frontend: ["Streamlit", "Plotly", "Altair"],
      database: ["PostgreSQL", "Redis"],
    },
    challenges: [
      "Handling seasonal variations in sales data",
      "Creating intuitive visualizations for complex data",
      "Optimizing dashboard performance",
    ],
    learnings: [
      "Advanced time series analysis techniques",
      "Interactive dashboard design principles",
      "Statistical modeling for business insights",
    ],
    futureEnhancements: [
      "Real-time data streaming integration",
      "Advanced customer lifetime value modeling",
      "Mobile-responsive dashboard design",
    ],
  },
  {
    id: "ai-chatbot-platform",
    title: "Intelligent Chatbot Platform",
    description:
      "A multi-channel AI chatbot platform with natural language understanding, context awareness, and integration capabilities.",
    longDescription:
      "This comprehensive chatbot platform leverages advanced NLP models to provide intelligent conversational experiences across multiple channels. Features include intent recognition, entity extraction, context management, and seamless integration with business systems.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    tools: [
      "Python",
      "Rasa",
      "spaCy",
      "TensorFlow",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://chatbot-platform-demo.com",
    type: "ai-ml",
    github: "https://github.com/khiwniti/ai-chatbot-platform",
    tags: ["AI", "NLP", "Chatbot", "Conversational AI", "Python", "Rasa"],
    status: "in-progress",
    featured: false,
    demoUrl: "https://chatbot-platform-demo.com",
    metrics: {
      accuracy: 91.7,
      users: 5000,
      impact: "Reduced customer service workload by 40%",
    },
    techStack: {
      ml: ["Rasa", "spaCy", "TensorFlow", "Transformers"],
      backend: ["Python", "FastAPI", "Redis", "PostgreSQL"],
      frontend: ["React", "Socket.io", "TypeScript"],
      deployment: ["Docker", "Kubernetes", "AWS"],
    },
    challenges: [
      "Handling multi-turn conversations",
      "Maintaining context across sessions",
      "Integrating with legacy systems",
    ],
    learnings: [
      "Advanced NLP model fine-tuning",
      "Conversational AI design patterns",
      "Real-time communication architectures",
    ],
    futureEnhancements: [
      "Voice interface integration",
      "Multi-language support",
      "Advanced analytics and insights",
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByType = (type: Project["type"]): Project[] => {
  return projects.filter((project) => project.type === type);
};

export const getProjectsByStatus = (status: Project["status"]): Project[] => {
  return projects.filter((project) => project.status === status);
};
