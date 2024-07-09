"use client";

import React, { FC, useState } from "react";
import Next from "@/shared/NextPrev/Next";
import Prev from "@/shared/NextPrev/Prev";
import useInterval from "react-use/lib/useInterval";
import useBoolean from "react-use/lib/useBoolean";
import Image from "next/image";
import { HERO4_DEMO_DATA as DATA } from "./data";

export interface SectionHero4Props {
  className?: string;
}

let TIME_OUT: NodeJS.Timeout | null = null;

const SectionHero4: FC<SectionHero4Props> = ({ className = "" }) => {
  // =================
  const [indexActive, setIndexActive] = useState(0);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  useInterval(
    () => {
      handleAutoNext();
    },
    isRunning ? 5500 : null
  );
  //

  const handleAutoNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
  };

  const handleClickNext = () => {
    setIndexActive((state) => {
      if (state >= DATA.length - 1) {
        return 0;
      }
      return state + 1;
    });
    handleAfterClick();
  };

  const handleClickPrev = () => {
    setIndexActive((state) => {
      if (state === 0) {
        return DATA.length - 1;
      }
      return state - 1;
    });
    handleAfterClick();
  };

  const handleAfterClick = () => {
    toggleIsRunning(false);
    if (TIME_OUT) {
      clearTimeout(TIME_OUT);
    }
    TIME_OUT = setTimeout(() => {
      toggleIsRunning(true);
    }, 1000);
  };
  // =================

  const renderItem = (index: number) => {
    const isActive = indexActive === index;
    const item = DATA[index];
    if (!isActive) {
      return null;
    }
    return (
      <>
      <div className="relative 2xl:h-[560px] lg:h-96 sm:h-60 h-48">
            <div className="absolute bottom-4 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 z-20 flex justify-center">
                {DATA.map((_, index) => {
                    const isActive = indexActive === index;
                    return (
                    <div
                        key={index}
                        onClick={() => {
                        setIndexActive(index);
                        handleAfterClick();
                        }}
                        className={`relative px-1 py-1.5 cursor-pointer`}
                    >
                        <div
                        className={`relative w-20 h-1 shadow-sm rounded-md bg-white`}
                        >
                        {isActive && (
                            <div
                            className={`nc-SectionHero2Item__dot absolute inset-0 bg-slate-900 rounded-md ${
                                isActive ? " " : " "
                            }`}
                            ></div>
                        )}
                        </div>
                    </div>
                    );
                })}
            </div>
            <Image
              fill
              sizes=""
              className=""
              src={item.image}
              alt={item.heading}
              priority
            />
            <ul>
              <li>dfd</li>
              <li>dfd</li>
              <li>dfd</li>
              <li>dfd</li>
              <li>dfd</li>
            </ul>
            <Prev
                className="absolute start-1 sm:start-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
                btnClassName="w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400"
                svgSize="w-6 h-6"
                onClickPrev={handleClickPrev}
            />
            <Next
                className="absolute end-1 sm:end-5 top-3/4 sm:top-1/2 sm:-translate-y-1/2 z-10 !text-slate-700"
                btnClassName="w-12 h-12 hover:border-slate-400 dark:hover:border-slate-400"
                svgSize="w-6 h-6"
                onClickNext={handleClickNext}
            />
      </div>
      </>
      
      
    );
  };

  return <>{DATA.map((_, index) => renderItem(index))}</>;
};

export default SectionHero4;
