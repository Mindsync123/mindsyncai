
import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    quote: "Mindsync's AI sales assistant completely transformed our lead-to-customer process. We've seen a 40% increase in conversion rates within just three months.",
    author: "Sarah Johnson",
    position: "Sales Director",
    company: "TechGrowth Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
  },
  {
    quote: "The inventory management system Mindsync built for us reduced stockouts by 78% and carrying costs by 30%. It's been a game-changer for our retail operations.",
    author: "Michael Chen",
    position: "Operations Manager",
    company: "Urban Retail Group",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
  },
  {
    quote: "Their consulting team helped us restructure our entire customer service department, implementing AI solutions that reduced response times by 65%.",
    author: "Emily Rodriguez",
    position: "Customer Experience Lead",
    company: "ServiceFirst Co.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
  },
  {
    quote: "We've worked with several consulting firms, but none have delivered the ROI that Mindsync has. Their automation solutions have saved us over 2,000 man-hours per month.",
    author: "Daniel Thompson",
    position: "CEO",
    company: "Innovate Manufacturing",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      containerRef.current.scrollTo({
        left: index * (containerWidth / 3),
        behavior: 'smooth'
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = activeIndex < testimonials.length - 1 ? activeIndex + 1 : 0;
    scrollToTestimonial(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : testimonials.length - 1;
    scrollToTestimonial(newIndex);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6">What Our Clients Say</h2>
          <p className="text-lg text-mindsync-gray-dark max-w-3xl mx-auto">
            We measure our success by the success of our clients. Here's what they have to say about working with Mindsync.
          </p>
        </div>

        <div className="relative">
          {/* Desktop slider with multiple visible slides */}
          <div className="hidden md:block">
            <div className="overflow-hidden" ref={containerRef}>
              <div className="flex gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-[calc(33.333%-16px)]">
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      company={testimonial.company}
                      image={testimonial.image}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile single slide carousel */}
          <div className="md:hidden">
            <TestimonialCard
              quote={testimonials[activeIndex].quote}
              author={testimonials[activeIndex].author}
              position={testimonials[activeIndex].position}
              company={testimonials[activeIndex].company}
              image={testimonials[activeIndex].image}
            />
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full border border-mindsync-gray-dark hover:bg-mindsync-gray transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-mindsync-teal' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full border border-mindsync-gray-dark hover:bg-mindsync-gray transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
