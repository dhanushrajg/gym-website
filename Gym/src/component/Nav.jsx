/*
  ENNA PANROM: Navbar — Tailwind + useLocation hook add pannrom.
  YEN USELOACTION: Patha code la active page highlight aagala —
  user etha page la irukaano atha bold/highlight pannanum.
  useLocation() — current URL path return pannudum.
  Ithana use panni nav link la active styling add pannrom.
*/

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  /*
    ENNA PANROM: useLocation hook — current page path edukurom.
    YEN: pathname check panni active link highlight pannrom.
    e.g., /about la iruntha 'About' link ku bold + gold color.
  */
  const { pathname } = useLocation();

  const links = [
    { to: '/home', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/why', label: 'Why Sayans' },
    { to: '/book', label: 'Book' },
  ];

  return (
    <nav className="bg-[rgba(45,3,3,0.92)] backdrop-blur-sm px-6 md:px-16 py-5 sticky top-0 z-50">
      {/*
        ENNA PANROM: sticky top-0 z-50 add pannrom.
        YEN: Scroll pannும்போது navbar disappear aagaama top la stick aagum.
        Patha code la 'position: relative' mattum irunduchu — scroll aagum bodhu nav hide aagum.
      */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <div className="text-white text-2xl font-bold tracking-widest">SAYANS</div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/*
            ENNA PANROM: 3 bars ku array map pannrom.
            YEN: DRY principle — same div 3 times type pannathukku map use pannrom.
          */}
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-6 h-0.5 bg-white block" />
          ))}
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium tracking-wide transition-colors duration-200
                ${pathname === to
                  ? 'text-[#f0a500] border-b-2 border-[#f0a500] pb-0.5'  /* active page */
                  : 'text-white hover:text-[#f0a500]'
                }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {/*
        ENNA PANROM: Conditional rendering — menuOpen true aana mattum show pannrom.
        YEN: Patha code la CSS class toggle (show/hide) use pannirukaan.
        React la direct JSX conditional render pannuradhu cleaner.
      */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-2 pb-4">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors duration-200
                ${pathname === to ? 'text-[#f0a500]' : 'text-white hover:text-[#f0a500]'}`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
