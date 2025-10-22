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



//Skeleton loader
{
  /*function loading() {
    return (
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">Loading Properties...</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
            >
             
              <div className="h-60 bg-gray-200"></div>
      
              <div className="p-4 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="h-6 bg-gray-200 rounded w-20"></div>
                  <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  } */
}


export default loading;