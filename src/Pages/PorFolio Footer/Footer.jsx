const Footer = () => {
  return (
    <footer className="w-full mt-10 border-t border-gray-200">
      <div className="container mx-auto px-1 md:px-0 lg:px-32 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xs md:text-sm font-medium text-[#04263e]">
          © {new Date().getFullYear()} Narendiran E
        </div>
        <div className="flex gap-7">
          <a
            href="https://www.linkedin.com/in/narendiran-e-665102287"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-xs font-medium text-[#04263e] hover:text-[#0370DD]"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/naren-naresh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-xs font-medium text-[#04263e] hover:text-[#0370DD]"
          >
            GitHub
          </a>
          <a
            href="mailto:narendirannaresh396@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-xs font-medium text-[#04263e] hover:text-[#0370DD]"
          >
            Mail
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=10AMJ6ESPKP-EeODv3fS36zqkEobFa91Z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-xs font-medium text-[#04263e] underline hover:text-[#0370DD]"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
