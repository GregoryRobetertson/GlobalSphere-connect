import React from 'react';
import Link from 'next/link';

export default function Footer() {
  
  

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2024 Gregory Robertson. All rights reserved.</p>
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <a href="mailto:geefromla@gmail.com?subject=Inquiry%20from%20Website&body=Hello%20Gregory,">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
