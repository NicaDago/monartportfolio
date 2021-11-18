import React from 'react' 
import styled from 'styled-components';

function RedDot() {
    return(
        <RedDotStyled >
                <div class="wrap-dot"> 
                    <ul class="dot">
                        <li class="centerdot"></li>
                    </ul>
                </div>
        </RedDotStyled>
    )
}

const RedDotStyled = styled.div`
.wrap-dot{
    position: relative;
    margin-top: 5px;
    margin-left: 50px;
    visibility: visible;
    animation: visibleDot 6s linear infinite;
}

.wrap-dot:hover{
    position: relative;
    margin-top: 20px;
    margin-left: 40px;
}

.dot{
    list-style: none;
    position: relative;
    height: 100px;
    width: 100px;
    padding: 0;
    margin: 0;
}

.centerdot{
    position: absolute;
    top:30px;
    left:55px;
    height: 20px;
    width: 20px;
    background-color: #d85433;
    border-radius: 30px;
    animation: dot 10s linear infinite;
}   

@keyframes dot {
                0%{ background-color: #e9b8b8;}
                25%{ background-color: #da7c7c;}
                50%{ background-color: #c01414;}
                75%{ background-color: #da7c7c;}
                100%{ background-color: #e9b8b8;}
                    }

@media only screen and (max-width: 1024px){
    .wrap-dot{
        display: none;
}
}
   `;

export default RedDot;
