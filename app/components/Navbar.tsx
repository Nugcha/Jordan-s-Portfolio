'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '@/public/Jlogo.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-pink-300 px-8 md:px-16 py-4 flex items-center justify-between shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <Image 
          src={logo}
          alt="Jordan's Portfolio Logo"
          width={80}
          height={80}
          className="w-35 h-19"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8">
        <Link href="#about" className="text-gray-800 font-hand text-lg hover:text-gray-600">
          About Me
        </Link>
        <Link href="#projects" className="text-gray-800 font-hand text-lg hover:text-gray-600">
          Projects
        </Link>
        <Link href="#contacts" className="text-gray-800 font-hand text-lg hover:text-gray-600">
          Contacts
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex flex-col gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-0.5 bg-gray-800"></div>
        <div className="w-6 h-0.5 bg-gray-800"></div>
        <div className="w-6 h-0.5 bg-gray-800"></div>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-pink-300 md:hidden flex flex-col gap-4 p-4 shadow-md">
          <Link href="#about" className="text-gray-800 font-hand text-lg hover:text-gray-600">
            About Me
          </Link>
          <Link href="#projects" className="text-gray-800 font-hand text-lg hover:text-gray-600">
            Projects
          </Link>
          <Link href="#contacts" className="text-gray-800 font-hand text-lg hover:text-gray-600">
            Contacts
          </Link>
        </div>
      )}
    </nav>
  );
}