import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/topbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maruf Khan - Full Stack Engineer",
  description:
    "Frontend-focused Full Stack Engineer with 1+ years of experience building scalable SaaS and E-commerce applications using TypeScript, React.js, Next.js, and MERN stack.",
  keywords: [
    "Full Stack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Maruf Khan" }],
  openGraph: {
    title: "Maruf Khan - Full Stack Engineer",
    description:
      "Frontend-focused Full Stack Engineer specializing in scalable SaaS and E-commerce applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
