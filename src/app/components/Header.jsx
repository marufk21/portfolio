"use client";

import DarkModeToggle from "./dark-mode-toggle";

const Header = () => {
  return (
    <header className="fixed top-6 right-6 z-50">
      <div className="glass rounded-full p-1.5 shadow-lg shadow-black/5">
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
