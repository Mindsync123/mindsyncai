
import { Phone } from 'lucide-react';

const WhatsappButton = () => {
  return (
    <a
      href="https://wa.me/15551234567" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition-all hover:scale-110"
      aria-label="Contact via WhatsApp"
    >
      <Phone size={24} />
    </a>
  );
};

export default WhatsappButton;
