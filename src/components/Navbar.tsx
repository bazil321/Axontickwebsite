"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Portfolio", href: "/#portfolio" },
        { name: "Pricing", href: "/#packages" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <>
            <nav className="navbar sticky top-0 z-200 flex items-center justify-between bg-white/95 backdrop-blur-md border border-border-light rounded-[14px] px-6 py-[13px] my-[14px] mx-auto max-width-[1340px] w-[calc(100%-48px)] shadow-[0_4px_32px_rgba(0,0,0,0.08)] animate-fadeDown">
                <Link href="/" className="nav-logo flex items-center gap-[10px] no-underline">
                    <div className="nav-logo-icon w-[34px] height-[34px] bg-dark rounded-[8px] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <polygon
                                points="12,2 22,8 22,16 12,22 2,16 2,8"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinejoin="round"
                            />
                            <polygon
                                points="12,7 17,10 17,14 12,17 7,14 7,10"
                                fill="rgba(240,198,46,0.75)"
                            />
                        </svg>
                    </div>
                    <span className="nav-logo-name font-bold text-[1.15rem] color-dark tracking-tight">
                        Axontick
                    </span>
                </Link>
                <ul className="nav-links hidden md:flex items-center gap-[36px] list-none">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="no-underline color-dark2 text-[0.92rem] font-medium transition-colors hover:color-dark"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href="/#contact" className="btn-consult hidden md:flex items-center gap-[8px] bg-dark text-white rounded-[10px] px-5 py-[11px] text-[0.88rem] font-semibold no-underline transition-all hover:opacity-80 hover:-translate-y-px whitespace-nowrap">
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <rect x="3" y="4" width="18" height="18" rx="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    Book a Consultation
                </Link>
                <button className="hamburger md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-1" onClick={toggleMenu}>
                    <span className={`block w-[22px] h-[0.5] bg-dark rounded-[2px] transition-all ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                    <span className={`block w-[22px] h-[0.5] bg-dark rounded-[2px] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-[22px] h-[0.5] bg-dark rounded-[2px] transition-all ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                </button>
            </nav>
            <div className={`mobile-menu md:hidden flex flex-col bg-white border border-border-light rounded-[12px] mx-6 mb-3 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all ${isOpen ? 'flex' : 'hidden'}`} id="mobileMenu">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={toggleMenu}
                        className="no-underline color-dark font-medium px-6 py-[15px] border-b border-border-light text-[0.96rem] hover:bg-gray-50"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="/#contact"
                    onClick={toggleMenu}
                    className="no-underline px-6 py-[15px] text-[0.96rem] bg-dark text-white font-bold text-center"
                >
                    📅 Book a Consultation
                </Link>
            </div>
        </>
    );
};

export default Navbar;
