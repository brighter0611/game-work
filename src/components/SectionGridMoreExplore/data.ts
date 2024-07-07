import { StaticImageData } from "next/image";
import explore1Svg from "@/images/collections/explore1.svg";
import explore2Svg from "@/images/collections/explore2.svg";
import explore3Svg from "@/images/collections/explore3.svg";
import explore4Svg from "@/images/collections/explore4.svg";
import explore5Svg from "@/images/collections/explore5.svg";
import explore6Svg from "@/images/collections/explore6.svg";
import explore7Svg from "@/images/collections/explore7.svg";
import explore8Svg from "@/images/collections/explore8.svg";
import explore9Svg from "@/images/collections/explore9.svg";
//
import explore1Png from "@/images/landingpage-products/Football Manager 2024 Pc Steam Offline + Editor In-Game + Brasil Mundi Up.jpg";
import explore2Png from "@/images/landingpage-products/Forza Horizon 5 Edição Suprema PC Microsoft OnlineOffline.jpg";
import explore3Png from "@/images/landingpage-products/GTA 5 Premium Edition PC Steam Offline.jpg";
import explore4Png from "@/images/landingpage-products/Ghost of Tsushima DIRECTOR_S CUT Steam Offline.jpg";
import explore5Png from "@/images/landingpage-products/God Of War Pc Steam Offline - Modo Campanha.jpg";
import explore6Png from "@/images/landingpage-products/Pes 21 PC Steam Offline - eFootball Pes 2021 PC.jpg";
import explore7Png from "@/images/landingpage-products/Red Dead Redempton 2 Ultimate Edition PC Steam Offline - Modo Campanha.jpg";
import explore8Png from "@/images/landingpage-products/Resident Evil 4 Remake Deluxe Edition Pc Steam Offline + DLC Separate Ways.jpg";
import explore9Png from "@/images/landingpage-products/Dragon_s Dogma 2 PC Steam Offline Deluxe Edition.jpg";

export interface ExploreType {
  id: number;
  name: string;
  desc: string;
  image: string | StaticImageData;
  svgBg: string;
  color?: string;
  count?: number;
}

export const DEMO_MORE_EXPLORE_DATA_2: ExploreType[] = [
  {
    id: 4,
    name: "Computer Games",
    desc: "Manufacturar",
    image: explore9Png,
    svgBg: explore9Svg,
    color: "bg-orange-50",
    count: 343,
  },
  {
    id: 5,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore5Png,
    svgBg: explore5Svg,
    color: "bg-blue-50",
    count: 222,
  },
  {
    id: 6,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore6Png,
    svgBg: explore6Svg,
    color: "bg-orange-50",
    count: 155,
  },
  {
    id: 7,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore7Png,
    svgBg: explore7Svg,
    color: "bg-stone-100",
    count: 98,
  },
  {
    id: 8,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore8Png,
    svgBg: explore8Svg,
    color: "bg-blue-50",
    count: 33,
  },
  {
    id: 9,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore4Png,
    svgBg: explore4Svg,
    color: "bg-slate-100/80",
    count: 122,
  },
];
export const DEMO_MORE_EXPLORE_DATA: ExploreType[] = [
  {
    id: 1,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore1Png,
    svgBg: explore1Svg,
    color: "bg-indigo-50",
    count: 155,
  },
  {
    id: 2,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore2Png,
    svgBg: explore2Svg,
    color: "bg-slate-100/80",
    count: 22,
  },
  {
    id: 3,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore3Png,
    svgBg: explore3Svg,
    color: "bg-violet-50",
    count: 144,
  },
  {
    id: 4,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore9Png,
    svgBg: explore9Svg,
    color: "bg-orange-50",
    count: 343,
  },
  {
    id: 5,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore5Png,
    svgBg: explore5Svg,
    color: "bg-blue-50",
    count: 222,
  },
  {
    id: 6,
    name: "Computer Game",
    desc: "Manufacturar",
    image: explore6Png,
    svgBg: explore6Svg,
    color: "bg-orange-50",
    count: 155,
  },
];
