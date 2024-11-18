import React from "react";
import tec1 from "../assest/tec1.jpeg";
import tec2 from "../assest/tec2.jpeg";
import tec3 from "../assest/tec3.avif";
import tec4 from "../assest/tec4.jpeg";
import tec5 from "../assest/tec5.jpeg";
import { GoDownload } from "react-icons/go";

const collection = [
  {
    id: 1,
    src: tec1,
    name: "Futuristic dj",
  },
  {
    id: 2,
    src: tec2,
    name: "A man with a weapon stands and looks at the ruins",
  },
  {
    id: 3,
    src: tec3,
    name:"Cartoon man wearing vr glasses",
  },
  {
    id: 4,
    src: tec4,
    name:"Futuristic special force",
  },
  {
    id: 5,
    src: tec5,
    name:"Man With Headset and Gun",
  },
];

const Tech = () => {
  return (
    <div className="md:px-24 px-5">
      <div className="md:my-10 my-3">
        <h1 className="md:text-4xl font-bold">Gaming Wallpapers</h1>
      </div>
      <div className=" flex  md:gap-5 gap-2 overflow-scroll no-scrollbar mb-3 md:mb-10">
        {collection.map((data, index) => (
          <div>
            <img
              src={data.src}
              alt="error"
              className="rounded-lg md:min-w-[400px] min-w-[200px] mb-1 md:mb-4"
            />
            <div className="flex justify-between items-center md:pr-5 pr-2">
              <p className="md:text-xl text-[10px] font-semibold">{data.name}</p>
              <a href={data.src} download={data.src}><GoDownload className="md:text-2xl font-bold" /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
