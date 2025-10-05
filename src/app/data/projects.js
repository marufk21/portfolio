import snapstack from "../assets/snapstack.jpg";
import vibesta from "../assets/vibesta.jpg";
import streamtalk from "../assets/streamtalk.jpg";
import electrikart from "../assets/electrikart.png";
import infinichat from "../assets/infinichat.jpg";
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
      "Developed a production-grade app with Prisma ORM (data modeling), Cloudinary (media storage), and PostHog (analytics), delivering a responsive UI with dark mode for enhanced usability.",
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
      "Engineered a real-time video conferencing platform with HD video, live chat, and screen-sharing features, supporting 10+ concurrent users with latency under 200ms.",
      "Upgraded the full infrastructure from Next.js 7 → 15, enhancing load performance by 35% and reducing build times for faster deployments.",
      "Integrated WebRTC and PeerJS to enable peer-to-peer connections, improving call stability and video quality across sessions.",
      "Optimized Socket.IO auto-reconnect logic, cutting reconnection delays by 20s and improving average session uptime by 25%.",
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
    id: 4,
    title: "ElectriKart",
    link: "https://electrikart.netlify.app",
    github: "https://github.com/marufk21/ElectriKart",
    description: [
      "Built an e-commerce platform with advanced product filtering, dynamic search, and responsive product listing UI.",
      "Designed detailed product pages with reviews, availability, and pricing features for better purchase decisions.",
      "Integrated cart management with real-time subtotal and shipping updates, enhancing checkout experience.",
    ],
    skills: ["ReactJS", "Hooks", "Context API", "React Router"],
    image: electrikart,
  },
  {
    id: 5,
    title: "InfinityChat",
    link: "https://main--infinichat.netlify.app/",
    github: "https://github.com/marufk21/InfiniChat",
    description: [
      "Developed an AI chatbot app with real-time messaging, leveraging Gemini API for intelligent conversational experiences.",
      "Crafted a modern and responsive chat UI with Tailwind CSS for seamless mobile and desktop usability.",
      "Implemented dynamic chat sessions improving user engagement and message response accuracy.",
    ],
    skills: ["ReactJS", "Tailwind CSS", "Gemini API", "Chatbot"],
    image: infinichat,
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
