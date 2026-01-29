import { images } from "@/public/assets";

export function capitalizeWords(str) {
  if (typeof str !== "string") return "";

  return str
    ?.split(" ")
    ?.map((word) => word?.charAt(0)?.toUpperCase() + word?.slice(1))
    ?.join(" ");
}

export function timeAgo(date) {
  const now = new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1000);

  if (seconds < 60) return "just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;

  const days = Math.floor(hours / 24);
  return `${days} day${days > 1 ? "s" : ""} ago`;
}

export const menu = [
  {
    name: "Dashbaord",
    link: "/admin-dashbaord",
  },
  {
    name: "All Product",
    link: "/admin-dashbaord/all-products",
  },
  {
    name: "Add Product",
    link: "/admin-dashbaord/add-product",
  },
];

export const Mainmenue = [
  "apple",
  "samsung",
  "oppo",
  "huawei",
  "onePlus",
  "google",
  "sony",
];
export const Minitag = [
  "Product Design",
  "UX Design",
  "UI Design",
  "Framer",
  "Interaction Design",
  "Branding",
  "Webflow",
  "UX Research",
  "No-Code",
];

export const FAQ_DATA = [
  {
    question: "What services do you offer?",
    answer:
      "I specialize in web design, branding, UI/UX, and Framer development, creating modern, user-friendly experiences tailored to your needs.",
  },
  {
    question: "Do you provide revisions?",
    answer:
      "Yes! I offer two free rounds of revisions to ensure the final design meets your vision perfectly. Additional revisions are available if needed.",
  },
  {
    question: "How do I start working with you?",
    answer:
      "Simply reach out through my contact page, and we’ll discuss your project, goals, and timeline before getting started.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Pricing depends on the project scope. Contact me for a custom quote based on your needs and budget.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Timelines vary based on project complexity, but most designs take 1–3 weeks, while full websites take 3–6 weeks.",
  },
];

