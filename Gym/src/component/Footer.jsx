/*
  ENNA PANROM: Footer component — separate aa eduthurukom.
  YEN: Patha code la same footer HTML Home, About, Why, Book — 
  naalu pages layum copy-paste pannirukaan. 
  Oru change pannanum-na 4 places la manually change pannanum — bad practice.
  React la ithuku solution: Reusable Component.
  Ippo oru place la change pannaa, everywhere update aagum.
*/

import React from 'react';
import { FaInstagram, FaTwitter, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-10 pb-6 px-6">

      {/* Top section — gym tagline + description */}
      <div className="max-w-6xl mx-auto mb-8">
        <h1 className="text-[#f0a500] text-3xl font-bold">WORKOUT</h1>
        <h2 className="text-xl font-medium mt-1 mb-3">BELIEVE IN YOURSELF</h2>
        <p className="text-[#aaa] text-sm leading-relaxed max-w-3xl">
          Why Train at SAYANS? Train using CBUM's exact Olympia-prep protocols.
          Access to competition-grade equipment unavailable at commercial gyms.
          3D biomechanics analysis and form optimization. Cryotherapy, infrared sauna,
          and sports massage recovery. Community of serious athletes committed to excellence.
        </p>
      </div>

      {/* Middle section — links + newsletter */}
      <div className="max-w-6xl mx-auto flex flex-wrap gap-8 mb-8">

        {/* Network links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-[#f0a500] text-base font-semibold mb-3 pb-2 border-b border-[#333]">
            OUR NETWORK
          </h3>
          {/* 
            ENNA PANROM: Array map() use pannrom — hardcode la 6 links irunduchu.
            YEN: Data driven rendering — future la branch add panna array edit mattum pannaa போதும்.
          */}
          <div className="grid grid-cols-2 gap-1">
            {['SAYANS YURI', 'SAYANS PATEL NAGAR', 'SAYANS HARYANA', 'SAYANS GURUGRAM', 'SAYANS SIRSA', 'SAYANS BHIHAR'].map((branch) => (
              <a
                key={branch}
                href="#"
                className="text-[#ccc] text-sm hover:text-[#f0a500] transition-colors duration-200"
              >
                {branch}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-[#f0a500] text-base font-semibold mb-3 pb-2 border-b border-[#333]">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <p className="text-[#aaa] text-sm mb-3">Subscribe with your email</p>
          {/* 
            ENNA PANROM: Basic newsletter input.
            Future upgrade: useRef or useState hook add panna easy aagum ippo.
          */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-3 py-2 bg-[#333] text-white text-sm border-none outline-none"
            />
            <button className="px-4 py-2 bg-[#f0a500] text-[#1a1a1a] font-semibold text-sm hover:bg-[#ffbb00] transition-colors">
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Social icons */}
      {/*
        ENNA PANROM: Icons array la map pannrom.
        YEN: Oru icon add/remove panna array la mattum edit pannaa போதும்.
        Patha code la manually 4 separate <a> tags irunduchu.
      */}
      <div className="max-w-6xl mx-auto flex gap-5 pt-4 border-t border-[#333]">
        {[
          { Icon: FaInstagram, label: 'Instagram' },
          { Icon: FaTwitter, label: 'Twitter' },
          { Icon: FaWhatsapp, label: 'WhatsApp' },
          { Icon: FaFacebook, label: 'Facebook' },
        ].map(({ Icon, label }) => (
          <a
            key={label}
            href="#"
            aria-label={label}
            className="text-[#f0a500] text-2xl hover:text-[#ffbb00] transition-colors duration-200"
          >
            <Icon />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
