"use client";
import React, { useState } from "react";

export default function DoubleRange() {
  const [minVal, setMinVal] = useState(200000);
  const [maxVal, setMaxVal] = useState(1000000);

  const min = 0;
  const max = 1500000;

  return (
    <>
      {/* Labels */}
      <p className="text-sm">
        Price range: <strong><span>${minVal.toLocaleString()}</span></strong> to{" "}
        <strong><span>${maxVal.toLocaleString()}</span></strong>
      </p>
      <div className="relative w-full max-w-xl mx-auto pt-3 pb-10">
        {/* Track background */}
        <div className="relative h-1 rounded-lg bg-gray-200">
          {/* Progress fill */}
          <div
            className="absolute h-1 rounded-lg bg-black"
            style={{
              left: `${(minVal / max) * 100}%`,
              right: `${100 - (maxVal / max) * 100}%`,
            }}
          ></div>
        </div>

        {/* Min range */}
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 50000); // prevent overlap
            setMinVal(value);
          }}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
        />
        {/* Max range */}
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 50000);
            setMaxVal(value);
          }}
          className="absolute w-full h-1 bg-transparent appearance-none pointer-events-none"
        />

        {/* Custom thumbs */}
        <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
        }

        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 20%;
          background: white;
          border: 2px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          pointer-events: auto; /* restore pointer */
          position: relative;
        }

        input[type="range"]::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 20%;
          background: white;
          border: 2px solid #3b82f6;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          pointer-events: auto;
          position: relative;
        }
      `}</style>
      </div>
    </>
  );
}
