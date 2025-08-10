import React from "react";
import { Works } from "../../utils/Datas.js";

const Body = () => {

  const handleNavigateUser = (e) => {
    const link = e.currentTarget?.dataset?.link;
    window.open(link, "_blank");

  }
  return (
    <div className="container mx-auto px-1 md:px-0 lg:px-32 py-4 font-figtree w-full">
   <div id="works-section" className="mb-2 font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">Projects</div>
      {/* Works Section */}
      <div  className="lg:grid grid-cols-1 gap-2">
        {Works.map((work, index) => (
          <div key={index} className="p-4 border rounded-lg border-gray-50">
            <img
              src={work?.img}
              alt="Project"
              className="max-w-full px-1 transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:cursor-pointer"
              data-link={work?.appLink}  // ✅ official way to store custom data
              onClick={work.isAvailalbeLink ? handleNavigateUser : null}
            />
            <h2 className=" mt-2 ml-1 text-sm md:text-lg lg:text-lg font-semibold text-[#04263e] hover:cursor-pointer">
              {work?.title}
            </h2>
            <p className=" mt-2 ml-1 text-gray-500 text-sm md:text-base lg:text-base">{work?.description}</p>
            {/* Display Tech Stack */}
            <div className="mt-7 ml-1 text-sm text-gray-600">
              <span className="font-medium">Tech Stack: </span>
              <span>{work.techStack || "Not Available"}</span>
            </div>
            {work.frontendLink && work.backendLink && (
              <div className="flex space-x-4 mt-2 ml-1">
                <a
                  href={work.frontendLink}
                  target="_blank"
                  className="text-blue-500 text-sm md:text-base lg:text-base hover:text-blue-600"
                >
                  View Frontend Code on GitHub
                </a>
                <span>|</span>
                <a
                  href={work.backendLink}
                  target="_blank"
                  className="text-blue-500 text-sm md:text-base lg:text-base hover:text-green-600"
                >
                  View Backend Code on GitHub
                </a>
              </div>
            )}

            {/* If only one of the links is available, render it on the same line as well */}
            {work.frontendLink && !work.backendLink && (
              <div className="mt-2">
                <a
                  href={work.frontendLink}
                  target="_blank"
                  className="text-blue-500 text-sm md:text-base lg:text-base hover:text-blue-600"
                >
                  Frontend GitHub
                </a>
              </div>
            )}
            {work.backendLink && !work.frontendLink && (
              <div className="mt-2">
                <a
                  href={work.backendLink}
                  target="_blank"
                  className="text-blue-500 text-sm md:text-base lg:text-base hover:text-green-600"
                >
                  Backend GitHub
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Other Works Section */}
      {/* <div className="mt-4 ml-4">
        <div className="font-bold text-3xl md:text-5xl lg:text-5xl text-[#04263e]">Other Works</div>
        <div className="text-gray-500 text-sm md:text-base lg:text-base lg:w-[60%] mt-[0.8%]">
          With one year of experience as a MERN Stack Developer, I have worked on similar projects, continuously,{" "}
          <span className="font-semibold text-gray-700">enhancing my skills</span> in web application development and exploring new design patterns.
        </div>
      </div> */}

      {/* Footer Section */}
      {/* <div className="w-full mt-6 ml-4">
        {otherWorks?.map((work, index) => {
          return <div key={work.id}>
            <a href={work.appLink} target="_blank" className="flex justify-between items-center transition-all duration-500  border-gray-200 px-1 py-3  hover:bg-blue-50 hover:rounded-lg hover:px-3   ">
              <span className=" text-sm md:text-lg lg:text-lg font-medium  text-[#04263e] "> {work?.title}</span>
              <span className={`text-gray-500 font-medium text-sm md:text-base lg:text-base cursor-default ${work.id === "99" ? null : "hidden"} md:inline`}>{work.techStacks}</span>
            </a>
            <div className="border-t mt-[0.1%] border-gray-100" />
          </div>

        })}


      </div> */}
    </div>
  );
};

export default Body;