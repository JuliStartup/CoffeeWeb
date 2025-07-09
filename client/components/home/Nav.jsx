"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { memo, useRef, useState } from "react";

import { useCart } from "@/contexts/CartContext";
import { Gift, ShoppingBag, SlashSquare, Star, User } from "lucide-react";
import { GlobalDropdown } from "./Dropdowns";
import MobileMenu from "./MobileMenu";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Nav() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isPlatformDropdownOpen, setIsPlatformDropdownOpen] = useState(false);
	const [isGlobalDropdownOpen, setIsGlobalDropdownOpen] = useState(false);
	const { cart, checkoutUrl } = useCart();

	const dropdownRef = useRef(null);
	const globalDropdownRef = useRef(null);
	const containerRef = useRef(null);
	const NAV_LINKS = [
		{ name: "Franchise", icon: <Star />, color: "text-[--highlight]" },
		{ name: "Wholesale", icon: <SlashSquare />, color: "text-[--highlight]" },
		{ name: "Join Club", icon: <Gift />, color: "text-[--highlight]" },
		{ name: "Account", icon: <User /> },
		{
			name: "Cart",
			icon: <ShoppingBag />,
			badge: (
				<span className="absolute bg-[--highlight] rounded-full text-sm text-white text-center right-[24em] w-[20px] h-[20px] top-1">
					{cart}
				</span>
			),
			url: checkoutUrl,
		},
	];
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
							duration: 0.5,
						}),
					onLeaveBack: () =>
						gsap.to(".nav", {
							background: "#f8f8fb",
							duration: 0.5,
						}),
				},
			});

			gsap.set(".login", { x: 50 });
			tl.to(".nav", { y: 0, ease: "none", duration: 0.5 });
			tl.from(
				".nav",
				{ background: "#f8f8fb", ease: "none", duration: 0.5 },
				0,
			);

			// Move login link off to x=210, then animate in
			gsap.set(".login", { x: 210 });
			tl.to(".login", { x: 0, duration: 0.5 }, 0);

			// Animate demo button from x=210 → x=0 + fade in
			tl.fromTo(
				".nav .demo-btn",
				{ x: 210, opacity: 0 },
				{ x: 0, opacity: 1, ease: "power1.out", duration: 0.5 },
				0,
			);
		},
		{ scope: containerRef },
	);

	return (
		<div
			ref={containerRef}
			className="z-20 h-[70px] nav_wrapper flex flex-col items-center justify-between sticky top-0"
		>
			{/* Navigation */}
			<nav className="nav w-full h-[82px] bg-transparent z-[900]">
				<div className="w-[90vw] mx-auto h-full flex items-center justify-between relative">
					{/* Logo - Centered on mobile, left on desktop */}
					<div className="xl:hidden absolute left-1/2 transform -translate-x-1/2 text-lg">
						<a href="/">
							WYND CLUB
							{/* <img className="h-[40px]" src="logo small.png" alt="Logo" /> */}
						</a>
					</div>
					{/* Desktop Logo */}
					<div className="hidden xl:block text-xl">
						<a href="/">
							WYND CLUB
							{/* <img className="h-[50px]" src="logo small.png" alt="Logo" /> */}
						</a>
					</div>
					{/* 
            Burger Menu Button
            Moved it to the right via absolute positioning
            Changed “Menu” → “≡” for the open state
          */}
					<button
						className="xl:hidden z-50 absolute right-4 text-[30px] font-300 top-2 "
						onClick={() => setIsMenuOpen((prev) => !prev)}
						aria-label="Toggle menu"
					>
						{isMenuOpen ? "X" : "≡"}
					</button>
					{/* Mobile Menu */}
					{isMenuOpen && (
						<MobileMenu
							menus={NAV_LINKS}
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
						{NAV_LINKS.map(({ name, icon, color, badge, url }) => (
							<a
								key={name}
								className="flex flex-col items-center font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200"
								href={url || "/"}
							>
								{badge}
								<div className={color}>{icon}</div>
								{name}
							</a>
						))}
						<a
							className="font-twk font-thin px-4 py-2 rounded-md transition-colors duration-300 text-neutral-600 hover:bg-gray-200 mr-[2em]"
							href="/"
						>
							(234) 224-4444
						</a>
						<GlobalDropdown
							isOpen={isGlobalDropdownOpen}
							toggleDropdown={() => setIsGlobalDropdownOpen((prev) => !prev)}
							ref={globalDropdownRef}
						/>
					</div>
				</div>
			</nav>
		</div>
	);
}

// Wrap your component in React.memo
export default memo(Nav);
