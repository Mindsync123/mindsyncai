
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          <span className="text-mindsync-blue font-display font-bold text-xl">
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
          <Button className="btn-primary">Book a Discovery Call</Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-mindsync-blue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 md:hidden pt-16">
            <nav className="flex flex-col p-8 space-y-6 text-xl">
              <Link to="/" className="text-mindsync-blue" onClick={closeMenu}>
                Home
              </Link>
              <div>
                <button 
                  className="flex items-center justify-between w-full text-mindsync-blue"
                  onClick={toggleServices}
                >
                  Services <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link to="/services/ai-systems" className="block py-2 text-mindsync-blue-light" onClick={closeMenu}>
                      AI Systems
                    </Link>
                    <Link to="/services/business-digitalization" className="block py-2 text-mindsync-blue-light" onClick={closeMenu}>
                      Business Digitalization
                    </Link>
                    <Link to="/services/automation" className="block py-2 text-mindsync-blue-light" onClick={closeMenu}>
                      Automation Solutions
                    </Link>
                    <Link to="/services/consulting" className="block py-2 text-mindsync-blue-light" onClick={closeMenu}>
                      Consulting
                    </Link>
                    <Link to="/services/brand-design" className="block py-2 text-mindsync-blue-light" onClick={closeMenu}>
                      Brand Design & Print
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/case-studies" className="text-mindsync-blue" onClick={closeMenu}>
                Case Studies
              </Link>
              <Link to="/products" className="text-mindsync-blue" onClick={closeMenu}>
                Products
              </Link>
              <Link to="/about" className="text-mindsync-blue" onClick={closeMenu}>
                About
              </Link>
              <Link to="/contact" className="text-mindsync-blue" onClick={closeMenu}>
                Contact
              </Link>
              <Button className="btn-primary w-full mt-4" onClick={closeMenu}>
                Book a Discovery Call
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
