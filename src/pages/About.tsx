import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

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
                We build intelligent systems that transform business operations and drive sustainable growth.
              </p>
            </div>
          </div>
        </div>

        {/* About Company */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6">Our Mission</h2>
                <p className="text-lg text-mindsync-gray-dark mb-6">
                  At Mindsync AI Consult, we believe that every business deserves access to transformative technology. Our mission is to bridge the gap between cutting-edge AI solutions and everyday business challenges.
                </p>
                <p className="text-lg text-mindsync-gray-dark mb-6">
                  We specialize in creating intelligent systems that automate repetitive tasks, uncover hidden insights in your data, and create seamless operational workflows that scale with your business.
                </p>
                <p className="text-lg text-mindsync-gray-dark">
                  Our team combines expertise in artificial intelligence, business process optimization, and industry-specific knowledge to deliver solutions that generate real, measurable results.
                </p>
              </div>
              
              <div>
                <div className="relative">
                  <div className="rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" 
                      alt="Mindsync Team Collaboration"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-5 -left-5 bg-mindsync-teal text-white p-4 rounded-lg shadow-md">
                    <p className="font-bold">Founded in Africa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-mindsync-gray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-16 text-center">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-mindsync-teal/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-mindsync-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mindsync-blue mb-4">Innovation</h3>
                <p className="text-mindsync-gray-dark">
                  We continuously explore emerging technologies and methodologies to ensure our clients receive cutting-edge solutions that keep them ahead of the curve.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-mindsync-teal/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-mindsync-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mindsync-blue mb-4">Transparency</h3>
                <p className="text-mindsync-gray-dark">
                  We believe in clear communication and setting realistic expectations. Our clients always know the status of their projects and the value being delivered.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-16 h-16 bg-mindsync-teal/10 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-mindsync-teal">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-mindsync-blue mb-4">Results-Oriented</h3>
                <p className="text-mindsync-gray-dark">
                  Our focus is on delivering measurable business outcomes, not just technology implementations. We measure our success by the impact on your bottom line.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6 text-center">Our Leadership Team</h2>
            <p className="text-lg text-mindsync-gray-dark mb-16 text-center max-w-3xl mx-auto">
              Meet the experts driving innovation and excellence at Mindsync AI Consult. 
              Our leadership team brings decades of combined experience in AI, business transformation, and digital solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Ayantayo Ibrahim",
                  role: "Founder & Lead Consultant",
                  bio: "Visionary leader with extensive experience in AI systems and business transformation.",
                  image: "/ayantayo-ibrahim.png"
                },
                {
                  name: "Bosede Ayantayo",
                  role: "Director of Operations",
                  bio: "Experienced operational leader with a proven track record in optimizing business processes.",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                },
                {
                  name: "Abiola Ayantayo",
                  role: "Technical Lead, AI Systems",
                  bio: "AI specialist with expertise in developing intelligent systems and automation solutions.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                }
              ].map((member, index) => (
                <div key={index} className="bg-mindsync-gray rounded-xl overflow-hidden shadow-md">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://via.placeholder.com/300x400?text=Image+Loading";
                      }}
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

        {/* Contact Information */}
        <section className="py-16 bg-mindsync-blue text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Get in Touch</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <MapPin size={28} className="text-mindsync-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Location</h3>
                <p className="text-gray-300">
                  Km7 Ikirun-Osogbo Road, <br />
                  Osun State, Nigeria
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Phone size={28} className="text-mindsync-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone Numbers</h3>
                <p className="text-gray-300">
                  +2349040117077 <br />
                  +2349069432190
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Mail size={28} className="text-mindsync-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-300">
                  MindSyncai.Africa@gmail.com
                </p>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <a 
                href="/contact" 
                className="inline-flex items-center bg-white hover:bg-opacity-90 text-mindsync-blue font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Contact Us <ArrowRight size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-mindsync-gray text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-mindsync-blue mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-mindsync-gray-dark mb-8 max-w-2xl mx-auto">
              Schedule a discovery call today to discuss how our intelligent systems can help your business scale and grow.
            </p>
            <a 
              href="https://calendly.com/mindsyncai-africa/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-mindsync-teal hover:bg-mindsync-teal-light text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Book a Discovery Call <ArrowRight size={16} className="ml-2" />
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default About;
