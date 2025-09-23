"use client";
import { useState } from "react";
import Image from "next/image";
import { Share2, Heart, Plus } from "lucide-react";
import AuthModal from "./AuthModal";
type Property = {
  id: number;
  title: string;
  image: string;
  price: string;
  badges: string[];
  details: string;
  agent: string;
};

const properties: Record<string, Property[]> = {
  Apartments: [
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
      agent: "/agent4.jpg",
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
  ],
  Villas: [],
  Houses: [],
  Duplexes: [],
};

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<keyof typeof properties>("Apartments")
  const [addToFav, setAddToFav] = useState<boolean>(false);

  return (
    <section className="max-w-7xl w-full mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Properties</h2>

      {/* Tabs */}
      <div className="flex  items-center lg:flex-row justify-center gap-3  mb-10">
        {(Object.keys(properties) as (keyof typeof properties)[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 
              ${activeTab === tab
                ? "text-black"
                : "text-gray-500 hover:text-black"}
                `}
          >
            {tab}

            {/* underline effect */}
            <span
              className={`
                absolute left-0 bottom-0 h-[2px] w-full rounded-full transition-all duration-300
                ${activeTab === tab ? "bg-black scale-x-100" : "bg-black scale-x-0 group-hover:scale-x-100"}
              `}
            />
          </button>

        ))}
      </div>


      {/* Property Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {properties[activeTab].map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg flex flex-col shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image Section */}
            <div className="relative h-48 sm:h-56 md:h-60 w-full">
              <Image
                src={property.image}
                alt={property.title}
                fill
                className="object-cover"
              />

              {/* Badges */}
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

              {/* Share, Like, Compare */}
              <div className="absolute flex gap-2 left-2 bottom-2 text-white">
                {[
                  { Icon: Share2, label: "Share" },
                  { Icon: Heart, label: "Add to favourite" },
                  { Icon: Plus, label: "Add" },
                ].map(({ Icon, label }, i) => (
                  <div key={i} className="relative group">
                    {/* Icon button */}
                    <button className="bg-black/40 p-2 rounded text-white hover:bg-black/60 transition">
                      <Icon
                        onClick={() => {
                          if (Icon === Heart) setAddToFav(true);
                        }}
                        className="w-4 h-4"
                      />
                    </button>

                    {/* Tooltip */}
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 w-max bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {addToFav && <AuthModal setAddToFav={setAddToFav} />}
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col w-full flex-1 justify-between">
              <div>
                <h3 className="font-semibold text-base sm:text-lg line-clamp-1">
                  {property.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {property.details}
                </p>
              </div>

              <div className="flex items-center justify-between border-t pt-3 border-gray-200">
                <span className="text-base sm:text-lg font-bold">
                  {property.price}
                </span>

                <div className="w-10 h-10 sm:w-12 sm:h-12 relative overflow-hidden rounded-sm">
                  <Image
                    src={property.agent}
                    alt="Agent"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section >
  );
}
