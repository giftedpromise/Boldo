"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Open_Sans, Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <header className="flex items-center justify-between md:justify-center lg:gap-[510px] md:gap-[40px] pt-[56px] relative px-6 sm:px-6 md:px-[40px] lg:px-[100px]">
        <div className="absolute right-0 top-0 w-1/2 h-screen overflow-hidden -z-10 hidden md:block">
          <Image
            src="/images/headerbg.png"
            alt="Background"
            fill
            className="object-fill w-[603px] h-[504px]"
            priority
          />
        </div>

        {/* Logo */}
        <div className="flex justify-between w-full items-center">
          <Image src="/images/Logo.png" alt="Logo" width={162} height={42} />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#0A2640]" />
            ) : (
              <Menu className="w-6 h-6 text-[#0A2640]" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-[40px]">
          <a
            href="#"
            className={`${openSans.className} text-[16px] font-semibold text-[#0A2640] hover:text-[#1B3A6F] hover:underline transition duration-300`}
          >
            Product
          </a>
          <a
            href="#"
            className={`${openSans.className} text-[16px] font-semibold text-[#0A2640] hover:text-[#1B3A6F] hover:underline transition duration-300`}
          >
            Services
          </a>
          <a
            href="#"
            className={`${openSans.className} text-[16px] font-semibold text-[#0A2640] hover:text-[#1B3A6F] hover:underline transition duration-300`}
          >
            About
          </a>
          <button className="inline-flex items-center gap-2 px-10 py-2 border-2 border-[#0A2640] text-[#0A2640] rounded-3xl font-open-sans text-[16px] font-bold leading-6 whitespace-nowrap transition duration-300 hover:bg-[#0A2640] hover:text-white">
            Log In
          </button>
        </nav>
      </header>

      <hr className="border-t border-[#0A2640] w-full mt-4 md:hidden lg:hidden block" />
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white  w-full shadow-md z-10">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <a
                href="#"
                className={`${openSans.className} text-[16px] font-semibold text-[#0A2640] hover:text-[#1B3A6F] hover:underline transition duration-300`}
              >
                Product
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${openSans.className} text-[16px] font-semibold text-[#0A2640] hover:text-[#1B3A6F] hover:underline transition duration-300`}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${openSans.className} text-[16px] font-semibold text-[#0A2640] hover:text-[#1B3A6F] hover:underline transition duration-300`}
              >
                About
              </a>
            </li>
            <li>
              <button className="inline-flex items-center gap-2 px-10 py-2 border-2 border-[#0A2640] text-[#0A2640] rounded-3xl font-open-sans text-[16px] font-bold leading-6 whitespace-nowrap transition duration-300 hover:bg-[#0A2640] hover:text-white">
                Log In
              </button>
            </li>
          </ul>
        </nav>
      )}

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center gap-[60px] md:gap-[30px] lg:gap-[60px] px-6 md:px-[40px] lg:px-[100px] py-16 md:pt-[91px] md:pb-[60px]">
        {/* Left Content */}
        <div className="md:w-[640px] space-y-4">
          <h1
            className={`${manrope.className} text-5xl font-normal leading-[72px] pb-4`}
          >
            Save time by building fast with Boldo Template
          </h1>
          <p
            className={`${openSans.className} text-[16px] font-normal leading-[28px] pb-12 text-[#777] `}
          >
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className="flex space-x-4">
            <button className="inline-flex h-[60px] px-[56px] py-[16px] justify-center items-center rounded-[56px] border-2 border-[#0A2640] bg-[#0A2640] text-white font-open-sans text-[20px] font-bold leading-[28px] gap-[8px] flex-shrink-0 hover:bg-white hover:border-[#0A2640] hover:text-[#0A2640] transition duration-300">
              Buy Template
            </button>
            <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-100">
              Explore
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <Image
            src="/images/hero-graphics.png"
            alt="Logo"
            width={494}
            height={423}
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
