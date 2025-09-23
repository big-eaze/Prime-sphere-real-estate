"use client";
import React, { useState } from "react";
import Link from "next/link";
import { X, Menu, ChevronDown } from "lucide-react";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Icon */}
      <div className="relative lg:hidden flex items-center justify-center w-full py-4">
        <button
          onClick={() => setOpen(true)}
          className="p-2 text-gray-800 absolute left-3 top-2 focus:outline-none"
        >
          <Menu size={28} />
        </button>
        <h1 className="text-xl">Prime Sphere</h1>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={handleClose}
        />
      )}

      {/* Sidebar Drawer */}
      <div
        className={`fixed top-0 left-0 w-72 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Nav Items */}
        <nav className="flex flex-col divide-y">
          <div className="relative flex items-center justify-between border-b">
            <Link
              href="/"
              className="px-4 py-3 hover:bg-gray-100"
              onClick={handleClose}
            >
              Home
            </Link>
            <button className="absolute right-4" onClick={handleClose}>
              <X size={16} />
            </button>
          </div>

          {/* Properties */}
          <div>
            <button
              onClick={() => toggleDropdown("properties")}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100"
            >
              Properties
              <ChevronDown
                size={18}
                className={`transition-transform ${activeDropdown === "properties" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {activeDropdown === "properties" && (
              <div className="flex flex-col bg-gray-50">
                <Link
                  href="/property-search"
                  className="px-6 py-2 hover:bg-gray-100"
                  onClick={handleClose}
                >
                  Property Search
                </Link>
                <Link
                  href="/"
                  className="px-6 py-2 hover:bg-gray-100"
                  onClick={handleClose}
                >
                  Sold Properties
                </Link>
              </div>
            )}
          </div>

          {/* About */}
          <div>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100"
            >
              About
              <ChevronDown
                size={18}
                className={`transition-transform ${activeDropdown === "about" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {activeDropdown === "about" && (
              <div className="flex flex-col bg-gray-50">
                <Link
                  href="/about-us"
                  className="px-6 py-2 hover:bg-gray-100"
                  onClick={handleClose}
                >
                  About Us
                </Link>
              </div>
            )}
          </div>

          {/* Blog */}
          <div>
            <button
              onClick={() => toggleDropdown("blog")}
              className="w-full flex justify-between items-center px-4 py-3 hover:bg-gray-100"
            >
              Blog
              <ChevronDown
                size={18}
                className={`transition-transform ${activeDropdown === "blog" ? "rotate-180" : ""
                  }`}
              />
            </button>
            {activeDropdown === "blog" && (
              <div className="flex flex-col bg-gray-50">
                <Link
                  href="/blog-list"
                  className="px-6 py-2 hover:bg-gray-100"
                  onClick={handleClose}
                >
                  Blog List
                </Link>
                <Link
                  href="/blog-single"
                  className="px-6 py-2 hover:bg-gray-100"
                  onClick={handleClose}
                >
                  Blog Single Post
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="px-4 py-3 text-red-600 font-semibold hover:bg-gray-100"
            onClick={handleClose}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
