import { useState } from "react";
import { Menu, X, Moon, Sun, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";

import { useTheme } from "@/components/theme-provider";
import { useLanguage } from "@/components/language-provider";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl gradient-text">
            TimeToTech
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
              onClick={closeDropdowns}
            >
              Accueil
            </Link>

            {/* À Propos Dropdown */}
            <div className="relative">
              <button 
                onClick={() => handleDropdownToggle('about')}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
              >
                <span>À Propos</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                  <Link 
                    href="/about" 
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                    onClick={closeDropdowns}
                  >
                    Qui Sommes-Nous ?
                  </Link>
                  <Link 
                    href="/experts" 
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                    onClick={closeDropdowns}
                  >
                    Nos Experts
                  </Link>
                </div>
              )}
            </div>

            {/* Nos Services Dropdown */}
            <div className="relative">
              <button 
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
              >
                <span>Nos Services</span>
                <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50">
                  <Link 
                    href="/services/web" 
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                    onClick={closeDropdowns}
                  >
                    Développement Web
                  </Link>
                  <Link 
                    href="/services/mobile" 
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                    onClick={closeDropdowns}
                  >
                    Développement Mobile
                  </Link>
                  <Link 
                    href="/services/design" 
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                    onClick={closeDropdowns}
                  >
                    Design Graphique
                  </Link>
                  <Link 
                    href="/services/conseil" 
                    className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary"
                    onClick={closeDropdowns}
                  >
                    Conseil En Informatique
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/realisations"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
              onClick={closeDropdowns}
            >
              Nos Réalisations
            </Link>

            <Link 
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
              onClick={closeDropdowns}
            >
              Blog
            </Link>
            
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
            >
              <Globe className="h-4 w-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            
            <Link href="/contact">
              <Button 
                className="gradient-bg hover:scale-105 text-white px-6 py-2 text-sm rounded-md transition-all duration-300"
                onClick={closeDropdowns}
              >
                Contact
              </Button>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/"
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-0 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              
              <div>
                <div className="text-left text-gray-600 dark:text-gray-300 font-medium px-0 text-sm mb-2">À Propos</div>
                <Link 
                  href="/about"
                  className="text-left text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors px-4 text-sm block"
                  onClick={() => setIsOpen(false)}
                >
                  Qui Sommes-Nous ?
                </Link>
                <Link 
                  href="/experts"
                  className="text-left text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors px-4 text-sm block"
                  onClick={() => setIsOpen(false)}
                >
                  Nos Experts
                </Link>
              </div>
              
              <div>
                <div className="text-left text-gray-600 dark:text-gray-300 font-medium px-0 text-sm mb-2">Nos Services</div>
                <Link 
                  href="/services/web"
                  className="text-left text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors px-4 text-sm block"
                  onClick={() => setIsOpen(false)}
                >
                  Développement Web
                </Link>
                <Link 
                  href="/services/mobile"
                  className="text-left text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors px-4 text-sm block"
                  onClick={() => setIsOpen(false)}
                >
                  Développement Mobile
                </Link>
                <Link 
                  href="/services/design"
                  className="text-left text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors px-4 text-sm block"
                  onClick={() => setIsOpen(false)}
                >
                  Design Graphique
                </Link>
                <Link 
                  href="/services/conseil"
                  className="text-left text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors px-4 text-sm block"
                  onClick={() => setIsOpen(false)}
                >
                  Conseil En Informatique
                </Link>
              </div>
              
              <Link 
                href="/realisations"
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-0 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Nos Réalisations
              </Link>
              
              <Link 
                href="/blog"
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-0 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              {/* Mobile theme and language toggles */}
              <div className="flex items-center space-x-4 py-2">
                <button
                  onClick={toggleTheme}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                >
                  {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                  <span>{theme === "light" ? "Dark" : "Light"}</span>
                </button>
                <button
                  onClick={toggleLanguage}
                  className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors text-sm"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>
              
              <Link 
                href="/contact"
                className="text-left text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-0 text-sm"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
