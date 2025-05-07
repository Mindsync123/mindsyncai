
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { ArrowLeft, ArrowRight, BarChart4, Factory, Lightbulb, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Case studies data
const caseStudiesData = [
  {
    title: "AI Sales Automation for Regional Bank",
    client: "First Capital Bank",
    category: "AI Systems",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "ai-sales-automation-bank",
    problem: "Manual sales tracking caused delays and lost opportunities. The sales team was spending too much time on administrative tasks rather than building relationships with clients. Follow-ups were inconsistent, leading to missed opportunities and decreased conversion rates.",
    solution: "We deployed an AI-powered CRM and follow-up automation agent that streamlined the sales process. The solution included automated lead scoring, personalized email sequences, and intelligent scheduling for follow-up calls based on customer engagement patterns.",
    approach: "We began by analyzing the existing sales workflow to identify bottlenecks and inefficiencies. After a detailed assessment, we implemented a custom solution that integrated with their existing systems while introducing AI capabilities.",
    tools: ["ChatGPT API", "n8n", "Airtable", "Zapier", "Google Workspace"],
    results: "35% increase in closed deals within 3 months. Sales team productivity improved by 28% as administrative tasks were automated. Customer satisfaction scores increased due to more timely and personalized follow-ups.",
    testimonial: {
      quote: "The AI sales system completely transformed our business. We've seen a dramatic increase in qualified leads and significant improvement in closing rates. Their team was professional, knowledgeable, and committed to our success.",
      author: "Robert Chen",
      position: "CEO, First Capital Bank"
    }
  },
  {
    title: "Inventory Management Overhaul for Retailer",
    client: "Urban Market Group",
    category: "Business Digitalization",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "inventory-management-retail",
    problem: "Stockouts and excess inventory due to poor tracking were leading to lost sales and increased storage costs. Manual inventory counts were time-consuming and prone to errors, making it difficult to maintain optimal stock levels across multiple locations.",
    solution: "We built a digital inventory system with real-time alerts and auto-reordering logic. The solution included barcode scanning for quick updates, predictive analytics for demand forecasting, and automated purchase order generation.",
    approach: "Our team began by conducting a thorough analysis of existing inventory processes across all store locations. We then developed a custom solution that addressed specific pain points while maintaining ease of use for staff.",
    tools: ["Google Sheets API", "Make.com", "Custom Dashboard", "QR Code System", "Inventory Analytics Platform"],
    results: "22% cost savings and zero stockouts in 60 days. Reduced inventory holding costs by optimizing stock levels. Staff time spent on inventory management decreased by 65%, allowing them to focus more on customer service.",
    testimonial: {
      quote: "The digital inventory system has been a game-changer for our multi-location operation. We now have complete visibility across all stores and can make data-driven decisions about purchasing and distribution.",
      author: "Sarah Johnson",
      position: "Operations Director, Urban Market Group"
    }
  },
  {
    title: "HR Process Automation for Healthcare Provider",
    client: "Wellness Medical Center",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "hr-automation-healthcare",
    problem: "Time-consuming manual staff onboarding and leave tracking were creating administrative bottlenecks. With multiple departments and shift patterns, scheduling was complex and error-prone, often leading to staffing shortages.",
    solution: "We automated employee onboarding, attendance, and leave approvals using AI agents. The solution included digital document processing, intelligent shift scheduling based on qualifications and availability, and seamless leave management workflows.",
    approach: "We worked closely with the HR team to map existing processes and identify opportunities for automation. Our focus was on maintaining compliance with healthcare regulations while drastically improving efficiency.",
    tools: ["Zapier", "GPT-4 Assistants", "Notion", "Document OCR", "Custom HR Dashboard"],
    results: "HR team productivity improved by 45%. New employee onboarding time reduced from 2 days to 4 hours. Staff reported higher satisfaction with scheduling and leave management processes.",
    testimonial: {
      quote: "The HR automation system transformed our administrative processes. What used to take days now takes hours, and our HR team can focus on supporting staff rather than pushing paper.",
      author: "Dr. Michelle Parks",
      position: "Medical Director, Wellness Medical Center"
    }
  },
  {
    title: "Data-Driven Sales Strategy for Manufacturer",
    client: "Precision Industries Ltd.",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "data-driven-sales-strategy",
    problem: "No sales visibility across regions and poor forecasting led to misaligned production schedules and inventory issues. Sales teams worked in silos with inconsistent reporting methods, making it difficult for management to obtain accurate insights.",
    solution: "We built a custom dashboard that visualizes sales by product, region, and rep. The solution included automated data integration from multiple sources, customizable reporting tools, and AI-powered sales forecasting capabilities.",
    approach: "Our team began with a data audit to identify all available sources of sales information. We then designed an integrated system that consolidated data while adding intelligence through machine learning models.",
    tools: ["Google Data Studio", "OpenAI", "Google Sheets", "SQL Database", "Custom ETL Pipelines"],
    results: "Improved sales forecasting accuracy from 65% to 88% and achieved 18% revenue growth within two quarters. Better alignment between sales, production, and inventory management reduced waste and improved delivery times.",
    testimonial: {
      quote: "The visibility we now have across our sales operations has transformed how we make decisions. We can spot trends early, allocate resources more effectively, and set realistic targets based on solid data.",
      author: "James Wong",
      position: "Sales Director, Precision Industries Ltd."
    }
  },
  {
    title: "E-Commerce Integration for Traditional Retailer",
    client: "Heritage Goods",
    category: "Business Digitalization",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "ecommerce-integration-retail",
    problem: "Physical-only sales limited customer base to local shoppers. The company had a loyal customer base but was missing out on the growing online market. Inventory management across physical and digital channels was a major concern.",
    solution: "We created a full e-commerce platform synced with store inventory. The solution included an omnichannel approach with buy-online-pickup-in-store capabilities, real-time inventory synchronization, and AI-generated product descriptions to enhance SEO.",
    approach: "We built a solution that preserved the brand's traditional appeal while offering modern shopping experiences. Our phased implementation ensured staff could adapt to new processes gradually.",
    tools: ["Shopify", "Airtable", "OpenAI product descriptions", "Inventory Sync API", "Payment Gateways"],
    results: "Online sales accounted for 40% of total revenue within 4 months. Store traffic increased by 15% as online visibility brought new customers to physical locations. Customer lifetime value increased through improved engagement.",
    testimonial: {
      quote: "Mindsync helped us enter the digital age without losing our traditional charm. The seamless integration between our physical store and online presence has opened up entirely new revenue streams.",
      author: "Elizabeth Taylor",
      position: "Owner, Heritage Goods"
    }
  },
  {
    title: "Customer Service AI Implementation",
    client: "Global Communications Inc.",
    category: "AI Systems",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "customer-service-ai",
    problem: "Support response time was over 12 hours, leading to customer dissatisfaction and churn. The support team was overwhelmed by repetitive inquiries that could be handled automatically, preventing them from focusing on complex issues.",
    solution: "We installed an AI chatbot with trained intent recognition for fast ticket resolution. The solution included natural language processing capabilities, integration with knowledge bases, and seamless handoff to human agents when necessary.",
    approach: "We analyzed thousands of support interactions to identify patterns and common inquiries. Based on this analysis, we trained a custom AI model that could handle the specific needs of their customer base.",
    tools: ["GPT-4", "WhatsApp Business API", "Twilio", "Custom Intent Recognition", "Support Knowledge Base"],
    results: "Reduced average response time to under 3 minutes. First-contact resolution rate improved by 42%. Customer satisfaction scores increased by 35%, while support staff could focus on complex issues requiring human expertise.",
    testimonial: {
      quote: "The AI customer service implementation has been transformative. Our customers get immediate answers to common questions, and our support team can focus on the complex issues where they add the most value.",
      author: "Maria Rodriguez",
      position: "Customer Experience Director, Global Communications Inc."
    }
  }
];

const CaseStudy = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  
  useEffect(() => {
    document.title = "Case Study | Mindsync AI Consult";
    
    const foundStudy = caseStudiesData.find(study => study.slug === slug);
    
    if (foundStudy) {
      setCaseStudy(foundStudy);
      document.title = `${foundStudy.title} | Mindsync AI Consult`;
    } else {
      setNotFound(true);
    }
    
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="animate-pulse text-xl text-mindsync-blue">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-24 flex items-center justify-center">
          <div className="container text-center px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-mindsync-blue">Case Study Not Found</h1>
            <p className="text-lg mb-8">The case study you're looking for doesn't seem to exist.</p>
            <Link to="/case-studies">
              <Button>View All Case Studies</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Hero Banner */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-mindsync-blue/50 z-10"></div>
          <img 
            src={caseStudy.image} 
            alt={caseStudy.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-8">
            <div className="container mx-auto">
              <Link to="/case-studies" className="inline-flex items-center text-white mb-4 hover:text-mindsync-teal transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Case Studies
              </Link>
              <span className="bg-mindsync-teal text-white text-xs font-medium py-1 px-3 rounded-full mb-2 inline-block">
                {caseStudy.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white">{caseStudy.title}</h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <div className="mb-8">
                <p className="text-mindsync-blue font-medium mb-2">Client</p>
                <p className="text-xl font-bold text-mindsync-gray-dark">{caseStudy.client}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-mindsync-gray p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-mindsync-blue/10 rounded-full flex items-center justify-center mr-4">
                      <Factory size={20} className="text-mindsync-teal" />
                    </div>
                    <h3 className="font-bold text-mindsync-blue">The Challenge</h3>
                  </div>
                  <p className="text-mindsync-gray-dark">{caseStudy.problem}</p>
                </div>
                
                <div className="bg-mindsync-gray p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-mindsync-blue/10 rounded-full flex items-center justify-center mr-4">
                      <Lightbulb size={20} className="text-mindsync-teal" />
                    </div>
                    <h3 className="font-bold text-mindsync-blue">Our Solution</h3>
                  </div>
                  <p className="text-mindsync-gray-dark">{caseStudy.solution}</p>
                </div>
              </div>

              <div className="bg-mindsync-gray p-6 rounded-xl mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-mindsync-blue/10 rounded-full flex items-center justify-center mr-4">
                    <CheckCircle size={20} className="text-mindsync-teal" />
                  </div>
                  <h3 className="font-bold text-mindsync-blue">Our Approach</h3>
                </div>
                <p className="text-mindsync-gray-dark">{caseStudy.approach}</p>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-mindsync-blue mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tools.map((tool, idx) => (
                    <span key={idx} className="bg-mindsync-blue/10 text-mindsync-blue px-3 py-1 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-mindsync-teal/10 p-6 rounded-xl mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-mindsync-teal/20 rounded-full flex items-center justify-center mr-4">
                    <BarChart4 size={20} className="text-mindsync-teal" />
                  </div>
                  <h3 className="font-bold text-mindsync-blue">The Results</h3>
                </div>
                <p className="text-lg font-medium text-mindsync-teal mb-2">{caseStudy.results.split('.')[0]}.</p>
                <p className="text-mindsync-gray-dark">{caseStudy.results.split('.').slice(1).join('.')}</p>
              </div>
              
              {caseStudy.testimonial && (
                <div className="bg-mindsync-blue rounded-xl p-6 md:p-8 mb-8">
                  <div className="relative z-10">
                    <svg width="60" height="48" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-4 opacity-20">
                      <path d="M35.7333 96C24.5333 96 15.5556 92.2667 8.8 84.8C2.93333 77.3333 0 67.9111 0 56.5333C0 45.5111 3.64444 34.6667 10.9333 24C18.2222 12.9778 28.8889 4.8 42.9333 0L52 15.4667C41.3333 19.0222 33.6 24.0889 28.8 30.6667C24 36.8889 22.1333 44.2667 23.2 52.8C24.9778 51.9111 27.2889 51.7333 30.1333 51.7333C36.7111 51.7333 42.2222 54.0444 46.6667 58.4C51.1111 62.4889 53.3333 68.0889 53.3333 75.2C53.3333 82.1333 50.9333 87.7333 46.1333 92C41.5111 94.6667 37.3333 96 35.7333 96Z" fill="white"/>
                    </svg>
                    
                    <p className="text-white text-lg md:text-xl italic mb-6">"{caseStudy.testimonial.quote}"</p>
                    
                    <div className="text-white">
                      <p className="font-bold">{caseStudy.testimonial.author}</p>
                      <p className="text-white/80">{caseStudy.testimonial.position}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <p className="text-mindsync-gray-dark mb-4">Want to achieve similar results for your business?</p>
                <a 
                  href="https://calendly.com/mindsyncai-africa/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-mindsync-blue hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Schedule a Discovery Call <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Related Case Studies */}
          <div className="py-8">
            <h2 className="text-2xl md:text-3xl font-bold text-mindsync-blue mb-8">Related Case Studies</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudiesData
                .filter(study => study.slug !== slug && study.category === caseStudy.category)
                .slice(0, 3)
                .map((study, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="h-48 overflow-hidden relative">
                      <div className="absolute inset-0 bg-mindsync-blue/20 hover:bg-mindsync-blue/40 transition-colors z-10"></div>
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-mindsync-teal text-white text-xs font-medium py-1 px-3 rounded-full z-20">
                        {study.category}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-mindsync-blue mb-2">{study.title}</h3>
                      <p className="text-mindsync-gray-dark mb-4">Client: {study.client}</p>
                      <Link 
                        to={`/case-studies/${study.slug}`} 
                        className="inline-flex items-center text-mindsync-teal font-medium hover:text-mindsync-blue transition-colors"
                      >
                        View Case Study <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
          <div className="text-center py-8">
            <Link
              to="/case-studies"
              className="inline-flex items-center bg-mindsync-gray hover:bg-mindsync-gray/80 text-mindsync-blue font-medium px-6 py-3 rounded-lg transition-colors"
            >
              View All Case Studies <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default CaseStudy;
