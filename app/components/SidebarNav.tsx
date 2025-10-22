"use client"
import { FaLinkedin, FaPinterest, FaYoutube, FaVimeo, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";


export default function SidebarNav() {

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);


  useEffect(() => {
    setMounted(true);
  }, []);


  type Nav = {
    name: string,
    path?: string | null,
    subordinate?: Nav[]
  }


  const [navTitle, setNavTitle] = useState<Nav[]>(
    [
      { name: "Home", path: "/" },
      { name: "Properties", path: "/property-search" },
      { name: "About", path: "/about-us" },
      { name: "Blog", path: "/", subordinate: [{ name: "Blog single post", path: "/blog-single" }, { name: "Blog List", path: "/blog-list" }] },
      { name: "Contact", path: "/contact" },
    ]
  )


  return (
    <>
      <aside className=" fixed w-80 top-0 bottom-0 left-0 z-40 border-r border-gray-200 hidden lg:flex flex-col justify-between items-center py-8 px-6 bg-[#EFEFEF]">
        {/* Top Section */}
        <div>
          {/* Profile */}
          <div className="flex flex-col items-center mt-10">
            <Image
              src="/ceo.jpg"
              alt="Sam Daniels"
              width={200}
              height={200}
              className="w-30 h-30 rounded-md object-cover object-top"
            />
            <h2 className="mt-4 text-lg font-dancing">John Doe Ski</h2>
          </div>

          {/* Navigation */}
          <nav className="mt-10 text-center space-y-6">
            {mounted &&
              navTitle.map((item) => {
                // Determine if this item or any of its subordinates matches current path
                const isActive =
                  pathname === item.path ||
                  item.subordinate?.some((sub) => sub.path === pathname);

                return (
                  <div key={item.name} className="relative group">
                    {/* Main Nav Item */}
                    {item.subordinate ? (
                      <span
                        className={`block text-lg cursor-pointer relative ${isActive ? "text-red-700 font-medium" : "text-gray-800"
                          } hover:text-red-700 transition-colors`}
                      >
                        {item.name}
                      </span>
                    ) : (
                      <Link
                        href={item.path || "#"}
                        className={`block text-lg relative ${isActive ? "text-red-700 font-medium" : "text-gray-800"
                          } hover:text-red-700 transition-colors`}
                      >
                        {item.name}
                      </Link>
                    )}

                    {/* Tooltip Submenu */}
                    {item.subordinate && (
                      <div
                        className="absolute left-full top-1/2 -translate-y-1/2 ml-1 px-4 hidden group-hover:flex flex-col bg-white border border-gray-200 shadow-md p-2 w-40 text-left transition-all duration-200"
                      >
                        {item.subordinate.map((sub, idx) => (
                          <Link
                            key={idx}
                            href={sub.path || "#"}
                            className={`text-sm py-2 hover:bg-gray-50 ${pathname === sub.path
                                ? "text-red-700 font-medium"
                                : "text-gray-700 hover:text-red-700"
                              }`}
                          >
                            {sub.name}
                          </Link>
                        ))}

                        {/* Tooltip Arrow */}
                        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-white drop-shadow-md"></div>
                      </div>
                    )}
                  </div>
                );
              })}
          </nav>




        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="#"><FaLinkedin size={16} /></Link>
              <Link href="#"><FaPinterest size={16} /></Link>
              <Link href="#"><FaYoutube size={16} /></Link>
              <Link href="#"><FaVimeo size={16} /></Link>
              <Link href="#"><FaInstagram size={16} /></Link>
              <Link href="#"><FaFacebook size={16} /></Link>
            </div>

          </div>

          {/* Phone */}
          <a href="tel:+12067410340" className="text-red-700 font-medium">
            +1 206-741-0340
          </a>
        </div>
      </aside>
    </>
  );
}
