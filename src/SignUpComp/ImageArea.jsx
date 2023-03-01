import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ImageArea = () => {
  return (
    <ImageAreaCont>
      <img src="https://images.pexels.com/photos/9127109/pexels-photo-9127109.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Login" />
      <TextArea>
        <Heading>Hello there, welcome!</Heading>
        <Title>Get back to shopping faster with just one click - Login now!</Title>
        <Link to={"/login"}><button>Log In</button></Link>
      </TextArea>
    </ImageAreaCont>
  )
}
const ImageAreaCont = styled.div`
    flex: 1;
    height: 100vh;
    position: relative;
    img{
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    @media screen and (max-width:1200px){
      flex: 1.5;
    }
    @media screen and (max-width:768px){
       display: none;
    }
`
const TextArea = styled.div`
    right: 0;
    color: #fff;
    position: absolute;
    top: 0%;
    left: 0%;
    background-color: #000000a6;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button{
      color: #fff;
      font-size: 17px;
      background-color: var(--primary-color);
      border: 0;
      padding: 8px 45px;
      cursor: pointer;
      border-radius: 40px;
      box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
    }
`
const Heading = styled.div`
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 95%;
`
const Title = styled.div`
    font-size: 15px;
    font-weight: 400;
    margin: 15px 0;
    width: 90%;
    text-align: center;
`
export default ImageArea