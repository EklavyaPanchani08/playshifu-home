import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import TopAction from "@/components/TopAction";
import Awards from "@/components/Awards";
import ShopByAge from "@/components/ShopByAge/ShopByAge";
import ShopByCategory from "@/components/ShopByCategory/ShopByCategory";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import DealsAndDiscounts from "@/components/DealsAndDiscounts";
import VideoSection from "@/components/VideoSection";
import RetailPartners from "@/components/RetailPartners";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <TopAction />
      <HeroCarousel />
      <Awards />
      <ShopByAge />
      <ShopByCategory />
      <WhyChooseUs />
      <DealsAndDiscounts />
      <Testimonials />
      <VideoSection />
      <RetailPartners />
      <Support />
      <Footer />
    </>
  );
}
