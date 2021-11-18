import React from 'react'
import styled from 'styled-components';
import SmallFlowerString from '../Components/Flowers/SmallFlowerString';

function FlowerStringPage() {
    return (
        <FlowerStringPageStyled>
            <div class="container">
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
                <div class="flower"><SmallFlowerString /></div>
            </div>
        </FlowerStringPageStyled>
    )
}

const FlowerStringPageStyled = styled.div`
.container{
    height: 0px;
    display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    grid-template-rows: 1;
    background-color: #d1f0ce;
    margin-left: -25px;
}

.flower{
    margin-top: -22px;
}

//--------------------------------------------------------------------
@media only screen and (max-width: 660px){
    .container{
    /* display: grid;
    grid-template-columns: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%; */
    /* margin-left: 10px; */
    grid-gap: 5px;
}
}

`;

export default FlowerStringPage;
