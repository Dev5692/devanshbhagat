import React from 'react';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/devanshbhagat" },
  { name: "Twitter", url: "#" },
  { name: "Facebook", url: "#" },
  { name: "Instagram", url: "#" }
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#faf9f6] border-t border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#c9a227] rounded-full" />
            <span className="text-[#1a1a1a] font-light tracking-wider">DEVANSH BHAGAT</span>
          </div>

          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-sm text-[#666] hover:text-[#1a1a1a] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          <p className="text-sm text-[#999]">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}