import React, { useState } from "react";
import profilePic from "../../assets/Raw_image_edited_circle_v2.webp"
import { FaBars, FaTimes } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white font-figtree ">
        <div className="container mx-auto px-[9.5rem] py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-5xl font-bold text-[#04263e] tracking-tight">manoj</div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-base">
            <a href="dasf" className="text-gray-900 hover:text-[#0370DD]">Home</a>
            <a href="asdfasdf" className="text-gray-900 hover:text-[#0370DD]">Work</a>
            <a href="adsfasf" className="text-gray-900 hover:text-[#0370DD]">About</a>
            <a href="afdsasdf" className="text-gray-900 hover:text-[#0370DD]">Resume</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow-md p-4 space-y-3">
            <a href="#" className="block text-gray-900 hover:text-blue-600">Home</a>
            <a href="#" className="block text-gray-900 hover:text-blue-600">Work</a>
            <a href="#" className="block text-gray-900 hover:text-blue-600">About</a>
            <a href="#" className="block text-gray-900 hover:text-blue-600">Resume</a>
          </nav>
        )}

      </header>
      <div className="container mx-auto px-[9.6rem] ">
        <img
          src={profilePic}
          className="rounded-full w-[9%] h-auto"
          alt="Profile"
        />
      </div>
      <div className=" container mx-auto px-[9.6rem] mt-[1%] font-figtree ">
        <div className="bg-[#e5e9eb] font-medium  tracking-wider  px-2 py-1 rounded-full w-[15%] flex items-center ">
          <FaRegDotCircle color="#047df7" size={12} >
          </FaRegDotCircle>
          <div className="ml-[4%] font-medium text-xs text-[#2d4a5e]">
            Available for Work
          </div>

        </div>

      </div>
      <div className="container font-bold mx-auto px-[9.6rem] text-[#04263e]  mt-[1%] font-figtree ">
        <p className="text-4xl">
        Passionate MERN Developer.
        </p>
        <p className="text-4xl">
        Building Intuitive & Scalable Web Solutions
        </p>
        <span className="text-4xl">
        For Growing Startups.
        </span>
        
      </div>



    </>
  );
};

export default Header;
