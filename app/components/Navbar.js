'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Academics', href: '/academics' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Student Life', href: '/student-life' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-primary-200">
      <div className="container-max">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary-800">Smart Academy</h1>
              <p className="text-sm text-accent-600 font-medium">Monrovia, Liberia</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary-700 hover:text-primary-800 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-700 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-primary-700 hover:bg-primary-50 transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200 bg-cream-50">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-700 hover:text-primary-800 font-medium py-3 px-4 rounded-md hover:bg-white transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
