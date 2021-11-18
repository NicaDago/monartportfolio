import React from 'react' 
import styled from 'styled-components';

function SmallFlowerString() {
    return(
        <SmallFlowerStringStyled >
       
                <div class="wrap-flower"> 
                    <ul class="flower">
                        <li class="petal p1"></li>
                        <li class="petal p2"></li>
                        <li class="petal p3"></li>
                        <li class="petal p4"></li>
                        <li class="petal p5"></li>
                        <li class="petal p6"></li>
                        <li class="petal p7"></li>
                        <li class="petal p8"></li>
                        <li class="centerflower"></li>
                    </ul>
                </div>

        </SmallFlowerStringStyled>
    )
}

const SmallFlowerStringStyled = styled.div`
.wrap-flower{
    /* animation: mymove 25s infinite;  */
    position: relative;
    /* animation-name: example; */
    /* animation-timing-function: linear; */
}

/* @keyframes example {
  0%   { left:0px; }
  25%  { left:500px; }
  50%  {left:1000px; }
  75%  { left:1500px; }
  100% { left:2000px; }
} */

.flower{
    list-style: none;
    position: relative;
    height: 100px;
    width: 100px;
    padding: 0;
    margin: 0;
}

.flower:hover .petal {
    opacity: 1;
}

.petal{
    opacity: 0.33;
    background:#5cad19;
    width:40px;
    height:40px;
    border-radius: 100px;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-top-right-radius: 0;
    -webkit-border-top-right-radius: 0;
    -moz-border-radius-topright: 0;
    position: absolute;
    transition: all 200ms ease-in;
    -moz-transition: all 200ms ease-in; /* Firefox 4 */
    -webkit-transition: all 200ms ease-in; /* Safari and Chrome */
    -o-transition: all 200ms ease-in; /* Opera */
}

.centerflower{
    position: absolute;
    top:30px;
    left:55px;
    height: 30px;
    width: 30px;
    background-color: #f0ae4b;
    border-radius: 30px;
    /* animation: smallFlowerString 15s linear infinite; */
}

/* @keyframes smallFlowerString {
                0%{ background-color: #f0ae4b;}
                25%{ background-color: #f0ae4b;}
                50%{ background-color: #8f4215;}
                75%{ background-color: #ebdc16;}
                100%{background-color: #ebdc16;}
                    } */

.p1 {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg); 
    top: 50px;
    left: 50px;
}

.p2 {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg); 
    top: 41.5px;
    left: 70.5px;
}

.p3 {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    -ms-transform: rotate(-135deg); 
    top: 21px;
    left: 79px;
}

.p4 {
    transform: rotate(-180deg);
    -webkit-transform: rotate(-180deg);
    -moz-transform: rotate(-180deg);
    -o-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg); 
    top: 1px;
    left: 71px;
}

.p5 {
    transform: rotate(-225deg);
    -webkit-transform: rotate(-225deg);
    -moz-transform: rotate(-225deg);
    -o-transform: rotate(-225deg);
    -ms-transform: rotate(-225deg); 
    top: -7px;
    left: 50px;
}

.p6 {
    transform: rotate(-270deg);
    -webkit-transform: rotate(-270deg);
    -moz-transform: rotate(-270deg);
    -o-transform: rotate(-270deg);
    -ms-transform: rotate(-270deg); 
    top: 1px;
    left: 29px;
}

.p7 {
    transform: rotate(-315deg);
    -webkit-transform: rotate(-315deg);
    -moz-transform: rotate(-315deg);
    -o-transform: rotate(-315deg);
    -ms-transform: rotate(-315deg); 
    top: 21px;
    left: 21.5px;
}

.p8 {
    top: 41px;
    left: 30px;
}


//--------------------------------------------------------------------
@media only screen and (max-width: 660px){

.wrap-flower{
    margin-left: 10px;
}

.petal{ 
    width:20px;
    height:20px;
}

.centerflower{
    top:15px;
    left:27.5px;
    height: 15px;
    width: 15px;
}

.p1 {
    top: 25px;
    left: 25px;
}

.p2 {
    top: 20.7px;
    left: 35.2px;
}

.p3 {
    top: 10.5px;
    left: 39.5px;
}

.p4 {
    top: 0.5px;
    left: 39.5px;
}

.p5 {
    top: -3.5px;
    left: 25px;
}

.p6 {
    top: 0.5px;
    left: 14.5px;
}

.p7 {
    top: 10.5px;
    left: 10.7px;
}

.p8 {
    top: 20.5px;
    left: 15px;
}
}

   `;

export default SmallFlowerString;
