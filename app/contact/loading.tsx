import React from 'react'


function loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#EFEFEF]">
      <div className="relative w-20 h-20 animate-spin">
        <div className="absolute w-8 h-8 bg-teal-500 rounded-full top-0 left-1/2 -translate-x-1/2"></div>
        <div className="absolute w-8 h-8 bg-black rounded-full bottom-0 left-0"></div>
        <div className="absolute w-8 h-8 bg-gray-400 rounded-full bottom-0 right-0"></div>
      </div>
    </div>




  )
}


export default loading;