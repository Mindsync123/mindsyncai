
import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link as ScrollLink } from 'react-scroll';

const problemSolutions = [
  { problem: "Manual sales processes", solution: "AI Sales Automation" },
  { problem: "Disorganized customer data", solution: "Smart CRM Systems" },
  { problem: "Inefficient hiring", solution: "Automated HR Solutions" },
  { problem: "Time-consuming operations", solution: "Process Automation" },
  { problem: "Data silos across teams", solution: "Integrated Systems" }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % problemSolutions.length);
        setFade(false);
      }, 500);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-mindsync-blue to-mindsync-blue-light text-white min-h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQ0MCIgaGVpZ2h0PSI4NjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgb3BhY2l0eT0iLjEiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGNpcmNsZSBjeD0iNjUyLjUiIGN5PSI0MzIuNSIgcj0iMzQuNSIvPjxjaXJjbGUgY3g9IjY1Mi41IiBjeT0iNjM4LjUiIHI9IjE4LjUiLz48Y2lyY2xlIGN4PSI1ODYuNSIgY3k9IjU0My41IiByPSIxMi41Ii8+PGNpcmNsZSBjeD0iNzI5LjUiIGN5PSI1NDMuNSIgcj0iMTIuNSIvPjxjaXJjbGUgY3g9IjcyOS41IiBjeT0iMzEwLjUiIHI9IjE4LjUiLz48Y2lyY2xlIGN4PSI1ODYuNSIgY3k9IjMxMC41IiByPSIxOC41Ii8+PC9nPjwvc3ZnPg==')] bg-no-repeat bg-cover opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            We Build Systems That <br className="hidden md:block" />
            <span className="text-mindsync-teal">Grow Your Business</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl">
            Intelligent systems and AI-powered automation that deliver scalable growth for forward-thinking businesses.
          </p>
          
          <div className="h-24 mb-10">
            <div className="flex flex-col">
              <div className="text-gray-300 text-lg">Struggling with:</div>
              <div className={`text-2xl md:text-3xl font-bold text-white mt-2 transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                {problemSolutions[currentIndex].problem}
              </div>
              <div className="flex items-center mt-2">
                <div className="h-px w-12 bg-mindsync-teal mr-4"></div>
                <div className={`text-xl text-mindsync-teal font-medium transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
                  Our Solution: {problemSolutions[currentIndex].solution}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button className="btn-primary text-base">
              Book a Discovery Call
            </Button>
            <ScrollLink to="services" smooth={true} duration={800}>
              <Button variant="outline" className="text-white border-white hover:bg-white/10 text-base">
                See What We Do <ArrowRight size={16} className="ml-2" />
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>

      {/* Floating arrow indicator */}
      <ScrollLink to="about" smooth={true} duration={800} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
          <ArrowRight size={20} className="rotate-90" />
        </div>
      </ScrollLink>
    </section>
  );
};

export default Hero;
