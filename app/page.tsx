import Image from "next/image";
import React from "react";
import FeaturedProperties from "./components/FeaturedProperty";
import PopularCategories from "./components/PopularCategory";
import Testimonial from "./components/Testimonial";
import GetInTouch from "./components/GetInTouch";
import Link from "next/link";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function HomePage() {
  await wait(5000);
  return (
    <div className="w-full bg-[#EFEFEF] flex">
      <div className="w-full mb-30 flex flex-col gap-15 lg:gap-40 ml-0 lg:ml-75">
        {/* HERO */}
        <section className="relative w-full h-[500px] md:h-[800px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/homevid.mp4" type="video/mp4" />
          </video>

          {/* Overlay */}
          <div className="relative z-10 text-white flex flex-col gap-6 items-center justify-center h-full bg-black/50 px-4">
            <p className="text-sm md:text-lg">Prime Sphere Real Estate</p>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center">
              Top Real Estate Listings in San Diego
            </h1>
            <p className="text-base md:text-xl text-center">
              Providing The Most Comprehensive And Distinguished Real Estate Services.
            </p>
            <div className="flex flex-col items- sm:flex-row gap-4">
              <Link href="/property-search">
                <button className="border border-white w-full py-3 px-7 hover:bg-white/20 transition">
                  Search Properties
                </button>
              </Link>
              <Link href="/home-valuation">
                <button className="border border-white w-full py-3 px-7 hover:bg-white/20 transition">
                  Home valuation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="w-full max-w-7xl mx-auto flex flex-col gap-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { first: "20+ Years", second: "Of Real Estate Experience" },
              { first: "2012-2023", second: "San Diego Realtors Excellence Sales Award" },
              { first: "Five Star Professional", second: "Real Estate Agents Award" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                  {item.first}
                </h2>
                <p className="text-gray-600 text-sm md:text-lg">{item.second}</p>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { img: "/apartment1.jpg", state: "Buying" },
              { img: "/apartment2.jpg", state: "Selling" },
              { img: "/apartment3.jpg", state: "Financing" },
            ].map((photo, i) => (
              <div key={i} className="relative h-64 sm:h-80 group rounded-lg overflow-hidden">
                <Image src={photo.img} alt={photo.state} fill className="object-cover" />
                <span className="absolute bottom-6 left-6 text-white text-2xl font-bold z-10">
                  {photo.state}
                </span>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
              </div>
            ))}
          </div>
        </section>

        {/* MEET THE TEAM */}
        <section className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl mx-auto">
          <div className="relative w-full lg:w-1/2 h-80 md:h-[500px]">
            <Image
              src="/my-team.jpg"
              alt="The team"
              fill
              className="object-cover lg:rounded-md shadow-lg"
            />
          </div>
          <div className="flex-1 w-[90%] mx-auto text-gray-600 text-base md:text-lg flex flex-col gap-4">
            <h1 className="text-2xl lg:text-3xl md:text-5xl font-semibold text-black">
              Meet the Team
            </h1>
            <p>
              With over $2 Billion in sales, Our agency is the industry top luxury
              producer with over 27 years of experience in marketing Seattles most
              Prestigious waterfront properties.
            </p>
            <p>
              Due to our unparalleled results, expertise and dedication, we rank
              amongst the Top 6 agencies in Seattle and our area.
            </p>
            <p>
              With years of experience, impressive property portfolio, celebrity
              clientele and unparalleled knowledge, Simone’s business is sophisticated
              and renowned.
            </p>
            <button className="bg-black text-white px-7 py-3 hover:bg-white hover:text-black hover:border-black border transition">
              Contact Me
            </button>
          </div>
        </section>

        {/* FEATURED NEIGHBORHOODS */}
        <section className="w-full py-12 px-6 md:px-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Featured Neighborhoods
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Mission Beach", image: "/apartment1.jpg" },
              { name: "Pacific Beach", image: "/apartment2.jpg" },
              { name: "La Jolla", image: "/apartment3.jpg" },
              { name: "Downtown SD", image: "/apartment4.jpg" },
            ].map((place, i) => (
              <div key={i} className="relative rounded-md overflow-hidden shadow-md group">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 sm:h-80 md:h-[350px] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-xl md:text-3xl font-semibold">
                    {place.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <FeaturedProperties />
        <PopularCategories />
        <Testimonial />
        <GetInTouch />
      </div>
    </div>

  );
}
