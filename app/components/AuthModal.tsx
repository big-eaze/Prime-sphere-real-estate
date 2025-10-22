"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";

type AuthModalProps = {
  setAddToFav: Dispatch<SetStateAction<boolean>>;
}

export default function AuthModal({ setAddToFav }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg flex overflow-hidden max-w-3xl w-full min-h-[500px]">
        {/* Left side (image + welcome text) */}
        <div className="relative hidden md:block w-1/2">
          <Image
            src="/agent2.jpg" // replace with your image
            alt="Welcome"
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-5">
            <h2 className="text-white text-3xl flex-wrap font-semibold text-center px-6">
              Welcome to Prime<br /> Sphere Real Estate
            </h2>
          </div>
        </div>

        {/* Right side (form) */}
        <div className="w-full md:w-1/2 p-8 px-15 flex flex-col items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white text-2xl hover:text-black"
            onClick={() => setAddToFav(false)}
          >
            ✕
          </button>

          <h3 className="text-xl font-semibold mb-6 text-center">
            {isLogin ? "Sign into your account" : "Create an account"}
          </h3>

          {isLogin ? (
            <form className="space-y-4 text-sm">
              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
              <button className='relative px-7 py-3 w-full bg-black hover:text-black text-white border border-black rounded-lg group overflow-hidden transition-colors duration-300'>
                <span className='relative z-10'>Login</span>
                <span className='absolute inset-0 translate-x-[-100%] bg-white group-hover:translate-x-0 transition-transform duration-300' />
              </button>
              <div className="flex justify-between text-sm mt-2">
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-[#792617] hover:underline"
                >
                  Register here!
                </button>
                <button className="text-[#792617] hover:underline">
                  Forgot password?
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-4 text-sm">
              <input
                type="text"
                placeholder="Username"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
              <input
                type="password"
                placeholder="Retype Password"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-gray-300"
              />
              <button className='relative px-7 w-full py-3 bg-black hover:text-black text-white border border-black rounded-lg group overflow-hidden transition-colors duration-300'>
                <span className='relative z-10'>Register</span>
                <span className='absolute inset-0 translate-x-[-100%] bg-white group-hover:translate-x-0 transition-transform duration-300' />
              </button>
              <div className="flex justify-between text-sm mt-2">
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className="text-[#792617] hover:underline"
                >
                  Back to login
                </button>
                <button className="text-[#792617] hover:underline">
                  Forgot password?
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
