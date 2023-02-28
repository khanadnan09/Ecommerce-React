import React from 'react'
import styled from 'styled-components'
import { CgMenu } from 'react-icons/cg'
const MobileMenu = () => {
    return (
        <MenuMobile>
            <CgMenu /><span>Menu</span>
            <DropDownMnu>
                <span>Home</span>
                <span>Menu</span>
                <span>Clothing</span>
                <span>Electronics</span>
                <span>Furniture</span>
                <span>Kids</span>
                <span>Sports</span>
                <span>Contact Us</span>
            </DropDownMnu>
        </MenuMobile>
    )
}
const MenuMobile = styled.div`
    padding: 0 12px;
    color: #000;
    margin-left: auto;
    display: none;
    align-items: center;
    background-color: #fff;
    height: 100%;    
    cursor: pointer;
    svg{
        font-size: 19px;
        margin-right: 6px;
    }
    span{
        font-size: 13px;
        display: flex;
    }
    @media screen and (max-width:992px) {
      display: flex !important;
    }
    :hover div{
        opacity: 1;
        margin-top: 0px;
        visibility: visible;
    }
`
const DropDownMnu = styled.div`
    z-index: 99;
    position: absolute;
    background-color: black;
    color: #fff;
    top: 100%;
    display: flex;
    min-width: 100%;
    left: 0;
    padding: 10px;
    flex-wrap: wrap;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    margin-top: 20px;
    span{
        flex: auto;
        cursor: pointer;
        padding: 10px 12px;
    }
`
export default MobileMenu
