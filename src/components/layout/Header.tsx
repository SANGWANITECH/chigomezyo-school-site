"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Info,
  GraduationCap,
  FileText,
  Home,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  // WhatsApp link for Contact Us button
  const whatsappLink = "https://wa.me/2659997884230?text=Hello%20Director,%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20Chigomezezo%20Private%20Primary%20School.";

  return (
    <>
      {/* HEADER */}
      <header className="bg-white sticky top-0 z-50 border-b border-transparent">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
          {/* Logo + School Name with | divider */}
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-30 h-30">
                <Image
                  src="/logo.png"
                  alt="Chigomezezo PVT Primary School Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

            {/* Vertical divider | */}
            <div className="hidden md:block h-12 w-1 font-extrabold  bg-blue-900" />
              <span className="hidden md:block text-lg font-bold tracking-wide text-gray-900">
                Chigomezyo <br /> Private Primary School
              </span>
            </Link>

          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 font-poppins text-base text-gray-800">
            <Link href="/" className="hover:text-blue-700 transition">Home</Link>
            <Link href="/about" className="hover:text-blue-700 transition">About Us</Link>
            <Link href="/admissions" className="hover:text-blue-700 transition">Admissions</Link>
            <Link href="/academics" className="hover:text-blue-700 transition">Academics</Link>

            {/* Contact Us as a blue button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-2xl hover:bg-blue-800 transition shadow-md flex items-center gap-2"
            >
              Contact Us →
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center transition hover:scale-105"
            aria-label="Toggle Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY - Unchanged */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60" onClick={closeMenu}>
          <div
            className="absolute top-25 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white rounded-3xl p-6 shadow-xl animate-menuIn"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="space-y-4 font-poppins text-base">
              {[
                { label: "Home", icon: <Home size={20} />, href: "/" },
                { label: "About Us", icon: <Info size={20} />, href: "/about" },
                { label: "Academics", icon: <GraduationCap size={20} />, href: "/academics" },
                { label: "Admissions", icon: <FileText size={20} />, href: "/admissions" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-4 py-4 bg-gray-50 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-3 text-blue-900">
                    {item.icon}
                    <span className="text-gray-900 font-medium">{item.label}</span>
                  </div>
                  <span className="text-blue-900 text-xl">›</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}