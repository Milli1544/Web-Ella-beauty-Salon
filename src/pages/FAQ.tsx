import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "Do you cut all hair types?",
          answer: "Yes! Our skilled stylists are experienced with all hair types and textures. We work with straight, wavy, curly, and coily hair, and we're trained in techniques for both men's and women's styling needs."
        },
        {
          question: "Do I need an appointment or do you take walk-ins?",
          answer: "We accept both appointments and walk-ins. However, we highly recommend booking an appointment to ensure availability and to guarantee your preferred stylist and time slot. Walk-ins are served based on availability."
        },
        {
          question: "Can I book the same stylist every time?",
          answer: "Absolutely! We encourage building relationships with our stylists. You can request a specific stylist when booking your appointment, and we'll do our best to accommodate your preference."
        },
        {
          question: "What if I'm not happy with my service?",
          answer: "Your satisfaction is our priority. If you're not completely happy with your service, please let us know within 48 hours and we'll work with you to make it right, including complimentary touch-ups if needed."
        }
      ]
    },
    {
      category: "Booking & Scheduling",
      questions: [
        {
          question: "How far in advance should I book?",
          answer: "For regular services, we recommend booking 1-2 weeks in advance. For special events, weddings, or holiday seasons, we suggest booking 3-4 weeks ahead to ensure availability."
        },
        {
          question: "What's your cancellation policy?",
          answer: "We require 24-hour notice for cancellations. Same-day cancellations or no-shows may be subject to a cancellation fee. We understand emergencies happen, so please call us to discuss your situation."
        },
        {
          question: "Can I change my appointment time?",
          answer: "Yes, you can reschedule your appointment up to 24 hours in advance. You can call us, use our online booking system, or speak with our front desk team to make changes."
        },
        {
          question: "Do you offer online booking?",
          answer: "Yes! You can book appointments online through our website 24/7. We also offer booking through Square and Calendly for your convenience."
        }
      ]
    },
    {
      category: "Services & Pricing",
      questions: [
        {
          question: "How long do appointments typically take?",
          answer: "Appointment times vary by service: Men's cuts (30-45 min), Women's styling (45-90 min), Beard grooming (20-30 min), and Special event styling (90-120 min). We'll give you an estimated time when you book."
        },
        {
          question: "Do you offer package deals?",
          answer: "Yes! We offer combination packages like cut + beard trim for men, and styling + treatment packages for women. Ask about our loyalty program for regular clients."
        },
        {
          question: "What products do you use?",
          answer: "We use only professional-grade products from trusted brands. Our stylists can recommend the best products for your hair type and will explain what they're using during your service."
        },
        {
          question: "Do you sell hair care products?",
          answer: "Yes, we carry a selection of professional hair care products that our stylists recommend. These are the same high-quality products we use in our services."
        }
      ]
    },
    {
      category: "Payment & Policies",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, all major credit cards, and digital payments including Apple Pay, Google Pay, and contactless payments."
        },
        {
          question: "Do you offer gift cards?",
          answer: "Yes! Gift cards are available for purchase in any amount and make perfect gifts. They can be used for any of our services and don't expire."
        },
        {
          question: "What's your tipping policy?",
          answer: "Tipping is appreciated but not required. If you're happy with your service, a 15-20% tip is standard. You can add tips to your card payment or leave cash."
        },
        {
          question: "Do you offer military or student discounts?",
          answer: "Yes! We offer a 10% discount for active military personnel and students with valid ID. Ask about our discount when booking your appointment."
        }
      ]
    }
  ];

  const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
    const isOpen = openItems.includes(index);
    
    return (
      <div className="border border-gray-200 rounded-lg mb-4">
        <button
          onClick={() => toggleItem(index)}
          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        >
          <span className="font-medium text-gray-900">{question}</span>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="px-6 pb-4">
            <p className="text-gray-600">{answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-yellow-500">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 100 + questionIndex;
                  return (
                    <FAQItem
                      key={globalIndex}
                      question={item.question}
                      answer={item.answer}
                      index={globalIndex}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're here to help! Contact us directly and we'll get back to you quickly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
            
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors duration-200"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helpful Tips
            </h2>
            <p className="text-lg text-gray-600">
              Make the most of your Elite Cuts experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gray-900">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Come Prepared
              </h3>
              <p className="text-gray-600 text-center">
                Bring reference photos of styles you like, and come with clean, dry hair 
                unless specifically instructed otherwise.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gray-900">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Communicate Clearly
              </h3>
              <p className="text-gray-600 text-center">
                Be specific about your preferences and lifestyle. The more we know, 
                the better we can tailor your style to fit your needs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-gray-900">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                Book Ahead
              </h3>
              <p className="text-gray-600 text-center">
                Schedule your next appointment before you leave to ensure you get 
                your preferred time slot and stylist.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;