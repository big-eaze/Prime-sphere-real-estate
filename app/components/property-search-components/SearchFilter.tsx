"use client"
import React from 'react'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { FaSearch } from "react-icons/fa"


function SearchFilter() {
  return (
    <form className="flex flex-col lg:flex-row lg:items-center justify-center w-[70%] bg-white/40 lg:p-5 p-2 rounded-lg gap-2 lg:gap-5">
      {/* Categories */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="bg-white text-gray-600 text-sm flex-none min-w-[230px] px-4 py-3 flex items-center justify-between rounded-md outline-none shadow-sm">
            Categories <ChevronDown className="text-gray-600 w-4 h-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={5}
            className="bg-white text-black min-w-[230px] max-h-60 overflow-y-auto p-2 mt-1 rounded-md shadow-md scrollbar-thin scrollbar-thumb-gray-300"
          >
            <div className="flex justify-between text-sm mb-2">
              <DropdownMenu.Item className="p-2 border border-gray-300 hover:bg-gray-100 transition cursor-pointer rounded">
                Select All
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 border border-gray-300 hover:bg-gray-100 transition cursor-pointer rounded">
                Select None
              </DropdownMenu.Item>
            </div>
            <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
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
                className="p-2 hover:bg-gray-100 outline-none text-sm transition cursor-pointer rounded"
              >
                {item}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {/* Property Type */}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="bg-white text-gray-600 text-sm flex-none min-w-[230px] px-4 py-3 flex items-center justify-between rounded-md outline-none shadow-sm">
            Property Type <ChevronDown className="text-gray-600 w-4 h-4" />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={5}
            className="bg-white text-black min-w-[230px] max-h-60 overflow-y-auto p-2 mt-1 rounded-md shadow-md scrollbar-thin scrollbar-thumb-gray-300"
          >
            <div className="flex justify-between text-sm mb-2">
              <DropdownMenu.Item className="p-2 border border-gray-300 hover:bg-gray-100 transition cursor-pointer rounded">
                Select All
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 border border-gray-300 hover:bg-gray-100 transition cursor-pointer rounded">
                Select None
              </DropdownMenu.Item>
            </div>
            <DropdownMenu.Separator className="my-1 h-px bg-gray-200" />
            {["For Rent", "For Sale"].map((item, i) => (
              <DropdownMenu.Item
                key={i}
                className="p-2 hover:bg-gray-100 outline-none text-sm transition cursor-pointer rounded"
              >
                {item}
              </DropdownMenu.Item>
            ))}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {/* Search Input */}
      <input
        className="w-full max-w-md flex-none p-3 bg-white text-black rounded-md outline-none placeholder-gray-600 px-5 shadow-sm"
        placeholder="Enter an address, state, city, area or zip code"
        aria-label="Search properties"
      />

      {/* Search Button */}
      <button className="bg-black text-white flex flex-none py-3 px-5 items-center justify-center gap-3 outline-none border border-black rounded-md hover:bg-gray-800 transition">
        <FaSearch />
        Search Listings
      </button>
    </form>
  )
}

export default SearchFilter