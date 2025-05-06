
import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { Button } from '@/components/ui/button';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Mindsync AI Consult";
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-mindsync-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                About Mindsync AI Consult
              </h1>
              <p className="text-xl text-gray-200 mb-0">
                We're on a mission to transform businesses through intelligent systems and scalable growth strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
                <h2 className="text-3xl font-bold text-mindsync-blue mb-6">Our Story</h2>
                <p className="text-mindsync-gray-dark mb-6">
                  Mindsync AI Consult was founded in 2018 by a team of technology experts and business consultants who shared a vision: to make advanced AI and automation solutions accessible to businesses of all sizes.
                </p>
                <p className="text-mindsync-gray-dark mb-6">
                  What began as a small consulting firm has grown into a full-service technology partner that helps businesses transform their operations, automate complex processes, and achieve sustainable growth through intelligent systems.
                </p>
                <p className="text-mindsync-gray-dark">
                  Today, we serve clients across industries, from regional banks and healthcare providers to manufacturers and retail chains. Our focus remains on delivering practical, results-driven solutions that solve real business problems and create measurable value.
                </p>
              </div>
              
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="bg-mindsync-gray rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
                      alt="Mindsync team"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-5 bg-mindsync-teal text-white p-4 rounded-lg shadow-md">
                    <p className="font-bold">Founded 2018</p>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-20 bg-mindsync-gray">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-mindsync-blue mb-6">Our Mission & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-mindsync-blue mb-4">Our Mission</h3>
                <p className="text-mindsync-gray-dark">
                  To empower businesses with intelligent systems and automation solutions that solve complex problems, 
                  eliminate inefficiencies, and create sustainable growth opportunities.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-mindsync-blue mb-4">Our Vision</h3>
                <p className="text-mindsync-gray-dark">
                  To become the leading provider of AI-powered business solutions, 
                  helping companies across the globe transform their operations and achieve their full potential 
                  through intelligent technology.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-mindsync-blue mb-6 text-center">Our Core Values</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mindsync-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-mindsync-blue mb-2">Results-Driven</h4>
                    <p className="text-mindsync-gray-dark">
                      We focus on delivering measurable business outcomes and tangible ROI for every client.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mindsync-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 2V4" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 20V22" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M4.93 4.93L6.34 6.34" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M17.66 17.66L19.07 19.07" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M2 12H4" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20 12H22" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M6.34 17.66L4.93 19.07" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19.07 4.93L17.66 6.34" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-mindsync-blue mb-2">Innovation</h4>
                    <p className="text-mindsync-gray-dark">
                      We continuously explore emerging technologies to provide cutting-edge solutions for our clients.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-mindsync-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="#06B6D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-mindsync-blue mb-2">Partnership</h4>
                    <p className="text-mindsync-gray-dark">
                      We build lasting relationships with our clients, becoming trusted advisors in their growth journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-mindsync-blue mb-6">Meet Our Leadership Team</h2>
              <p className="text-lg text-mindsync-gray-dark max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, software development, business strategy, and industry-specific knowledge.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "David Zhang",
                  role: "Founder & CEO",
                  bio: "Former AI research lead with 15 years of experience in machine learning and business systems.",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                },
                {
                  name: "Sarah Johnson",
                  role: "Chief Technology Officer",
                  bio: "Expert in AI system architecture with experience building enterprise-scale solutions.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                },
                {
                  name: "Marcus Rivera",
                  role: "Head of Consulting",
                  bio: "Business transformation specialist with expertise in process optimization and change management.",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="bg-mindsync-gray rounded-xl overflow-hidden shadow-md">
                  <div className="h-64">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-mindsync-blue mb-1">{member.name}</h3>
                    <p className="text-mindsync-teal font-medium mb-4">{member.role}</p>
                    <p className="text-mindsync-gray-dark">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-mindsync-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Schedule a discovery call to discuss your business challenges and how we can help you overcome them.
            </p>
            <Button className="bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-medium px-8 py-4 rounded-lg text-lg">
              Meet With Us
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default About;
