import React from 'react' 
import styled from 'styled-components';

function SmallBlueAnim() {
    return(
        <SmallBlueAnimStyled >
         <div class="container">
  <div class="flower">
    <div class="petal p-2">
    </div>
    <div class="petal p-3">
    </div>
    <div class="petal p-4">
    </div>
    <div class="petal p-5">
    </div>
    <div class="petal p-6">
    </div>
    <div class="petal p-7">
    </div>
    <div class="petal p-8">
    </div>
    <div class="petal p-9">
    </div>
    <div class="flower-center">
    </div>
  </div>
</div>
        </SmallBlueAnimStyled>
    )
}

const SmallBlueAnimStyled = styled.div`
.container {
  position: relative;
    margin-top: 20px;
    margin-right: 125px;
}

* {
  box-sizing: border-box;
} 

.flower {
  position: relative;
  height: 90px;
  width: 90px;
  margin: 10px auto;
}

.flower:hover .petal {
    opacity: 1;
}

.petal {
  opacity: 0.50;
  background-color: #941d1d;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
}

.p-1 {
  left: 0;
}

.p-2 {
  top: 0;
}

.p-3 {
  right: 0;
}

.p-4 {
  bottom: 0;
  right: 0;
}

.p-5 {
  bottom: 0;
  left: 0;
}

.p-6 {
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.p-7 {
  right: -10px;
  top: 50%;
  transform: translateY(-50%);
}

.p-8 {
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.p-9 {
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
}

.flower-center {
  position: absolute;
  top: 91%;
  left: 91%;
  height: 25px;
  width: 25px;
  background-color: #d37013;
  margin-left: -50px;
  margin-top: -50px;
  border-radius: 50%;
  box-shadow: 0 0 3px 7px #6d3b03dd;
}
   `;

export default SmallBlueAnim;
