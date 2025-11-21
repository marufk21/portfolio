import { useCallback } from "react";

/**
 * Custom hook for smooth scrolling to sections
 * Uses Lenis if available, otherwise falls back to native smooth scroll
 */
export const useScrollTo = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Use Lenis if available, otherwise fallback to native scroll
      if (window.lenis) {
        window.lenis.scrollTo(element, { offset: 0, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return scrollToSection;
};
