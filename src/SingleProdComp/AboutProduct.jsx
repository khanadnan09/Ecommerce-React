import React from 'react'
import styled from 'styled-components'

const AboutProduct = () => {
  return (
    <AboutProd>
      <ProductDescription>
        <div>About This Product</div>
        <ul>
          <li>Studio-quality three-mic array for crystal clear calls and voice recordings;Strikingly thin 11.5 mm design in vibrant colors</li>
          <li>Six-speaker sound system for a remarkably robust and high-quality audio experience;Ultrafast Wi-Fi 6 and Bluetooth 5.0 wireless</li>
          <li>Apple M1 chip delivers powerful performance with 8-core CPU and 7-core GPU;Two Thunderbolt / USB 4 ports and up to two USB 3 ports</li>
          <li>Color-matched Magic Mouse with Magic Keyboard or Magic Keyboard with Touch ID;Up to 512GB of ultrafast SSD storage; 1080p FaceTime HD camera with M1 ISP for amazing video quality</li>
          <li>Hardware Interface: Usb3.0; Form Factor: All-In-One</li>
        </ul>
      </ProductDescription>
    </AboutProd>

  )
}
const AboutProd = styled.div`
    position: sticky;
    top: 195px;
    margin-top: 20px;
    box-shadow: rgba(149,157,165,0.2) 0px 8px 24px;
    padding: 20px;
    border-radius: 4px;
    background-color: #fff;
`
const ProductDescription = styled.div`
   div{
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 10px;
   }
   ul {
     li{
        margin-top: 10px;
        font-size: 13px;
        margin-left: 17px;
        line-height: 20px;
     }
   }
   button{
        float: right;
        cursor: pointer;
        background-color: var(--primary-color);
        color: #fff;
        padding: 3px 6px;
        font-size: 12px;
        border: none;
        border-radius: 0.2rem;
        box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
   }
`
export default AboutProduct