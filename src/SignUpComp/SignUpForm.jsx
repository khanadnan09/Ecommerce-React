import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegUser } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const SignUpForm = () => {
  return (
    <LoginContainer>
      <Logo><img src="https://liondigital.com.au/wp-content/uploads/2021/12/Mask-group2.png" alt="logo" /></Logo>
      <Heading>Sign Up to Shopifyplus</Heading>
      <SocialMedia><span><FaGoogle /><FaFacebookF /><FaLinkedinIn /></span>
        <div>Or use email for sign up</div>
      </SocialMedia>
      <Form>
        <div>
          <label htmlFor="name"><FaRegUser />Name</label>
          <input type="name" id='name' style={{ paddingLeft: "90px", paddingRight: "15px" }} />
        </div>
        <div>
          <label htmlFor="email"><HiOutlineMail />Emial</label>
          <input type="email" id='email' style={{ paddingLeft: "90px", paddingRight: "15px" }} />
        </div>
        <div>
          <label htmlFor="password"><HiOutlineLockClosed />Password</label>
          <input type="password" id='password' style={{ paddingLeft: "120px", fontSize: "20px", fontWeight: "600", paddingRight: "15px" }} />
        </div>
        <span><Link to={"/login"}>Allready have an acoount? Log in.</Link>
          <button>Sign Up</button></span>
      </Form>
    </LoginContainer>
  )
}
const LoginContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 0;
    height: 100vh;
    overflow-y: auto;
    @media screen and (max-width:1200px){
      padding: 50px 0;
    }
    @media screen and (max-width:768px){
      flex: auto;
    }
`
const Logo = styled.div`
    img{
        height: 50px;
        width: 185px;
        margin-bottom: 10px;
    }
`
const Heading = styled.div`
   font-size: 30px;
   font-weight: 300;
   margin-bottom: 16px;
   @media screen and (max-width:400px){
      font-size: 25px;
    }
`
const SocialMedia = styled.div`
   span{
    display: flex;
    justify-content: center;
   }
    svg{
        background-color: var(--body-color);
        height: 40px;
        width: 40px;
        transition:  all 0.3s;
        border-radius: 50%;
        padding: 0px 14px;
        margin-right: 14px;
        cursor: pointer;
        :hover{
          background-color: var(--primary-color);
          color: #fff;   
          box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
        }
    }
    div{
        text-align: center;
        font-size: 13px;
        color: #bbbbbb;
        font-weight: 500;
        margin: 20px 0;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 10px;
        width: 250px;
    }
`
const Form = styled.form`
    width: 50%;
    @media screen and (max-width:1200px){
      width: 70%;
    }
    @media screen and (max-width:450px){
      width: 85%;
    }
    a{
        font-size: 14px;
        font-weight: 500;
        color: #4c4c4c;
        cursor: pointer;
        margin: 20px 0 ;
        @media screen and (min-width:768px){
         display: none;
       }
     }
    div{
        display: flex;
        position: relative;
        margin: 20px 0;
    }
    label{
        left: 5%;
        display: flex;
        align-items: center;
        position: absolute;
        top: 31%;
        color: #858585;
        font-size: 13px;
        svg{
            margin-right: 5px;
            font-size: 17px;
        }
    }
    input{
        border-radius: 40px;
        height: 40px;
        width: 100%;
        border: none;
        background-color: var(--body-color);
    }
    span{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: -15px;
        div{
            margin-left: auto;
            font-size: 14px;
            font-weight: 500;
            color: #4c4c4c;
            cursor: pointer;
        }
        button{
        color: #fff;
        font-size: 17px;
        background-color: var(--primary-color);
        border: 0;
        padding: 8px 45px;
        cursor: pointer;
        border-radius: 40px;
        box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
        @media screen and (min-width:768px){
         margin: 20px 0;
       }
    }
    }
    
`
export default SignUpForm