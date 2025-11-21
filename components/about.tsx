"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mb-8 scroll-mt-16 md:mb-12 lg:mb-16 lg:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="sticky top-0 z-20 -mx-4 bg-background/80 backdrop-blur-md px-4 py-3 transition-colors duration-300 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
      >
        <h2
          id="about-heading"
          className="text-2xl font-bold text-foreground font-['Inter']"
        >
          About
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="space-y-6 mt-4"
      >
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm a <span className="text-foreground font-medium">Frontend-focused Full Stack Engineer</span> with 1+ years of
          experience building scalable SaaS and E-commerce applications
          using <span className="text-foreground font-medium">TypeScript, React.js, Next.js, and MERN</span>. Experienced in
          delivering SEO-optimized, high-performance enterprise dashboards
          and web applications while thriving in fast-paced, cross-functional environments.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-bold text-foreground mb-3 font-['Inter'] flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              My Approach
            </h3>
            <p className="text-muted-foreground">
              My expertise lies in building scalable, user-centric, and highly maintainable applications using TypeScript, React.js, Next.js, and the MERN stack. With a strong focus on performance and reliability, I strive to deliver smooth, high-quality user experiences by consistently optimizing application efficiency.
            </p>
          </div>

          <div className="glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <h3 className="text-xl font-bold text-foreground mb-3 font-['Inter'] flex items-center">
              <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
              Continuous Learning
            </h3>
            <p className="text-muted-foreground">
              I am actively exploring AI full-stack development, sharpening my skills with a strong focus on Gen AI technologies. As a curious learner and passionate developer, I enjoy creating side projects that showcase my growth, experiments, and insights in this rapidly evolving space.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/50 to-transparent rounded-xl p-6 mt-8 border border-border/50">
          <h3 className="text-xl font-bold text-foreground mb-3 font-['Inter']">
            Let's Connect!
          </h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new opportunities, creative
            projects, or potential collaborations.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="mailto:marufkhan2002@gmail.com"
              className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-medium text-sm transition-all duration-300 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Me
            </a>
            <a
              href="tel:+918171244560"
              className="inline-flex items-center px-5 py-2.5 bg-transparent border border-border text-foreground font-medium text-sm transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              +91 8171244560
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
