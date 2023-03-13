import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillHeart } from 'react-icons/ai';

const ProductDisplay = () => {
  // Define state to hold the currently selected image URL
  const [selectedImageUrl, setSelectedImageUrl] = useState('https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186197000');

  // Handle sub-image click event by setting the selected image URL
  const handleSubImageClick = (e) => {
    setSelectedImageUrl(e.target.src);
  };

  return (
    <ProductDisplayCont>
      <SubImages>
        <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac24-digitalmat-gallery-1-202111?wid=364&hei=333&fmt=png-alpha&.v=1635186197000" alt="SubImages" onMouseEnter={handleSubImageClick} />
        <img src="https://www.apple.com/v/imac-24/g/images/overview/color_front_silver__cwewcn8oo9qq_large.jpg" alt="SubImages" onMouseEnter={handleSubImageClick} />
        <img src="https://www.apple.com/v/imac-24/g/images/overview/color_back_silver__rx2vhewqhn2u_large.jpg" alt="SubImages" onMouseEnter={handleSubImageClick} />
        <img src="https://m.media-amazon.com/images/I/71976VIrjHS._SX679_.jpg" alt="SubImages" onMouseEnter={handleSubImageClick} />
        <img src="https://m.media-amazon.com/images/I/714ky5+NWYS._SX679_.jpg" alt="SubImages" onMouseEnter={handleSubImageClick} />
      </SubImages>
      <MainImg>
        <img src={selectedImageUrl} alt="MainImg" />
        <AiFillHeart/>
      </MainImg>
    </ProductDisplayCont>
  )
}
const ProductDisplayCont = styled.div`
   flex: 1.5;
   display: flex;
   padding: 10px;
   @media screen  and (max-width:1300px) {
     flex: 2;
   }
   @media screen  and (max-width:1130px) {
     flex: 2.2;
   }
   @media screen  and (max-width:1070px) {
     flex-direction: column;
   }
`
const SubImages = styled.div`
  display: flex;
  flex-direction: column;
  @media screen  and (max-width:1070px) {
     flex-direction: row;
     justify-content: center;
     order: 2;
   }
    img{
      height: 50px;
      width: 50px;
      margin: 0px 10px 10px 0;
      padding: 5px;
      border: 1px solid #e7e7e7;
      cursor: pointer;
    }
`
const MainImg = styled.div`
    width: 100%;
    position: relative;
      img{
        object-fit: scale-down;
        height: 450px;
        width: 100%;
        @media screen  and (max-width:1070px) {
          margin-bottom: 20px;
        }
        @media screen  and (max-width:500px) {
          height: 100%;
        }
      }
      svg{
        height: 40px;
        background-color: #ffffff;
        position: absolute;
        right: 20px;
        border-radius: 50%;
        width: 40px;
        padding: 6px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        color: #b1b1b1;
        cursor: pointer;
        transition: 450ms;
        :hover{
          color: var(--primary-color);
          transform: rotate(360deg);
          width: 45px;
          height: 45px;
        }
      }
`
export default ProductDisplay