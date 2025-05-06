
import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsappButton from '@/components/ui/WhatsappButton';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { value: 'ai-systems', label: 'AI Systems' },
  { value: 'business-digitalization', label: 'Business Digitalization' },
  { value: 'automation', label: 'Automation Solutions' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'brand-design', label: 'Brand Design & Print' },
  { value: 'team-training', label: 'Team Training' },
  { value: 'other', label: 'Other' }
];

const businessTypes = [
  'Retail', 'Financial Services', 'Healthcare', 'Manufacturing',
  'Technology', 'Education', 'Real Estate', 'Professional Services', 'Other'
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    services: [],
    message: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us | Mindsync AI Consult";
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        services: [...formData.services, value]
      });
    } else {
      setFormData({
        ...formData,
        services: formData.services.filter(service => service !== value)
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="bg-mindsync-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-200 mb-0">
                Let's discuss how we can help your business grow with intelligent systems and automation.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-mindsync-gray rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-mindsync-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} className="text-mindsync-teal" />
                </div>
                <h3 className="text-xl font-bold text-mindsync-blue mb-2">Call Us</h3>
                <p className="text-mindsync-gray-dark mb-2">Mon-Fri, 9am-5pm PST</p>
                <a href="tel:+15551234567" className="text-mindsync-teal font-medium">
                  +1 (555) 123-4567
                </a>
              </div>
              
              <div className="bg-mindsync-gray rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-mindsync-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} className="text-mindsync-teal" />
                </div>
                <h3 className="text-xl font-bold text-mindsync-blue mb-2">Email Us</h3>
                <p className="text-mindsync-gray-dark mb-2">We'll respond within 24 hours</p>
                <a href="mailto:info@mindsyncai.com" className="text-mindsync-teal font-medium">
                  info@mindsyncai.com
                </a>
              </div>
              
              <div className="bg-mindsync-gray rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-mindsync-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-mindsync-teal" />
                </div>
                <h3 className="text-xl font-bold text-mindsync-blue mb-2">Visit Us</h3>
                <p className="text-mindsync-gray-dark mb-2">Headquarters</p>
                <address className="text-mindsync-gray-dark not-italic">
                  123 Business Ave, Suite 500<br />
                  San Francisco, CA 94107
                </address>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-7/12">
                <h2 className="text-2xl md:text-3xl font-bold text-mindsync-blue mb-8">Send Us a Message</h2>
                
                {formSubmitted ? (
                  <div className="bg-mindsync-teal/10 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-mindsync-teal/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-mindsync-teal" />
                    </div>
                    <h3 className="text-xl font-bold text-mindsync-blue mb-4">Thank You!</h3>
                    <p className="text-mindsync-gray-dark mb-6">
                      Your message has been sent successfully. A member of our team will be in touch with you shortly.
                    </p>
                    <Button 
                      onClick={() => setFormSubmitted(false)} 
                      className="btn-primary"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-mindsync-blue font-medium mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mindsync-teal focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-mindsync-blue font-medium mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mindsync-teal focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-mindsync-blue font-medium mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mindsync-teal focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-mindsync-blue font-medium mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mindsync-teal focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="businessType" className="block text-mindsync-blue font-medium mb-2">
                        Business Type
                      </label>
                      <select
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mindsync-teal focus:border-transparent"
                      >
                        <option value="">Select your business type</option>
                        {businessTypes.map((type, index) => (
                          <option key={index} value={type.toLowerCase()}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <p className="text-mindsync-blue font-medium mb-2">
                        Services You're Interested In *
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {serviceOptions.map((option) => (
                          <label key={option.value} className="flex items-center">
                            <input
                              type="checkbox"
                              name="services"
                              value={option.value}
                              onChange={handleServiceChange}
                              className="h-5 w-5 text-mindsync-teal rounded focus:ring-mindsync-teal"
                            />
                            <span className="ml-2 text-mindsync-gray-dark">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-mindsync-blue font-medium mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-mindsync-teal focus:border-transparent"
                        placeholder="Tell us about your business needs..."
                      ></textarea>
                    </div>

                    <Button type="submit" className="btn-primary w-full py-3">
                      Send Message
                    </Button>

                    <p className="text-sm text-mindsync-gray-dark text-center">
                      By submitting this form, you agree to our <a href="#" className="text-mindsync-teal">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>

              {/* Map */}
              <div className="lg:w-5/12">
                <h2 className="text-2xl md:text-3xl font-bold text-mindsync-blue mb-8">Our Location</h2>
                <div className="bg-mindsync-gray rounded-xl overflow-hidden h-80 shadow-md">
                  {/* Replace with actual map embed */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <p className="text-mindsync-gray-dark">
                      Map Embed Goes Here
                    </p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-mindsync-blue mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-mindsync-gray-dark">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-6 bg-mindsync-blue rounded-xl text-white">
                    <h3 className="font-bold text-xl mb-4">Schedule a Call</h3>
                    <p className="mb-6">
                      Prefer to speak directly? Schedule a discovery call with our team at a time that works for you.
                    </p>
                    <Button className="w-full bg-mindsync-teal hover:bg-mindsync-teal-light">
                      Book a Time
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsappButton />
    </div>
  );
};

export default Contact;
