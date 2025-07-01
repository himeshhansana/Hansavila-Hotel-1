import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
export const Footer = () => {
  return <footer className="bg-emerald-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">Hasnavila</h3>
            <p className="mb-4 text-emerald-100">
              Experience luxury amidst the misty mountains of Nuwara Eliya. Your
              perfect retreat in the heart of Sri Lanka's tea country.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-emerald-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-emerald-100 hover:text-white transition-colors">
                  Our Rooms
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-emerald-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/nearby" className="text-emerald-100 hover:text-white transition-colors">
                  Nearby Attractions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>Gregory Lake Road, Nuwara Eliya, Sri Lanka</span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={20} className="mr-2 flex-shrink-0" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={20} className="mr-2 flex-shrink-0" />
                <span>info@hasnavila.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="mb-4 text-emerald-100">
              Subscribe to receive updates on special offers and events.
            </p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Your email" className="px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
              <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 transition-colors py-2 px-4 rounded">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-emerald-800 mt-8 pt-8 text-center text-emerald-200">
          <p>© {new Date().getFullYear()} Hasnavila. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};