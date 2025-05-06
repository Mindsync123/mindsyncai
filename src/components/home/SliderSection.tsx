
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SystemImage {
  src: string;
  alt: string;
  caption: string;
}

const systemImages: SystemImage[] = [
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    alt: "AI Sales Assistant Dashboard",
    caption: "AI Sales Assistant Dashboard"
  },
  {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    alt: "Smart Inventory Management System",
    caption: "Smart Inventory Management System"
  },
  {
    src: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    alt: "HR Process Automation Tool",
    caption: "HR Process Automation Tool"
  },
  {
    src: "https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    alt: "Customer Analytics Platform",
    caption: "Customer Analytics Platform"
  }
];

const SliderSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % systemImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? systemImages.length - 1 : prevIndex - 1);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-mindsync-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6">
              Intelligent Solutions for Modern Businesses
            </h2>
            <p className="text-lg text-mindsync-gray-dark mb-6">
              Our AI-powered systems automate complex processes, improve efficiency, and provide valuable business insights that drive growth.
            </p>
            <ul className="space-y-4">
              {[
                "AI-driven analytics and decision support",
                "Custom-built business process automation",
                "Smart CRM and customer management",
                "End-to-end digital transformation"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-mindsync-teal/20 text-mindsync-teal flex items-center justify-center mr-3">
                    <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <div className="overflow-hidden rounded-lg relative h-64 md:h-80">
                {systemImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-500 transform ${
                      index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-mindsync-blue/80 to-transparent p-4 text-white">
                      <p className="font-medium">{image.caption}</p>
                    </div>
                  </div>
                ))}
                
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} className="text-mindsync-blue" />
                  </button>
                </div>
                
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} className="text-mindsync-blue" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Slider indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {systemImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-mindsync-teal' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
