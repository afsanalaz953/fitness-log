import React from 'react';
import logoImg from '@/assets/logo.png'; // Import Next.js Image component
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="container mx-auto rounded bg-[#050505] border-t border-neutral-900 py-6 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
      
      {/* Left Side: Custom Logo and Brand Name */}
      <div className="flex items-center gap-2">
        
        {/* Replace '/logo.png' with the actual path to your logo file in the public folder */}
        <Image 
          src={logoImg} 
          alt="FITLOG Logo" 
          width={20} 
          height={20} 
          className="object-contain"
        />
        
        {/* Brand Name */}
        <span className="text-white font-bold text-sm tracking-widest">
          FITLOG
        </span>
      </div>

      {/* Right Side: Copyright and Tagline */}
      <div className="text-neutral-500 text-[11px] md:text-xs font-light tracking-wide text-center md:text-right">
        &copy; {currentYear} FITLOG &mdash; Workout Library. Train hard, log honest.
      </div>
      
    </footer>
  );
};

export default Footer;