'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && (pathname === '/' || pathname === '')) return true;
    if (path !== '/' && pathname?.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm relative overflow-hidden">
      {/* Red circle light gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-500 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full opacity-15 blur-3xl translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-red-400 rounded-full opacity-25 blur-2xl -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-red-500 rounded-full opacity-20 blur-2xl"></div>
      
      <nav className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3" onClick={closeMenu}>
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 flex items-center justify-center shadow-md overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Impression Imaging Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold text-slate-900">Impression Imaging</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`transition-colors font-medium ${isActive('/') ? 'text-red-600' : 'text-slate-900 hover:text-red-600'}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`transition-colors font-medium ${isActive('/services') ? 'text-red-600' : 'text-slate-900 hover:text-red-600'}`}
            >
              Our Services
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors font-medium ${isActive('/about') ? 'text-red-600' : 'text-slate-900 hover:text-red-600'}`}
            >
              About Us
            </Link>
            <Link 
              href="/gallery" 
              className={`transition-colors font-medium ${isActive('/gallery') ? 'text-red-600' : 'text-slate-900 hover:text-red-600'}`}
            >
              Gallery
            </Link>
            <Link 
              href="/apk" 
              className={`transition-colors font-medium ${isActive('/apk') ? 'text-red-600' : 'text-slate-900 hover:text-red-600'}`}
            >
              Download APK
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-2 pb-4">
            <Link
              href="/"
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/')
                  ? 'bg-red-600 text-white'
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/services')
                  ? 'bg-red-600 text-white'
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
            >
              Our Services
            </Link>
            <Link
              href="/about"
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/about')
                  ? 'bg-red-600 text-white'
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/gallery"
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/gallery')
                  ? 'bg-red-600 text-white'
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
            >
              Gallery
            </Link>
            <Link
              href="/apk"
              onClick={closeMenu}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/apk')
                  ? 'bg-red-600 text-white'
                  : 'text-slate-900 hover:bg-slate-100'
              }`}
            >
              Download APK
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

