import React from 'react' 
import styled from 'styled-components';
import BigOrange from '../Components/Flowers/Orange/BigOrange';
import SmallOrange from '../Components/Flowers/Orange/SmallOrange';
import BigOrangeAnim from '../Components/Flowers/Orange/BigOrangeAnim';
import SmallBlueAnim from '../Components/Flowers/Blue/SmallBlueAnim';
import SmallBlue from '../Components/Flowers/Blue/SmallBlue';
import BigBlueAnim from '../Components/Flowers/Blue/BigBlueAnim';
import SmallGreen from '../Components/Flowers/Green/SmallGreen';
import SmallGreenAnim from '../Components/Flowers/Green/SmallGreenAnim';
import BigGreenAnim from '../Components/Flowers/Green/BigGreenAnim';
import SmallRedAnim from '../Components/Flowers/Red/SmallRedAnim';
import SmallRed from '../Components/Flowers/Red/SmallRed';
import BigRed from '../Components/Flowers/Red/BigRed';
import GreenDot from '../Components/Flowers/Green/GreenDot';
import RedDot from '../Components/Flowers/Red/RedDot';
import Ant from '../Components/Contact/Ant';

function FooterPage() {
    return(
        <FooterPageStyled >
                 <Ant />
            <div class="banner">  
            <div class="item1"><BigOrange  /></div> 
                    <div class="item2"><SmallBlueAnim  /><SmallGreen /><SmallOrange/></div>
                    <div class="item3"><SmallBlue /><RedDot /><GreenDot /></div>  
                    <div class="item4"><SmallBlueAnim /><SmallRedAnim /></div>
                    <div class="item5"><BigGreenAnim /></div>
                    <div class="item6"><SmallBlueAnim /><SmallRed /><GreenDot /></div>
                    <div class="item7"><BigBlueAnim /></div>
                    <div class="item8"></div>   
                    <div class="item9"><SmallBlue /><SmallGreenAnim /></div>
                    <div class="item10"><SmallBlueAnim /><RedDot /></div>
                    <div class="item11"><BigRed  /></div>
                    <div class="item12"><BigOrangeAnim  /></div> 
                    <div class="item13"><SmallBlueAnim /><GreenDot /></div>
                    <div class="item14"><SmallBlue /><SmallRedAnim /></div>
                    <div class="item15"><BigOrange /></div> 
            </div>
            <div class="paragraph">
                        <b>Copyrights <i class="fas fa-heart"></i> monart2021.</b>
                    </div>
        </FooterPageStyled>
    )
}

const FooterPageStyled = styled.div`
margin-top: -5rem;

.banner{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 30% 30% 30%;
    height: 120vh;
    width: 200vh;
    margin: 0;
    padding: 0;
}

.item1 .item2 .item3 .item4 .item5 .item6 .item8 .item9 .item10 .item11 .item12 .item13 .item14 .item15 {
  z-index: 0;
}

.item7{
  z-index: 1;
}

.paragraph{
    width: 22ch;
    white-space: normal;
    overflow: hidden;
    font-size: 1rem;
    font-family: 'Oswald', sans-serif;
    text-align: center;
    color: var(--main-title); 
}

//------------responsive

/* @media only screen and (max-width: 1024px){
.paragraph{
  width: 20ch;
  }
} */

/* @media only screen and (max-width: 800px){
  .banner{
    height: 90vh;
  }
 */

   /* .paragraph{
    width: 22ch;
    font-size: 2.5rem;
    letter-spacing: -3px;
}
} */

 /* @media only screen and (max-width: 600px){
  .banner{
    height: 50vh;
  }


   .paragraph{
    width: 16ch;
    font-size: 1.5rem;
    letter-spacing: -3px;
}
} */

   `;

export default FooterPage;
