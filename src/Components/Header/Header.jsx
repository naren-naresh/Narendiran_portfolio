import { useState } from "react";
import profilePic from "../../assets/narendiran_profile.png";
import { FaTimes, FaRegDotCircle, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import { SiGmail } from "react-icons/si";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    if (isOpen) setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-white font-figtree shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo / Name */}
          <div className="text-2xl md:text-3xl font-bold text-[#04263e] tracking-tight">
            Narendiran<span className="text-[#0370DD]"> E</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-base font-medium">
            <button onClick={() => scrollToSection("about-section")} className="hover:text-[#0370DD]">About</button>
            <button onClick={() => scrollToSection("skills-section")} className="hover:text-[#0370DD]">Skills</button>
            <button onClick={() => scrollToSection("works-section")} className="hover:text-[#0370DD]">Projects</button>
            <button onClick={() => scrollToSection("contact-section")} className="hover:text-[#0370DD]">Contact</button>
            <a
              href="/assets/Narendiran_E_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0370DD] text-white px-3 py-1 rounded-md hover:bg-[#025bb5] transition"
            >
              Resume
            </a>
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
            <div className="w-64 bg-white h-full p-4 shadow-lg">
              <nav className="mt-10 flex flex-col space-y-6 text-md font-medium">
                <button onClick={() => scrollToSection("about-section")} className="hover:text-[#0370DD]">About</button>
                <button onClick={() => scrollToSection("skills-section")} className="hover:text-[#0370DD]">Skills</button>
                <button onClick={() => scrollToSection("works-section")} className="hover:text-[#0370DD]">Projects</button>
                <button onClick={() => scrollToSection("contact-section")} className="hover:text-[#0370DD]">Contact</button>
                <a
                  href="/assets/Narendiran_E_Resume.pdf"
                  target="_blank"
                  className="bg-[#0370DD] text-white px-3 py-1 rounded-md hover:bg-[#025bb5] transition"
                >
                  Resume
                </a>
              </nav>
            </div>
            <div className="flex-1" onClick={() => setIsOpen(false)}></div>
          </div>
        )}
      </header>

      {/* Profile Section */}
      <div className="container mx-auto px-4 text-center md:text-left md:items-start">
        <img
          src={profilePic}
          className="rounded-full w-32 md:w-40 lg:w-44 h-auto"
          alt="Narendiran Profile"
        />

        <div className="mt-4 bg-[#e5e9eb] font-medium px-3 py-1 rounded-full flex items-center w-fit">
          <FaRegDotCircle color="#047df7" size={12} />
          <span className="ml-2 text-xs text-[#2d4a5e]">Open to Opportunities</span>
        </div>
      </div>

      {/* Title Section */}
      <div className="container mx-auto px-4 mt-4 md:text-left">
        <p className="text-lg md:text-3xl font-bold text-[#04263e]">
          MERN Stack Developer | 2+ Years Experience
        </p>
        <p className="text-md md:text-xl font-medium text-[#04263e]">
          Building Scalable, Secure, and High-Performance Healthcare SaaS Platforms
        </p>
      </div>

      {/* Bio Section */}
      <div className="container mx-auto px-4 mt-4 md:text-left">
        <p className="text-sm md:text-base text-gray-500">
          I’m Narendiran E, a results-driven MERN Stack Developer specializing in enterprise-grade solutions.
          Experienced in React.js, Redux Toolkit, Node.js, GraphQL, MongoDB, and AWS CI/CD. Proven track record of improving app performance by 40% and delivering secure, scalable systems.
        </p>
      </div>

      {/* Social Links */}
      <div className="container mx-auto px-4 mt-4 flex gap-4 md:justify-start justify-center">
        <a href="https://www.linkedin.com/in/narendiran-e-665102287/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-[#0370DD] text-lg" />
        </a>
        <a href="https://github.com/<your-github>" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-[#0370DD] text-lg" />
        </a>
        <a href="mailto:narendirannaresh396@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className="hover:text-[#0370DD] text-lg" />
        </a>
      </div>
    </>
  );
};

export default Header;
