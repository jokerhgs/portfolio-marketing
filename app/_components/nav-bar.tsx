"use client";
import { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaEnvelope,
  FaBookOpen,
} from "react-icons/fa";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "home", name: "Home", icon: <FaHome size={18} /> },
    { id: "about", name: "About", icon: <FaUser size={18} /> },
    { id: "marketing-ai", name: "Marketing AI", icon: <FaCode size={18} /> },
    { id: "blogs", name: "Blogs", icon: <FaBookOpen size={18} /> },
    { id: "contact", name: "Contact", icon: <FaEnvelope size={18} /> },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full backdrop-blur-sm z-50 h-20 flex justify-between items-center px-6 sm:px-8 bg-background text-foreground border-b border-border">
      {/* Logo/Brand */}
      <div
        className="flex flex-col cursor-pointer hover:scale-105 transition-transform duration-150"
        onClick={() => scrollToSection("home")}
      >
        <span className="text-lg font-medium text-primary">Joe Kier Hagos</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 ">
        {sections.map((section) => (
          <div
            key={section.id}
            className="flex items-center gap-2 cursor-pointer text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary hover:scale-105"
            onClick={() => scrollToSection(section.id)}
          >
            {/* Icon with inherit color */}
            <span className="text-inherit">{section.icon}</span>
            {section.name}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative border-b ">
        <div
          className="cursor-pointer text-foreground active:scale-90 transition-transform"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full right-0 mt-2 w-48 rounded-lg shadow-lg py-2 px-4 z-50 text-foreground bg-background/90 backdrop-blur-sm animate-dropdown"
          >
            {sections.map((section) => (
              <div
                key={section.id}
                className="flex items-center gap-3 py-3 cursor-pointer last:border-0 text-foreground transition-colors duration-200 hover:text-primary hover:translate-x-1"
                onClick={() => scrollToSection(section.id)}
              >
                <span className=" text-foreground">{section.icon}</span>
                <span className="text-sm text-foreground">{section.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
