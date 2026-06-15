import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Image1 from "../assets/image1.png";
import Image2 from "../assets/image2.png";
import Image3 from "../assets/image3.png";
import Image4 from "../assets/image4.png";

export default function HeroSlider() {
  const slides = [Image1, Image2, Image3, Image4];

  return (
    <div className="">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[200px] sm:h-[350px] md:h-[500px] lg:h-[900px] overflow-hidden">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}