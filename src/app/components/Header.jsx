"use client";

import DarkModeToggle from "./dark-mode-toggle";

const Header = () => {
  return (
    <header className="fixed top-4 right-4 z-50">
      <DarkModeToggle />
    </header>
  );
};

export default Header;
