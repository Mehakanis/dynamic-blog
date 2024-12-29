import CategoriesSection from "@/components/categoriessection";
import HeroSection from "@/components/herosection";
import TrendingSection from "@/components/trendingsection";

export default function Home(){
  return(
    <main className=" max-w-screen-2xl min-h-screen mx-auto   overflow-x: hidden;">
<HeroSection/>
<CategoriesSection/>
<TrendingSection/>

    </main>
  )
}