import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const services = [
    "Men's Classic Cut - $35",
    "Men's Skin Fade - $45",
    "Men's Beard Trim - $25",
    "Men's Hot Towel Shave - $50",
    "Women's Blowout - $65",
    "Women's Hair Braiding - $85",
    "Women's Hair Treatment - $75",
    "Women's Event Styling - $150"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking submitted:', formData);
    alert('Thank you for your booking request! We will contact you within 24 hours to confirm your appointment.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-300">
            Schedule your visit with our expert stylists
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="inline h-4 w-4 mr-2" />
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
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="inline h-4 w-4 mr-2" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="inline h-4 w-4 mr-2" />
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

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Choose Service *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline h-4 w-4 mr-2" />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="inline h-4 w-4 mr-2" />
                  Special Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Any special requests or notes for your stylist..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Booking Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">
                Book online 24/7 or call us during business hours for immediate assistance
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Hours</h3>
              <p className="text-gray-600">
                Open 7 days a week with evening and weekend appointments available
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Confirmation</h3>
              <p className="text-gray-600">
                We'll contact you within 24 hours to confirm your appointment details
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Booking Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prefer to Book Another Way?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We offer multiple convenient booking options for your convenience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (555) 123-4567
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors duration-200"
            >
              Book via Square
            </a>
            
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg transition-colors duration-200"
            >
              Book via Calendly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;