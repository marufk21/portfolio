"use client";

import DarkModeToggle from "@/components/ui/dark-mode";

const Header = () => {
  return (
    <header className="fixed top-1 right-4 z-50">
      <div className="glass rounded-full p-1.5 shadow-lg shadow-black/5">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
