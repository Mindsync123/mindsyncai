
import { Box, Calendar, Users, LineChart, FileCode, Layers } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Element } from 'react-scroll';

const Services = () => {
  const services = [
    {
      title: "AI Systems",
      description: "Custom AI solutions that automate sales, customer service, and operations while continuously learning from your business data.",
      icon: <Box size={24} className="text-mindsync-teal" />,
      link: "/services/ai-systems"
    },
    {
      title: "Business Digitalization",
      description: "Transform manual processes into streamlined digital workflows that increase efficiency and enable remote management.",
      icon: <Layers size={24} className="text-mindsync-teal" />,
      link: "/services/business-digitalization"
    },
    {
      title: "Automation Solutions",
      description: "Eliminate repetitive tasks and streamline operations with intelligent automation tools designed for your specific needs.",
      icon: <FileCode size={24} className="text-mindsync-teal" />,
      link: "/services/automation"
    },
    {
      title: "Business Consulting",
      description: "Strategic guidance to optimize your sales processes, operations, and organizational structure for maximum growth.",
      icon: <LineChart size={24} className="text-mindsync-teal" />,
      link: "/services/consulting"
    },
    {
      title: "Brand Design & Print",
      description: "Professional branding and marketing materials that communicate your value proposition and strengthen customer trust.",
      icon: <Calendar size={24} className="text-mindsync-teal" />,
      link: "/services/brand-design"
    },
    {
      title: "Team Training",
      description: "Empower your team with the skills needed to leverage new systems and technologies for optimal business outcomes.",
      icon: <Users size={24} className="text-mindsync-teal" />,
      link: "/services/team-training"
    }
  ];

  return (
    <Element name="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6">Our Services</h2>
          <p className="text-lg text-mindsync-gray-dark max-w-3xl mx-auto">
            We provide end-to-end solutions that address your business challenges through intelligent technology and strategic consulting.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Services;
