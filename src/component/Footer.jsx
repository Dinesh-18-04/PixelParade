import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 md:p-8 text-xs md:text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4 md:gap-8">
        
        {/* Brand */}
        <div className="text-center md:text-left mb-2 md:mb-0">
          <h2 className="text-lg md:text-xl font-bold text-white">PixelParade</h2>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
            <li><a href="/" className="hover:text-red-600">Home</a></li>
            <li><a href="/gallery" className="hover:text-red-600">Gallery</a></li>
            <li><a href="/contact" className="hover:text-red-600">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="text-center md:text-left">
          <div className="flex gap-2 md:gap-3">
            <a href="#" className="hover:text-red-600"><FaInstagram /></a>
            <a href="#" className="hover:text-red-600"><FaFacebook /></a>
            <a href="#" className="hover:text-red-600"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-2 md:mt-4 border-t border-gray-700 pt-2">
        &copy; {new Date().getFullYear()} PixelParade. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
