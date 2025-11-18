import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from 'figma:asset/918b477c0df526c77d56e64af98643e2308b399a.png';

interface NavbarProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { name: 'Home', page: 'home' },
    { name: 'About Us', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'Clients', page: 'clients' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigate('home')}>
            <img src={logo} alt="Value Kare Group" className="h-16 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`transition-colors ${
                  currentPage === item.page
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={() => handleNavigate('contact')}>Enquire Now</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${
                  currentPage === item.page
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground hover:bg-accent'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-3 pt-2">
              <Button onClick={() => handleNavigate('contact')} className="w-full">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
