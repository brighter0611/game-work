import Image, { StaticImageData } from "next/image";
import { Route } from "@/routers/types";
import imageRightPng from "@/images/banners/1.jpg";
import imageRightPng2 from "@/images/banners/2.jpg";
import imageRightPng3 from "@/images/banners/3.jpg";
import imageRightPng4 from "@/images/banners/4.jpg";
import car1 from "@/images/Seperate/001 - Copia (2).webp";
import car2 from "@/images/Seperate/001 - Copia (3).webp";
import car3 from "@/images/Seperate/001 - Copia (4).webp";
import car4 from "@/images/Seperate/001 - Copia (5).webp";
import car5 from "@/images/Seperate/001 - Copia.webp";
import car6 from "@/images/Seperate/001.webp";
import car7 from "@/images/Seperate/Untitled-2.webp";

interface Hero2DataType {
  image: StaticImageData | string;
  heading: string;
  subHeading: string;
  btnText: string;
  btnLink: Route;
}

export const HERO2_DEMO_DATA: Hero2DataType[] = [
  {
    image: imageRightPng,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng2,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: imageRightPng3,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  
  {
    image: imageRightPng4,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
];

export const HERO4_DEMO_DATA: Hero2DataType[] = [
  {
    image: car1,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: car2,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: car3,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  
  {
    image: car4,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: car5,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: car6,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
  {
    image: car7,
    heading: "Exclusive collection for everyone",
    subHeading: "In this season, find the best 🔥",
    btnText: "Explore now",
    btnLink: "/",
  },
];
