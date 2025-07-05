import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const menServices = [
    {
      name: "Classic Cut",
      description: "Timeless haircuts with precision and attention to detail",
      duration: "30-45 min",
      price: "$35",
      image: "https://images.pexels.com/photos/1319461/pexels-photo-1319461.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Skin Fade",
      description: "Modern fade techniques for a clean, professional look",
      duration: "45-60 min",
      price: "$45",
      image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Beard Trim",
      description: "Expert beard shaping and trimming for the perfect finish",
      duration: "20-30 min",
      price: "$25",
      image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Hot Towel Shave",
      description: "Traditional straight razor shave with hot towel treatment",
      duration: "45-60 min",
      price: "$50",
      image: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const womenServices = [
    {
      name: "Blowout",
      description: "Professional styling for smooth, voluminous hair",
      duration: "45-60 min",
      price: "$65",
      image: "https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Hair Braiding",
      description: "Creative braiding styles for any occasion",
      duration: "60-90 min",
      price: "$85",
      image: "https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Hair Treatment",
      description: "Deep conditioning and restorative treatments",
      duration: "45-60 min",
      price: "$75",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Event Styling",
      description: "Special occasion styling for weddings and events",
      duration: "90-120 min",
      price: "$150",
      image: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const ServiceCard = ({ service }: { service: any }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
        <p className="text-gray-600 mb-4">{service.description}</p>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {service.duration}
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            {service.price}
          </div>
        </div>
        <Link
          to="/booking"
          className="w-full bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          Book Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300">
            Professional grooming and styling for every occasion
          </p>
        </div>
      </section>

      {/* Men's Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Men's Services
            </h2>
            <p className="text-lg text-gray-600">
              Expert grooming and classic cuts for the modern gentleman
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Women's Services
            </h2>
            <p className="text-lg text-gray-600">
              Professional styling and treatments for beautiful, healthy hair
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {womenServices.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Elite Cuts?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Stylists</h3>
              <p className="text-gray-600">
                Our team of skilled professionals brings years of experience to every cut
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenient Scheduling</h3>
              <p className="text-gray-600">
                Flexible appointment times to fit your busy schedule
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                Premium services at fair prices with no hidden fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Book Your Service?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Choose your preferred service and schedule your appointment today
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;