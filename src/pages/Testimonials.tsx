import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      service: "Men's Fade",
      review: "Best fade I've ever gotten! The attention to detail is incredible. Marcus took the time to understand exactly what I wanted and delivered perfectly. I've been coming here for 2 years now and wouldn't go anywhere else.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2 weeks ago"
    },
    {
      name: "Sarah Williams",
      service: "Bridal Styling",
      review: "Sarah did my hair for my wedding and it was absolutely perfect! She listened to my vision and created something even better than I imagined. The style lasted all day and looked amazing in photos. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "1 month ago"
    },
    {
      name: "David Chen",
      service: "Beard Trim",
      review: "Professional service and great atmosphere. David really knows his craft when it comes to beard grooming. The hot towel treatment was incredibly relaxing. This place has become my go-to for all my grooming needs.",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "3 weeks ago"
    },
    {
      name: "Emily Rodriguez",
      service: "Blowout",
      review: "I love coming here for my regular blowouts. The stylists are skilled and the results are always consistent. My hair looks salon-fresh every time. The booking system is also very convenient.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "1 week ago"
    },
    {
      name: "James Thompson",
      service: "Classic Cut",
      review: "Old school barbering with modern techniques. The barbers here really know their craft. I've been getting classic cuts for years and these guys do it better than anyone. Clean shop, friendly staff.",
      rating: 5,
      image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2 weeks ago"
    },
    {
      name: "Lisa Park",
      service: "Hair Treatment",
      review: "My hair was damaged from years of coloring and treatments. The deep conditioning treatment here has completely transformed my hair. It's healthy, shiny, and feels amazing. Thank you!",
      rating: 5,
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "3 weeks ago"
    }
  ];

  const stats = [
    { number: "500+", label: "5-Star Reviews" },
    { number: "4.9", label: "Average Rating" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "1000+", label: "Happy Clients" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-gray-300">
            Hear what our satisfied clients have to say
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.service}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-gray-300" />
                  <p className="text-gray-600 italic pl-4">{testimonial.review}</p>
                </div>
                
                <div className="mt-4 text-sm text-gray-500">
                  {testimonial.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Platforms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Us on Review Platforms
            </h2>
            <p className="text-lg text-gray-600">
              Read more reviews and share your experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">4.9/5</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Google Reviews</div>
              <p className="text-gray-600 mb-4">Based on 250+ reviews</p>
              <a
                href="#"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Read Google Reviews
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">4.8/5</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Yelp</div>
              <p className="text-gray-600 mb-4">Based on 180+ reviews</p>
              <a
                href="#"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Read Yelp Reviews
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-yellow-500 mb-2">5.0/5</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Facebook</div>
              <p className="text-gray-600 mb-4">Based on 120+ reviews</p>
              <a
                href="#"
                className="inline-flex items-center text-yellow-500 hover:text-yellow-600 font-medium"
              >
                Read Facebook Reviews
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="h-12 w-12 text-yellow-500 mx-auto mb-6" />
          <blockquote className="text-xl md:text-2xl font-light mb-6">
            "Elite Cuts has completely changed my opinion about hair salons. The team is professional, 
            skilled, and genuinely cares about their clients. Whether I need a quick trim or a complete 
            makeover, they always deliver exceptional results."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Featured client"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <div className="font-semibold">Rachel Anderson</div>
              <div className="text-yellow-500 text-sm">Regular Client since 2020</div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-lg text-gray-600">
              Had a great experience? We'd love to hear from you!
            </p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="reviewName" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="reviewName"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="reviewService" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Received
                </label>
                <select
                  id="reviewService"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                >
                  <option>Select a service</option>
                  <option>Men's Haircut</option>
                  <option>Women's Styling</option>
                  <option>Beard Grooming</option>
                  <option>Special Event</option>
                </select>
              </div>
            </div>
            
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-2">
                Rating
              </label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-8 w-8 text-gray-300 hover:text-yellow-500 cursor-pointer" />
                ))}
              </div>
            </div>
            
            <div>
              <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-2">
                Your Review
              </label>
              <textarea
                id="reviewText"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Tell us about your experience..."
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Book your appointment today and experience the Elite Cuts difference
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Appointment
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;