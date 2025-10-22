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
      {/* Breadcrumb */}
      <div className="lg:ml-74">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left/Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Blog Article Card */}
              <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6">
                <h1 className="text-xl sm:text-2xl font-bold">The top neighborhoods</h1>

                <div className="mt-4 flex flex-wrap gap-3 text-gray-600 text-sm items-center">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-full bg-[#EFEFEF]">
                      <FaRegCalendarAlt className="w-4 h-4" />
                    </div>
                    <span>Posted by demo on May 28, 2025</span>
                  </div>
                  <p className="flex items-center gap-2">
                    <FaRegComment /> 0 Comments
                  </p>
                </div>

                {/* Main Image */}
                <div className="my-6 overflow-hidden rounded-lg">
                  <Image
                    src="/apartment6.jpg"
                    alt="Neighborhood"
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Article Text */}
                <div className="text-gray-600 text-sm sm:text-base space-y-5 leading-relaxed">
                  <p>
                    New York County as a whole covers a total area of 33.77 square miles (87.5 km2)...
                  </p>

                  <div className="flex gap-3 items-start">
                    <div className="w-[2px] h-10 bg-black shrink-0"></div>
                    <p className="flex-1">
                      A modern redrawing of the 1807 version of the Commissioner’s Grid plan...
                    </p>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-black">
                    What you must know about Seattle market
                  </h2>
                  <p>
                    Curabitur massa magna, tempor in blandit id, porta in ligula...
                  </p>

                  <ul className="list-disc pl-6 space-y-1">
                    <li>Lorem ipsum dolor sit amet...</li>
                    <li>
                      Aliquam tincidunt mauris eu risus
                      <ol className="list-decimal pl-6 space-y-1">
                        <li>Lorem ipsum dolor sit amet...</li>
                        <li>Aliquam tincidunt mauris eu risus</li>
                        <li>Vestibulum auctor dapibus neque.</li>
                      </ol>
                    </li>
                  </ul>

                  <div className="flex gap-4 mt-6">
                    <FaFacebook className="w-5 h-5" />
                    <SiX className="w-5 h-5" />
                    <FaWhatsapp className="w-5 h-5" />
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6">
                <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
                <form className="space-y-4">
                  <textarea
                    placeholder="Comment"
                    className="focus:bg-[#EFEFEF] border outline-none rounded px-3 py-2 w-full h-40"
                  />
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="focus:bg-[#EFEFEF] border outline-none rounded px-3 py-2 w-full"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="focus:bg-[#EFEFEF] border outline-none rounded px-3 py-2 w-full"
                    />
                    <input
                      type="text"
                      placeholder="Your Phone"
                      className="focus:bg-[#EFEFEF] border outline-none rounded px-3 py-2 w-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full sm:w-auto"
                  >
                    Send Email
                  </button>
                </form>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Search Box */}
              <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6">
                <h2 className="font-semibold mb-4">Advanced Search</h2>
                <div className="flex flex-col gap-3 mb-5">
                  <input
                    type="text"
                    placeholder="Enter an address, state, city, area or zip code"
                    className="rounded px-3 border outline-none text-sm focus:bg-[#EFEFEF] py-2 w-full"
                  />
                  {/* Dropdowns, etc... */}
                  <DoubleRange />
                  <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    Search
                  </button>
                </div>
              </div>

              {/* Latest Listings */}
              <div className="bg-white shadow-xl rounded-lg p-4 sm:p-6">
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
                        <p className="font-medium text-sm sm:text-base">{listing.title}</p>
                        <p className="text-gray-600 text-sm">{listing.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSingle;
