"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from 'next/image';
import logo from '../../../public/images/projects/logo.webp'

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100" style={{zIndex:'1111111111'}}>
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold flex-shrink-0"
        >
          <Image
            src={logo}
            alt="Logo"
            width={500}
            height={500}
            className="w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[150px] md:h-[75px] lg:w-[200px] lg:h-[100px] object-contain"
            priority
          />
        </Link>
        
        {/* Mobile menu button */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors duration-200"
              aria-label="Open menu"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white transition-colors duration-200"
              aria-label="Close menu"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        
        {/* Desktop menu */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0" style={{ zIndex: 11111 }}>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Mobile menu overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;