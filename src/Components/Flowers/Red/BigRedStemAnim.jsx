import React from 'react' 
import styled from 'styled-components';

function AboutTallFlowerRed() {
    return(
        <AboutTallFlowerRedStyled >
         <div class="container">
  <div class="flower">
    <div class="flower-petal petal-2">
    </div>
    <div class="flower-petal petal-3">
    </div>
    <div class="flower-petal petal-4">
    </div>
    <div class="flower-petal petal-5">
    </div>
    <div class="flower-petal petal-6">
    </div>
    <div class="flower-petal petal-7">
    </div>
    <div class="flower-petal petal-8">
    </div>
    <div class="flower-petal petal-9">
    </div>
    <div class="flower-center">
    </div>
  </div>

  <div class="flower-stem">
    <div class="stick">
    </div>
    <div class="leaves">
      <div class="leaf leaf-1">
      </div>
      <div class="leaf leaf-2">
      </div>
    </div>
  </div>
</div>
        </AboutTallFlowerRedStyled>
    )
}

const AboutTallFlowerRedStyled = styled.div`
.container {
  position: relative;
  left: -40%;
  top: -15%;
}

.flower {
  position: relative;
  height: 180px;
  width: 180px;
  margin: 10px auto;
  animation: flower 10s linear infinite;
}

@keyframes flower {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

.flower-petal {
  background-color: rgba(255, 0, 128, 0.26);
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  
}

.petal-1 {
  left: 0;
}

.petal-2 {
  top: 0;
}

.petal-3 {
  right: 0;
}

.petal-4 {
  bottom: 0;
  right: 0;
}

.petal-5 {
  bottom: 0;
  left: 0;
}

.petal-6 {
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.petal-7 {
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
}

.petal-8 {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.petal-9 {
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
}

.flower-center {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  background-color: #fefe3ef0;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  box-shadow: 0 0 5px 10px rgba(255, 118, 26, .7);
  animation: center 6s linear infinite;
}

@keyframes center {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

.flower-stem {
  height: 200px;
  position: relative;
  margin-left: 120px;
}

.stick {
  position: absolute;
  left: 30%;
  margin-left: -1.5px;
  width: 3px;
  height: 200px;
  background-color: rgb(190, 231, 93);
  top: 205px;
}

.leaves {
  position: absolute;
  height: 150px;
  width: 150px;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
 
}

.leaf {
  position: absolute;
  width: 73px;
  height: 100px;
  background-color: rgb(190, 231, 93);
  bottom: 0;
}

.leaf-1 {
  border-top-right-radius: 100%;
  border-bottom-left-radius: 70%;
  left: -8px;
  transform: rotate(-22deg) translateY(12px) translateX(-20px);
  top: 240px;
  animation: leaf1 6s linear infinite;
}

@keyframes leaf1 {
                0%{ transform: rotate(-20deg) translateY(12px) translateX(-20px)}
                25%{ transform: rotate(-10deg) translateY(10px) translateX(-10px)}
                50%{ transform: rotate(-5deg) translateY(5px) translateX(-5px)}
                75%{ transform: rotate(-10deg) translateY(10px) translateX(-10px)}
                100%{ transform: rotate(-20deg) translateY(12px) translateX(-20px)}
                    }

.leaf-2 {
  right: 10px;
  border-top-left-radius: 100%;
  border-bottom-right-radius: 70%;
  top: 240px;
  animation: leaf2 6s linear infinite;
}

@keyframes leaf2 {
                0%{ transform: rotate(20deg) translateY(20px) translateX(20px)}
                25%{ transform: rotate(15deg) translateY(15px) translateX(15px)}
                50%{ transform: rotate(10deg) translateY(10px) translateX(10px)}
                75%{ transform: rotate(15deg) translateY(15px) translateX(15px)}
                100%{ transform: rotate(20deg) translateY(20px) translateX(20px)}
                    }

* {
  box-sizing: border-box;
} 


@media screen and (max-width:810px){
  visibility: hidden;
}
   `;

export default AboutTallFlowerRed;
