import React from "react";
import img1 from "../assest/mar1.jpg";
import img2 from "../assest/mar2.jpg";
import img3 from "../assest/mar3.jpg";
import img4 from "../assest/mar4.jpg";
import img5 from "../assest/mar5.jpg";
import { GoDownload } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Autoplay } from "swiper/modules";

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
    name: "Deadpool",
  },
  {
    id: 4,
    src: img4,
    name: "Root",
  },
  {
    id: 5,
    src: img5,
    name: "Avengers Logo",
  },
];

const Marvel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 801, // Mobile screens under 768px
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile screens
        },
      },
    ],
  };
  return (
    <div className="md:px-24 px-5">
      <div className="md:mb-10 mb-3">
        <h1 className="md:text-4xl font-bold">Marvels Wallpapers</h1>
      </div>

      <div >
        <Slider {...settings}  >
          {collection.map((data, index) => (
            <div className="md:px-[10px] pb-4">
              <img
                src={data.src}
                alt="error"
                className="rounded-lg md:min-w-[400px] min-w-[200px] mb-1 md:mb-4"
              />
              <div className="flex justify-between items-center md:pr-5 pr-2 gap-5">
                <p className="md:text-xl text-[10px] font-semibold">
                  {data.name}
                </p>
                <a href={data.src} download={data.src}>
                  <GoDownload className="md:text-2xl font-bold" />
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Marvel;
