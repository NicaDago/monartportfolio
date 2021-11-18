import React from 'react' 
import styled from 'styled-components';
import BigOrange from '../Components/Flowers/Orange/BigOrange';
import SmallOrange from '../Components/Flowers/Orange/SmallOrange';
import BigOrangeAnim from '../Components/Flowers/Orange/BigOrangeAnim';
import SmallBlueAnim from '../Components/Flowers/Blue/SmallBlueAnim';
import SmallBlue from '../Components/Flowers/Blue/SmallBlue';
import SmallGreen from '../Components/Flowers/Green/SmallGreen';
import SmallGreenAnim from '../Components/Flowers/Green/SmallGreenAnim';
import BigGreenAnim from '../Components/Flowers/Green/BigGreenAnim';
import SmallRedAnim from '../Components/Flowers/Red/SmallRedAnim';
import SmallRed from '../Components/Flowers/Red/SmallRed';
import BigRed from '../Components/Flowers/Red/BigRed';
import GreenDot from '../Components/Flowers/Green/GreenDot';
import RedDot from '../Components/Flowers/Red/RedDot';

function LandingPage() {
    return(
        <LandingPageStyled >
            <div class="banner">  
                    <div class="item1"><BigOrange  /></div> 
                    <div class="item2"><SmallBlueAnim  /><SmallGreen /><SmallOrange/></div>
                    <div class="item3"><SmallBlue /><RedDot /><GreenDot /></div>  
                    <div class="item4"><SmallBlueAnim /><SmallRedAnim /></div>
                    <div class="item5"><BigGreenAnim /></div>
                    <div class="item6"><SmallBlueAnim /><SmallRed /><GreenDot /></div>
                    <div class="item7">
                    <div class="paragraph">
                        <b>Hi, welcome to my portfolio page. My name is Monica and I am a student developer/designer.</b>
                    </div>
                </div>
                    <div class="item8"></div>   
                    <div class="item9"><SmallBlue /><SmallGreenAnim /></div>
                    <div class="item10"><SmallBlueAnim /><RedDot /></div>
                    <div class="item11"><BigRed  /></div>
                    <div class="item12"><BigOrangeAnim  /></div> 
                    <div class="item13"><SmallBlueAnim /><GreenDot /></div>
                    <div class="item14"><SmallBlue /><SmallRedAnim /></div>
                    <div class="item15"><BigOrange /></div> 
            </div>
        </LandingPageStyled>
    )
}

const LandingPageStyled = styled.div`
.banner{
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 30% 30% 30%;
    height: 130vh;
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
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: normal;
    overflow: hidden;
    font-size: 3rem;
    font-family: 'Oswald', sans-serif;
    text-shadow: var(--main-title-shadow);
    letter-spacing: -3px;
    text-align: center;
    transition: transform 0.2s;
    color: var(--main-title); 
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

//------------responsive----------------

@media only screen and (max-width: 1024px){
.paragraph{
  width: 20ch;
  }
}

@media only screen and (max-width: 800px){
  .banner{
    height: 90vh;
  }
 */

   .paragraph{
    width: 22ch;
    font-size: 1.5rem;
    letter-spacing: -3px;
}
}

 @media only screen and (max-width: 375px){
  .banner{
    height: 50vh;
    width: 50vh;
    margin-left: -10rem;
    padding-right: 10rem;
}

  .paragraph{
    width: 8ch;
    font-size: 0.5rem;
    letter-spacing: -3px;
    text-align: right;
}
}

   `;

export default LandingPage;
