import React from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import { HiShoppingCart } from 'react-icons/hi';
import {Link} from 'react-router-dom'
import SubNavBar from './SubNavBar';
const NavBar = () => {
    return (<>
        <Nav>
            <Logo>
                <img src="https://liondigital.com.au/wp-content/uploads/2021/12/Mask-group2.png" alt="" />
            </Logo>
            <SearchBar><input type="search" placeholder='What do you need ?' /><BiSearch /></SearchBar>
            <NavIcons>
                <span><AiFillHeart /><span>10</span></span>
                <span><HiShoppingCart /><span>8</span></span>
                <Link to={"/login"}><Login>Log In</Login></Link>  
            </NavIcons>
        </Nav>
        <SubNavBar/>
    </>
    )
}
const Nav = styled.div`
 display: flex;
 align-items: center;
 background-color: #fff;
 padding: 10px 24px;
 flex-wrap: wrap;
    @media (max-width: 500px) {
        padding: 10px ;
    }
`
const Logo = styled.div`
 flex: 1;
    img{
        width: 185px;
        height: 50px; 
      @media (max-width: 500px) {
        width: 145px ;
        height: 40px ;
      }
    }
    @media (max-width: 350px) {
        min-width: 100%;
        display: flex;
        justify-content: center;
    }
   
`
const SearchBar = styled.form`
  flex: 3;
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 15px;
    input{
        height: 34px;
        width: 100%;
        border: 0px solid #191919;
        border-radius: 0.3rem;
        padding: 20px 20px;
        font-size: 14px;
        background-color: #f3f3f3;
    }
    svg{ 
    cursor: pointer;
    position: absolute;
    right: 10px;
    font-size: 20px;
    }
    @media (max-width: 992px) {
        min-width: 100%;
        order: 3;
        margin: 6px 0 0 0;
     }
`
const NavIcons = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    position: relative;
        svg{
        width: 38px;
        height: 39px;
        color: #fff;
        background-color: var(--primary-color);
        font-size: -2px;
        padding: 9px;
        border-radius: 50%;
        margin-right: 20px;
        box-shadow: 0 0.5rem 1.125rem -0.5rem  var(--primary-color);
        cursor: pointer;
        @media (max-width: 500px) {
            width: 30px;
            height: 30px;
            padding: 6px;
          }
       }
        span{
            position: absolute;
            left: 28px;
            background-color: black;
            color: #fff;
            border-radius: 50%;
            padding: 3px 4px;
            font-weight: 600;
            font-size: 10px;
            @media (max-width: 500px) {
            left: 20px;
          }
        }
  }
    @media (max-width: 992px) {
        justify-content: flex-end;
    }
    @media (max-width: 350px) {
        min-width: 100%;
        display: flex;
        justify-content: center;
        order: 3;
        margin-top: 10px;
    }
`
const Login = styled.button`
    cursor: pointer;
    background-color:  var(--primary-color);
    color: #fff;
    padding: 7px 15px;
    font-size: 16px;
    border: none;
    border-radius: 0.2rem;
    margin-left: 10px;
    box-shadow: 0 0.5rem 1.125rem -0.5rem  var(--primary-color);
    @media (max-width: 500px) {
            font-size: 13px;
            padding: 6px 10px;
     }
`
export default NavBar