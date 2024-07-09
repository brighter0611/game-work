"use client"
import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import car1 from "@/images/Seperate/001 - Copia (2).webp";
import car2 from "@/images/Seperate/001 - Copia (3).webp";
import car3 from "@/images/Seperate/001 - Copia (4).webp";
import car4 from "@/images/Seperate/001 - Copia (5).webp";
import car5 from "@/images/Seperate/001 - Copia.webp";
import car6 from "@/images/Seperate/001.webp";
import car7 from "@/images/Seperate/Untitled-2.webp";

const Carousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Start the slider autoplay on mount
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    centerMode: true, // Enable center mode for gap effect
    centerPadding: '100px', // Adjust the gap between slides
  };

  return (
    <div className='container' style={{ margin: '0 auto' }}>
      <Slider ref={sliderRef} {...settings}>
        <div className='p-4'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car1}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>Jogos Online</p>
        </div>
        <div className='p-4'>
        <Image
            sizes="100px"
            className="outline-none border-none"
            src={car2}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>Epic Games</p>
        </div>
        <div className='p-4'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car3}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>MICROSOFT</p>
        </div>
        <div className='p-4'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car4}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>UBISOFT</p>
        </div>
        <div className='p-4'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car5}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>ORIGIN</p>
        </div>
        <div className='p-4'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car6}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>STEAM</p>
        </div>
        <div className='p-4'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car7}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>PRE-VENDA</p>
        </div>
      </Slider>
    </div>
  );
};
export default Carousel;