export const projectDetails = [
  {
    heading:"World Tone",
    name: "worldtone",
    title: "Social Networking Platform",
    preview:"",
    descriptions: [
      "Worldtone is a globally distributed social networking ecosystem engineered to support high-volume, real-time interaction between users across different continents. My primary role was designing and building the backend architecture capable of handling millions of concurrent socket connections with minimal latency while ensuring message delivery guarantees, fallback retries, and data consistency across distributed servers.",
      "I developed the complete real-time communication engine using Socket.io with a custom event-pipeline architecture. This system supports one-to-one messaging, group conversations, media transfer, message delivery states, encrypted signaling for video calls, and presence tracking. I also implemented message synchronization logic to ensure conversations remain consistent across multiple user devices.",
      "A core feature of Worldtone is the Tinder-style swipe system combined with intelligent match discovery. I built the geospatial engine using MongoDB’s geo queries to calculate real-time distance between users, apply preferences such as age, gender, and interests, and run a ranking algorithm that optimizes match quality based on engagement signals, recency, and proximity.",
      "The platform includes a full-scale international payments layer. I integrated Stripe, WeChat Pay, and AliPay to support users from Asia, Europe, and the Middle East. I developed secure payment endpoints, webhook listeners for subscription life-cycle events, fraud detection checks, and multi-currency support for purchases and premium features.",
      "The backend maintains large-scale resilience using Node.js, Express, and MongoDB. I implemented optimized data models, compound indexes for high-speed querying, and horizontal scaling strategies. Every endpoint was engineered for high throughput with caching layers, pagination rules, and optimized aggregation pipelines."
    ],
    features: [
      "Video Calling & Real-time Messaging",
      "Nearby Users Discovery (Geo-spatial)",
      "Card Swiping Match System",
      "Advanced User Filtering & Ranking",
      "Stripe, WeChat, and AliPay Payment System"
    ],
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Socket.io",
      "Stripe API",
      "WeChat Pay",
      "AliPay"
    ],
    timeLine: "6 months",
    images: [images.worldtone, "worldtone-2.png", "worldtone-3.png", "worldtone-4.png"]
  },

  {heading:"Yimpy",
    name: "yimpy",
    title: "Design Revision Platform",
    preview:"",
    descriptions: [
      "Yimpy is a collaborative, design-revision and client feedback platform engineered for agencies, freelancers, and creative teams. The system enables clients to upload design files, request unlimited iterations, leave structured feedback, and manage revisions in an organized workflow that preserves full version history.",
      "I architected the backend foundation responsible for tracking every revision request across thousands of projects. The system automatically generates a new version each time a designer uploads or edits a file, attaches metadata, timestamps, comments, and status states such as pending, in review, or completed.",
      "A major component I developed was the multi-threaded feedback structure. Clients can leave detailed comments on each revision, designers can respond, and the platform maintains a chronological thread of discussions. This ensured clarity, prevented miscommunication, and preserved complete design context.",
      "I built endpoints for managing user roles, permissions, authenticated file uploads, and secure asset delivery. The backend validates file types, enforces size limits, and uses streamed uploads for efficient handling of heavy design assets.",
      "Yimpy integrates seamlessly with the frontend, providing real-time updates for revision counts, feedback indicators, and assigned tasks. Using Express and MongoDB, I optimized query performance to ensure that even large revision histories load instantly."
    ],
    features: ["Revision Tracking System", "Design File Versioning", "Advanced Feedback Threads"],
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Figma",
      "Photoshop",
      "Illustrator"
    ],
    timeLine: "2 weeks",
    images: [images.mylink, "yimpy-2.png", "yimpy-3.png", "yimpy-4.png"]
  },

  {heading:"My link",
    name: "mylink",
    title: "Project Consultation Platform",
    preview:"",
    descriptions: [
      "MyLink is a complete consultation and project initiation system designed to streamline onboarding for businesses and clients. The platform guides users through structured workflows that help them define project needs, clarify requirements, schedule meetings, and initiate formal project planning.",
      "I engineered a modular workflow engine that dynamically adjusts based on project category. This includes steps for discovery, requirement gathering, notes, document uploads, meeting preparation, team allocation, and timeline evaluation. Each stage updates automatically as the user progresses.",
      "I also created backend integrations with Zoom and Slack. This allowed users to schedule calls, automatically generate meeting links, receive notifications, and synchronize conversations across communication platforms. The integrations included OAuth, event subscriptions, and API rate-limit handling.",
      "The backend was designed with extensibility and performance as key priorities. Using Express and MongoDB, I structured clean REST APIs capable of supporting future modules such as proposal generation, admin dashboards, and automated suggestions for project planning.",
      "MyLink’s architecture ensures that consultation flows remain fast, reliable, and transparent. Every request is versioned, every step is logged, and project data is indexed for rapid querying and reporting."
    ],
    features: ["Consultation Workflow Engine", "Project Planning APIs", "Integrated Communication System"],
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "React",
      "Next.js",
      "Zoom API",
      "Slack API"
    ],
    timeLine: "Varies",
    images: [images.mylink, "mylink-2.png", "mylink-3.png", "mylink-4.png"]
  },

  {heading:"Price In Pakistan",
    name: "priceinpakistan",
    title: "Pricing & Quote Platform",
    preview:"",
    descriptions: [
      "PriceInPakistan is a full end-to-end pricing, quotation, and product analytics platform developed entirely from the ground up. I built both the backend (Node.js, Express, MongoDB) and the frontend (Next.js) with modern, scalable architecture suited for real-time pricing operations.",
      "A key achievement was developing a dynamic pricing engine capable of adjusting product prices based on category rules, demand patterns, admin logic, and automated algorithms. The engine delivers instant quotations through optimized calculation pipelines, ensuring sub-second response times.",
      "I integrated Stripe and PayPal for secure payments, enabling customers to unlock premium services such as expedited quotations or advanced reports. All transactions are validated using webhook listeners, fraud detection routines, and real-time dashboard updates for users.",
      "The admin panel was built to support full operational control including product management, analytics charts, customer requests, order history, and user roles. Using Next.js server components, ISR, and incremental API caching, the panel provides high-speed navigation.",
      "I engineered the backend with advanced indexing strategies, clean REST structure, and resource caching. This allows efficient data retrieval across thousands of pricing entries and ensures stable performance under high traffic loads."
    ],
    features: [
      "Dynamic Pricing Engine",
      "Instant Quote Generator",
      "Payment Gateway Integration",
      "Admin Dashboard",
      "Customer Role & Permissions System"
    ],
    tools: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "PayPal API",
      "Axios"
    ],
    timeLine: "3 months",
    images: [
      images.priceinpakistan,
      "priceinpakistan-2.png",
      "priceinpakistan-3.png",
      "priceinpakistan-4.png"
    ]
  },

  {heading:"Wise Market",
    name: "wisemarket",
    title: "E-commerce & Marketplace Platform",
    preview:"",
    descriptions: [
      "Wisemarket is a global online marketplace specializing in smartphones, refurbished devices, and consumer electronics. During my internship, I contributed to both frontend and backend development, collaborating in a large, well-structured engineering environment.",
      "On the frontend, I developed fully responsive UI components, product cards, interactive filters, and dynamic page layouts using React, Next.js, and TailwindCSS. These components were modular, reusable, and optimized to fit seamlessly within the existing design system.",
      "On the backend, I integrated and extended APIs for product listings, order management, authentication, cart operations, and real-time notifications. I worked with Node.js and Express to debug performance issues, implement fixes, and improve endpoint reliability.",
      "My contributions also included improving database queries, handling edge cases in product variants, and ensuring that the user experience remained smooth even during large traffic spikes.",
      "This project provided experience with enterprise-level architecture, code reviews, Git workflow, scalable database structures, and real-world collaboration with a senior engineering team."
    ],
    features: [
      "UI Component Development",
      "API Extensions & Integrations",
      "Real-Time Updates",
      "Reusable Component Library",
      "Team-based Development Workflow"
    ],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "Socket.io"
    ],
    timeLine: "1-6 weeks",
    images: [images.wisemarket, "wisemarket-2.png", "wisemarket-3.png", "wisemarket-4.png"]
  }
];

