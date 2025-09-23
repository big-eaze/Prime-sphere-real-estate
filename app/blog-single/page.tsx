"use client"

import Image from "next/image";
import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import DoubleRange from "../components/DoubleRange";
import { FaRegComment, FaRegCalendarAlt, FaFacebook, FaWhatsapp, FaMailBulk, FaEnvelope } from "react-icons/fa";
import { SiX } from "react-icons/si";
import Link from "next/link";


function BlogSingle() {

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1500000);

  return (
    <div className="w-full bg-[#EFEFEF]">
      <div className="ml-75">
        {/* Breadcrumb */}

        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Company Info */}
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h1 className="text-2xl font-bold">The top neighborhoods</h1>


              <div className="mt-4 flex text-gray-600 gap-5 items-center text-sm">
                <div className=" flex items-center gap-2">
                  <div className="p-2 rounded-full bg-[#EFEFEF]">
                    <FaRegCalendarAlt className="w-4 h-4  bg-[#EFEFEF]" />
                  </div>
                  Posted by demo on May 28,2025
                </div>
                <p>
                  Buying Properties, location, price, Real Estate
                </p>
                <p className="flex items-center gap-2">
                  <FaRegComment /> 0 Comments
                </p>
              </div>

              {/* House Photo */}
              <div className="my-10 bg-white shadow-xl overflow-hidden">
                <Image
                  src="/apartment6.jpg"
                  alt="Team"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="text-sm flex flex-col gap-8 text-gray-500">
                <p>
                  New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 km2) are land and 10.81 square miles (28.0 km2) are water.
                </p>
                <div className="flex gap-4 items-center">
                  <div className="w-[2px] h-15 bg-black"></div>
                  <p>A modern redrawing of the 1807 version of the Commissioner’s Grid plan for Manhattan, a few years before it was adopted in 1811. Central Park is absent.</p>
                </div>
                <p>Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis.</p>
                <h1 className="text-xl font-bold text-black">What you must know about Seattle market</h1>
                <p>Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et. Mauris risus lectus, tristique at nisl at, pharetra tristique enim.</p>
                <p>Nullam this is a link nibh facilisis, at malesuada orci congue. Nullam tempus sollicitudin cursus. Nulla elit mauris, volutpat eu varius malesuada, pulvinar eu ligula. Ut et adipiscing erat. Curabitur adipiscing erat vel libero tempus congue. Nam pharetra interdum vestibulum. Aenean gravida mi non aliquet porttitor. Praesent dapibus, nisi a faucibus tincidunt, quam dolor condimentum metus, in convallis libero ligula ut eros.</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                  <li>
                    Aliquam tincidunt mauris eu risus
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                      <li>Aliquam tincidunt mauris eu risus</li>
                      <li>Vestibulum auctor dapibus neque.</li>
                    </ol>
                  </li>
                  <li>Vestibulum auctor dapibus neque.</li>
                </ul>

                <p>Ut non gravida arcu. Vivamus non congue leo. Aliquam dapibus laoreet purus, vitae iaculis eros egestas ac. Mauris massa est, lobortis a viverra eget, elementum sit amet ligula. Maecenas venenatis eros quis porta laoreet.</p>
                <h1 className="text-xl font-bold text-black">Top 10 Seattle apartments for sell now trending</h1>
                <p>
                  One neighborhood of New York County is contiguous with The Bronx. Marble Hill at one time was part of Manhattan Island, but the Harlem River Ship Canal, dug in 1895 to improve navigation on the Harlem River, separated it from the remainder of Manhattan as an island between the Bronx and the remainder of Manhattan. Before World War I, the section of the original Harlem River channel separating Marble Hill from The Bronx was filled in, and Marble Hill became part of the mainland.
                </p>
                <p>
                  Vivamus varius vitae dolor ac hendrerit. Vestibulum nec dolor ac nunc blandit aliquam. Nam at metus non ligula egestas varius ac sed mauris. Fusce at mi metus. Nam elementum dui id nulla bibendum elementum.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                  <li>
                    Aliquam tincidunt mauris eu risus
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
                      <li>Aliquam tincidunt mauris eu risus</li>
                      <li>Vestibulum auctor dapibus neque.</li>
                    </ol>
                  </li>
                  <li>Vestibulum auctor dapibus neque.</li>
                </ul>

                <p>
                  Proin sagittis dolor sed mi elementum pretium. Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.
                </p>
                <div className="flex gap-4 mt-5">
                  <FaFacebook className="w-5 h-5" />
                  <SiX className="w-5 h-5" />
                  <FaWhatsapp className="w-5 h-5" />
                  <FaEnvelope className="w-5 h-5" />
                </div>
              </div>
            </div>



            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
              <form className="space-y-4">
                <div className="flex flex-col gap-4">
                  <textarea
                    placeholder="Comment"
                    className="focus:bg-[#EFEFEF] border  outline-none  rounded px-3 py-2 w-full h-58"
                  />
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="focus:bg-[#EFEFEF] border  outline-none rounded px-3 py-2 w-full"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="focus:bg-[#EFEFEF] border  outline-none  rounded px-3 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="focus:bg-[#EFEFEF] border  outline-none  rounded px-3 py-2 w-full"
                    />
                  </div>

                </div>

                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>

          {/* Right Column (Sticky Sidebar) */}
          <div className="flex flex-col gap-10 ">

            {/* Sticky wrapper */}
            <div className="sticky top-6 space-y-6">
              {/* Search Box */}
              <div className="bg-white shadow-xl rounded-lg p-6 top-6">
                <h2 className="font-semibold mb-4">Advanced Search</h2>
                <div className="flex flex-col gap-2 mb-5">
                  <input
                    type="text"
                    placeholder="Enter an address, state, city, area or zip code"
                    className="rounded px-3 border outline-none text-sm focus:bg-[#EFEFEF] py-2 w-full"
                  />
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="bg-white text-gray-600 text-sm flex-none w-full border rounded-sm px-4 py-2 flex items-center justify-between gap-10 outline-none">
                        Property Category <ChevronDown className="text-gray-600 w-4 h-4" />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        sideOffset={5}
                        className="bg-white text-black w-[var(--radix-dropdown-menu-trigger-width)] h-[250px] overflow-y-scroll p-2 mt-1 rounded shadow-md"
                      >
                        <div className="flex justify-between text-sm mb-2">
                          <DropdownMenu.Label className="p-2 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select All
                          </DropdownMenu.Label>
                          <DropdownMenu.Label className="p-2 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select None
                          </DropdownMenu.Label>
                        </div>
                        <DropdownMenu.Separator />
                        {[
                          "Commercial",
                          "Office",
                          "Shop",
                          "Residential",
                          "Apartments",
                          "Condos",
                          "Duplexes",
                          "Studio",
                          "Multi Family House",
                        ].map((item, i) => (
                          <DropdownMenu.Item
                            key={i}
                            className="p-2 hover:bg-gray-100 outline-none text-sm transition cursor-pointer"
                          >
                            {item}
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="bg-white text-gray-600 text-sm flex-none w-full border rounded-sm px-4 py-2 flex items-center justify-between gap-10 outline-none">
                        Property Type <ChevronDown className="text-gray-600 w-4 h-4" />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        sideOffset={5}
                        className="bg-white text-black w-[var(--radix-dropdown-menu-trigger-width)] h-[250px] overflow-y-scroll p-2 mt-1 rounded shadow-md"
                      >
                        <div className="flex text-sm mb-2 ">
                          <DropdownMenu.Label className="p-2 flex-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select All
                          </DropdownMenu.Label>
                          <DropdownMenu.Label className="p-2 flex-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select None
                          </DropdownMenu.Label>
                        </div>
                        <DropdownMenu.Separator />
                        {[
                          "For Rent",
                          "For Sale",
                        ].map((item, i) => (
                          <DropdownMenu.Item
                            key={i}
                            className="p-2 hover:bg-gray-100 outline-none text-sm transition cursor-pointer"
                          >
                            {item}
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="bg-white text-gray-600 text-sm flex-none w-full border rounded-sm px-4 py-2 flex items-center justify-between gap-10 outline-none">
                        Bathrooms <ChevronDown className="text-gray-600 w-4 h-4" />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        sideOffset={5}
                        className="bg-white text-black w-[var(--radix-dropdown-menu-trigger-width)] h-[250px] overflow-y-scroll p-2 mt-1 rounded shadow-md"
                      >
                        <div className="flex text-sm mb-2 ">
                          <DropdownMenu.Label className="p-2 flex-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select All
                          </DropdownMenu.Label>
                          <DropdownMenu.Label className="p-2 flex-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select None
                          </DropdownMenu.Label>
                        </div>
                        <DropdownMenu.Separator />
                        {[
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6+"
                        ].map((item, i) => (
                          <DropdownMenu.Item
                            key={i}
                            className="p-2 hover:bg-gray-100 outline-none text-sm transition cursor-pointer"
                          >
                            {item}
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger asChild>
                      <button className="bg-white text-gray-600 text-sm flex-none w-full border rounded-sm px-4 py-2 flex items-center justify-between gap-10 outline-none">
                        Bedrooms <ChevronDown className="text-gray-600 w-4 h-4" />
                      </button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        sideOffset={5}
                        className="bg-white text-black w-[var(--radix-dropdown-menu-trigger-width)] h-[250px] overflow-y-scroll p-2 mt-1 rounded shadow-md"
                      >
                        <div className="flex text-sm mb-2 ">
                          <DropdownMenu.Label className="p-2 flex-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select All
                          </DropdownMenu.Label>
                          <DropdownMenu.Label className="p-2 flex-1 border border-gray-300 hover:bg-gray-100 transition cursor-pointer">
                            Select None
                          </DropdownMenu.Label>
                        </div>
                        <DropdownMenu.Separator />
                        {[
                          "1",
                          "2",
                          "3",
                          "4",
                          "5",
                          "6+"
                        ].map((item, i) => (
                          <DropdownMenu.Item
                            key={i}
                            className="p-2 hover:bg-gray-100 outline-none text-sm transition cursor-pointer"
                          >
                            {item}
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </div>
                {/* Range Slider (you can wire up later) */}
                <DoubleRange />

                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                  Search
                </button>
              </div>

              {/* Latest Listings */}
              <div className="bg-white shadow-xl rounded-lg p-6 top-[400px]">
                <h2 className="font-semibold mb-4">Latest Listings</h2>
                <div className="space-y-4">
                  {[
                    { title: "Villa with Amazing View", price: "$5,500,000", img: "/apartment2.jpg" },
                    { title: "Villa with panoramic view", price: "$5,500,000", img: "/apartment3.jpg" },
                    { title: "Townhouse for sale", price: "$210,000", img: "/apartment4.jpg" },
                  ].map((listing, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <Image
                        src={listing.img}
                        alt={listing.title}
                        width={80}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div>
                        <p className="font-medium">{listing.title}</p>
                        <p className="text-gray-600 text-sm">{listing.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSingle;
