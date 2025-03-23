import React from 'react'

const Footer = () => {
  return (
    <div id="Footer-Section" className="container mx-auto px-1 md:px-0 lg:px-28 py-4 font-figtree w-full">
      <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">
        About
      </div>
      <div className="mt-[1.5%] lg:grid grid-cols-2 gap-5">
        <div className="text-gray-500 text-sm md:text-base lg:text-base lg:w-full mt-[0.8%]">
          I’m Manoj Kumar, a passionate MERN Stack Developer from Vellore, Tamil Nadu, India, with a strong enthusiasm for working with tech startups. I believe that learning is a lifelong journey, and I embrace knowledge from everyone, regardless of their background.
          <div className='mt-[3%]'>
            <span className='text-black '>Little Background</span>

            <span className="text-gray-500 text-sm md:text-base lg:text-base lg:w-full mt-[2%] block">
              I completed my SSLC with 86% and HSC with 84%, followed by a Bachelor’s degree in Computer Science Engineering. After graduation, I discovered my passion for full-stack web development and chose the MERN stack as my specialization. Since then, I have been dedicating my time to mastering my skills, building scalable applications, and staying up-to-date with the latest industry trends.

              Currently, I’m working as a Software Developer at Wonder Worth Solutions, where I contribute to building robust and efficient applications while continuously expanding my expertise. When I’m not immersed in code, I find joy in hitting the road on my bike, soaking in the serenity of nature, and discovering new places that fuel both my creativity and adventurous spirit.

            </span>
          </div>
        </div>
        <div id="default-carousel" className=" relative w-full">
          <div className="overflow-hidden rounded-lg md:h-96 relative">
            <div className=" w-full h-full">
              <img className="absolute w-full h-full object-cover opacity-0 animate-fade1" src="/Manoj_1.webp" alt="Carousel1" />
              <img className="absolute w-full h-full object-cover opacity-0 animate-fade2" src="/Nature.webp" alt="Carousel2" />
            </div>
          </div>
        </div>
        {/* <div>
          <a href="" className='p-4 py-2 bg-[#0370DD] text-white rounded-lg font-bold transition-all duration-500 hover:bg-blue-950'>Read More</a>
        </div> */}
        <div>
        </div>
      </div>
      <div className="w-full mt-6">
        <div >
          <div className="flex justify-between items-center transition-all duration-500  border-gray-200 px-1 py-3">
            <div className='flex gap-7'>

              <a href="https://www.linkedin.com/in/manoj-kumar10" target="_blank" className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] "> Linked In </a>
              <a href="https://github.com/debugmanoj" target="_blank" className=" text-xs md:text-xs lg:text-xs font-medium  text-[#04263e] "> GitHub </a>
            </div>
            <span className={`text-black hidden font-medium text-sm md:text-base lg:text-base cursor-default  md:inline`}>Working Fulltime</span>
          </div>
          <div className='text-center text-xs'>
            @Manoj Kumar
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer