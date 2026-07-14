"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-extrabold text-orange-600">
            Florida Home Services
          </span>
          <span className="text-sm font-medium text-slate-600">
            Connect
          </span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="font-medium hover:text-orange-600">
            Home
          </Link>

          <Link href="#services" className="font-medium hover:text-orange-600">
            Services
          </Link>

          <Link href="#contractors" className="font-medium hover:text-orange-600">
            Contractors
          </Link>

          <Link href="#about" className="font-medium hover:text-orange-600">
            About
          </Link>

          <Link href="#contact" className="font-medium hover:text-orange-600">
            Contact
          </Link>
        </nav>

        <Link
          href="/#estimate"
          className="rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600"
        >
          Get Free Estimates
        </Link>

      </div>
    </header>
  );
}