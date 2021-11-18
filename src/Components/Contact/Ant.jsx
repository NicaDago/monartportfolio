import React from 'react';
import styled from 'styled-components'

function Ant() {
    return (
        <AntStyled>
                <div class="canvas">
                    <div class="background">
                        <div class="ant-container ant">
                            <div className= "flag-container">
                            <div class="flag-pointer">
                                <span class="flag">Thank You For Stopping By</span>
                            </div>
                            </div>
                            <div class="body-left"></div>
                            <div class="body-middle"></div>
                            <div class="body-right"></div>
                        </div>
                    </div>
                </div>
        </AntStyled>
    )
}

const AntStyled = styled.div`
height: 20vh;

.canvas{
  position: relative;
  display: block;
  width: 100%;
  height:50px;
  padding-top: 7rem;
}

.background {
  position: absolute;
  width: 100%;
  height: 50%;
  animation: walk 10s infinite linear;
}

/* Slow down the animation when the ants have to travel further */
@media only screen and (min-width: 600px) {
  .background {
    animation: walk 10s infinite linear;
  }
}

@media only screen and (min-width: 900px) {
  .background {
    animation: walk 13s infinite linear;
  }
}

@keyframes walk {
  0% {
    transform: translateX(300px);
  }
  
  100% {
    transform: translateX(-100%);
  }
}

/* Convenience class to wrap all ant elements */
.ant-container{
  position: absolute;
  bottom: -5px;
  width: 300px;
  height: 60px;
  padding-right: 50px;
}

.ant-container.ant {
  left: calc(100% - 300px);
  transform: translateX(-100%);
}

/* Head */
.body-left {
  position: absolute;
  width: 20px;
  height: 20px;
  background: var(--ant-color);
  border-radius: 50%;
  bottom: 17px;
  right: 60px;
}

/* Feeler left */
.body-left::before {
  content: '';
  position: absolute;
  top: -8px;
  height: 10px;
  width: 5px;
  border: 1px solid var(--ant-color);
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-radius: 40%;
}

/* Feeler left */
.body-left::after {
  content: '';
  position: absolute;
  left: 10px;
  top: -8px;
  height: 10px;
  width: 5px;
  border: 1px solid var(--ant-color);
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 40%;
}

.body-middle {
  position: absolute;
  bottom: 10px;
  right: 40px;
  background: var(--ant-color);
  border-radius: 50%;
  width: 25px;
  height: 20px;
}

/* Middle leg */
.body-middle::after {
  content: '';
  position: absolute;
  bottom: -12px;
  left: 10px;
  height: 15px;
  width: 15px;
  border: 2px solid var(--ant-color);
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-radius: 50%;
  animation: middleLegMove 0.25s infinite;
}

@keyframes middleLegMove {
  0% {
    transform: translateY(-5px);
  }
  
  50% {
    transform: translateY(0)
  }
  
  100% {
    transform: translateY(-5px);
  }
}

/* Front leg */
.body-middle::before {
  content: '';
  position: absolute;
  bottom: -8px;
  left: -15px;
  height: 15px;
  width: 15px;
  border: 2px solid var(--ant-color);
  border-left-color: transparent;
  border-bottom-color: transparent;
  border-top-color: transparent;
  border-radius: 40%;
  transform: rotate(20deg);
  animation: frontLegMove 0.25s infinite;
}

@keyframes frontLegMove {
  0% {
    transform: rotate(20deg);
  }
  
  50% {
    transform: rotate(20deg) translateY(-5px);
  }
  
  100% {
    transform: rotate(20deg);
  }
}

.body-right {
  position: absolute;
  bottom: 10px;
  right: 15px;
  width: 30px;
  height: 20px;
  background: var(--ant-color);
  border-radius: 50%;
  transform: rotate(-10deg);
}

/* Back leg */
.body-right::before {
  content: '';
  position: absolute;
  top: 10px;
  right: -5px;
  height: 20px;
  width: 25px;
  border: 2px solid var(--ant-color);
  border-left: none;
  border-bottom: none;
  transform: skew(0deg, -40deg) rotate(25deg);
  animation: backLegMove 0.25s infinite;
}

@keyframes backLegMove {
  0% {
    transform: skew(0deg, -40deg) rotate(25deg);
  }
  
  50% {
    transform: skew(0deg, -40deg) rotate(25deg) translateY(-3px);
  }
  
  100% {
    transform: skew(0deg, -40deg) rotate(25deg);
  }
}

//---------------------------FLAG------------------------------------------------------
.flag-container{
  position: absolute;
  bottom: 10px;
  width: 200px;
  height: 50px;
  left: 220px;
}

.flag {
  position: relative;
  display: inline;
  background: rgb(248,248,248);
  padding: 6px 10px;
  border-radius: 5px;
  font-weight: 600;
  text-align: left;
}

//arrow
.flag-pointer .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 50%;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-right-color: rgb(248,248,248);
  border-width: 8px;
  pointer-events: none;
}
   
`;

export default Ant;
