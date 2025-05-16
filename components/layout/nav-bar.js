"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Road Works", href: "/services/road-works" },
  { label: "Infrastructure Works", href: "/services/infrastructure-works" },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const lastScrollY = useRef(0);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(
        currentScrollY < lastScrollY.current || currentScrollY < 100
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full bg-[#fbbf27] z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex justify-between items-center h-16">
            <Image
              src="/logo/road-logo.svg"
              alt="Heavy construction equipment working on a road project at sunset"
              width={100}
              height={100}
              objectFit="cover"
            />

            <span className="text-[#0A2647] text-2xl font-bold">
              AlphaaRoad
            </span>
          </div>
          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[#0A2647] text-m font-bold hover:text-[#ffffff]"
              >
                {label}
              </Link>
            ))}

            <div className="relative group" ref={servicesRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="text-[#0A2647] hover:text-[#ffffff] flex items-center text-m font-bold"
                aria-expanded={isServicesOpen}
              >
                Services <i className="fas fa-chevron-down ml-1 text-sm" />
              </button>

              <div
                className={`absolute -left-17 mt-2 w-48 bg-[#ffffff] rounded-md shadow-lg py-1 transition-opacity duration-150 ${
                  isServicesOpen ? "block" : "hidden"
                }`}
              >
                {serviceLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="block px-4 py-2 text-sm text-[#0A2647] font-bold hover:text-[#fbbf27]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0A2647]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="block text-[#0A2647] hover:text-[#ffffff] py-2"
                >
                  {label}
                </Link>
              ))}

              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-[#0A2647] hover:text-[#FFB800] py-2"
                  aria-expanded={isServicesOpen}
                >
                  Services{" "}
                  <i
                    className={`fas fa-chevron-${isServicesOpen ? "up" : "down"} ml-1 text-sm`}
                  />
                </button>

                {isServicesOpen && (
                  <div className="pl-4">
                    {serviceLinks.map(({ label, href }) => (
                      <Link
                        key={label}
                        href={href}
                        className="block text-[#0A2647] hover:text-[#FFB800] py-2"
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
