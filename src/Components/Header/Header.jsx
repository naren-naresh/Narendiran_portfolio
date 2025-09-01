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
      <header className="w-full bg-white font-figtree">
        <div className="container mx-auto px-1 md:px-0 lg:px-32 py-4 flex justify-between items-center">
          {/* Brand */}
          <div
            className="text-4xl md:text-4xl font-bold text-[#04263e] tracking-tight"
            aria-label="Site logo"
          >
            Narendiran<span className="text-[#0370DD]"> E</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 text-base font-medium">
            <button onClick={() => scrollToSection("about-section")} className="text-gray-900 hover:text-[#0370DD]">
              About
            </button>
            <button onClick={() => scrollToSection("skills-section")} className="text-gray-900 hover:text-[#0370DD]">
              Skills
            </button>
            <button onClick={() => scrollToSection("works-section")} className="text-gray-900 hover:text-[#0370DD]">
              Projects
            </button>
            <button onClick={() => scrollToSection("about-section")} className="text-gray-900 hover:text-[#0370DD]">
              Contact
            </button>
            <a
              href="https://drive.google.com/uc?export=download&id=10AMJ6ESPKP-EeODv3fS36zqkEobFa91Z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-[#0370DD] px-3 py-1 rounded-md hover:bg-[#025bb5] transition"
            >
              Resume
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-900 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex" role="dialog" aria-modal="true">
            <div className="w-64 bg-white h-full p-4 shadow-lg">
              <nav className="mt-10 flex flex-col space-y-6 text-md font-medium">
                <button onClick={() => scrollToSection("about-section")} className="text-gray-900 hover:text-[#0370DD]">
                  About
                </button>
                <button onClick={() => scrollToSection("skills-section")} className="text-gray-900 hover:text-[#0370DD]">
                  Skills
                </button>
                <button onClick={() => scrollToSection("works-section")} className="text-gray-900 hover:text-[#0370DD]">
                  Projects
                </button>
                <button onClick={() => scrollToSection("contact-section")} className="text-gray-900 hover:text-[#0370DD]">
                  Contact
                </button>
                <a
                  href="https://drive.google.com/uc?export=download&id=10AMJ6ESPKP-EeODv3fS36zqkEobFa91Z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white bg-[#0370DD] px-3 py-1 rounded-md hover:bg-[#025bb5] transition"
                >
                  Resume
                </a>
              </nav>
            </div>
            <div className="flex-1" onClick={() => setIsOpen(false)} />
          </div>
        )}
      </header>

      {/* Profile */}
      <div className="container mx-auto px-1 md:px-0 lg:px-32 flex flex-col text-center md:text-left md:items-start">
        <img
          src={profilePic}
          className="rounded-full w-32 md:w-[20%] lg:w-28 h-auto"
          width="176"
          height="176"
          alt="Portrait of Narendiran E, MERN Stack Developer"
        />

        <div className="mt-4 md:mt-6 lg:mt-2 bg-[#e5e9eb] font-medium tracking-wider px-3 py-1 rounded-full flex items-center w-fit">
          <FaRegDotCircle color="#047df7" size={12} />
          <span className="ml-2 text-xs text-[#2d4a5e]">Open to Opportunities</span>
        </div>
      </div>

      {/* Hero */}
      <div className="container mx-auto px-1 md:px-0 lg:px-32 mt-[1%] md:text-left">
        <p className="text-lg md:text-3xl font-bold text-[#04263e] leading-tight">
          MERN Stack Developer | 2+ Years Experience
        </p>
        <p className="text-lg md:text-3xl font-bold text-[#04263e] leading-tight">
          Building Scalable, High-Performance Web Applications
        </p>
        <span className="text-lg md:text-3xl font-bold text-[#04263e]">
          Modern JavaScript • React • Node.js • Cloud
        </span>
      </div>

      {/* Short Bio */}
      <div className="container mx-auto px-1 md:px-0 lg:px-32 mt-4 md:text-left">
        <p className="text-sm md:text-base text-gray-500 font-medium">
          Results-driven MERN developer delivering clean, scalable code with React.js, Redux Toolkit, Node.js,
          Express.js, MongoDB, GraphQL, and AWS CI/CD. Proven impact: ~40% performance improvements via API/query
          optimizations, 30+ reusable components, and 90+ secure endpoints delivered. {/* from resume */}
        </p>
      </div>

      {/* Socials */}
      <div className="container mx-auto px-1 mt-[3%] md:px-0 lg:px-32 md:text-left">
        <div className="flex justify-end md:justify-end items-center gap-4">
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/narendiran-e-665102287/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-[#0370DD] text-md lg:text-lg" />
          </a>
          <a aria-label="GitHub" href="https://github.com/naren-naresh" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-[#0370DD] text-md lg:text-lg" />
          </a>
          <a aria-label="Email" href="mailto:narendirannaresh396@gmail.com" target="_blank" rel="noopener noreferrer">
            <SiGmail className="hover:text-[#0370DD] text-md lg:text-lg" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
