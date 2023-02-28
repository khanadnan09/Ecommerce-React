import React from 'react'
import styled from 'styled-components'

const Offers = () => {
  return (
    <OfferConatiner>
      <Offer style={{ padding: "0px", minHeight: "220px" }}>
        <Title className='offerDetail'>DEALS OF THE DAY</Title>
        <OfferDetail>
          <span><img src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="img" className='off_img' /></span>
        </OfferDetail>
      </Offer>
      <Offer>
        <Title>Up to 60% off | Styles for men</Title>
        <OfferDetail>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg" alt="img" />Clothing</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg" alt="img" />Footwear</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg" alt="img" />Watches</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg" alt="img" />Bags & Luggage</span>
          <ShopButton>Shop Now</ShopButton>
        </OfferDetail>
      </Offer>
      <Offer>
        <Title>Upgrade your home | Amazon Brands & more</Title>
        <OfferDetail>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Mixer-186x116._SY116_CB614658577_.jpg" alt="img" />Up to 50% off | Home appliances</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Comforter-186x116._SY116_CB614658577_.jpg" alt="img" />
            Up to 50% off | Comforters & more</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Conatiner-186x116._SY116_CB614658577_.jpg" alt="img" />
            Starting ₹169 | Containers & more</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/PB/PC/Gateway/QC/Photoframe-186x116._SY116_CB614658577_.jpg" alt="img" />
            Starting ₹229 | Photo frames</span>
          <ShopButton>Shop Now</ShopButton>
        </OfferDetail>
      </Offer>
      <Offer>
        <Title>Home appliances | Up to 50% off</Title>
        <OfferDetail>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img" />Air conditioners</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img" />Refrigerators</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img" />Microwaves</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="img" />
            Washing machines</span>
          <ShopButton>Shop Now</ShopButton>
        </OfferDetail>
      </Offer>
      <Offer>
        <Title>Automotive essentials | Up to 60% off</Title>
        <OfferDetail>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="img" />Cleaning accessories
          </span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" alt="img" />
            Tyre & rim care</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" alt="img" />
            Helmets</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" alt="img" />Vaccum cleaner</span>
          <ShopButton>Shop Now</ShopButton>
        </OfferDetail>
      </Offer>
      <Offer>
        <Title>Controllers, racing wheels and more | Starting ₹149</Title>
        <OfferDetail>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q42/PC_QuadCard_Accessories_1x._SY116_CB619159413_.jpg" alt="img" />
            Controllers | Starting ₹149
          </span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q4/PC_QuadCard_372X232_Accessories_2_1x._SY116_CB606557995_.jpg" alt="img" />
            Gaming headphones | Starting ₹399</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q4/PC_QuadCard_372X232_Accessories_4_1x._SY116_CB606557995_.jpg" alt="img" />
            Up to 47% off | Streaming devices</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/Q4/PC_QuadCard_372X232_Accessories_3_1x._SY116_CB606557995_.jpg" alt="img" />Vaccum
            Up to 50% off | Racing wheels</span>
          <ShopButton>Shop Now</ShopButton>
        </OfferDetail>
      </Offer>
      <Offer>
        <Title>Electronics devices for home office</Title>
        <OfferDetail>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_5._SY116_CB655805757_.jpg" alt="img" />Smartwatches & fitness trackers
          </span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_6._SY116_CB655805757_.jpg" alt="img" />
            Tablets</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_7._SY116_CB655805757_.jpg" alt="img" />
            Laptops</span>
          <span><img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/PC/Computers/GW/DBQC/D21343116_IN_CEPC_BAU_GW_graphics_March21_dbqc0.5x_8._SY116_CB655805757_.jpg" alt="img" />
            Monitors</span>
          <ShopButton>Shop Now</ShopButton>
        </OfferDetail>
      </Offer>
      <Offer style={{ display: "flex", justifyContent: "center", alignItems: "center",
        backgroundImage: "linear-gradient(to right top, #fca311, #fdb445, #fec46b, #ffd48f, #ffe3b4)"
    }}>
        <SpecailCard>
          Sign in for your best experience
          <button>Sign In</button>
        </SpecailCard>
      </Offer>
    </OfferConatiner>
  )
}
const OfferConatiner = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 30px 0;
    *:nth-child(n+2){
      height: fit-content;
     }
    
`
const ShopButton = styled.button`
    background-color: var(--primary-color);
    margin-top: 5px;
    padding: 8px 10px;
    border: 0px;
    cursor: pointer;
    color: #fff;
    box-shadow: 0 0.5rem 1.125rem -0.5rem var(--primary-color);
`
const SpecailCard = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    padding: 10px;

   button{
    background-color: #000;
    margin-top: 50px;
    padding: 10px;
    border: 0px;
    font-size: 1.2rem;
    color: #fff;
    cursor: pointer;
   }
`
const Offer = styled.div`
    margin: 10px;
    padding: 10px;
    background-color: #fff;
    width: 264px;
    position: relative;
    @media screen and (max-width:851px){
      max-width: 260px;
    }
    @media screen and (max-width:559px){
      flex-basis: 100%;
      max-width: 100%;
    }
`
const OfferDetail = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px 0;    
    justify-content: center;
      span{
        display: flex;
        flex-direction: column;
        font-size: 10px;
        margin: 10px;
        font-weight: 500;
        cursor: pointer;
        width: min-content;
        @media screen and (max-width: 519px) {
          flex-basis: 43%;
        }
        @media screen and (max-width: 326px) {
          flex-basis: 40%;
        }
      }
      span img {
        height: 100px;
        width: 100px;
        object-fit: cover;
        margin-bottom: 4px;
        transition: 450ms;
        :hover{
          transform: scale(.9);
          border-radius: 8px;
        }
        @media screen and (max-width: 519px) {
          height: 121px;
          width: 100%;
        }
      }
`
const Title = styled.div`
  margin-top: 10px;
  font-weight: 600;
`
export default Offers