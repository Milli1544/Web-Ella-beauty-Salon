import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Clock, Heart, ArrowRight } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Marcus Thompson",
      role: "Master Barber",
      experience: "12 years",
      specialty: "Classic cuts & fades",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sarah Johnson",
      role: "Senior Stylist",
      experience: "8 years",
      specialty: "Blowouts & braiding",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "David Martinez",
      role: "Beard Specialist",
      experience: "6 years",
      specialty: "Beard grooming & shaves",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "1000+", label: "Happy Clients" },
    { number: "4.9", label: "Average Rating" },
    { number: "7", label: "Days a Week" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Elite Cuts</h1>
          <p className="text-xl text-gray-300">
            Where expert barbers and skilled stylists unite under one roof
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Elite Cuts was born from a simple yet revolutionary idea: what if the best barbers 
                and top stylists worked together in one premium location? Founded in 2010, we've 
                created a unique space where traditional barbering meets modern styling.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our founder, Marcus Thompson, realized that both men and women deserved access to 
                specialized expertise. Rather than choosing between a traditional barber shop or 
                a hair salon, clients could experience the best of both worlds.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to serve our community with a team of skilled professionals 
                who are passionate about their craft. Every cut, every style, and every client 
                interaction reflects our commitment to excellence.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-500">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our salon interior"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-500 p-4 rounded-lg">
                <Award className="h-8 w-8 text-gray-900" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Craftsmanship</h3>
              <p className="text-gray-600">
                Our team brings together decades of experience in both traditional barbering 
                and modern styling techniques, ensuring every client receives expert care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Service</h3>
              <p className="text-gray-600">
                We believe every client is unique. That's why we take the time to understand 
                your style preferences and lifestyle needs before making any recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modern Convenience</h3>
              <p className="text-gray-600">
                From online booking to flexible scheduling, we've modernized the salon experience 
                while maintaining the personal touch that makes us special.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Skilled professionals dedicated to making you look and feel your best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-yellow-500 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.experience} experience</p>
                <p className="text-gray-600 text-sm">Specialty: {member.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes Us Different
            </h2>
            <p className="text-lg text-gray-300">
              Our unique approach to hair care and styling
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Dual Expertise</h3>
              <p className="text-gray-300">
                We're the only salon in the area that combines traditional barbering with 
                modern styling. Whether you need a classic fade or an elegant updo, our 
                specialists have you covered.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Clean Environment</h3>
              <p className="text-gray-300">
                Our modern facility is designed with hygiene and comfort in mind. We maintain 
                the highest standards of cleanliness and use only professional-grade products.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
              <p className="text-gray-300">
                Every client receives a personalized consultation to ensure their style 
                matches their face shape, hair type, and lifestyle needs.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Continuing Education</h3>
              <p className="text-gray-300">
                Our team regularly attends workshops and training sessions to stay current 
                with the latest trends and techniques in hair styling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Experience the Elite Cuts Difference
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Join thousands of satisfied clients who trust us with their hair
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

export default About;