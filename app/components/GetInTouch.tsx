"use client"
import Image from 'next/image';
import React from 'react'

function GetInTouch() {
  return (
    <div className="w-[90%] max-w-6xl mx-auto mt-20 mb-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
      {/* Left Image */}
      <div className="relative w-full lg:w-1/2 h-72 sm:h-96 lg:h-[600px]">
        <Image
          src="/apartment5.jpg"
          alt="team-img"
          fill
          className="rounded-md shadow-lg object-cover"
        />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 flex flex-col gap-10 font-sans">
        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          <h1>In need of support?</h1>
          <p className="mt-2 text-gray-700">Get in touch!</p>
        </div>

        <form className="w-full flex flex-col gap-6">
          {/* Name + Last Name */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <label className="text-lg">Name*</label>
              <input
                type="text"
                className="border-b-2 border-gray-400 focus:outline-none focus:border-gray-800 p-2"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <label className="text-lg">Last Name*</label>
              <input
                type="text"
                className="border-b-2 border-gray-400  focus:outline-none focus:border-gray-800 p-2"
              />
            </div>
          </div>

          {/* City + State */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <label className="text-lg">City*</label>
              <input
                type="text"
                className="border-b-2 border-gray-400  focus:outline-none focus:border-gray-800 p-2"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <label className="text-lg">State*</label>
              <input
                type="text"
                className="border-b-2 border-gray-400 focus:outline-none focus:border-gray-800 p-2"
              />
            </div>
          </div>

          {/* Email + Mobile */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <label className="text-lg">Email*</label>
              <input
                type="email"
                className="border-b-2 border-gray-400  focus:outline-none focus:border-gray-800 p-2"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col gap-2">
              <label className="text-lg">Mobile*</label>
              <input
                type="text"
                className="border-b-2 border-gray-400 focus:outline-none focus:border-gray-800 p-2"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-lg">Message</label>
            <textarea
              className="resize-none w-full h-28 border-b-2 border-gray-400 focus:outline-none focus:border-gray-800 p-2"
            />
          </div>

          {/* Submit */}
          <button className="relative px-7 py-3 bg-black text-white border border-black flex-none w-[200px] rounded-lg group overflow-hidden transition-colors duration-300 hover:text-black">
            <span className="relative z-10">Send E-mail</span>
            <span className="absolute inset-0 -translate-x-full bg-white group-hover:translate-x-0 transition-transform duration-300" />
          </button>
        </form>
      </div>
    </div>

  )
}

export default GetInTouch;