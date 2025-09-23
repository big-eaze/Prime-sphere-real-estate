import React from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube
} from "react-icons/fa";
import Testimonial from "../components/about-us/Testimonial";
import FAQSection from "../components/about-us/FAQSection";
import GetInTouch from "../components/GetInTouch";



// Fake delay helper
const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export default async function About() {

  const agents = [
    {
      name: "Michael Rutter",
      role: "buying agent",
      img: "/agent1.jpg",
      desc: "Whether it is working with a first time homebuyer, a luxury home listing or a seasoned inv...",
      socials: ["facebook", "linkedin", "instagram", "youtube", "twitter"],
    },
    {
      name: "Sam Daniels",
      role: "selling agent",
      img: "/agent3.jpg",
      desc: "Janet’s knowledge, honesty, integrity, and fairness have been evident throughout her caree...",
      socials: ["facebook", "twitter", "linkedin", "pinterest"],
    },
    {
      name: "Michael Barlow",
      role: "sales executive",
      img: "/agent4.jpg",
      desc: "As a fourth generation realtor, I was raised in a family where real estate was the primary...",
      socials: ["facebook", "linkedin", "instagram", "youtube", "vimeo"],
    },
  ];

  await wait(3000); // 

  return (
    <div className="w-full">
      <div className="lg:ml-75">
        {/* Hero Section */}
        <section className="w-full h-[400px] md:h-[600px] bg-bottom bg-cover bg-top" style={{ backgroundImage: "url('/group.png')" }}>
          <div className="w-full h-full flex flex-col gap-6 items-center justify-center bg-black/40">
            <span className="text-base md:text-lg text-white">Get To Know Our Talented Team.</span>
            <h1 className="font-sans text-3xl md:text-6xl text-white text-center">About Prime Sphere Real Estate</h1>
          </div>
        </section>

        {/* Meet Sam Daniels */}
        <section className="bg-gray-50 py-10 md:py-12 px-4 md:px-0">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-xl shadow-sm p-4 md:p-8">
            {/* Text Section */}
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-4">
                Meet Sam Daniels
              </h2>
              <p className="text-gray-600 mb-4">
                With over $2 Billion in sales, Our agency is the industry’s top luxury
                producer with over 27 years of experience in marketing Seattle’s most
                prestigious waterfront properties.
              </p>
              <p className="text-gray-600 mb-4">
                Due to our unparalleled results, expertise and dedication, we rank
                amongst the Top 6 agencies in Seattle and our area. She is also and is
                an elite member to Corcoran’s Presidents Council.
              </p>
              <p className="text-gray-600 mb-6">
                With her years of experience, impressive property portfolio, celebrity
                clientele, and unparalleled knowledge of the market and pedigree
                estates, Simone estimable business is sophisticated and renowned.
              </p>
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Contact Me
              </button>
            </div>
            {/* Image Section */}
            <div className="w-full h-[600px] md:h-[700px] relative rounded-xl overflow-hidden">
              <Image
                src="/CEO.jpg"
                alt="Sam Daniels"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>    

        {/* About Daniels Realty */}
        <section className="w-full max-w-5xl mx-auto bg-white py-16 md:py-24 flex flex-col gap-12 px-4 md:px-0">
          <h1 className="text-center text-3xl md:text-4xl font-bold">About Daniels Realty</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Our Mission", content: "With over $2 Billion in sales, our agency is the industry&apos;s top luxury producer with over 27 years of experience in marketing Seattle&apos;s most prestigious waterfront properties." },
              { title: "Our Vision", content: "Due to our unparalleled results, expertise and dedication, we rank amongst the Top 6 agencies in Seattle and our area. She also is an elite member to Corcoran&apos;s Presidents Council." },
              { title: "Our Values", content: "With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned." },
              { title: "Our Resources", content: "With her years of experience, impressive property portfolio, celebrity clientele, and unparalleled knowledge of the market and pedigree estates, Simone estimable business is sophisticated and renowned." }
            ].map((item, idx) => (
              <div key={idx} className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700 text-base md:text-lg">{item.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Meet our team */}
        <section className="bg-gray-50 py-20 md:py-40 flex flex-col gap-10 md:gap-20 font-bold">
          <h1 className="text-center text-3xl md:text-4xl">Meet our team</h1>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-6">
            {agents.map((agent, i) =>
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col group cursor-pointer">
                {/* Image */}
                <div className="relative h-56 md:h-60 overflow-hidden">
                  <Image
                    src={agent.img}
                    alt={agent.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-600"
                  />
                </div>
                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                  <h2 className="text-lg md:text-xl font-semibold">{agent.name}</h2>
                  <p className="text-sm text-gray-500 mb-2">{agent.role}</p>
                  <p className="text-sm text-gray-600 flex-1">{agent.desc}</p>
                  {/* Social + Contact */}
                  <div className="mt-4 flex items-center justify-between text-gray-500">
                    <div className="flex space-x-3 ">
                      <FaFacebook className="hover:text-gray-800 transition duration-300" size={18} />
                      <FaLinkedin className="hover:text-gray-800 transition duration-300" size={18} />
                      <FaInstagram className="hover:text-gray-800 transition duration-300" size={18} />
                      <FaYoutube className="hover:text-gray-800 transition duration-300" size={18} />
                      <FaTwitter className="hover:text-gray-800 transition duration-300" size={18} />
                    </div>
                    <div className="flex space-x-3">
                      <Phone className="hover:text-gray-800 transition duration-300" size={18} />
                      <Mail className="hover:text-gray-800 transition duration-300" size={18} />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials, FAQ, Contact */}
        <section>
          <Testimonial />
        </section>
        <section>
          <FAQSection />
        </section>
        <div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}
