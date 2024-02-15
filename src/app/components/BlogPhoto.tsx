import React from 'react'

const BlogPhoto = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
                <img src="/recblog.png" />
            </div>
        </div>
    </div>
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
   
        <div className="text-left">
        <div className="justify-start flex rounded-full p-2">
    <button className="text-orange flex-1 font-sans text-sm md:text-md bg-gray-300 px-2 py-2 rounded-full">
        Announcement
    </button>
</div>

            <h2
                className="text-3xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-3xl">
              British Engines Sponsors Robotics Teacher for Students in the North East
                
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The Robotics Partnerships Teacher, who splits his time between teaching students at the RGS and its partner state schools, hopes to inspire the next generation of game changers within engineering.
            </p>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            October 23, 2023
            </p>
        </div>
    </div>

 
</div>
<hr />
    </div>
    
  )
}

export default BlogPhoto
