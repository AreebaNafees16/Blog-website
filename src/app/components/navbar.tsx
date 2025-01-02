// components/Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#003300] top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-5">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" className="text-white font-mono">
            Healthy Diet
          </Link>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className={`hidden md:flex space-x-6 md:space-x-8 text-white text-base`}>
          <Link href="/" className="hover:text-lime-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-lime-300">
            About Us
          </Link>
          <Link href="/blogs" className="hover:text-lime-300">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-lime-300">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-lime-50 shadow-md">
          <Link href="/" className="block px-4 py-2 text-black hover:bg-lime-300">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 text-black hover:bg-lime-300">
            About Us
          </Link>
          <Link href="/blogs" className="block px-4 py-2 text-black hover:bg-lime-300">
            Blogs
          </Link>
          <Link href="/contact" className="block px-4 py-2 text-black hover:bg-lime-300">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
