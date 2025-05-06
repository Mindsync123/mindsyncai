
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "OpsSync CRM",
    description: "AI-powered customer relationship management system that automates follow-ups and predicts sales opportunities.",
    problem: "Manual customer tracking and missed follow-up opportunities",
    features: ["Automated follow-ups", "Lead scoring", "Sales forecasting", "Activity tracking", "Custom reports"],
    tech: ["ChatGPT API", "n8n", "Airtable"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "SmartInventory",
    description: "Digital inventory system with real-time tracking, alerts, and auto-reordering to prevent stockouts and excess inventory.",
    problem: "Stockouts and excess inventory due to poor tracking",
    features: ["Real-time inventory tracking", "Automatic reordering", "Stock level alerts", "Supplier management", "Inventory forecasting"],
    tech: ["Google Sheets API", "Make.com", "Custom dashboard"],
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "AutoHire",
    description: "Streamline your recruitment process with AI-powered candidate screening, automated scheduling, and skill assessment.",
    problem: "Time-consuming manual staff onboarding and recruitment",
    features: ["Resume screening", "Automated interviews", "Skill assessment", "Candidate tracking", "Onboarding automation"],
    tech: ["GPT-4 API", "Zapier", "Notion"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "SellBoard",
    description: "Visualize sales data across regions, products, and representatives with AI-powered insights and forecasting.",
    problem: "No sales visibility across regions and poor forecasting",
    features: ["Multi-region tracking", "Product performance", "Rep dashboards", "AI forecasting", "Goal tracking"],
    tech: ["Google Data Studio", "OpenAI", "Google Sheets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  },
  {
    name: "ProcessFlow AI",
    description: "Automate complex business processes with visual workflow builder, integrations, and AI-powered optimization.",
    problem: "Manual, time-consuming operational processes",
    features: ["Visual workflow builder", "Process automation", "Integration hub", "Performance analytics", "AI optimization"],
    tech: ["GPT-4", "n8n", "Custom dashboard"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  }
];

const Products = () => {
  useEffect(() => {
    document.title = "Our Products | Mindsync AI Consult";
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-mindsync-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Flagship Products
              </h1>
              <p className="text-xl text-gray-200 mb-0">
                Intelligent systems that solve real business problems and drive measurable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-16 bg-mindsync-gray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mindsync-blue mb-2">{product.name}</h3>
                    <p className="text-mindsync-gray-dark mb-4">{product.description}</p>
                    <button 
                      className="inline-flex items-center text-mindsync-teal font-medium hover:text-mindsync-blue transition-colors"
                      onClick={() => setSelectedProduct(product)}
                    >
                      View Details <ArrowRight size={16} className="ml-1 group-hover:ml-2 transition-all" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
            <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold text-mindsync-blue">{selectedProduct.name}</h2>
                  <button 
                    className="text-gray-500 hover:text-gray-800 focus:outline-none"
                    onClick={() => setSelectedProduct(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x">
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="mb-8 rounded-lg overflow-hidden h-64">
                  <img 
                    src={selectedProduct.image} 
                    alt={selectedProduct.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-lg font-semibold text-mindsync-blue mb-3">Problem Solved</h3>
                    <p className="text-mindsync-gray-dark">{selectedProduct.problem}</p>
                    
                    <h3 className="text-lg font-semibold text-mindsync-blue mt-6 mb-3">Technology Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.tech.map((tech, index) => (
                        <span key={index} className="bg-mindsync-teal/10 text-mindsync-teal px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-mindsync-blue mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="text-mindsync-teal mr-2 mt-1 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                          </svg>
                          <span className="text-mindsync-gray-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://calendly.com/mindsyncai-africa/30min"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-medium px-8 py-3 rounded-lg inline-block"
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Products;
