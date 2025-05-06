
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 bg-mindsync-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Transform Your Business</h2>
        <p className="text-xl text-white/80 max-w-xl mx-auto mb-10">
          Ready to build intelligent systems that deliver measurable results? Schedule a discovery call with our team today.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://calendly.com/mindsyncai-africa/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-bold py-4 px-8 rounded-lg inline-flex items-center text-lg"
          >
            Book a Discovery Call <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
