// Edit your content here. Components read from this file.
export const SITE = {
  name: "BIGDAMMY TECH",
  tagline: "We Build. You Grow.",
  email: "bigdammytech0@gmail.com",        // TODO: your business email
  whatsapp: "+2348153318725",              // TODO: number with country code, no + or spaces
  formspreeId: "xbggggyv",
  portfolio: "https://bigdammy-tech.github.io",
  socials: [
    ["GitHub", "https://github.com/bigdammy-tech"],
    ["LinkedIn", "https://www.linkedin.com/in/azizat-usman-20a4553a5"],
    ["Instagram", "https://www.instagram.com/i_am_bigdammy"],
    ["TikTok", "https://tiktok.com/@__bigdammy_"],
    ["X", "https://x.com/bigdammy686"],
  ],                        // TODO: optional, e.g. "xyzabcde" from formspree.io
};

export const SERVICES = [
  { title: "Website development", text: "Business websites, online stores, portfolios, landing pages and company sites." },
  { title: "Web and mobile apps", text: "Apps that help people and businesses manage their work." },
  { title: "Backend and API development", text: "Databases, logins, business systems and APIs built on Java Spring Boot." },
  { title: "UI/UX design", text: "Clean, attractive screens that are easy to use." },
  { title: "Hosting and maintenance", text: "Deployment, updates, bug fixes and ongoing technical support." },
];

// Each project can have "live" (working site) and/or "github" (source code) links.
export const PROJECTS = [
  {
    title: "AriJuDam AI",
    text: "Our own AI chatbot with accounts, saved chats, file and image upload, voice input and read-aloud. In development.",
    tech: ["React", "Vite", "FastAPI"],
  },
  {
    title: "LaptopHarbor",
    text: "A Flutter shopping app for laptops: browse, compare and buy, with cart, checkout, order tracking, wishlist and search filters.",
    tech: ["Flutter", "Dart", "Provider"],
    live: "https://laptop-harbor-fultter.onrender.com",
    github: "https://github.com/bigdammy-tech/laptop-harbor-fultter",
  },
  {
    title: "Ejire Cosmetics",
    text: "A full online store for a beauty reseller: 200+ products, cart, checkout and Paystack payments, with a live backend.",
    tech: ["Spring Boot", "PostgreSQL", "Paystack", "JavaScript"],
    live: "https://ejire-cosmetics.netlify.app",
  },
  {
    title: "Employee Management API",
    text: "A secure backend for managing employees, departments and users, with logins, email notifications and Docker support.",
    tech: ["Java 21", "Spring Boot", "Spring Security", "MySQL", "Docker"],
    github: "https://github.com/bigdammy-tech/employee-java",
  },
  {
    title: "CodeAlpha E-commerce Store",
    text: "A product catalogue, cart and order flow on a Django REST API, built for the CodeAlpha full stack internship.",
    tech: ["Django", "REST Framework", "JavaScript"],
    github: "https://github.com/bigdammy-tech/CodeAlpha_EcommerceStore",
  },
  {
    title: "Responsive Web App",
    text: "A fully responsive web application built on solid HTML, CSS and JavaScript fundamentals.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    live: "https://assistant-4ryeqp8w4-zizats-projects.vercel.app",
  },
  {
  title: "BeautyOfBeaches",
  text: "A single-page guide to famous beaches by zone, with detail pop-ups, a gallery and travel booking flows.",
  tech: ["HTML", "CSS", "JavaScript"],
  live: "https://beautyofbeach.onrender.com",
  github: "https://github.com/bigdammy-tech/YOUR-REPO-NAME",
},
  {
    title: "Spring Boot Demo",
    text: "A REST API with clean controllers, services and repositories, built to show backend structure.",
    tech: ["Java", "Spring Boot", "Maven"],
    github: "https://github.com/bigdammy-tech/springboot-java",
  },
  {
    title: "Developer portfolio",
    text: "The BIGDAMMY TECH portfolio with every project, certifications, experience and a downloadable CV.",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://bigdammy-tech.github.io",
  },
];

export const PROJECT_TYPES = ["Business website", "Online store", "Web or mobile app", "Backend or API", "UI/UX design", "Hosting and maintenance", "Something else"];
export const BUDGETS = ["Under ₦150,000", "₦150,000 – ₦500,000", "₦500,000 – ₦1,500,000", "Above ₦1,500,000", "Not sure yet"];
