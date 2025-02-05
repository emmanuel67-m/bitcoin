import { Twitter, MessageCircle } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2A2000] py-16  p-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & Join Now Section */}
        <div className="footer-section">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2025-01-29%2011.47.18.jpg-Jum7nIEA2WX62sE4tMM57QIqTIowVv.jpeg"
            alt="$OP_CAT Logo"
            className="mb-4 rounded-full w-12 h-12"
          />
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded">
            JOIN NOW
          </button>
        </div>
        
        {/* Our Links Section */}
        <div className="footer-section">
          <h3 className="text-white font-bold mb-4">Our Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#tokenomics" className="text-gray-400 hover:text-yellow-500">
                Tokenomics
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-yellow-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-400 hover:text-yellow-500">
                Our Plan
              </a>
            </li>
          </ul>
        </div>

        {/* Our Socials Section */}
        <div className="footer-section">
          <h3 className="text-white font-bold mb-4">Our Socials</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Telegram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                Chart
              </a>
            </li>
          </ul>
        </div>

        {/* Disclaimer Section */}
        <div className="footer-section">
          <h3 className="text-white font-bold mb-4">Disclaimer</h3>
          <p className="text-gray-400 text-sm">
            $OPCAT includes no promises and is not financial advice. DYOR.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
