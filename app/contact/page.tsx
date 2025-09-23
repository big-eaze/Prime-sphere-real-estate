import React from "react";
import Image from "next/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown } from "lucide-react";
import DoubleRange from "../components/DoubleRange";
import { resolve } from "path";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function ContactPage() {
  await wait(5000);

  return (
    <div className="w-full bg-[#EFEFEF]">

      <div className="lg:ml-75">
        <section className="w-full h-[500px] bg-bottom" style={{ backgroundImage: "url('/landscape-3.jpg')" }}>
          <div className="w-full text-white  h-full bg-overlay flex flex-col gap-4 lg:gap-7 items-center justify-center">
            <h1 className="font-sans text-5xl lg:text-6xl p-2 text-center">How to contact me </h1>
            <span className="text-lg p-2">call or send an email through our form.</span>
          </div>
        </section>
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Company Info */}
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h1 className="text-2xl font-bold">Sam Daniels Realty</h1>
              <p className="text-gray-600 mt-2">
                1001 4th Ave, Seattle, WA 98154, USA
              </p>

              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <strong>Phone:</strong>{" "}
                  <span className="text-[#792617]">(305) 555-4446</span>
                </p>
                <p>
                  <strong>Mobile:</strong>{" "}
                  <span className="text-[#792617]">(305) 555-4555</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-[#792617]">youremail@gmail.com</span>
                </p>
                <p>
                  <strong>Skype:</strong> yourskypename
                </p>
              </div>

              <p className="mt-12 text-gray-700 text-sm leading-7">
                Whether you’re looking for property for sale in New York area or property for rent, WP Residence makes searching easy. Use our unique geolocation mapping feature to root-out your ideal villa, townhouse or apartment and contact the owners direct. We will help you find your dream house in just a few seconds.
              </p>
              <p className="mt-2 mb-12 text-gray-700 text-sm leading-7">
                We offer our clients a wealth of knowledge regarding all aspects of purchasing or selling a home. Whether it is helping you search for your dream home, discussing new New York real estate developments, or assisting with the sale of your property, we would love the opportunity to help. Please feel free to contact us with any questions!
              </p>
              {/* Team Photo */}
              <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <Image
                  src="/group.png"
                  alt="Team"
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
            </div>



            {/* Contact Form */}
            <div className="bg-white shadow-xl rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                <textarea
                  placeholder="Message"
                  className="focus:bg-[#EFEFEF] border  outline-none  rounded px-3 py-2 w-full h-28"
                />
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
