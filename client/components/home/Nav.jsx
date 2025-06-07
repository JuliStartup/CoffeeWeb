"use client";
import React, { useState, useRef, memo } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TopBanner from "./TopBanner";
import MobileMenu from "./MobileMenu";
import { PlatformDropdown, GlobalDropdown } from "./Dropdowns";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
  const [isGlobalDropdownOpen, setIsGlobalDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);
  const globalDropdownRef = useRef(null);
  const containerRef = useRef(null);

  // Close dropdowns if clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPlatformDropdownOpen(false);
      }
      if (
        globalDropdownRef.current &&
        !globalDropdownRef.current.contains(event.target)
      ) {
        setIsGlobalDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Our GSAP logic using the useGSAP() hook
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".top_banner",
          start: "bottom top",
          endTrigger: "body",
          end: "bottom bottom",
          pin: ".nav",
          toggleActions: "play none none reverse",
          onEnter: () =>
            gsap.to(".nav", {
              background: "rgba(255,255,255,0.23)",
              duration: 0.5
            }),
          onLeaveBack: () =>
            gsap.to(".nav", {
              background: "#f8f8fb",
              duration: 0.5
            })
        }
      });

      gsap.set(".login", { x: 50 });
      tl.to(".nav", { y: 0, ease: "none", duration: 0.5 });
      tl.from(".nav", { background: "#f8f8fb", ease: "none", duration: 0.5 }, 0);

      // Move login link off to x=210, then animate in
      gsap.set(".login", { x: 210 });
      tl.to(".login", { x: 0, duration: 0.5 }, 0);

      // Animate demo button from x=210 → x=0 + fade in
      tl.fromTo(
        ".nav .demo-btn",
        { x: 210, opacity: 0 },
        { x: 0, opacity: 1, ease: "power1.out", duration: 0.5 },
        0
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="z-20 h-[70px] nav_wrapper relative flex flex-col items-center justify-between"
    >
      <TopBanner />

      {/* Navigation */}
      <nav className="nav w-full h-[82px] bg-[#f8f8fb] backdrop-blur-[7.1px] z-[900]">
        <div className="w-[90vw] mx-auto h-full flex items-center justify-between relative">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="xl:hidden absolute left-1/2 transform -translate-x-1/2">
            <a href="/">
              <img className="h-[40px]" src="logo small.png" alt="Logo" />
            </a>
          </div>

          {/* Desktop Logo */}
          <div className="hidden xl:block">
            <a href="/">
              <img className="h-[50px]" src="logo small.png" alt="Logo" />
            </a>
          </div>
          {/* 
            Burger Menu Button
            Moved it to the right via absolute positioning
            Changed “Menu” → “≡” for the open state
          */}
          <button
            className="xl:hidden z-50 absolute right-4 text-[30px] font-300"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "X" : "≡"}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <MobileMenu
              isMenuOpen={isMenuOpen}
              toggleMenu={() => setIsMenuOpen(false)}
              isPlatformDropdownOpen={isPlatformDropdownOpen}
              togglePlatformDropdown={() =>
                setIsPlatformDropdownOpen((prev) => !prev)
              }
            />
          )}

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center py-2 gap-[5px]">
            <a
              className="font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
              href="/"
            >
              Home
            </a>
            <PlatformDropdown
              isOpen={isPlatformDropdownOpen}
              toggleDropdown={() => setIsPlatformDropdownOpen((prev) => !prev)}
              ref={dropdownRef}
            />
            <a
              className="font-twk font-thin max-w-8xl px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
              href="/pricing"
            >
              Plans and Pricing
            </a>
            <a
              className="font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
              href="/resources"
            >
              Resources
            </a>
            <a
              className="font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
              href="/contact"
            >
              Contact
            </a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden xl:flex items-center gap-[30px]">
            <GlobalDropdown
              isOpen={isGlobalDropdownOpen}
              toggleDropdown={() => setIsGlobalDropdownOpen((prev) => !prev)}
              ref={globalDropdownRef}
            />
            <a
              className="login font-twk font-midium text-[--purple] py-2 px-4 rounded-md border transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
              href="https://businessn-erp.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Login
            </a>
            <a
              className="demo-btn w-[180px] py-[10px] bg-[--primaryColor] rounded-md font-twk font-midium text-white text-center"
              href="https://businessn-erp.com/demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Request A demo
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay for platform dropdown on desktop */}
      {isPlatformDropdownOpen && (
        <div
          className="fixed inset-0 bg-transparent z-40 hidden xl:block"
          onClick={() => setIsPlatformDropdownOpen(false)}
        />
      )}
    </div>
  );
}

// Wrap your component in React.memo
export default memo(Nav);
