import React from "react";
import { Works, otherWorks } from "../../utils/Datas.js";

const Body = () => {
  return (
    <div className="container mx-auto px-1 md:px-0 lg:px-28 py-4 font-figtree w-full">
      {/* Works Section */}
      <div id="works-section" className="lg:grid grid-cols-1 gap-2">
        {Works.map((work, index) => (
          <div key={index} className="p-4 border rounded-lg border-gray-50">
            <img
              src={work?.img}
              alt="Project"
              className="max-w-full px-1 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer"
            />
            <h2 className="text-sm md:text-lg lg:text-lg font-semibold text-[#04263e] hover:cursor-pointer">
              {work?.title}
            </h2>
            <p className="text-gray-500 text-sm md:text-base lg:text-base">{work?.description}</p>
          </div>
        ))}
      </div>

      {/* Other Works Section */}
      <div className="mt-4">
        <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">Other Works</div>
        <div className="text-gray-500 text-sm md:text-base lg:text-base lg:w-[60%] mt-[0.8%]">
        With one year of experience as a MERN Stack Developer, I have worked on similar projects, continuously,{" "}
          <span className="font-semibold text-gray-700">enhancing my skills</span> in web application development and exploring new design patterns.
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full mt-6">
        {otherWorks?.map((work, index) => {
          return <div key={work.id}>
              <a href={work.appLink}  target="_blank" className="flex justify-between items-center transition-all duration-500  border-gray-200 px-1 py-3  hover:bg-blue-50 hover:rounded-lg hover:px-3   ">
                <span className=" text-sm md:text-lg lg:text-lg font-medium  text-[#04263e] "> {work?.title}</span>
                <span className={`text-gray-500 font-medium text-sm md:text-base lg:text-base cursor-default ${work.id==="99"?null:"hidden"} md:inline`}>{work.techStacks}</span>
              </a>
              <div className="border-t mt-[0.1%] border-gray-100" />
            </div>

        })}


      </div>
    </div>
  );
};

export default Body;
