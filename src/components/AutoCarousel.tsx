"use client"

import Image from 'next/image';
import car1 from "@/images/Seperate/001 - Copia (2).webp";
import car2 from "@/images/Seperate/001 - Copia (3).webp";
import car3 from "@/images/Seperate/001 - Copia (4).webp";
import car4 from "@/images/Seperate/001 - Copia (5).webp";
import car5 from "@/images/Seperate/001 - Copia.webp";
import car6 from "@/images/Seperate/001.webp";
import car7 from "@/images/Seperate/Untitled-2.webp";
import React, { useEffect, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const ImageCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    // Start the slider autoplay on mount
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  // Custom previous arrow component
  const CustomPrevArrow: React.FC = (props) => (
    <button {...props} className="slick-arrow slick-prev">
      Previous
    </button>
  );

  // Custom next arrow component
  const CustomNextArrow: React.FC = (props) => (
    <button {...props} className="slick-arrow slick-next">
      Next
    </button>
  );

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '60px',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };



  return (
<div className='container relative mt-20'>
      <Slider ref={sliderRef} {...settings}>
        <div className='p-4 border-none outline-none'>
          <a className='border-none outline-none' href='/aluguel-de-contas'>
            <Image
              sizes="100px"
              className="outline-none border-none"
              src={car1}
              alt=""
            />
            <p className='text-center mt-3 font-bold'>Jogos Online</p>
          </a>
          
        </div>
        <div className='p-4 border-none outline-none'>
          <a href='/epic-games'>
            <Image
                sizes="100px"
                className="outline-none border-none"
                src={car2}
                alt=""
              />
              <p className='text-center mt-3 font-bold'>Epic Games</p>
          </a>
        </div>
        <div className='p-4 border-none outline-none'>
          <a href='microsoft-store'>
            <Image
              sizes="100px"
              className="outline-none border-none"
              src={car3}
              alt=""
            />
            <p className='text-center mt-3 font-bold'>MICROSOFT</p>
          </a>
          
        </div>
        <div className='p-4 border-none outline-none'>
        <a href='uplay'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car4}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>UBISOFT</p>
          </a>
        </div>
        <div className='p-4 border-none outline-none'>
        <a href='origin'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car5}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>ORIGIN</p>
          </a>
        </div>
        <div className='p-4 border-none outline-none'>
          <a href='steam'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car6}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>STEAM</p>
          </a>
        </div>
        <div className='p-4 border-none outline-none'>
          <a href='pre-venda'>
          <Image
            sizes="100px"
            className="outline-none border-none"
            src={car7}
            alt=""
          />
          <p className='text-center mt-3 font-bold'>PRE-VENDA</p>
          </a>
        </div>
      </Slider>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div>
          <button className='absolute top-1/2 -left-8 border border-slate-400 rounded-full' onClick={prevSlide}>
            <svg className="w-8 h-8 rtl:rotate-180" viewBox="0 0 24 24" fill="none"><path d="M9.57 5.92993L3.5 11.9999L9.57 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.5 12H3.67004" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </button>
        </div>
        <button className='absolute top-1/2 -right-8 border border-slate-400 rounded-full' onClick={nextSlide} style={{ marginLeft: '10px' }}>
          <svg className="w-8 h-8 rtl:rotate-180" viewBox="0 0 24 24" fill="none"><path d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.5 12H20.33" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
