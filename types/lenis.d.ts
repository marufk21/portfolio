declare global {
  interface Window {
    lenis?: {
      raf: (time: number) => void;
      destroy: () => void;
      scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void;
    };
  }
}

export {};
