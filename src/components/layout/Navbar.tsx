
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className={`font-display font-bold text-xl ${
            isScrolled || isMobile 
              ? 'text-mindsync-blue bg-white px-3 py-1 rounded-md' 
              : 'bg-white px-3 py-1 rounded-md text-mindsync-blue'
          }`}>
            Mindsync<span className="text-mindsync-teal">AI</span> Consult
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-mindsync-blue hover:text-mindsync-teal transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button 
              className="flex items-center text-mindsync-blue hover:text-mindsync-teal transition-colors"
              onClick={toggleServices}
            >
              Services <ChevronDown size={16} className="ml-1" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <Link to="/services/ai-systems" className="block px-4 py-2 text-sm text-gray-700 hover:bg-mindsync-gray">
                  AI Systems
                </Link>
                <Link to="/services/business-digitalization" className="block px-4 py-2 text-sm text-gray-700 hover:bg-mindsync-gray">
                  Business Digitalization
                </Link>
                <Link to="/services/automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-mindsync-gray">
                  Automation Solutions
                </Link>
                <Link to="/services/consulting" className="block px-4 py-2 text-sm text-gray-700 hover:bg-mindsync-gray">
                  Consulting
                </Link>
                <Link to="/services/brand-design" className="block px-4 py-2 text-sm text-gray-700 hover:bg-mindsync-gray">
                  Brand Design & Print
                </Link>
              </div>
            </div>
          </div>
          <Link to="/case-studies" className="text-mindsync-blue hover:text-mindsync-teal transition-colors">
            Case Studies
          </Link>
          <Link to="/products" className="text-mindsync-blue hover:text-mindsync-teal transition-colors">
            Products
          </Link>
          <Link to="/about" className="text-mindsync-blue hover:text-mindsync-teal transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-mindsync-blue hover:text-mindsync-teal transition-colors">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <a 
            href="https://calendly.com/mindsyncai-africa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a Discovery Call
          </a>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-mindsync-blue z-50 bg-white p-1 rounded-md"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 md:hidden pt-16 overflow-y-auto">
            <nav className="flex flex-col p-8 space-y-6 text-xl">
              <Link to="/" className="text-mindsync-blue text-center font-medium py-3 hover:bg-mindsync-gray rounded-lg" onClick={closeMenu}>
                Home
              </Link>
              <div className="border-t border-gray-100 pt-2">
                <button 
                  className="flex items-center justify-between w-full text-mindsync-blue py-3 font-medium"
                  onClick={toggleServices}
                >
                  Services <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-2 space-y-0 bg-mindsync-gray rounded-lg overflow-hidden">
                    <Link to="/services/ai-systems" className="block py-3 px-4 text-mindsync-blue-light text-center" onClick={closeMenu}>
                      AI Systems
                    </Link>
                    <Link to="/services/business-digitalization" className="block py-3 px-4 text-mindsync-blue-light text-center border-t border-white/20" onClick={closeMenu}>
                      Business Digitalization
                    </Link>
                    <Link to="/services/automation" className="block py-3 px-4 text-mindsync-blue-light text-center border-t border-white/20" onClick={closeMenu}>
                      Automation Solutions
                    </Link>
                    <Link to="/services/consulting" className="block py-3 px-4 text-mindsync-blue-light text-center border-t border-white/20" onClick={closeMenu}>
                      Consulting
                    </Link>
                    <Link to="/services/brand-design" className="block py-3 px-4 text-mindsync-blue-light text-center border-t border-white/20" onClick={closeMenu}>
                      Brand Design & Print
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/case-studies" className="text-mindsync-blue text-center font-medium py-3 hover:bg-mindsync-gray rounded-lg border-t border-gray-100 pt-2" onClick={closeMenu}>
                Case Studies
              </Link>
              <Link to="/products" className="text-mindsync-blue text-center font-medium py-3 hover:bg-mindsync-gray rounded-lg" onClick={closeMenu}>
                Products
              </Link>
              <Link to="/about" className="text-mindsync-blue text-center font-medium py-3 hover:bg-mindsync-gray rounded-lg" onClick={closeMenu}>
                About
              </Link>
              <Link to="/contact" className="text-mindsync-blue text-center font-medium py-3 hover:bg-mindsync-gray rounded-lg" onClick={closeMenu}>
                Contact
              </Link>
              <a 
                href="https://calendly.com/mindsyncai-africa/30min"
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary w-full text-center mt-6" 
                onClick={closeMenu}
              >
                Book a Discovery Call
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
