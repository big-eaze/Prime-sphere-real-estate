"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[560px] sm:min-h-[650px]">
      {/* Thumbnail Section */}
      <div className="w-full lg:w-1/2 h-82 sm:h-96 lg:h-auto flex justify-center items-center">
        <div
          className="relative w-full h-full cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <Image
            src="/testimonial.jpg"
            alt="Video Thumbnail"
            fill
            className="object-cover object-top shadow-lg"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex justify-center items-center bg-black/30 group-hover:bg-black/50 transition">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="black"
                className="w-8 h-8 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
            <div className="relative w-[90%] max-w-3xl aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white text-3xl"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Testimonial Section */}
      <div className="bg-black text-white w-full lg:w-1/2 flex flex-col items-center justify-center py-12 px-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Testimonials</h1>
        <span className="text-5xl mt-6 sm:mt-10">“</span>
        <p className="text-base sm:text-lg lg:text-xl max-w-2xl mt-6 sm:mt-10">
          The WP Estate team did an outstanding job helping me buy and create my
          first real estate website. The WP Estate team did an outstanding job
          helping me buy and create my first real estate website.
        </p>
        <div className="flex flex-col gap-2 items-center mt-6 sm:mt-10">
          <span className="text-lg sm:text-xl">Jeremy Franklin.</span>
          <span className="text-teal-300 text-sm sm:text-md">
            Buyer, Feb 10 2025
          </span>
        </div>
      </div>
    </div>

  );
}
