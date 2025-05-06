
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 group">
      <div className="bg-mindsync-gray rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-mindsync-teal/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-mindsync-blue mb-3">{title}</h3>
      <p className="text-mindsync-gray-dark mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-mindsync-teal font-medium hover:text-mindsync-blue transition-colors"
      >
        Learn More <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
      </Link>
    </div>
  );
};

export default ServiceCard;
