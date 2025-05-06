
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-mindsync-blue text-white">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-mindsync-blue-light to-mindsync-blue rounded-xl p-8 md:p-12 shadow-lg relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-full h-full">
            <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 right-0 opacity-10">
              <circle cx="500" cy="100" r="100" fill="white" />
              <circle cx="450" cy="250" r="50" fill="white" />
              <circle cx="400" cy="350" r="30" fill="white" />
              <rect x="100" y="100" width="200" height="200" rx="20" fill="white" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Let's Transform Your Business Together
              </h2>
              <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Ready to unlock the full potential of your business with intelligent systems and automation? 
                Schedule a discovery call with our expert team today.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-medium px-8 py-6 h-auto rounded-lg transition-all"
                >
                  <Calendar size={20} className="mr-2" />
                  Book a Discovery Call
                </Button>
                
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/20 font-medium px-8 py-6 h-auto rounded-lg"
                  >
                    Contact Our Team <ArrowRight size={18} className="ml-2" />
                  </Button>
                </Link>
              </div>
              
              <p className="text-sm text-gray-300 mt-8">
                No commitment required. Let's discuss how we can help you achieve your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
