
import { Element } from 'react-scroll';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <Element name="about" className="section-padding bg-mindsync-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="relative">
              <div className="bg-mindsync-blue rounded-xl h-72 md:h-96 w-full overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                  alt="Mindsync team collaboration"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-mindsync-teal rounded-xl p-4 md:p-6 shadow-lg">
                <div className="text-white">
                  <div className="font-bold text-2xl md:text-4xl mb-1">5+ Years</div>
                  <div className="text-sm md:text-base">Delivering intelligent business solutions</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6">About Mindsync</h2>
            <p className="text-mindsync-gray-dark mb-6">
              Mindsync AI Consult specializes in creating intelligent systems that help businesses automate processes, 
              make data-driven decisions, and achieve sustainable growth.
            </p>
            <p className="text-mindsync-gray-dark mb-6">
              Our team combines expertise in artificial intelligence, business strategy, and software development to deliver 
              solutions that transform how companies operate and compete in the digital age.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold text-mindsync-teal mb-2">100+</div>
                <p className="text-mindsync-blue font-medium">Businesses Transformed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-mindsync-teal mb-2">92%</div>
                <p className="text-mindsync-blue font-medium">Client Retention Rate</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-mindsync-teal mb-2">250+</div>
                <p className="text-mindsync-blue font-medium">AI Systems Deployed</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-mindsync-teal mb-2">15+</div>
                <p className="text-mindsync-blue font-medium">Industry Experts</p>
              </div>
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center text-mindsync-teal font-medium hover:text-mindsync-blue transition-colors"
            >
              Learn more about us <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
