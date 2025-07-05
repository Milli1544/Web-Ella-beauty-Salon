import React from "react";
import { Link } from "react-router-dom";
import {
  Scissors,
  Instagram,
  Facebook,
  MessageCircle,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-2 text-xl font-bold"
            >
              <Scissors className="h-8 w-8 text-yellow-500" />
              <span>Elite Cuts</span>
            </Link>
            <p className="text-gray-300 text-sm">
              Professional hair salon specializing in men's grooming and women's
              styling. Expert stylists delivering sharp looks with precision and
              care.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-gray-300 hover:text-yellow-500 transition-colors"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Men's Haircuts</li>
              <li>Beard Trimming</li>
              <li>Skin Fades</li>
              <li>Women's Blowouts</li>
              <li>Hair Braiding</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-yellow-500 mt-0.5" />
                <span className="text-gray-300">
                  939 Bloor St W<br />
                  Toronto, ON M6H 1L5
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-yellow-500" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 text-yellow-500 mt-0.5" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 9AM-8PM</div>
                  <div>Sat: 9AM-6PM</div>
                  <div>Sun: 10AM-5PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Elite Cuts. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="#" className="hover:text-yellow-500 transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-yellow-500 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
