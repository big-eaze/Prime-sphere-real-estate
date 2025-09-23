"use client";

import React, { useState } from 'react';


function ValuationForm() {

  const [consent, setConsent] = useState(false);


  return (
    <section className="max-w-4xl mx-auto lg:py-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl max-w-5xl mx-auto font-bold text-center mb-10">
        Complete this form and we will reply with the valuation details
      </h2>

      {/* Form */}
      <form className="space-y-8">
        {/* Grid for inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-md mb-2">First Name</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">Last Name</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">Email*</label>
            <input
              type="email"
              required
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">Mobile*</label>
            <input
              type="tel"
              required
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">Country</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">State</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">City</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div>
            <label className="block text-md mb-2">Zip</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-md mb-2">Address</label>
            <input
              type="text"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-md mb-2">Message*</label>
            <textarea
              required
              rows={4}
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2"
            ></textarea>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-center gap-2">
          <input
            id="consent"
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            className="w-4 h-4 border-gray-300 rounded focus:ring-black"
          />
          <label htmlFor="consent" className="text-md">
            I consent to having my information saved
          </label>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full md:w-auto px-8 py-3 bg-black text-white rounded hover:bg-gray-700 transition"
        >
          Send Email
        </button>
      </form>
    </section>
  );
}

export default ValuationForm;