import React, { useState } from "react";
import profilePic from "../../assets/Raw_image_edited_circle_v2.webp";
import { FaTimes, FaRegDotCircle } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white font-figtree">
        <div className="container mx-auto px-6 md:px-16 lg:px-32 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-4xl md:text-5xl  font-bold text-[#04263e] tracking-tight">manoj</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-base font-medium">
            <a href="#" className="text-gray-900 hover:text-[#0370DD]">Home</a>
            <a href="#" className="text-gray-900 hover:text-[#0370DD]">Work</a>
            <a href="#" className="text-gray-900 hover:text-[#0370DD]">About</a>
            <a href="#" className="text-gray-900 hover:text-[#0370DD]">Resume</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div
            className={" fixed inset-0 bg-black bg-opacity-50 z-50 flex"}>
            {/* Sidebar */}
            <div

              className="w-64 bg-white h-full  p-2 shadow-lg transform transition-transform duration-1000 ease-in-out translate-x-0"
            >

              <nav className="mt-[10%] text-left flex flex-col space-y-6 text-md font-medium w-full">
                <a href="#" className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-md hover:translate-x-1 duration-300">Home</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">Work</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">About</a>
                <a href="#" className="text-gray-900 hover:text-blue-600 hover:bg-slate-100 hover:p-3 hover:rounded-sm hover:translate-x-1 duration-300">Resume</a>
              </nav>
            </div>
            {/* Clickable Overlay to Close Sidebar */}
            <div className="flex-1" onClick={() => setIsOpen(false)}></div>
          </div>
        )}
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-6 md:px-16 lg:px-32 flex flex-col  text-center md:text-left md:items-start mt-[2%]">
        <img src={profilePic} className="rounded-full w-32 md:w-[26%] lg:w-[12%] h-auto" alt="Manoj Profile" />

        <div className="mt-4 md:mt-6 bg-[#e5e9eb] font-medium tracking-wider px-3 py-1 rounded-full flex items-center w-fit">
          <FaRegDotCircle color="#047df7" size={12} />
          <span className="ml-2 text-xs text-[#2d4a5e]">Available for Work</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-6 md:px-16 lg:px-32 mt-6  md:text-left">
        <p className="text-2xl md:text-4xl font-bold text-[#04263e] leading-tight">
          Passionate MERN Developer.
        </p>
        <p className="text-2xl md:text-4xl font-bold text-[#04263e] leading-tight">
          Building Intuitive & Scalable Web Solutions
        </p>
        <span className="text-2xl md:text-4xl font-bold text-[#04263e]">
          For Growing Startups.
        </span>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto px-6 md:px-16 lg:px-32 mt-4  md:text-left">
        <p className="text-sm md:text-base text-gray-500 font-medium">
          I'm Manoj, a MERN stack developer with one year of experience.
        </p>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          I firmly believe that learning never stops because no one is a true master.
        </p>
        <p className="text-sm md:text-base text-gray-500 font-medium">
          Technology evolves every day, and I strive to grow, adapt, and improve my skills continuously.
        </p>
      </div>
    </>
  );
};

export default Header;