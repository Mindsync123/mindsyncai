
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface CaseStudyCardProps {
  title: string;
  client: string;
  category: string;
  image: string;
  slug: string;
}

const CaseStudyCard = ({ title, client, category, image, slug }: CaseStudyCardProps) => {
  const isMobile = useIsMobile();
  
  return (
    <Link to={`/case-studies/${slug}`} className="group block h-full">
      <div className={`overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all h-full ${isMobile ? 'flex flex-col' : ''}`}>
        <div className={`${isMobile ? 'h-48' : 'h-56'} overflow-hidden relative`}>
          <div className="absolute inset-0 bg-mindsync-blue/20 group-hover:bg-mindsync-blue/40 transition-colors z-10"></div>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading={isMobile ? "lazy" : "eager"}
          />
          <div className="absolute top-4 left-4 bg-mindsync-teal text-white text-xs font-medium py-1 px-3 rounded-full z-20">
            {category}
          </div>
        </div>
        
        <div className={`p-6 ${isMobile ? 'flex-1 flex flex-col' : ''}`}>
          <h3 className="font-bold text-xl text-mindsync-blue mb-2">{title}</h3>
          <p className="text-mindsync-gray-dark mb-4">Client: {client}</p>
          <div className={`flex items-center text-mindsync-teal font-medium mt-auto ${isMobile ? 'justify-center w-full pt-2' : ''}`}>
            View Case Study <ArrowRight size={16} className={`ml-1 group-hover:ml-2 transition-all`} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
