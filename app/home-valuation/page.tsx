import React from "react";
import ValuationForm from "../components/ValuationForm";

export default function ValuationPage() {


  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-bottom bg-cover"
        style={{ backgroundImage: "url('/landscape-3.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">
          <h1 className="text-white font-sans text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Do you want to know <br />
            what your property is worth?
          </h1>
        </div>
      </section>

      {/* Valuation Form Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <ValuationForm />
      </div>
    </div>

  );
}
