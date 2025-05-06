
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import CaseStudyCard from '@/components/home/CaseStudyCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, BarChart4, Lightbulb, Factory } from 'lucide-react';

const caseStudiesData = [
  {
    title: "AI Sales Automation for Regional Bank",
    client: "First Capital Bank",
    category: "AI Systems",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "ai-sales-automation-bank",
    problem: "Manual sales tracking caused delays and lost opportunities.",
    solution: "Deployed an AI-powered CRM and follow-up automation agent.",
    tools: ["ChatGPT API", "n8n", "Airtable"],
    results: "35% increase in closed deals within 3 months."
  },
  {
    title: "Inventory Management Overhaul for Retailer",
    client: "Urban Market Group",
    category: "Business Digitalization",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "inventory-management-retail",
    problem: "Stockouts and excess inventory due to poor tracking.",
    solution: "Built a digital inventory system with real-time alerts and auto-reordering logic.",
    tools: ["Google Sheets API", "Make.com", "custom dashboard"],
    results: "22% cost savings and zero stockouts in 60 days."
  },
  {
    title: "HR Process Automation for Healthcare Provider",
    client: "Wellness Medical Center",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "hr-automation-healthcare",
    problem: "Time-consuming manual staff onboarding and leave tracking.",
    solution: "Automated employee onboarding, attendance, and leave approvals using AI agents.",
    tools: ["Zapier", "GPT-4 Assistants", "Notion"],
    results: "HR team productivity improved by 45%."
  },
  {
    title: "Data-Driven Sales Strategy for Manufacturer",
    client: "Precision Industries Ltd.",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "data-driven-sales-strategy",
    problem: "No sales visibility across regions and poor forecasting.",
    solution: "Built a custom dashboard that visualizes sales by product, region, and rep.",
    tools: ["Google Data Studio", "OpenAI", "Google Sheets"],
    results: "Improved sales forecasting accuracy and 18% revenue growth."
  },
  {
    title: "E-Commerce Integration for Traditional Retailer",
    client: "Heritage Goods",
    category: "Business Digitalization",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "ecommerce-integration-retail",
    problem: "Physical-only sales limited customer base.",
    solution: "Created a full e-commerce platform synced with store inventory.",
    tools: ["Shopify", "Airtable", "OpenAI product descriptions"],
    results: "Online sales accounted for 40% of total revenue within 4 months."
  },
  {
    title: "Customer Service AI Implementation",
    client: "Global Communications Inc.",
    category: "AI Systems",
    image: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    slug: "customer-service-ai",
    problem: "Support response time was over 12 hours.",
    solution: "Installed AI chatbot with trained intent recognition for fast ticket resolution.",
    tools: ["GPT-4", "WhatsApp Business API", "Twilio"],
    results: "Reduced average response time to under 3 minutes."
  }
];

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  
  useEffect(() => {
    document.title = "Case Studies | Mindsync AI Consult";
  }, []);

  const filteredCaseStudies = selectedCategory === "All" 
    ? caseStudiesData 
    : caseStudiesData.filter(study => study.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-mindsync-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Our Client Success Stories
              </h1>
              <p className="text-xl text-gray-200 mb-0">
                Explore how we've helped businesses across industries transform their operations and achieve remarkable growth through intelligent systems.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4">
            <div className="py-4 flex flex-wrap gap-2">
              <Button 
                variant={selectedCategory === "All" ? "default" : "outline"} 
                className="rounded-full text-sm"
                onClick={() => setSelectedCategory("All")}
              >
                All Categories
              </Button>
              <Button 
                variant={selectedCategory === "AI Systems" ? "default" : "outline"} 
                className="rounded-full text-sm"
                onClick={() => setSelectedCategory("AI Systems")}
              >
                AI Systems
              </Button>
              <Button 
                variant={selectedCategory === "Business Digitalization" ? "default" : "outline"} 
                className="rounded-full text-sm"
                onClick={() => setSelectedCategory("Business Digitalization")}
              >
                Business Digitalization
              </Button>
              <Button 
                variant={selectedCategory === "Automation" ? "default" : "outline"} 
                className="rounded-full text-sm"
                onClick={() => setSelectedCategory("Automation")}
              >
                Automation
              </Button>
              <Button 
                variant={selectedCategory === "Consulting" ? "default" : "outline"} 
                className="rounded-full text-sm"
                onClick={() => setSelectedCategory("Consulting")}
              >
                Consulting
              </Button>
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <section className="py-16 bg-mindsync-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, index) => (
                <div 
                  key={index} 
                  onClick={() => setSelectedCaseStudy(study)}
                  className="cursor-pointer"
                >
                  <CaseStudyCard
                    title={study.title}
                    client={study.client}
                    category={study.category}
                    image={study.image}
                    slug={study.slug}
                  />
                </div>
              ))}
            </div>

            {/* Case Study Detail Modal */}
            {selectedCaseStudy && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
                <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                  <div className="relative">
                    <div className="h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-mindsync-blue/40 z-10"></div>
                      <img 
                        src={selectedCaseStudy.image} 
                        alt={selectedCaseStudy.title} 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full text-white z-20 hover:bg-white/40 transition-colors"
                        onClick={() => setSelectedCaseStudy(null)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6L6 18M6 6l12 12"></path>
                        </svg>
                      </button>
                      <div className="absolute bottom-6 left-6 z-20">
                        <span className="bg-mindsync-teal text-white text-xs font-medium py-1 px-3 rounded-full mb-2 inline-block">
                          {selectedCaseStudy.category}
                        </span>
                        <h2 className="text-2xl font-bold text-white">{selectedCaseStudy.title}</h2>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="mb-8">
                        <p className="text-mindsync-blue font-medium mb-2">Client</p>
                        <p className="text-xl font-bold text-mindsync-gray-dark">{selectedCaseStudy.client}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-mindsync-gray p-6 rounded-xl">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-mindsync-blue/10 rounded-full flex items-center justify-center mr-4">
                              <Factory size={20} className="text-mindsync-teal" />
                            </div>
                            <h3 className="font-bold text-mindsync-blue">The Challenge</h3>
                          </div>
                          <p className="text-mindsync-gray-dark">{selectedCaseStudy.problem}</p>
                        </div>
                        
                        <div className="bg-mindsync-gray p-6 rounded-xl">
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 bg-mindsync-blue/10 rounded-full flex items-center justify-center mr-4">
                              <Lightbulb size={20} className="text-mindsync-teal" />
                            </div>
                            <h3 className="font-bold text-mindsync-blue">Our Solution</h3>
                          </div>
                          <p className="text-mindsync-gray-dark">{selectedCaseStudy.solution}</p>
                        </div>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="font-bold text-mindsync-blue mb-4">Tools & Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedCaseStudy.tools.map((tool, idx) => (
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
                        <p className="text-lg font-medium text-mindsync-teal">{selectedCaseStudy.results}</p>
                      </div>
                      
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
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-mindsync-blue rounded-xl overflow-hidden shadow-lg">
              <div className="p-8 md:p-12 text-white relative">
                <svg width="120" height="96" viewBox="0 0 120 96" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-8 left-8 opacity-10">
                  <path d="M35.7333 96C24.5333 96 15.5556 92.2667 8.8 84.8C2.93333 77.3333 0 67.9111 0 56.5333C0 45.5111 3.64444 34.6667 10.9333 24C18.2222 12.9778 28.8889 4.8 42.9333 0L52 15.4667C41.3333 19.0222 33.6 24.0889 28.8 30.6667C24 36.8889 22.1333 44.2667 23.2 52.8C24.9778 51.9111 27.2889 51.7333 30.1333 51.7333C36.7111 51.7333 42.2222 54.0444 46.6667 58.4C51.1111 62.4889 53.3333 68.0889 53.3333 75.2C53.3333 82.1333 50.9333 87.7333 46.1333 92C41.5111 94.6667 37.3333 96 35.7333 96ZM99.7333 96C88.5333 96 79.5556 92.2667 72.8 84.8C66.9333 77.3333 64 67.9111 64 56.5333C64 45.5111 67.6444 34.6667 74.9333 24C82.2222 12.9778 92.8889 4.8 106.933 0L116 15.4667C105.333 19.0222 97.6 24.0889 92.8 30.6667C88 36.8889 86.1333 44.2667 87.2 52.8C88.9778 51.9111 91.2889 51.7333 94.1333 51.7333C100.711 51.7333 106.222 54.0444 110.667 58.4C115.111 62.4889 117.333 68.0889 117.333 75.2C117.333 82.1333 114.933 87.7333 110.133 92C105.511 94.6667 101.333 96 99.7333 96Z" fill="currentColor"/>
                </svg>
                
                <div className="relative z-10 max-w-3xl mx-auto text-center">
                  <p className="text-xl md:text-2xl mb-8">
                    "Mindsync's implementation of our AI sales system completely transformed our business. We've seen a 45% increase in qualified leads and a 30% improvement in closing rates. Their team was professional, knowledgeable, and committed to our success from day one."
                  </p>
                  
                  <div>
                    <p className="font-bold text-xl">Robert Chen</p>
                    <p className="text-gray-300">CEO, First Capital Bank</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-mindsync-gray">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-mindsync-blue mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-mindsync-gray-dark mb-8 max-w-2xl mx-auto">
              Schedule a discovery call to discuss how we can help your business achieve similar results.
            </p>
            <a 
              href="https://calendly.com/mindsyncai-africa/30min"
              target="_blank"
              rel="noopener noreferrer" 
              className="btn-primary inline-block bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-medium px-8 py-3 rounded-lg"
            >
              Book a Discovery Call
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default CaseStudies;
