'use client';

import { socialLinks } from "../data/socialLinks";

export default function SocialLinks() {

  return (
    <div className="flex items-center gap-4">
      {socialLinks.map(({ href, label, icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-gray-600 border border-gray-600 p-3 rounded-md 
                     transition-all duration-300 ease-out
                     hover:text-[#3996DB] hover:scale-110 hover:rotate-6 hover:border-[#3996DB]"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}
