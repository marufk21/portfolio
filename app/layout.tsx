import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/topbar";

import { SmoothScrollProvider } from "@/components/ui/lenis-scroll";

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
  title: "Maruf Khan",
  description:
    "Full Stack Developer with nearly 2 years of experience building scalable SaaS, AI-powered, and real-time web applications using TypeScript, React.js, Next.js, PostgreSQL, and modern AI tooling.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "AI Engineer",
    "Web Development",
    "SaaS Developer",
  ],
  authors: [{ name: "Maruf Khan" }],
  openGraph: {
    title: "Maruf Khan - Full Stack Developer",
    description:
      "Full Stack Developer specializing in scalable SaaS, AI-powered, and real-time web applications",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <SmoothScrollProvider>
          <Header />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
