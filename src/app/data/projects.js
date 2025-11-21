import snapstack from "../assets/snapstack.png";
import vibesta from "../assets/vibesta.jpg";
import streamtalk from "../assets/streamtalk.jpg";
import f1extension from "../assets/f1extension.png";

// Project data
const projects = [
  {
    id: 1,
    title: "SnapStack",
    link: "https://snackstack-gold.vercel.app/",
    github: "https://github.com/marufk21/snackstack",
    description: [
      "Spearheaded development of an AI-powered note-taking app delivering real-time AI suggestions boosting user productivity by 35% and improving content quality metrics by 40%.",
      "Engineered a robust, scalable SaaS architecture with Stripe integration, implementing multi-tiered pricing (Free/Pro/Enterprise) and secure webhook processing, resulting in 50% increase in subscription conversions.",
      "Developed a production-grade app with Clerk (Authentication), Prisma ORM (data modeling), Cloudinary (media storage), and PostHog (analytics), delivering a responsive UI with dark mode for enhanced usability.",
    ],
    skills: ["React", "shadcn", "Clerk", "PostgreSQL", "OpenAI", "Stripe"],
    image: snapstack,
  },
  {
    id: 2,
    title: "StreamTalk",
    link: "https://stream-talk.vercel.app/",
    github: "https://github.com/marufk21/StreamTalk",
    description: [
      "Built and deployed a real-time video conferencing platform with HD video streaming, live chat, and support for 10+ concurrent users under 200ms latency, leveraging low-latency communication and seamless cross-platform performance.",
      "Upgraded application infra from Next.js 13 → 15 for significantly enhanced performance and maintainability; Optimized real-time reliability by integrating WebRTC with adaptive reconnection and peer recovery mechanisms, reducing connection downtime by 20s and greatly improving user experience.",
    ],
    skills: ["Next.js", "Aceternity UI", "PeerJS", "WebRTC", "Socket.IO"],
    image: streamtalk,
  },
  {
    id: 3,
    title: "Vibesta",
    link: "https://vibesta.onrender.com",
    github: "https://github.com/marufk21/Vibesta",
    description: [
      "Developed a full-featured social media app enabling photo sharing, likes, comments, and personalized feeds for connected users.",
      "Implemented secure authentication, profile customization, and real-time chat for seamless interaction using Socket.io.",
      "Optimized MongoDB queries and API response times, resulting in faster content delivery and smoother user experience.",
    ],
    skills: ["MERN Stack", "axios", "shadcn UI", "Sockets", "bcrypt", "JWT"],
    image: vibesta,
  },
  {
    id: 6,
    title: "F1-Extension",
    link: "https://github.com/marufk21/F1-Racing-Extension",
    github: "https://github.com/marufk21/F1-Racing-Extension",
    description: [
      "Developed a Chrome extension providing real-time Formula 1 race updates, schedules, and results directly in-browser.",
      "Integrated live APIs to fetch up-to-date race data and enhance user engagement during live events.",
      "Optimized extension performance and caching mechanisms to deliver instant data refreshes with minimal bandwidth usage, ensuring a seamless user experience during live race updates.",
    ],
    skills: ["ReactJS", "Chrome Extensions", "JavaScript"],
    image: f1extension,
  },
];

export default projects;
