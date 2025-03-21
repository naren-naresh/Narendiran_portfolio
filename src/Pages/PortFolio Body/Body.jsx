import React from "react";
import MyWssBm from "../../assets/MY_WWS_BM.png"
import ThinPandam from "../../assets/Thin_Pandam.png"

const Works = [
  {
    img: MyWssBm,
    title: "My WWS BM",
    description: "React Js | Node Js | Express Js | Mongo DB",
  },
  {
    img: ThinPandam,
    title: "Thin Pandam",
    description: "React Js | Node Js | Express Js | Mongo DB",
  },
  
];

const Body = () => {
  return (
    <div className="container mx-auto px-1 md:px-0 lg:px-32 py-4 font-figtree ">
      <div className="lg:grid grid-cols-2 gap-2">
        {Works.map((work, index) => (
          <div key={index} className="p-4   ">
            <img src={work?.img}
            className="w-full transition-transform duration-300 ease-in-out  hover:-translate-y-1 hover:cursor-pointer"
            />
            <h2 className="text-lg font-semibold text-[#04263e] hover:cursor-pointer ">{work?.title}</h2>
            <p className="text-gray-500 text-base">{work?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
