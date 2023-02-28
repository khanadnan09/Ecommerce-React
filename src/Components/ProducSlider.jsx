import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import { AiFillHeart, AiFillEye } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';


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

const ProducSlider = ({ img, title }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3.5,
        slidesToScroll: 3,
        swipeToSlide: false,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1300,
                settings: { slidesToShow: 3.2, slidesToScroll: 1, }
            },
            {
                breakpoint: 1190,
                settings: { slidesToShow: 3.5, }
            },
            {
                breakpoint: 992,
                settings: {
                    autoplay: true, speed: 2000, autoplaySpeed: 4000, slidesToShow: 3.1, prevArrow: false, nextArrow: false, arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    autoplay: true, speed: 2000, autoplaySpeed: 4000, slidesToShow: 3, prevArrow: false, nextArrow: false, arrows: false,
                }
            },
            {
                breakpoint: 730,
                settings: {
                    autoplay: true, speed: 2000, autoplaySpeed: 4000, slidesToShow: 2.8, prevArrow: false, nextArrow: false, arrows: false,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    autoplay: true, speed: 2000, autoplaySpeed: 4000, slidesToShow: 2.7, prevArrow: false, nextArrow: false, arrows: false, slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    autoplay: true, speed: 2000, autoplaySpeed: 4000, slidesToShow: 2, prevArrow: false, nextArrow: false, arrows: false, slidesToScroll: 1,
                }
            },
            {
                breakpoint: 475,
                settings: {
                    autoplay: true, speed: 2000, autoplaySpeed: 4000, slidesToShow: 1, prevArrow: false, nextArrow: false, arrows: false, slidesToScroll: 1,
                }
            },
        ]

    };

    return (
        <SLiderConatiner>

            <GroupImage>
                <img src={img} alt="img" />
                <Title>
                    {title}
                    <span>Discover fresh new colours for your favourite accessories.</span>
                    <button>See more <MdKeyboardArrowRight /></button>
                </Title>
            </GroupImage>

            {/* <ProductsWrapper className='ProductSilder'> */}
            <ProductsWrapper {...settings} className='ProductSilder'>
                <ProductItem>
                    <span><img src="https://demo2.chethemes.com/techmarket/wp-content/uploads/2017/02/Laptop-224x197.jpg" alt="product" /></span>
                    <PrductDesc>
                        <Name>HP All-in-One</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-imac-24-202108?wid=490&hei=500&fmt=jpeg&qlt=95&.v=1625868688000" alt="product" /></span>
                    <PrductDesc>
                        <Name>iMac 24”</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-card-40-macbook-pro-14-16-202301?wid=600&hei=500&fmt=p-jpg&qlt=95&.v=1670463778272" alt="product" /></span>
                    <PrductDesc>
                        <Name>MacBook Pro 14-inch</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14pro-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1663611329492" alt="product" /></span>
                    <PrductDesc>
                        <Name>iPhone 14 Pro Max</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone12-202209?wid=340&hei=264&fmt=p-jpg&qlt=95&.v=1661958189616" alt="product" /></span>
                    <PrductDesc>
                        <Name>iPhone 12</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://www.apple.com/in/watch/images/compare/compare_s8__q5ebcy3sahme_large.jpg" alt="product" /></span>
                    <PrductDesc>
                        <Name>iApple Watch Series 8</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_3rd_gen__dyuzfy04ht0m_large.png" alt="product" /></span>
                    <PrductDesc>
                        <Name>AirPods 3rd generation</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
                <ProductItem>
                    <span><img src="https://www.apple.com/v/airpods/shared/compare/b/images/compare/compare_airpods_max__b14s2x6q07rm_large.png" alt="product" /></span>
                    <PrductDesc>
                        <Name>AirPods Max</Name>
                        <Price>Rs.1,40,000
                            <Ratings>
                                <BsStarFill /><BsStarFill /><BsStarFill />
                                <BsStarHalf />
                                <BsStar />
                            </Ratings>
                        </Price>
                        <Availability>
                            In Stock
                            <BuyNow>Buy Now</BuyNow>
                        </Availability>
                        <IconsGroup>
                            <AiFillHeart />
                            <HiShoppingCart />
                            <AiFillEye />
                        </IconsGroup>
                        <ColorsGroup>
                            Color:<div style={{ backgroundColor: "#000" }}></div>
                            <div style={{ backgroundColor: "#ffffff" }}></div>
                            <div style={{ backgroundColor: "#171bff" }}></div>
                            <div style={{ backgroundColor: "#f59212" }}></div>
                        </ColorsGroup>
                    </PrductDesc>
                </ProductItem>
            </ProductsWrapper>
            {/* </ProductsWrapper> */}

        </SLiderConatiner>
    )
}
const SLiderConatiner = styled.div`
   width: 100%;
   background-color: #fff;
   display: flex;
   align-items: center;
`
const ColorsGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  div{
    border-radius: 50%;
    height: 14px;
    width: 14px;
    margin: 0 3px;
    border: 1px solid #686868;
  }
`
const ProductsWrapper = styled(Slider)`
    flex-basis: 100%;
    width: 75%;
    margin: 0 10px;
`
const ProductItem = styled.div`
    cursor: pointer;
    position: relative;
    padding: 10px;
    background-color: #ffffff;
    width: fit-content !important;
    box-shadow: 2px 4px 16px #00000029;
    margin: 23px 7px;
    border-radius: 8px;
    transition: all 0.3s;
    img{        
        transition: all 0.3s;
        height: 100%;
        width: 100%;   
        object-fit: scale-down;
    }
    :hover{
        img{
            transform: scale(1.15);
        }
        transform: scale(1.05);
    }
    span{
        height: 250px;
        width: 250px;
        min-width: 200px;
        max-width: 250px;
        display: block;
        overflow: hidden;
        @media screen and (max-width:890px){
            width: auto;
        }
        @media screen and (max-width:768px){
            height: 213px;
        }
        @media screen and (max-width:475px){
            max-width: 300px;
            width: auto;
        }
    }
`
const PrductDesc = styled.div`
    margin: 10px 0 4px 0;
`
const Name = styled.div`
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 4px;
`
const Price = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 400;
`
const Ratings = styled.div`
  color: var(--primary-color);
`
const Availability = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 7px 0;
    font-size: 14px;
    font-weight: 400;
    align-items: center;
`
const BuyNow = styled.div`
    background-color: var(--primary-color);
    padding: 4px 12px;
    cursor: pointer;
    font-size: 12px;
    border-radius: 1rem;
    font-weight: 600;
`
const IconsGroup = styled.div`
    position: absolute;
    top: 22px;
    display: flex;
    right: 7px;
    flex-direction: column;
    svg{
        cursor: pointer;
        box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
        background-color: #ffffff;
        color: #000000;
        border-radius: 50%;
        margin-bottom: 10px;
        height: 30px;
        width: 30px;
        padding: 6px;
    }
`
const GroupImage = styled.div`
    flex-basis: 0%;
    width: 25%;
    position: relative;
    img{
        height: 500px;
        width: 300px;
        object-fit: cover;
    }
    @media screen and (max-width: 1190px){
        display: none;
    }
`
const Title = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: #000000;
    font-size: 3rem;
    font-weight: 700;
    span{
        font-size: 12px;
        text-align: center;
        font-weight: 500;
    }
    button{
        display: flex;
        align-items: center;
        background-color: var(--primary-color);
        border: none;
        padding: 7px 16px;
        font-size: 17px;
        font-weight: 300;
        margin: 20px 0 0px 0;
        cursor: pointer;
        svg{
            margin: 4px 0 0 2px;
        }
    }
`

export default ProducSlider