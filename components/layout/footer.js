import React from "react";
import Link from "next/link";

const footer = () => {
  return (
    <footer className="bg-[#0A2647] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-[#FFB800] text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              Excellence in infrastructure and building maintenance since 2015.
              We deliver quality solutions for roads, buildings, and industrial
              projects.
            </p>
            <div className="flex space-x-4">
              <a className="text-[#FFB800] hover:text-[#ffc93c]">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-[#FFB800] hover:text-[#ffc93c]">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-[#FFB800] hover:text-[#ffc93c]">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-[#FFB800] hover:text-[#ffc93c]">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#FFB800] text-xl font-bold mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/road-works"
                  className="text-gray-300 hover:text-[#FFB800]"
                >
                  Road Construction
                </Link>
              </li>
              <li>
                <p className="text-gray-300 hover:text-[#FFB800]">
                  Building Maintenance
                </p>
              </li>
              <li>
                <Link
                  href="/services/infrastructure-works"
                  className="text-gray-300 hover:text-[#FFB800]"
                >
                  Infrastructure Projects
                </Link>
              </li>
              <li>
                <p className="text-gray-300 hover:text-[#FFB800]">
                  Facility Management
                </p>
              </li>
              <li>
                <p className="text-gray-300 hover:text-[#FFB800]">
                  Industrial Solutions
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFB800] text-xl font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#FFB800]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#FFB800]"
                >
                  Projects
                </Link>
              </li>
              {/* <li>
                <a href="#" className="text-gray-300 hover:text-[#FFB800]">
                  News & Updates
                </a>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#FFB800]"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#FFB800] text-xl font-bold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-[#FFB800] mt-1 mr-3"></i>
                <span className="text-gray-300">
                  123 Construction Ave, Building District, City, 12345
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-[#FFB800] mr-3"></i>
                <span className="text-gray-300">+974 3367 7921</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-[#FFB800] mr-3"></i>
                <span className="text-gray-300">info@artcqatar.com</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-[#FFB800] mr-3"></i>
                <span className="text-gray-300">
                  Mon - Fri: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-row justify-center items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 AlphaaRoad Trading and Construction. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
