import React from 'react'

const Footer = () => {
  return (
    <div  className="container mx-auto px-1    md:px-0 lg:px-32 py-4 font-figtree w-full">
      <div id="contact-section" className="mb-2 font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">Contact</div>
      <div className="w-full mt-6">
        <div >
          <div className='flex gap-7'>
            <a href="https://www.linkedin.com/in/narendiran-e-665102287" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-xs font-medium text-[#04263e]">LinkedIn</a>
            <a href="https://github.com/<your-github>" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-xs font-medium text-[#04263e]">GitHub</a>
            <a href="mailto:narendirannaresh396@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs lg:text-xs font-medium text-[#04263e]">Mail</a>
            <span className="text-xs md:text-xs lg:text-xs font-medium text-[#04263e]">+91 93847 62499</span>
          </div>

          <div className='text-center text-xs'>
            © Narendiran 
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer