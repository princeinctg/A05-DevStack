import { useState } from "react";
import Logo from "../assets/logo-text.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">

        {/* Navbar Header */}
        <div className="relative flex h-16 items-center justify-between">

          {/* Left Side Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-10 text-3xl leading-none text-[#7B7171] md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
            <img
              src={Logo}
              alt="DevStack Logo"
              className="w-[115px] sm:w-[135px] md:w-[150px]"
            />
          </div>

          {/* Desktop Menu */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 md:flex lg:gap-8">
            <a className="whitespace-nowrap bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
              Home
            </a>

            <a className="whitespace-nowrap text-sm text-[#475569]">
              Technologies
            </a>

            <a className="whitespace-nowrap text-sm text-[#475569]">
              Projects
            </a>

            <a className="whitespace-nowrap text-sm text-[#475569]">
              About
            </a>

            <a className="whitespace-nowrap text-sm text-[#475569]">
              Contact
            </a>
          </div>

          {/* Right Side: Buttons */}
          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <button className="text-xs text-[#475569] sm:text-sm">
              Sign In
            </button>

            <button className="font-semibold rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-3 py-2 text-xs text-white sm:px-4 sm:text-sm">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-gray-100 bg-white py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <a className="text-sm text-[#475569]">Home</a>
              <a className="text-sm text-[#475569]">Technologies</a>
              <a className="text-sm text-[#475569]">Projects</a>
              <a className="text-sm text-[#475569]">About</a>
              <a className="text-sm text-[#475569]">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
