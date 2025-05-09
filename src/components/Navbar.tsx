"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest(
          "button[aria-label='Toggle menu']"
        )
      ) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="block w-32 md:w-48 relative h-10">
          <Image
            src="/images/ryuu-sushi-logo-white.png"
            alt="Ryuu Sushi Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <button
          className="text-white md:hidden text-2xl z-50 relative"
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen(!menuOpen);
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className="hidden md:flex gap-6 text-base uppercase tracking-wider font-heading">
          <li>
            <Link
              href="/menu"
              className="text-white/80 hover:text-white transition"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-white/80 hover:text-white transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div
          ref={menuRef}
          className="md:hidden bg-black px-6 pt-4 pb-6 border-t border-white/10 flex flex-col justify-between h-[420px]"
        >
          {/* Welcome banner */}
          <div className="relative h-48 mb-8 -mx-6 overflow-hidden">
            <Image
              src="/images/ryuu-sushi-logo-dragon.png"
              alt="Dragon Logo Background"
              fill
              className="object-contain opacity-10 scale-[1.6]"
              priority
            />
            <div className="relative z-10 h-full flex flex-col justify-end items-start pl-6 pr-4 pb-4 text-white">
              <p className="text-sm text-white/70 mb-1 font-sans">Hello,</p>
              <h2 className="text-3xl font-heading font-semibold">
                Welcome to Ryuu
              </h2>
            </div>
          </div>

          {/* Menu items (bottom-right aligned) */}
          <ul className="flex flex-col items-end text-xl text-white/90 space-y-6 pr-6 font-heading">
            {["Menu", "About", "Contact"].map((item) => (
              <li key={item} className="flex flex-col items-end">
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-white transition"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
