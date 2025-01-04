"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      {/* Pink Line */}
      <div className="bg-sjLightRed h-3"></div>

      {/* Navigation Bar */}
      <div className=" mx-auto px-6 py-4 flex items-center justify-center ">
        {/* Left Menu (Large Screens Only) */}
        <nav className="hidden md:flex space-x-20 flex-1 justify-center ">
          <Link
            href="/"
            className="font-outfit font-thin hover:text-sjBrightBlue"
          >
            HOME
          </Link>
          <Link
            href="/about"
            className="font-outfit font-thin hover:text-sjBrightBlue"
          >
            ABOUT
          </Link>
          <Link
            href="/trips"
            className="font-outfit font-thin hover:text-sjBrightBlue"
          >
            TRIPS
          </Link>
        </nav>

        {/* Logo */}
        <div className="flex-shrink-0 mx-auto">
          <Link className="flex items-center" href="/" passHref>
            <Image
              src="/sojourness-icon-fullcolor-RGB.png"
              alt="Sojourness Monogram"
              width={60}
              height={60}
              priority
            />
            <Image
              src="/sojourness-logotype-red-RGB.png"
              alt="Sojourness Name"
              width={200}
              height={35}
              priority
            />
          </Link>
        </div>

        {/* Right Menu (Large Screens Only) */}
        <nav className="hidden md:flex space-x-20 flex-1 justify-center ">
          <Link
            href="#resources"
            className="font-outfit font-thin hover:text-sjBrightBlue"
          >
            RESOURCES
          </Link>
          <Link
            href="contact"
            className="font-outfit font-thin hover:text-sjBrightBlue"
          >
            CONTACT
          </Link>
          <Link
            href="/login"
            className="font-outfit font-thin hover:text-sjBrightBlue"
          >
            LOGIN
          </Link>
        </nav>

        {/* Hamburger Menu (Small Screens Only) */}
        <button
          className="md:hidden text-sjBlueBlack focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Small Screens Only) */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/"
              className="font-outfit font-thin hover:text-sjBrightBlue"
              onClick={() => setMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="#about"
              className="font-outfit font-thin hover:text-sjBrightBlue"
              onClick={() => setMenuOpen(false)}
            >
              ABOUT
            </Link>
            <Link
              href="#trips"
              className="font-outfit font-thin hover:text-sjBrightBlue"
              onClick={() => setMenuOpen(false)}
            >
              TRIPS
            </Link>
            <Link
              href="#resources"
              className="font-outfit font-thin hover:text-sjBrightBlue"
              onClick={() => setMenuOpen(false)}
            >
              RESOURCES
            </Link>
            <Link
              href="contact"
              className="font-outfit font-thin hover:text-sjBrightBlue"
              onClick={() => setMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/login"
              className="font-outfit font-thin hover:text-sjBrightBlue"
              onClick={() => setMenuOpen(false)}
            >
              LOGIN
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
