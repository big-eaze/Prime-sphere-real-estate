"use client"


import Image from "next/image"
import React from "react"
import PropertyFilter from "./PropertyFilter"
import SearchFilter from "./SearchFilter"

function PropertyTopSearch() {
  type Property = {
    id: number
    title: string
    image: string
    price: string
    badges: string[]
    details: string
    agent: string
  }

  const Properties: Property[] = [
    {
      id: 1,
      title: "Family house for sale",
      image: "/apartment1.jpg",
      price: "$100,000",
      badges: ["Featured", "For Sale", "Sold"],
      details: "2 Bedrooms · 5 Baths · Size 29,000 ft²",
      agent: "/agent1.jpg",
    },
    {
      id: 2,
      title: "Awesome family apartment",
      image: "/apartment2.jpg",
      price: "$5,500,000",
      badges: ["For Rent", "Sold"],
      details: "3 Bedrooms · 2.5 Baths · Size 1,300 ft²",
      agent: "/agent2.jpg",
    },
    {
      id: 3,
      title: "Modern home for sale",
      image: "/apartment3.jpg",
      price: "$775,000",
      badges: ["For Sale", "Sold"],
      details: "5 Bedrooms · 6 Baths · Size 190 ft²",
      agent: "/agent3.jpg",
    },
    {
      id: 4,
      title: "Family house for sale",
      image: "/apartment3.jpg",
      price: "$100,000",
      badges: ["Featured", "For Sale", "Sold"],
      details: "2 Bedrooms · 5 Baths · Size 29,000 ft²",
      agent: "/agent1.jpg",
    },
    {
      id: 5,
      title: "Awesome family apartment",
      image: "/apartment1.jpg",
      price: "$5,500,000",
      badges: ["For Rent", "Sold"],
      details: "3 Bedrooms · 2.5 Baths · Size 1,300 ft²",
      agent: "/agent2.jpg",
    },
    {
      id: 6,
      title: "Modern home for sale",
      image: "/apartment2.jpg",
      price: "$775,000",
      badges: ["For Sale", "Sold"],
      details: "5 Bedrooms · 6 Baths · Size 190 ft²",
      agent: "/agent3.jpg",
    },
  ]

  return (
    <div className=" lg:ml-64">

      {/* Hero */}
      <section
        className="h-[600px] bg-center bg-cover"
        style={{ backgroundImage: "url('/property-search-img.jpg')" }}
      >
        <div className="w-full h-full bg-black/50 text-white flex flex-col gap-14 items-center justify-center">
          <div className="text-center">
            <h1 className="font-sans text-5xl sm:text-6xl font-bold">
              Top Real Estate
            </h1>
            <span className="text-3xl sm:text-5xl">Listings in San Diego</span>
          </div>

          {/* Search Bar */}
          <SearchFilter />
        </div>
      </section>

      {/* Filter + Listings */}
      <section className="w-full flex flex-col gap-10 bg-gray-100 py-10">
        {/* Filter bar */}
        <PropertyFilter />

        {/* Property Grid */}
        <div className="w-[90%] lg:w-[70%] mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 ease-in-out"
              >
                {/* Image */}
                <div className="relative h-60 w-full">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 flex gap-2 flex-wrap">
                    {property.badges.map((badge, i) => (
                      <span
                        key={i}
                        className="bg-black/70 text-white text-xs px-2 py-1 rounded"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{property.details}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">{property.price}</span>
                    <Image
                      src={property.agent}
                      alt="Agent"
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex gap-2 justify-center">
            {[1, 2, 3].map((num, i) => (
              <button
                key={i}
                className={`px-4 py-2 text-lg rounded-md transition-all duration-300 ${num === 1
                    ? "bg-black text-white"
                    : "bg-white text-[#792617] hover:bg-black hover:text-white"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>

  )
}

export default PropertyTopSearch;
