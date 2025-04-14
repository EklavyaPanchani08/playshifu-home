'use client';
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner from '../assets/image/banner.png';
const HeroCarousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <Image src={Banner} className='w-full h-30' alt="banner" />
      <Image src={Banner} className='w-full h-30' alt="banner" />
      <Image src={Banner} className='w-full h-30' alt="banner" />
    </Slider>
  );
};

export default HeroCarousel;