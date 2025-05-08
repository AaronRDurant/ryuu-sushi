"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-wide">
          Ryuu Sushi
        </Link>

        <button
          className="text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6 text-sm uppercase tracking-wide">
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/menu" onClick={() => setMenuOpen(false)}>
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
