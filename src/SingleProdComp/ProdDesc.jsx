import React from 'react';
import styled from 'styled-components'
import { BsStarFill, BsStarHalf, BsStar, BsArrowRightShort } from 'react-icons/bs'
import { HiShoppingCart } from 'react-icons/hi';
import { AiFillThunderbolt } from 'react-icons/ai';

const ProdDesc = () => {
    return (
        <ProdDescCont>
            <Brand>Apple</Brand>
            <ProductName>Apple 2021 iMac with 4.5K Retina Display (24-inch/60.96 cm, M1 chip with 8‑core CPU and 7‑core GPU, 8GB RAM, 256GB) - Silver
                <span>In Stock</span>
            </ProductName>
            <Rating>
                <BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf /><BsStar />
            </Rating>
            <Price>
                <Current>₹1,06,490 <Previous>₹1,19,900 </Previous> <Off>30% off</Off>
                </Current>
            </Price>
            <Include> <span>In The Box : </span>
                iMac, Magic Keyboard with Touch ID, Magic Mouse, Power Adapter (143W), Power Cord (2 m), USB-C to Lightning Cable
            </Include>
            <Sizes>
                <span>Available Size <BsArrowRightShort /> Select Size</span>
                <div>XS</div>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </Sizes>
            <Colors>
                Color Options <BsArrowRightShort /> <Color style={{ backgroundColor: "red" }} /> <Color style={{ backgroundColor: "#000" }} /> <Color style={{ backgroundColor: "#fff" }} /> <Color style={{ backgroundColor: "orange" }} /> <Color style={{ backgroundColor: "green" }} />
            </Colors>
            <Buttons>
                <button>Add To Cart <HiShoppingCart /></button>
                <button>Buy Now <AiFillThunderbolt /></button>
            </Buttons>
            {/* <ProductDescription>
                <div>About This Product</div>
                <ul>
                    <li>Studio-quality three-mic array for crystal clear calls and voice recordings;Strikingly thin 11.5 mm design in vibrant colors</li>
                    <li>Six-speaker sound system for a remarkably robust and high-quality audio experience;Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless</li>
                    <li>Apple M1 chip delivers powerful performance with 8-core CPU and 7-core GPU;Two Thunderbolt / USB 4 ports and up to two USB 3 ports</li>
                    <li>Color-matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID;Up to 512GB of ultrafast SSD storage; 1080p FaceTime HD camera with M1 ISP for amazing video quality</li>
                    <li>Hardware Interface: Usb3.0; Form Factor: All-In-One</li>
                </ul>
            </ProductDescription> */}
        </ProdDescCont>
    )
}
const ProdDescCont = styled.div`
    flex: 2;
    @media screen  and (max-width:1200px) {
     flex: 2;
   }
`
const Brand = styled.div`
    font-weight: 500;
    font-size: 1rem;
    width: fit-content;
    background-color: #000;
    padding: 3px 14px;
    color: #fff;
    border-radius: 90px;
    margin-bottom: 10px;
`
const ProductName = styled.div`
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 10px;    
    span{
        padding: 3px 7px;
        color: #fff;
        margin-left: 10px;
        font-size: 12px;
        background-color: green;
        border-radius: 20px;
    }
    @media screen  and (max-width:500px) {
        font-size: 1rem;
        line-height: 23px;
        font-weight: 500;
        }
    @media screen  and (max-width:380px) {
        font-size: 15px;
        line-height: 23px;
        font-weight: 500;
        }
`
const Rating = styled.div`
     margin-bottom:15px;
    svg{
        color: var(--primary-color);
        margin: 0 2px 0px 0px;
    } 
`
const Price = styled.div`
    font-weight: 500;
    font-size: 1.2rem;
    margin-bottom: 10px; 
`
const Include = styled.div`
    font-size: 13px;
    font-weight: 400;
    margin-top: 20px;
    span{
        font-weight: 500;
        font-size: 14px;
    }
`
const Current = styled.div``
const Previous = styled.span`
    font-weight: 400;
    font-size: 1rem;
    margin: 0 16px 0 5px;
    color: #767676;
    text-decoration: line-through;
`
const Off = styled.span`
    background-color: var(--primary-color);
    padding: 4px 14px;
    font-size: 14px;
    color: #fff;
    border-radius: 90px;
`
const Sizes = styled.div` 
    margin-top: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    span{
        width: 100%;
        margin-bottom: 10px;
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        @media screen  and (max-width:380px) {
            font-size: 14px;
        }
        svg{
            margin:0 6px;
      }
    }
    div{
        border:1px solid #dbdbdb;
        border-radius: 50%;
        font-size: 13px;
        cursor: pointer;
        margin-right: 5px;
        height: 45px;
        width: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover{
            border-color: var(--primary-color);
        }
        @media screen  and (max-width:380px) {
            font-size: 11px;
            height: 36px;
            width: 36px;
        }
    }
`
const Colors = styled.div`
    display: flex;
    align-items: center;
    margin-top: 26px;
    font-size: 1rem;
    font-weight: 500;
    svg{
        margin:0 6px;
    }
    @media screen  and (max-width:380px) {
        font-size: 14px;
        }
`
const Color = styled.span`
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-right: 8px;
    border-radius: 50%;
    border: 1px solid #686868;
`
// const ProductDescription = styled.div`
//    margin-top: 20px;
//    div{
//     font-size: 1rem;
//     font-weight: 500;
//     margin-bottom: 10px;
//    }
//    ul {
//      li{
//         margin-top: 10px;
//         font-size: 13px;
//         font-weight: 500;
//         margin-left: 17px;
//      }
//    }
//    button{
//         float: right;
//         cursor: pointer;
//         background-color: var(--primary-color);
//         color: #fff;
//         padding: 3px 6px;
//         font-size: 12px;
//         border: none;
//         border-radius: 0.2rem;
//         box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
//    }
// `
const Buttons = styled.div`
    margin-top: 30px;
    display: flex;
    button{
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: var(--primary-color);
        color: #fff;
        padding: 7px 12px;
        font-size: 15px;
        border: none;
        border-radius: 0.2rem;
        box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
        margin-right: 14px;
        svg{
            margin-left: 5px;
            font-size: 20px;
        }
        :nth-child(2){
            background-color: #000;
            box-shadow: 0 0.5rem 1.125rem -0.5rem #000000;
        }
    }
`
export default ProdDesc