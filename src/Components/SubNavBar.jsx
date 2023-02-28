import React from 'react'
import styled from 'styled-components'
import { CgMenu } from 'react-icons/cg';
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';
import { createGlobalStyle } from 'styled-components';
import variables from '../index.css';
import MobileMenu from './MobileMenu';
const SubNavBar = () => {
  return (
    <SubNav>
      <Categories>All Categories <CgMenu />
        <CatgUl>
          <ListItem>
            Fashion <MdKeyboardArrowRight />
            <SubCatgUl>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Designer</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
            </SubCatgUl>
          </ListItem>
          <ListItem>
            Women <MdKeyboardArrowRight />
            <SubCatgUl>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Designer</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
            </SubCatgUl>
          </ListItem>
          <ListItem>
            Men <MdKeyboardArrowRight />
            <SubCatgUl>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Designer</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Designer</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
            </SubCatgUl>
          </ListItem>
          <ListItem>
            Kids <MdKeyboardArrowRight />
            <SubCatgUl>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Designer</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
              <SubListItem>Street style</SubListItem>
              <SubListItem>Designer</SubListItem>
              <SubListItem>Dresses</SubListItem>
              <SubListItem>Accessories</SubListItem>
            </SubCatgUl>
          </ListItem>
          <ListItem>Electronics</ListItem>
          <ListItem>Furniture</ListItem>
          <ListItem>Sports</ListItem>
          <ListItem>Jewelry</ListItem>
        </CatgUl>
      </Categories>

      <SubLinks>
        <Item>Home</Item>
        <Item>Menu</Item>
        <Item>Clothing <MdKeyboardArrowDown />
          <CatgUl>
            <ListItem>Street style</ListItem>
            <ListItem>Designer</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Street style</ListItem>
            <ListItem>Designer</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Accessories</ListItem>
          </CatgUl>
        </Item>
        <Item>Electronics <MdKeyboardArrowDown />
          <CatgUl>
            <ListItem>Street style</ListItem>
            <ListItem>Designer</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Street style</ListItem>
          </CatgUl>
        </Item>
        <Item>Groceery <MdKeyboardArrowDown />
          <CatgUl>
            <ListItem>Street style</ListItem>
            <ListItem>Designer</ListItem>
            <ListItem>Dresses</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>Street style</ListItem>
          </CatgUl>
        </Item>
        <Item>Contact Us</Item>
      </SubLinks>
      <MobileMenu />
    </SubNav>
  )
}
createGlobalStyle`
  :root {
    --primary-color: ${variables['primary-color']};
  }
`
const SubNav = styled.div`
    position: relative;
    display: flex;
    height: 45px;
    align-items: center;
    background-color: #000000;
    padding: 0 24px;
    @media screen and (max-width:500px) {
      padding: 0 10px;
    }
`
const Categories = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    background-color: #000;
    color: #fff;
    height: 100%;
    cursor: pointer;
    padding: 0px 50px;
    background-color: var(--primary-color);
    svg{
      font-size: 19px;
      margin-left: 10px;
    }
    :hover ul{
      visibility: visible;
      opacity: 1;
      top: 45px ;
    }
    @media screen and (max-width:500px) {
      padding: 0 13px;
      font-size: 13px;
    }
`
const CatgUl = styled.ul`
    list-style: none;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    top: 62px;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s;
    box-shadow: #00000059 0px 5px 15px;box-shadow: #11111a19 0px 0px 16px;
    @media screen and (max-width:330px) {
      font-size: 13px;
    }
`
const ListItem = styled.li`
    position: relative;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-left:4px solid #fff ;
    :hover {
      color:  var(--primary-color);
      border-left:4px solid var(--primary-color) ;
      ul{
         transition: all 0.3s;
         visibility: visible !important;
         opacity: 1 !important;
         top: 0px !important;
      }
    }
    @media screen and (max-width:320px){
      svg{
      font-size: 15px;
     }
    }

`
const SubCatgUl = styled.ul`
    list-style: none;
    width: 100%;
    z-index: 2;
    background-color: #fff;
    color: #000;
    font-size: 15px;
    font-weight: 500;
    position: absolute;
    top: 20px;
    left: 100%;
    opacity: 0 !important;
    visibility: hidden !important;
    box-shadow: #00000059 0px 5px 15px;box-shadow: #11111a19 0px 0px 16px;
`
const SubListItem = styled.li`
      padding: 10px 20px;
      border-left:4px solid #fff ;
      :hover {
        color:  var(--primary-color);
        border-left:4px solid var(--primary-color) ;
      }
      @media screen and (max-width: 330px)
          {
             font-size: 13px;
          }
`
const SubLinks = styled.div`
    display: flex;
    height: 100%;
    color: #fff;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 992px) {
      display: none;
    }
`
const Item = styled.div`
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    font-size: 14px;
    justify-content: center;
    svg{
      margin-top: 2px;
      margin-left: 4px;
      font-size: 17px;
    }
    ul{
      width: max-content !important;
      min-width: 200px;
    }
    :hover{
      ul{
         transition: all 0.3s;
         visibility: visible !important;
         opacity: 1 !important;
         top: 45px !important;
      }
      color: var(--primary-color);
    }
`
export default SubNavBar