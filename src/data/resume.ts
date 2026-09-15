// All copy on the site lives here. Every number is taken from the resume PDF in /public.

export const person = {
  name: "Tommy Eastman",
  firstName: "Tommy",
  email: "tommyeastman1@gmail.com",
  linkedin: "https://linkedin.com/in/tommyeastman",
  linkedinLabel: "linkedin.com/in/tommyeastman",
  location: "Asheville, NC",
  resumePath: "/Tommy-Eastman-Resume.pdf",
  headline: "I build the models, the product, and the team behind them.",
  intro:
    "Tommy Eastman. Interim CTO at CleanCart, previously VP of Data Science at Fortegra and first employee at Lokyata.",
  description:
    "Tommy Eastman is a data science and engineering leader: Interim CTO at CleanCart, formerly VP of Data Science at Fortegra and Product & Data Science Director at Lokyata.",
} as const;

export type Stat = {
  value: string;
  /** Numeric part animated by CountUp. Omit for non-numeric values. */
  count?: { end: number; prefix?: string; suffix?: string; decimals?: number };
  label: string;
  source: string;
  tone: "accent" | "ink" | "raised" | "plain";
};

export const stats: Stat[] = [
  {
    value: "$25MM+",
    count: { end: 25, prefix: "$", suffix: "MM+" },
    label: "saved for a $3.3B insurer through AI actuarial models and better loss forecasting",
    source: "Fortegra",
    tone: "accent",
  },
  {
    value: "50%+",
    count: { end: 50, suffix: "%+" },
    label: "lower lender losses from ML underwriting models, with lender ROI up 70%+",
    source: "Lokyata",
    tone: "ink",
  },
  {
    value: "100k+",
    count: { end: 100, suffix: "k+" },
    label: "loan applications a day through the ETL pipeline and analytics stack he designed",
    source: "Lokyata",
    tone: "raised",
  },
  {
    value: "75%",
    count: { end: 75, suffix: "%" },
    label: "less time to develop a model, with a proprietary data prep and feature pipeline",
    source: "Lokyata",
    tone: "plain",
  },
  {
    value: "v1",
    label: "of CleanCart written solo and shipped to the App Store, then a team hired to scale it",
    source: "CleanCart",
    tone: "raised",
  },
];

export type Role = {
  id: string;
  company: string;
  title: string;
  start: string;
  end: string;
  years: string;
  location: string;
  summary?: string;
  bullets: string[];
  /** Number of bullets shown before the "more" disclosure. */
  visible?: number;
  compact?: boolean;
};

export const roles: Role[] = [
  {
    id: "cleancart",
    company: "CleanCart Technologies",
    title: "Interim CTO",
    start: "Jan 2026",
    end: "Present",
    years: "2026",
    location: "Remote",
    summary:
      "Mobile app for ordering healthy groceries with real-time delivery (checkout via Instacart), plus a marketplace of curated health products across 20+ Shopify stores.",
    bullets: [
      "Designed the full tech stack from scratch: database, frontend, backend, product analytics, error monitoring, feature flags, multi-environment infrastructure, and CI/CD.",
      "Wrote all of the v1 code and shipped it to the App Store, then hired and onboarded the development team to scale from there.",
      "Built the full ingredient and product catalog.",
    ],
  },
  {
    id: "fortegra",
    company: "Fortegra",
    title: "Vice President of Data Science",
    start: "Apr 2023",
    end: "Jan 2026",
    years: "2023 to 2026",
    location: "Remote",
    summary:
      "Global specialty insurer providing credit protection, warranty, and specialty insurance, with $3.3B in gross written premium.",
    bullets: [
      "Built AI actuarial models to forecast risk across multiple insurance products; saved $25MM+ through improved pricing accuracy and loss forecasting.",
      "Designed and shipped a self-serve analytics web app used daily by underwriters, actuaries, and claims teams, replacing static reports with on-demand querying and interactive dashboards.",
      "Integrated LLM-powered assistants into ServiceNow for claims: lower average handle time, more consistent adjudication, and relevant policy context surfaced to adjusters in real time.",
      "Architected an end-to-end Databricks data pipeline across multiple source systems, combining Python ETL with ML-based anomaly detection for automated data quality enforcement.",
      "Established DevOps practices with automated regression and end-to-end tests of both the data pipeline and the web app on every commit.",
      "Led cross-functional collaboration across data science, engineering, analytics, underwriting, and claims.",
    ],
    visible: 3,
  },
  {
    id: "lokyata",
    company: "Lokyata",
    title: "Product & Data Science Director",
    start: "Aug 2018",
    end: "Oct 2022",
    years: "2018 to 2022",
    location: "Washington, DC / Remote",
    summary:
      "AI underwriting platform supporting global financial inclusion, serving $40MM+ in decisions a year. Joined as first employee; previously Lead Data Scientist and Machine Learning Engineer.",
    bullets: [
      "Led three products from scratch (an ML platform and two ML scoring products), owning the roadmaps and every product, data science, engineering, QA, DevOps, and infrastructure decision.",
      "Built the data science, engineering, and AWS teams; created the hiring and review process; mentored and led global teams.",
      "Built ML underwriting models for microloans, BNPL, personal, and business loans; reduced losses 50%+ and increased lender ROI 70%+.",
      "Designed the Python ETL pipeline and Snowflake, Tableau, and QuickSight stack processing more than 100k loan applications a day.",
      "Architected a proprietary model development pipeline (data prep, feature engineering, selection, testing) that cut model development time 75%.",
      "Invented TransparentAI for compliance and trust: explanations in under 100ms, faster than leading explainable AI solutions.",
      "Co-created the AWS architecture (CI/CD, deployment, hosting, A/B testing) at 99.9% uptime.",
    ],
    visible: 3,
  },
  {
    id: "dormie",
    company: "Dormie",
    title: "Chief Data Scientist, Software Developer",
    start: "Dec 2017",
    end: "Aug 2018",
    years: "2017 to 2018",
    location: "Washington, DC",
    summary:
      "Competitive golf matchmaking app: players meet through the app, play in person, and climb the leaderboard.",
    bullets: [
      "Designed and implemented the proprietary statistical algorithm that ranks players, with logic for individual matches and group games; owned all data science decisions.",
      "Wrote half of the production React Native codebase (iOS and Android) and reviewed all incoming code.",
      "Co-architected the GraphQL database; co-developed the product roadmap, business model, growth strategy, UX, and design.",
    ],
  },
  {
    id: "ey",
    company: "Ernst & Young",
    title: "Senior Consultant, Quantitative Advisory Services",
    start: "Jul 2015",
    end: "Feb 2018",
    years: "2015 to 2018",
    location: "Tysons Corner, VA",
    summary:
      "Built and validated statistical risk models for large financial institutions, primarily in R.",
    bullets: [
      "Validated a suite of 30+ CCAR credit risk models for a large US bank and presented methodology and recommendations to the client's Model Risk Management committee, including the CRO.",
      "Built an NLP-based Random Forest model on customer complaint data to identify risks; led a five-person team as the client's point of contact.",
      "Built an automated framework for analyzing 100+ credit risk models and led CECL planning discussions with risk executives.",
      "Delivered regular internal trainings on R, NLP, and neural networks to a 30-person team.",
    ],
    visible: 3,
  },
  {
    id: "tutoring",
    company: "Self-employed",
    title: "Private Tutor (Data Science) & PhD Thesis Advisor",
    start: "Feb 2017",
    end: "Present",
    years: "2017 to now",
    location: "Washington, DC / Remote",
    bullets: [
      "Tutor a graduate statistics professor in Python, R, and statistical applications (preprocessing, clustering, dimension reduction, modeling, NLP, optimization); developed curricula for three graduate courses.",
      "Performed all data analysis for a PhD thesis on project management efficacy, building logistic and word2vec NLP models in Python to analyze interview data.",
    ],
    compact: true,
  },
  {
    id: "wellsfargo",
    company: "Wells Fargo",
    title: "Credit Risk Modeling Intern, Mortgage Modeling & Analytics",
    start: "Jun 2014",
    end: "Aug 2014",
    years: "2014",
    location: "Frederick, MD",
    bullets: [
      "Built timing curves for the Severity Model in SAS to improve loss realization forecasting; analyzed the effect of home valuation metrics on a logistic default model.",
    ],
    compact: true,
  },
];

