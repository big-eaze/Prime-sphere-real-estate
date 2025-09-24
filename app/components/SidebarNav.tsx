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
    path: string
  }


  const [navTitle, setNavTitle] = useState<Nav[]>(
    [
      { name: "Home", path: "/" },
      { name: "Properties", path: "/property-search" },
      { name: "About", path: "/about-us" },
      { name: "Blog", path: "/blog-list" },
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
            <h2 className="mt-4 text-lg font-dancing">Sam Daniels</h2>
          </div>

          {/* Navigation */}
          <nav className="mt-10 text-center space-y-6">
            {mounted && navTitle.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`block text-lg ${pathname === item.path ? "text-red-700 font-medium" : "text-gray-800"
                  } hover:text-red-700 transition-colors`}
              >
                {item.name}
              </Link>
            ))}
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
