import React from 'react' 
import styled from 'styled-components';

function BigOrangeAnim() {
    return(
        <BigOrangeAnimStyled >
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
        </BigOrangeAnimStyled>
    )
}

const BigOrangeAnimStyled = styled.div`
.container {
    margin-top: 50px;
    margin-left: 50px;
    margin-bottom: 0;
}

* {
  box-sizing: border-box;
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

.flower:hover .petal {
    opacity: 2;
}

.petal {
  opacity: 0.33;
  background-color: #dd901c;
  height: 100px;
  width: 100px;
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
  top: 50%;
  left: 50%;
  height: 50px;
  width: 50px;
  background-color: #941d1d;
  margin-left: -25px;
  margin-top: -25px;
  border-radius: 50%;
  box-shadow: 0 0 5px 10px #e78f0b;
}

@media screen and (max-width:810px){
  visibility: hidden;
}
   `;

export default BigOrangeAnim;
