import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleWhatsAppClick = () => {
    // Replace this with your actual WhatsApp number
    const phoneNumber = '1234567890';
    const message = 'Hi! I would like to learn more about Copado.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');

  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 w-48">
          <p className="text-sm text-gray-700">Chat with us on WhatsApp! 👋</p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default WhatsAppFloat;