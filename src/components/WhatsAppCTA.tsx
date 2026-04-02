import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppCTA = () => {
  return (
    <motion.a
      href="https://wa.me/919633626656"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

export default WhatsAppCTA;
