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
    link: "#",
    github: "https://github.com/marufk21",
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
      "Built a real-time video conferencing platform with HD video, live chat and supporting 10+ concurrent users with latency under 200ms.",
      "Upgraded infra from Next.js 7 → 15 for enhanced performance and maintainability.",
      "Optimized real-time reliability by implementing Socket.IO auto-reconnect, reducing reconnection delays by 20s and enhancing user experience.",
    ],
    skills: ["Next.js", "Aceternity UI", "PeerJS", "WebRTC"],
    image: streamtalk,
  },
  {
    id: 3,
    title: "Vibesta",
    link: "https://vibesta.onrender.com",
    github: "https://github.com/marufk21/Vibesta",
    description: [
      "A social media app allows users to sign up, log in, and access personalized features. They can share photos, create profiles, and interact with content through likes and comments in a dynamic feed of posts from people they follow.",
      "It also includes real-time chat messaging for seamless communication with friends and profile customization options, such as updating personal details and profile pictures.",
    ],
    skills: [
      "MERN Stack",
      "axios",
      "shadcn UI",
      "sockets",
      "bcrypt",
      "jwt-tokens",
    ],
    image: vibesta,
  },
  {
    id: 4,
    title: "Electrikart",
    link: "https://electrikart.netlify.app",
    github: "https://github.com/marufk21/ElectriKart",
    description: [
      "An Ecommerce Store with an interactive UI, including carousels and product cards. The Products Page has a sidebar for filtering search results by categories, colors, and price ranges for easy browsing.",
      "Each Single Product Page offers detailed information on functionality, images, descriptions, reviews, and availability.",
      "The Cart Page displays items in the user's cart, including images, prices, quantities, subtotal, and shipping fees, with options to remove items or clear the cart. The Contact Page allows users to provide feedback or file complaints, ensuring effective communication.",
    ],
    skills: ["ReactJS", "Hooks", "Context-API", "React-Router"],
    image: electrikart,
  },
  {
    id: 5,
    title: "InfinityChat",
    link: "https://main--infinichat.netlify.app/",
    github: "https://github.com/marufk21/InfiniChat",
    description: [
      "Infinitychat is an AI chatbot application designed to offer seamless messaging with a modern user interface. Key features include real-time messaging, an attractive user-friendly design, and enhanced functionality through Gemini API integration, ensuring an engaging and efficient chat experience for users.",
    ],
    skills: ["ReactJS", "Tailwind-CSS", "Gemini-API", "Chatbot"],
    image: infinichat,
  },
  {
    id: 6,
    title: "F1-Extension",
    link: "https://github.com/marufk21/F1-Racing-Extension",
    github: "https://github.com/marufk21/F1-Racing-Extension",
    description: [
      "F1 Racing Extension is a browser extension for Formula 1 enthusiasts that provides real-time updates about the races, including race results, schedules, and more. This extension enhances the F1 experience by offering up-to-date information directly in your browser.",
    ],
    skills: ["ReactJS", "Chrome Extensions", "JavaScript"],
    image: f1extension,
  },
];

export default projects;
