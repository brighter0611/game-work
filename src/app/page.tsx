"use client"
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/components/SectionPromo1";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionHero4 from "@/components/SectionHero/SectionHero4";
import SectionSliderLargeProduct from "@/components/SectionSliderLargeProduct";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo2 from "@/components/SectionPromo2";
import SectionSliderCategories from "@/components/SectionSliderCategories/SectionSliderCategories";
import SectionPromo3 from "@/components/SectionPromo3";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import Heading from "@/components/Heading/Heading";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";
import { RootState } from '@/Store/store'
import { setUserData } from '@/utils/UserDataSlice'
import { setCategoryData, setCatLoading, setProdLoading, setProductData } from '@/utils/AdminSlice'
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";
import FeaturedProduct from "@/components/FeaturedProduct";
import AutoCarousel from "@/components/AutoCarousel";

function PageHome() {
  const dispatch = useDispatch();
  const categoryLoading = useSelector((state: RootState) => state.Admin.catLoading)
  const productLoading = useSelector((state: RootState) => state.Admin.productLoading)
  const [loading, setLoading] = useState(true)
  const [ratio, setRatio] = useState(16/9) 
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  })

  useEffect(() => {
    dispatch(setCatLoading(loading))
    dispatch(setProdLoading(loading))
  }, [categoryLoading, productLoading, dispatch, loading])

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div>
        <ul className="flex justify-center gap-8 py-4">
          <li className="hover:text-green-400">
            <a href="/epic-games">Epic Games</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/aluguel-de-contas">Jogos Online PC</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/microsoft-store">Microsoft Store</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/origin">Origin</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/pre-Venda">Pre-Venda</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/steam">Steam</a>
          </li>
          <li className="hover:text-green-400">
            <a href="/uplay">Ubsoft</a>
          </li>
        </ul>
      </div>
      <SectionHero2 />
      <AutoCarousel />
      {/* <SectionHero4 /> */}
      <div className="mt-24 lg:mt-32">
        <DiscoverMoreSlider />
      </div>

      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">
        <SectionSliderProductCard
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            PRODUCTS[6],
          ]}
        />

        <div className="py-24 lg:py-32 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>
        <SectionPromo1 />

        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        {/* <SectionSliderLargeProduct cardStyle="style2" /> */}

        {/* <SectionSliderCategories /> */}

        <SectionPromo3 />

        <SectionGridFeatureItems />

        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="From the QFixe Games blog">
              The latest news
            </Heading>
            <div className="flex mt-16 justify-center">
              <ButtonSecondary>Show all blog articles</ButtonSecondary>
            </div>
          </div>
        </div>
        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
