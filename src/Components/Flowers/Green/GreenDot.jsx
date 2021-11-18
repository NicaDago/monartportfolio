import React from 'react' 
import styled from 'styled-components';

function Dot2() {
    return(
        <Dot2Styled >
                <div class="wrap-dot"> 
                    <ul class="dot">
                        <li class="centerdot"></li>
                    </ul>
                </div>
        </Dot2Styled>
    )
}

const Dot2Styled = styled.div`
.wrap-dot{
    position: relative;
    margin-top: -220px;
    margin-left: 200px;
}

.wrap-dot:hover{
    position: relative;
    margin-top: -190px;
    margin-left: 190px;
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
    background-color: #8ed684;
    border-radius: 30px;
    animation: dot2 6s linear infinite;
}


@keyframes dot2 {
                0%{ background-color: #8ed684;}
                50%{ background-color: #c6c928;}
                100%{background-color: #49c4c4;}
                    }


@media only screen and (max-width: 1024px){
    .wrap-dot{
        display: none;
}
}
   `;

export default Dot2;
