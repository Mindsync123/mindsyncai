
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-mindsync-blue text-white">
      {/* CTA Section */}
      <div className="bg-mindsync-teal py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Let's build intelligent systems that drive your business growth. Schedule a call with our expert team today.
          </p>
          <a
            href="https://calendly.com/mindsyncai-africa/30min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-mindsync-blue font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all"
          >
            Let's Get Started <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Mindsync AI Consult</h3>
            <p className="mb-6 text-mindsync-gray opacity-80">
              Intelligent Systems. Scalable Growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="mr-3 text-mindsync-teal flex-shrink-0" />
                <p>Km7 Ikirun-Osogbo Road,<br />Osun State, Nigeria</p>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="mr-3 text-mindsync-teal flex-shrink-0" />
                <div>
                  <p>+234 904 011 7077</p>
                  <p>+234 906 943 2190</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="mr-3 text-mindsync-teal flex-shrink-0" />
                <p>MindSyncai.Africa@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-mindsync-teal transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-mindsync-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-mindsync-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-mindsync-teal transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-mindsync-teal transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/ai-systems" className="hover:text-mindsync-teal transition-colors">
                  AI Systems
                </Link>
              </li>
              <li>
                <Link to="/services/business-digitalization" className="hover:text-mindsync-teal transition-colors">
                  Business Digitalization
                </Link>
              </li>
              <li>
                <Link to="/services/automation" className="hover:text-mindsync-teal transition-colors">
                  Automation Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/consulting" className="hover:text-mindsync-teal transition-colors">
                  Consulting
                </Link>
              </li>
              <li>
                <Link to="/services/brand-design" className="hover:text-mindsync-teal transition-colors">
                  Brand Design & Print
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="mb-4 text-mindsync-gray opacity-80">
              Subscribe to our newsletter for the latest insights on AI, automation, and business growth.
            </p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 rounded-lg bg-mindsync-blue-light text-white border border-gray-700 focus:outline-none focus:border-mindsync-teal"
                required
              />
              <button 
                type="submit" 
                className="bg-mindsync-teal text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-mindsync-gray opacity-80 mb-4 md:mb-0">
            © {new Date().getFullYear()} Mindsync AI Consult. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-mindsync-gray hover:text-mindsync-teal transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-mindsync-gray hover:text-mindsync-teal transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
