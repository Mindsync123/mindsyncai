
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Box, Layers, FileCode, LineChart, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WhatsappButton from '@/components/ui/WhatsappButton';

const servicesData = [
  {
    id: 'ai-systems',
    title: 'AI Systems',
    icon: <Box size={28} className="text-mindsync-teal" />,
    description: 'Custom AI solutions that automate sales processes, enhance customer interactions, and optimize business operations.',
    benefits: [
      'Reduce manual workloads by up to 70%',
      'Increase sales conversion rates by 30-40%',
      'Deliver 24/7 customer service through intelligent assistants',
      'Generate real-time insights from your business data'
    ],
    offerings: [
      {
        title: 'AI Sales Agent',
        description: 'Automated lead qualification and follow-up that integrates with your CRM and never sleeps.'
      },
      {
        title: 'HR Assistant Bot',
        description: 'Streamline employee onboarding, answer FAQs, and manage routine HR tasks.'
      },
      {
        title: 'Executive Assistant AI',
        description: 'Calendar management, email prioritization, and information retrieval for busy executives.'
      },
      {
        title: 'Customer Support AI',
        description: 'Intelligent ticketing, issue resolution, and customer communication management.'
      }
    ]
  },
  {
    id: 'business-digitalization',
    title: 'Business Digitalization',
    icon: <Layers size={28} className="text-mindsync-teal" />,
    description: 'Transform paper-based and manual processes into streamlined digital workflows that increase accuracy and efficiency.',
    benefits: [
      'Eliminate paperwork and reduce administrative costs',
      'Enable secure remote management of business processes',
      'Improve data accuracy and reduce human error',
      'Gain clear visibility into operations across your organization'
    ],
    offerings: [
      {
        title: 'Digital Accounting Systems',
        description: 'Automated invoice processing, expense management, and financial reporting.'
      },
      {
        title: 'Smart Inventory Management',
        description: 'Real-time tracking, automated reordering, and demand forecasting.'
      },
      {
        title: 'Operations Digitalization',
        description: 'End-to-end digital workflows for core business processes.'
      },
      {
        title: 'Digital Document Management',
        description: 'Cloud-based storage, intelligent search, and automated document processing.'
      }
    ]
  },
  {
    id: 'automation',
    title: 'Automation Solutions',
    icon: <FileCode size={28} className="text-mindsync-teal" />,
    description: 'Eliminate repetitive tasks and streamline operations with intelligent automation tools designed for your specific needs.',
    benefits: [
      'Recover thousands of work hours per month',
      'Ensure consistent process execution and quality',
      'Scale operations without proportionally adding staff',
      'Reduce operational costs while improving service delivery'
    ],
    offerings: [
      {
        title: 'CRM Automation',
        description: 'Automated customer relationship management workflows and lead nurturing.'
      },
      {
        title: 'Sales Tools',
        description: 'Proposal generation, contract management, and sales analytics automation.'
      },
      {
        title: 'Project Management Automation',
        description: 'Task assignment, progress tracking, and reporting automation.'
      },
      {
        title: 'Marketing Automation',
        description: 'Campaign execution, social media management, and performance analytics.'
      }
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting',
    icon: <LineChart size={28} className="text-mindsync-teal" />,
    description: 'Strategic guidance to optimize your sales processes, operations, and organizational structure for maximum growth.',
    benefits: [
      'Identify and eliminate bottlenecks in your business processes',
      'Develop scalable systems that support business growth',
      'Create data-driven strategies based on industry best practices',
      'Align technology investments with business objectives'
    ],
    offerings: [
      {
        title: 'Sales Process Optimization',
        description: 'Analysis and redesign of sales funnels and customer acquisition strategies.'
      },
      {
        title: 'HR Structure Development',
        description: 'Organization design, role definition, and talent management frameworks.'
      },
      {
        title: 'Business Systems Architecture',
        description: 'Design of integrated business systems and technology infrastructure.'
      },
      {
        title: 'Growth Strategy',
        description: 'Market analysis, competitive positioning, and growth planning.'
      }
    ]
  },
  {
    id: 'brand-design',
    title: 'Brand Design & Print',
    icon: <Calendar size={28} className="text-mindsync-teal" />,
    description: 'Professional branding and marketing materials that communicate your value proposition and strengthen customer trust.',
    benefits: [
      'Establish a cohesive professional brand identity',
      'Build instant credibility with prospects and partners',
      'Create consistent customer experiences across touchpoints',
      'Express your unique value proposition visually'
    ],
    offerings: [
      {
        title: 'Logo & Brand Identity',
        description: 'Custom logo design, color palettes, typography, and brand guidelines.'
      },
      {
        title: 'Company Profile',
        description: 'Professional company presentations and digital brochures.'
      },
      {
        title: 'Business Stationery',
        description: 'Letterheads, envelopes, and email signatures with consistent branding.'
      },
      {
        title: 'Business Cards',
        description: 'Professional card design and printing with premium materials.'
      }
    ]
  },
  {
    id: 'team-training',
    title: 'Team Training',
    icon: <Users size={28} className="text-mindsync-teal" />,
    description: 'Empower your team with the skills needed to leverage new systems and technologies for optimal business outcomes.',
    benefits: [
      'Maximize return on technology investments',
      'Reduce resistance to new systems and processes',
      'Build internal capabilities for ongoing improvement',
      'Ensure consistent implementation of best practices'
    ],
    offerings: [
      {
        title: 'System User Training',
        description: 'Hands-on training for employees on new software and systems.'
      },
      {
        title: 'Process Implementation',
        description: 'Training on new business processes and workflows.'
      },
      {
        title: 'Management Dashboards',
        description: 'Training on how to interpret and act on business intelligence.'
      },
      {
        title: 'Change Management',
        description: 'Techniques for successful organizational change implementation.'
      }
    ]
  }
];

const Services = () => {
  const { serviceId } = useParams();
  const [activeService, setActiveService] = useState(servicesData[0]);
  
  useEffect(() => {
    if (serviceId) {
      const service = servicesData.find(s => s.id === serviceId);
      if (service) {
        setActiveService(service);
      }
    }

    document.title = serviceId ? 
      `${activeService.title} | Mindsync AI Consult` : 
      "Our Services | Mindsync AI Consult";
  }, [serviceId, activeService.title]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-mindsync-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Intelligent Solutions for Modern Businesses
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                We create custom AI systems and automation solutions that solve real business problems and drive measurable growth.
              </p>
            </div>
          </div>
        </div>

        {/* Service Navigation */}
        <div className="bg-mindsync-gray border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center py-2 overflow-x-auto whitespace-nowrap">
              {servicesData.map((service) => (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className={`px-5 py-3 text-sm md:text-base font-medium transition-colors ${
                    activeService.id === service.id
                      ? 'text-mindsync-teal border-b-2 border-mindsync-teal'
                      : 'text-mindsync-gray-dark hover:text-mindsync-blue'
                  }`}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Service Content */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-7/12">
                <div className="flex items-center mb-6">
                  <div className="bg-mindsync-gray rounded-lg w-16 h-16 flex items-center justify-center mr-4">
                    {activeService.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-mindsync-blue">{activeService.title}</h2>
                </div>

                <p className="text-lg text-mindsync-gray-dark mb-8">
                  {activeService.description}
                </p>

                <h3 className="text-xl font-bold text-mindsync-blue mb-4">What We Deliver:</h3>
                <ul className="mb-8 space-y-3">
                  {activeService.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-mindsync-teal/20 text-mindsync-teal flex items-center justify-center mr-3 mt-1">
                        <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 4L4.5 7.5L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-5/12">
                <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
                  <h3 className="text-xl font-bold text-mindsync-blue mb-6">
                    {activeService.title} Offerings
                  </h3>
                  
                  <div className="space-y-6">
                    {activeService.offerings.map((offering, index) => (
                      <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-bold text-mindsync-blue mb-2">
                          {offering.title}
                        </h4>
                        <p className="text-mindsync-gray-dark">
                          {offering.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Button className="w-full btn-primary">
                      Request a Demo
                    </Button>
                    <p className="text-center text-sm text-mindsync-gray-dark mt-4">
                      No commitment required. See how we can help.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Preview (if available) */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold text-mindsync-blue mb-8">
                See How We've Helped Similar Businesses
              </h3>
              
              <div className="bg-mindsync-gray rounded-xl overflow-hidden shadow-md">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" 
                      alt="Case study"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-10 md:w-2/3">
                    <div className="text-sm text-mindsync-teal font-medium mb-2">
                      Case Study: {activeService.title}
                    </div>
                    <h4 className="text-xl font-bold text-mindsync-blue mb-4">
                      How We Helped a Company Increase Revenue by 35% with Intelligent Systems
                    </h4>
                    <p className="text-mindsync-gray-dark mb-6">
                      Learn how our {activeService.title.toLowerCase()} solution transformed operations and drove significant growth for a business like yours.
                    </p>
                    <Link 
                      to="/case-studies/sample" 
                      className="inline-flex items-center text-mindsync-teal font-medium hover:text-mindsync-blue transition-colors"
                    >
                      Read the full case study <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-mindsync-blue py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to transform your business?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss how our {activeService.title.toLowerCase()} can help you achieve your business goals.
            </p>
            <Button className="bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-medium px-8 py-4 rounded-lg text-lg">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Services;
