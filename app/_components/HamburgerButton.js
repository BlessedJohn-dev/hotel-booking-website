"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

function HamburgerButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Open navigation menu"
        className="relative z-50 text-primary-50 sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <XMarkIcon className="h-8 w-8 mr-6 text-red-600" />
        ) : (
          <Bars3Icon className="h-8 w-8 text-primary-100" />
        )}
      </button>

      {/* Desktop navigation  */}
      {
        <nav className="hidden items-center gap-8 sm:flex">
          <ul className="list-none flex gap-10">
            <li>
              <Link
                href="/cabins"
                className="hover:text-accent-400 transition-colors"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent-400 transition-colors"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      }

      {/* Mobile navigation  */}
      {isOpen && (
        <nav className="mt-4  flex flex-col gap-4 sm:hidden">
          <ul className="list-none text-lg leading-loose">
            <li>
              <Link
                href="/cabins"
                className="hover:text-accent-400 transition-colors"
              >
                Cabins
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-accent-400 transition-colors"
              >
                About
              </Link>
            </li>

            <li>{children}</li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default HamburgerButton;
