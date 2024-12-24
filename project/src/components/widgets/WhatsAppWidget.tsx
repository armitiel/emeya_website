import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();
  const phoneNumber = '+48535448582';

  const t = language === 'pl' ? {
    title: 'Napisz do mnie',
    message: 'Witaj! W czym mogę Ci pomóc?',
    placeholder: 'Twoja wiadomość...',
    send: 'Wyślij wiadomość',
  } : {
    title: 'Message me',
    message: 'Hello! How can I help you?',
    placeholder: 'Your message...',
    send: 'Send message',
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const message = new FormData(form).get('message') as string;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    form.reset();
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
      
      <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
        {/* Chat Window */}
        {isOpen && (
          <div className="fixed md:absolute bottom-20 right-1/2 md:right-0 translate-x-1/2 md:translate-x-0 w-[calc(100vw-2rem)] md:w-80 max-w-[20rem] bg-white rounded-2xl shadow-xl animate-slideDown">
            {/* Header */}
            <div className="p-4 bg-primary rounded-t-2xl">
              <div className="flex items-center justify-between text-white">
                <h3 className="text-lg font-medium">{t.title}</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="p-4">
              <p className="text-gray-600 mb-4">{t.message}</p>
              <form onSubmit={handleSendMessage}>
                <textarea
                  name="message"
                  placeholder={t.placeholder}
                  className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                  rows={3}
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-light text-white font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.send}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary-light text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label={t.title}
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default WhatsAppWidget;