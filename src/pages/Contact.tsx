import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    alert(
      "Thank you for your message! We will get back to you within 24 hours."
    );
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300">
            Get in touch with our team - we're here to help
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-600">
                939 Bloor St W<br />
                Toronto, ON M6H 1L5
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">
                <a href="tel:+15551234567" className="hover:text-yellow-500">
                  (555) 123-4567
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:info@elitecuts.com"
                  className="hover:text-yellow-500"
                >
                  info@elitecuts.com
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hours
              </h3>
              <div className="text-gray-600 text-sm">
                <div>Mon-Fri: 9AM-8PM</div>
                <div>Sat: 9AM-6PM</div>
                <div>Sun: 10AM-5PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    939 Bloor St W
                    <br />
                    Toronto, ON M6H 1L5
                  </p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium rounded-lg transition-colors duration-200"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Easy to Find
            </h2>
            <p className="text-lg text-gray-600">
              We're conveniently located in the heart of Toronto's West End
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">🚗</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                By Car
              </h3>
              <p className="text-gray-600">
                Free parking available in the building garage. Street parking
                also available with 2-hour limits.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">🚇</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                By Transit
              </h3>
              <p className="text-gray-600">
                Located near Bloor-Dundas West Station. Multiple bus lines stop
                within walking distance.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-900">🚶</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Walking
              </h3>
              <p className="text-gray-600">
                Easily accessible from anywhere in the West End. Ground floor
                location with wheelchair access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Questions?
            </h2>
            <p className="text-lg text-gray-600">
              Check our FAQ for common questions and answers
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you accept walk-ins?
                </h3>
                <p className="text-gray-600">
                  We accept walk-ins based on availability, but we recommend
                  booking an appointment to guarantee your preferred time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept cash, credit cards, and digital payments including
                  Apple Pay and Google Pay.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How far in advance should I book?
                </h3>
                <p className="text-gray-600">
                  We recommend booking 1-2 weeks in advance for regular
                  services, and 3-4 weeks for special events.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer group bookings?
                </h3>
                <p className="text-gray-600">
                  Yes! We offer group bookings for parties, weddings, and
                  corporate events. Contact us for special rates.
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="/faq"
                className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors duration-200"
              >
                View All FAQs
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
