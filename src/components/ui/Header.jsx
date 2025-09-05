import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-card">
      
      <img
        src="https://fggroup.in/assets/images/img/gomzi.webp"
        alt="GoMzi Logo"
        className="h-10 w-auto"
      />
    </header>
  );
};

export default Header;