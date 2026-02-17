'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-pink-300 px-8 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Links */}
          <div className="flex flex-col gap-4">
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

          {/* Name and Decoration */}
          <div className="flex flex-col justify-end items-end gap-2">
            <p className="text-gray-800 font-hand text-lg">Jordan Idrovo</p>
            <div className="text-4xl">🌸</div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t-2 border-gray-800 pt-4">
          <p className="text-gray-600 text-sm text-center">
            © 2024 Jordan's Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}