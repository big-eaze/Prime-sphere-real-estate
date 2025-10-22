"use client"

import React from "react";
import { Mail, Phone, MapPin, Printer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-12 ml-0 lg:ml-75 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            We are committed to providing the most personalized real estate
            services from listing to close. We have exceptional results which
            are confirmed by the number of clients we serve.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Site Map</a></li>
            <li><a href="#" className="hover:text-white">Support Center</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Rentals</a></li>
            <li><a href="#" className="hover:text-white">Sales</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Our Blog</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              1001 4th Ave, Seattle, WA, USA
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              Office: (305) 352-4765
            </li>
            <li className="flex items-center gap-2">
              <Printer size={16} />
              Fax: (305) 361-6577
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              office@mysite.com
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Prime Sphere Real Estate. All rights reserved.
      </div>
    </footer>
  );
}
