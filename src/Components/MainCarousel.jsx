import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='nextArrow Arrow' onClick={onClick}><MdKeyboardArrowRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='prevArrow Arrow' onClick={onClick}><MdKeyboardArrowLeft /></div>
  );
}

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          prevArrow: <></>,
          nextArrow: <></>
        }
      }
    ]
  };

  return (

    <Slider {...settings}>
      <SliderItem>
        <img src="https://i.pinimg.com/originals/02/cf/cf/02cfcffac595c832c514d58704cd82ce.jpg" alt="Img" />
      </SliderItem>
      <SliderItem>
        <img src="https://static.vecteezy.com/system/resources/previews/002/478/302/original/sale-electronics-banner-background-free-vector.jpg" alt="Img" />
      </SliderItem>
      <SliderItem>
        <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/130465537/original/9a86b0ce50637918bba6c90487c11564a5939382/do-minimal-gradient-fashion-banner.jpg" alt="Img" />
      </SliderItem>
      <SliderItem>
        <img src="https://cdn.shopify.com/s/files/1/0664/7339/4430/t/3/assets/Enorm-Gallery19171-Banner-4-1671951274-63a7f3aadb905.jpg?v=1671951277&width=1600" alt="Img" />
      </SliderItem>
    </Slider>
  )
}
const SliderItem = styled.div`
  img{
    width: 100%;
    height: 500px;
    @media (max-width: 992px) {
      height: 390px;
      }
    @media (max-width: 550px) {
      height: 350px;
      }
    @media (max-width: 500px) {
      height: 310px;
      }
    @media (max-width: 420px) {
      height: 270px;
      }
  }
`
export default MainCarousel