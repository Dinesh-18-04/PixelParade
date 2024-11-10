import React from "react";
import img1 from "../assest/mar1.jpg";
import img2 from "../assest/mar2.jpg";
import img3 from "../assest/mar3.jpg";
import img4 from "../assest/mar4.jpg";
import img5 from "../assest/mar5.jpg";
import { GoDownload } from "react-icons/go";

const collection = [
  {
    id: 1,
    src: img1,
    name: "SpiderMan",
  },
  {
    id: 2,
    src: img2,
    name: "Venom x DeadPool",
  },
  {
    id: 3,
    src: img3,
    name:"Deadpool",
  },
  {
    id: 4,
    src: img4,
    name:"Root",
  },
  {
    id: 5,
    src: img5,
    name:"Avengers Logo",
  },
];

const Marvel = () => {
  return (
    <div className="md:px-24 px-5">
      <div className="md:mb-10 mb-3">
        <h1 className="md:text-4xl font-bold">Marvel Wallpapers</h1>
      </div>
      <div className="flex  md:gap-5 gap-2 overflow-scroll no-scrollbar mb-3 md:mb-10">
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

export default Marvel;