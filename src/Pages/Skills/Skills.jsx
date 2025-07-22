import React from 'react'
import { Skills } from '../../utils/Datas'

const SkillsComponent = () => {
  return (
    <div id="skills-section" className="container mx-auto px-1 md:px-0 lg:px-32 py-4 font-figtree w-full">
        <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">Skills</div>
        <div className="flex flex-wrap gap-2 mt-4 md:gap-4">
          {Skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 text-gray-800 text-xs md:text-sm font-medium px-3 py-1 rounded-full">
              {skill.name}
            </div>
          ))}
        </div>
      </div>
  )
}

export default SkillsComponent