import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#003300] text-white py-8">
      {/* Footer Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Healthy Diet Blog&apos;s</h2>
            <p className="text-sm mt-2 text-gray-200">
              Your trusted guide to healthier living. Discover tips, <br /> recipes, and advice for a balanced and happy lifestyle.
            </p>
          </div>

          {/* Quick Links (Horizontal) */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-gray-200 hover:text-lime-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-lime-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="text-gray-200 hover:text-lime-300">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-lime-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-lime-300"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white"></div>

        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} Healthy Diet Blog&apos;s.❤️ All rights reserved.
        </div>
      </div>
    </footer>
  );
}
