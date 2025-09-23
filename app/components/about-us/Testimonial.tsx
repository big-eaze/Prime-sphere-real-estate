"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ArrowLeft, ArrowRight, MoveLeft, MoveRight } from "lucide-react";

type Testimonial = {
  title: string,
  emoji: string,
  text: string,
  name: string,
  role: string,
  img: string
}
const testimonials: Testimonial[] = [
  {
    title: "Excellent service",
    emoji: "🏆",
    text: "The WP Estate team delivered on that expectation and I would highly recommend them to anyone who is in the market to buy a home. They did an outstanding job helping me buy my first home. The high level of service and dedication.",
    name: "Dan Gilmore",
    role: "Happy buyer",
    img: "/agent2.jpg",
  },
  {
    title: "Great support",
    emoji: "💯",
    text: "Amazing team! They made the process smooth and stress-free. Always available and extremely professional.",
    name: "Sarah White",
    role: "Satisfied client",
    img: "/agent4.jpg",
  },
];

export default function TestimonialSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [navReady, setNavReady] = useState(false);

  // Wait until refs are set
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavReady(true);
    }
  }, []);

  return (
    <section className="relative">
      {/* Video Background */}
      <div className="relative w-full h-[500px]">
        <video
          autoPlay
          loop
          playsInline
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source type="video/mp4" src="/living.mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Heading */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white z-20">
            TESTIMONIALS
          </h2>
        </div>
      </div>

      {/* Slider (floating on video) */}
      <div className="relative max-w-5xl mx-auto px-6 -mt-24 z-30">
        {/* Custom Arrows */}
        <button
          ref={prevRef}
          className="absolute left-4 -top-8 xl:-left-10 xl:top-1/2 -translate-y-1/2 
             bg-white shadow-md rounded-md p-3 md:p-2 
             active:bg-black active:text-white z-40"
        >
          <ArrowLeft size={20} />
        </button>

        <button
          ref={nextRef}
          className="absolute right-4 -top-8 xl:-right-10 xl:top-1/2 -translate-y-1/2 
             bg-white shadow-md rounded-md p-3 md:p-2 
             active:bg-black active:text-white z-40"
        >
          <ArrowRight size={20} />
        </button>


        {/* Swiper */}
        {navReady && (
          <Swiper
            modules={[Navigation]}
            loop
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-black text-white rounded-xl shadow-lg flex md:flex-row md:h-[500px] overflow-hidden">
                  {/* Text */}
                  <div className="p-8 md:p-10 md:w-1/2 flex flex-col justify-center">
                    <h3 className="font-bold text-2xl">
                      {t.title} <span>{t.emoji}</span>
                    </h3>
                    <div className="flex flex-col gap-4 text-lg leading-8 mt-4">
                      <p className="text-gray-200">{t.text}</p>
                      <div className="text-end">
                        <p className="font-semibold">{t.name}</p>
                        <p className="text-gray-400 text-sm">{t.role}</p>
                      </div>
                    </div>
                  </div>
                  {/* Image */}
                  <div className="relative hidden md:block md:w-1/2 h-64 md:h-auto">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>


  );
}