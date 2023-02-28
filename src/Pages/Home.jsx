import React from 'react'
import MainCarousel from '../Components/MainCarousel'
import NavBar from '../Components/NavBar'
import TopNav from '../Components/TopNav'
import Offers from '../Components/Offers'
import OfferStrip from '../Components/OfferStrip'
import ProducSlider from '../Components/ProducSlider'
import Tags from '../Components/Tags'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <TopNav />
      <NavBar />
      <MainCarousel />
      <Offers/>
      <OfferStrip name={"Buy iPad Pro"} price={"From ₹13650.00/mo.Per Month with No Cost EMI with selected banks or ₹81900.00"} img={"/Images/applePad.png"}/>
      <ProducSlider img={"/Images/gadgets.jpg"} title={"Gadgets"}/>
      <OfferStrip name={"Fashin Deals"} price={"Upgrade your wardrobe with our fashion deals starting from just Rs 99 and unleash your inner fashionista today!"} img={"/Images/fashion.png"}/>
      <ProducSlider img={"/Images/fGroup.png"} title={"Clothing"}/>
      <Tags/>
      <Footer/>
    </>
  )
}

export default Home