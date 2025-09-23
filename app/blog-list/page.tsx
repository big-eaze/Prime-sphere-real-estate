import Image from "next/image"
import Link from "next/link"
import React from "react"

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
async function BlogList() {
  await wait(5000);
  const blogs = [
    {
      id: 1,
      title: "Best areas for families with kids",
      date: "March 4, 2016",
      image: "/apartment4.jpg",
      excerpt:
        "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 ...",
    },
    {
      id: 2,
      title: "The top neighborhoods",
      date: "May 28, 2014",
      image: "/apartment2.jpg",
      excerpt:
        "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 ...",
    },
    {
      id: 3,
      title: "Buyer’s guide",
      date: "May 27, 2014",
      image: "/apartment1.jpg",
      excerpt:
        "New York County as a whole covers a total area of 33.77 square miles (87.5 km2), of which 22.96 square miles (59.5 ...",
    },
    {
      id: 4,
      title: "Investing in property",
      date: "April 15, 2015",
      image: "/apartment3.jpg",
      excerpt:
        "Investing in real estate is one of the safest ways to secure your financial future, and New York remains a hotspot...",
    },
    {
      id: 5,
      title: "Home renovation tips",
      date: "July 9, 2017",
      image: "/apartment7.jpg",
      excerpt:
        "Thinking of renovating your home? Here are the top renovation tips from interior experts to maximize value...",
    },
    {
      id: 6,
      title: "The ultimate buyer’s checklist",
      date: "October 12, 2018",
      image: "/apartment8.jpg",
      excerpt:
        "Before buying a home, it’s crucial to have a checklist that covers everything from budgeting to inspection...",
    },
  ]

  return (
    <div className="lg:ml-74 bg-[#EFEFEF]">
      <div className="pb-20">
        {/* Hero Section */}
        <section className="h-[500px] flex bg-[url('/stars-bg.jpg')] bg-cover items-center justify-center text-white py-20 text-center relative">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">Real Estate Blog</h1>
            <p className="text-lg md:text-xl">Read about the latest industry news</p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-gray-600">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          <span className="mx-2">›</span> Blog List
        </div>

        {/* Blog List Section */}
        <section className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Blog List</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{blog.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
                  <p className="text-gray-600 text-sm mb-3">{blog.excerpt}</p>
                  <Link
                    href="#"
                    className="text-red-600 font-medium text-sm flex items-center gap-1 hover:underline"
                  >
                    Continue reading →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            <button className="flex-none py-2 px-4 text-lg bg-white hover:bg-black text-[#792617] hover:text-white transition-all">
              Previous
            </button>
            <button className="flex-none py-2 px-4 bg-black text-lg text-white">
              1
            </button>
            <button className="flex-none py-2 px-4 text-lg bg-white text-[#792617] hover:bg-black hover:text-white transition-all">
              2
            </button>
            <button className="flex-none py-2 px-4 text-lg bg-white text-[#792617] hover:bg-black hover:text-white transition-all">
              3
            </button>
            <span className="px-2">...</span>
            <button className="flex-none py-2 px-4 text-lg bg-white text-[#792617] hover:bg-black hover:text-white transition-all">
              10
            </button>
            <button className="flex-none py-2 px-4 text-lg bg-white text-[#792617] hover:bg-black hover:text-white transition-all">
              Next
            </button>
          </div>
        </section>
      </div>
    </div>

  )
}

export default BlogList
