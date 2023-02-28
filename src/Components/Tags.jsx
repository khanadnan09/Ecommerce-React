import React from 'react'
import styled from "styled-components"
import {BsShieldLock,BsClock,BsTruck} from 'react-icons/bs'
const Tags = () => {
  return (
    <TagsCntainer>
        <Tag>
            <BsTruck/>
            <About>
                <div>FREE SHIPPING</div>
                <div>For all order over 99$</div>
            </About>
        </Tag>
        <Tag>
            <BsClock/>
            <About>
                <div>DELIVERY ON TIME</div>
                <div>If good have prolems</div>
            </About>
        </Tag>
        <Tag style={{border:"none"}}>
            <BsShieldLock/>
            <About>
                <div>SECURE PAYMENT</div>
                <div>100% secure payment</div>
            </About>
        </Tag>
    </TagsCntainer>
  )
}
const TagsCntainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0px;
  background-color: #fff;
  padding: 20px 0;
  @media screen and (max-width:700px){
      flex-direction:column ;
  }
`
const Tag = styled.div`
  margin: 0 10px;
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 20px 0px;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e1e1e1;
  @media screen and (max-width:700px){
      flex-direction:column ;
      border-right: none;
      border-bottom :2px solid #e1e1e1;
  }
   svg{
    font-size: 46px;
    margin:0 10px;
    color:#000;
   }
`
const About = styled.div`
   text-align: center;
    div:nth-child(1){
        font-size: 18px;
        font-weight: 600;
        margin-top: 5px;
    }
    div:nth-child(2){
        font-size: 14px;
        font-weight: 400;
        margin-top: 5px;
    }
`
export default Tags