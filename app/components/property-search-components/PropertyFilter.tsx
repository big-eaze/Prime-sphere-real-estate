"use client"

import React from 'react'
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { Grip, Menu, ChevronDown } from 'lucide-react'

function PropertyFilter() {
  return (
    <div className="w-[80%] mx-auto bg-white px-4 py-2 rounded-lg mt-10 flex justify-between items-center shadow-sm">
      {/* Dropdowns */}
      <div className="flex w-full flex-col lg:flex-row gap-3 ">
        {[
          { label: "Types", options: ["Property Type", "For Rent", "For Sale"] },
          {
            label: "Categories",
            options: [
              "Commercial",
              "Office",
              "Shop",
              "Residential",
              "Apartments",
              "Condos",
              "Duplexes",
              "Studio",
              "Multi Family House",
            ],
          },
          { label: "States", options: ["State", "California"] },
          { label: "Cities", options: ["Cities", "San Diego"] },
          {
            label: "Areas",
            options: [
              "Areas",
              "Clairemont",
              "Downtown",
              "Hillcrest",
              "Miramar",
              "Mission Beach",
              "Pacific Beach",
              "Point Loma",
              "San Ysidro",
            ],
          },
        ].map((dropdown, idx) => (
          <DropdownMenu.Root key={idx}>
            <DropdownMenu.Trigger asChild>
              <button className="bg-white text-gray-600 text-sm w-full lg:w-[140px] px-4 py-2 flex items-center justify-between rounded-md outline-none shadow-sm hover:bg-gray-50 transition">
                {dropdown.label}
                <ChevronDown className="text-gray-600 w-4 h-4" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                sideOffset={5}
                className="bg-white text-black w-[var(--radix-dropdown-menu-trigger-width)] lg:min-w-[140px] max-h-[250px] overflow-y-auto p-2 mt-1 rounded-md shadow-md scrollbar-thin scrollbar-thumb-gray-300"
              >
                {dropdown.options.map((item, i) => (
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
        ))}
      </div>

      {/* View Toggle */}
      <div className="hidden lg:flex gap-2 items-center">
        <button className="p-2 rounded hover:bg-gray-100 transition">
          <Grip className="w-6 h-6" />
        </button>
        <button className="p-2 rounded hover:bg-gray-100 transition">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </div>

  )
}

export default PropertyFilter