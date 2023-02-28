import React from 'react'
import styled from 'styled-components'
import { GrMail } from 'react-icons/gr';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterest } from 'react-icons/fa';

const TopNav = () => {
    return (
        <TopNavBar>
            <Email><GrMail />heydemo@gmail.com</Email>
            <Phone><BsFillTelephoneFill />+65 11.188.888</Phone>
            <SocialMedia><FaFacebookF /><FaTwitter /><FaLinkedinIn /><FaPinterest/></SocialMedia>
        </TopNavBar>
    )
}
const TopNavBar = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e9e9e9;
    font-size: 13px;
    background-color: #fff;
    padding: 10px;
`
const Email = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    border-right: 1px solid #e9e9e9;
    margin: 0 10px 0 0;
    padding: 0px 10px 0 0;
    svg{
        font-size: 16px;
        margin-right: 5px;
    }
    :hover{
        color: var(--primary-color);
    }
`
const Phone = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    margin: 0 10px 0 0;
    padding: 0px 10px 0 0;
    svg{
        font-size: 16px;
        margin-right: 5px;
    }
    :hover{
        color: var(--primary-color);
    }
    @media (max-width: 480px) {
     display: none;
    }
    `
const SocialMedia = styled.div`
    flex: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg{
        cursor: pointer;
        font-size: 16px;
        margin-right: 21px;
        :hover{
        color: var(--primary-color);
      }
      :last-child{
        margin-right: 0px !important;
      }
      @media (max-width: 576px) {
            margin-right: 12px !important;
     }
    }
`
export default TopNav