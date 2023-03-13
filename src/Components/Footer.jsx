import React from 'react'
import styled from 'styled-components'
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa';
const Footer = () => {
    return (
        <>
            <FooterConatiner>
                <About>
                    <img src="https://liondigital.com.au/wp-content/uploads/2021/12/Mask-group2.png" alt="logo" />
                    <div>About Us : <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem provident vero laborum voluptatum sed voluptatem!</span></div>
                </About>
                <GetInTouch>
                    <div>Get In Touch</div>
                    <div><GrMail />heydemo@gmail.com</div>
                    <div><BsFillTelephoneFill />+65 11.188.888</div>
                </GetInTouch>
                <SocialMedia>
                    <div>Social Media Pages</div>
                   <span><FaFacebookF /><FaTwitter /><FaLinkedinIn /><FaPinterest /></span> 
                </SocialMedia>
            </FooterConatiner>
            <Copyright>© 2023 Shop23. All Rights Reserved by NSAsOFT</Copyright>
        </>
    )
}
const FooterConatiner = styled.div`
 background-color: #fff;
 display: flex;
 padding: 8px 20px;
 @media screen and (max-width:992px){
    flex-direction: column;
 }
`
const About = styled.div`
 flex: 1;
 width: min-content;
 padding: 20px;
 @media screen and (max-width:992px){
    width:auto;
 }
 img{
     height: 50px;
     width: 185px;
    }
div{
    font-size: 13px;
    font-weight: 700;
    span{
        font-weight:400;
     }
   }
`
const GetInTouch = styled.div`
 flex: 1;
 padding: 20px;
 svg{
    margin-right: 5px;
 }
  div:nth-child(1){
    font-weight: 600; 
    margin-bottom:20px; 

  }
  div:nth-child(2){
    display: flex;
    align-items: center; 
    margin-bottom:10px;  
    font-size: 14px;
  }
  div:nth-child(3){
    display: flex;
    align-items: center; 
    font-size: 14px;
    margin-bottom:10px; 
  }
`
const SocialMedia = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
 flex-direction: column;
 padding: 20px;
 div{
    font-weight: 600;
    margin-bottom: 20px;
 }
 svg{
    border-radius: 50%;
    margin: 0 10px;
    display: inline-block;
    height: 45px;
    width: 45px;
    background-color: #eeeeee;
    padding: 12px 4px;
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
    :hover{
        background-color: var(--primary-color);
        color: #fff;
    }
 }
`
const Copyright = styled.div`
    padding: 10px;
    border-top: 1px solid rgba(168, 168, 168, 0.541);
    text-align: center;
    font-size: 14px;
`
export default Footer