export type SkillGroup = { name: string; items: string[]; /** Render one item per line instead of a comma list. */ multiline?: boolean };

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages & frameworks",
    items: ["Python", "R", "JavaScript", "React", "React Native", "Redux", "SAS", "C#", "C++", "Bash"],
  },
  {
    name: "Machine learning",
    items: [
      "scikit-learn",
      "Keras",
      "PyTorch",
      "TensorFlow",
      "LightGBM",
      "XGBoost",
      "Random Forest",
      "Neural networks",
    ],
  },
  {
    name: "Explainable AI & LLMs",
    items: ["SHAP", "LIME", "PDP", "ICE", "ALE", "Permutation shuffling", "OpenAI", "Anthropic", "Prompt engineering", "RAG"],
  },
  {
    name: "Cloud",
    multiline: true,
    items: [
      "AWS: EC2, S3, RDS, Lambda, API Gateway, ECS, Batch, IAM, CloudFormation",
      "Azure: VMs, Blob Storage, SQL Database, Functions, API Management, Container Apps, Entra ID, Azure ML",
      "System design and security",
    ],
  },
  {
    name: "Data",
    items: ["SQL", "Snowflake", "MongoDB", "Firebase", "GraphQL", "Supabase", "Databricks", "Dataiku"],
  },
  {
    name: "Tooling",
    items: ["Tableau", "QuickSight", "Streamlit", "Fly.io", "Git", "DVC", "GitHub Actions", "CircleCI", "Jenkins"],
  },
];

export const leadership = {
  statement:
    "I build cultures where it's safe to own mistakes and voice feedback, where people feel empowered, and where change, innovation, and evolution are constant.",
  practices: ["Agile development", "Demand, portfolio, and project management", "Hiring and review processes"],
};

export const education = {
  school: "James Madison University",
  degree: "B.S. Quantitative Finance",
  year: "2015",
  detail: "Minors in Mathematics and Economics. Cum Laude.",
  highlights: [
    "Fiduciary for an entirely student-run equity portfolio.",
    "Priced exotic options in C++ using Monte Carlo and Heston simulation.",
    "Built and tested a technical trading strategy in SAS that outperformed buy-and-hold over 30 years.",
    "Private tutor for Economics, Statistics, and Calculus.",
  ],
};

export const volunteering = {
  org: "Teamesteem",
  role: "Data Science Mentor",
  years: "2017 to 2018",
  detail:
    "Teamesteem cultivates conscious, aware, globally minded leaders. Gave presentations on data science, artificial intelligence, and automation.",
};
