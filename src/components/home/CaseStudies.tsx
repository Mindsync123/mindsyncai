
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudyCard from './CaseStudyCard';

const caseStudies = [
  {
    title: "AI Sales Automation for Regional Bank",
    client: "First Capital Bank",
    category: "AI Systems",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "ai-sales-automation-bank"
  },
  {
    title: "Inventory Management Overhaul for Retailer",
    client: "Urban Market Group",
    category: "Business Digitalization",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "inventory-management-retail"
  },
  {
    title: "HR Process Automation for Healthcare Provider",
    client: "Wellness Medical Center",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "hr-automation-healthcare"
  }
];

const CaseStudies = () => {
  return (
    <section className="section-padding bg-mindsync-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-3">Case Studies</h2>
            <p className="text-lg text-mindsync-gray-dark max-w-2xl">
              Real-world examples of how our intelligent systems have transformed businesses across industries.
            </p>
          </div>
          <Link 
            to="/case-studies"
            className="inline-flex items-center text-mindsync-teal font-medium hover:text-mindsync-blue transition-colors mt-4 md:mt-0"
          >
            View All Case Studies <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              title={study.title}
              client={study.client}
              category={study.category}
              image={study.image}
              slug={study.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
