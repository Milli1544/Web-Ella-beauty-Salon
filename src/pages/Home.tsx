import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Scissors, Users, Clock, ArrowRight } from 'lucide-react';

const Home = () => {
  const services = [
    {
      title: "Men's Haircuts",
      description: "Classic cuts, modern styles, and precision fades",
      image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Beard Grooming",
      description: "Expert beard trimming and hot towel shaves",
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Women's Styling",
      description: "Blowouts, braiding, and special occasion styling",
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const testimonials = [
    {
      name: "Marcus Johnson",
      review: "Best fade I've ever gotten. The attention to detail is incredible.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Sarah Williams",
      review: "Amazing blowout! My hair looked perfect for my wedding.",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Chen",
      review: "Professional service and great atmosphere. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1920")'
          }}
        ></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div className="max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Sharp Looks, <span className="text-yellow-500">Expert Hands</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Men's Grooming and Women's Styling by Top Hair Experts
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-yellow-500 hover:bg-yellow-400 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Book Your Cut
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Where Tradition Meets Innovation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Elite Cuts, we've created a unique space where expert barbers and skilled stylists 
                work together to deliver exceptional results. With over 15 years of combined experience, 
                we specialize in both classic men's grooming and modern women's styling.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our mission is simple: provide every client with a personalized experience that leaves 
                them looking and feeling their absolute best. Whether you need a sharp fade or an elegant 
                blowout, our team has the expertise to exceed your expectations.
              </p>
              <div className="flex space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">1000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-500">4.9</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional barber at work"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-gray-600">
              Expert care for every style and occasion
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-yellow-500 hover:text-yellow-600 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real reviews from satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.review}"</p>
                <div className="flex items-center justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Work Speaks for Itself
            </h2>
            <p className="text-lg text-gray-300">
              Browse our gallery of recent cuts and styles
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400",
              "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
            ].map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-gray-900 rounded-lg transition-colors duration-200"
            >
              View Full Gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready for Your Best Look Yet?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Book your appointment today and experience the Elite Cuts difference
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Your Cut
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;