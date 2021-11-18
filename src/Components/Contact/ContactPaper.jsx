import React from 'react';
import styled from 'styled-components';


function ContactPaper() {
    return (
        <ContactPaperStyled>
            <div class="container">
                <div class="topBox">
                  <div>
                    <h1>Contact Me</h1>
                    <div className="line"></div>
                    <p>I look forward to hearing from you!</p>
                    <p><i class="fas fa-map-marker-alt"></i> I am based in London, UK</p>
                    </div>
                    <div className="email"><i class="fas fa-envelope-square"></i> monart.uk@gmail.com</div>
                </div>
            <ul class="strips" role="list">
                <li class="contact" role="listitem">
                    <div class="link">
                        <i class="fab fa-linkedin" aria-hidden="true"></i>
                            <a href="https://www.linkedin.com/in/monica-d-agosto-aa340813/" aria-label="LinkedIn profile" target="_blank">-@MonicaD</a>
                    </div>
                </li>

                <li class="contact" role="listitem">
                    <div class="link">
                        <i class="fab fa-github" aria-hidden="true"></i>
                            <a href="https://github.com/NicaDago" aria-label="GitHub profile" target="_blank">-@NicaDago</a>
                    </div>
                </li>

                <li class="contact" role="listitem">
                    <div class="link">
                        <i class="fab fa-codepen" aria-hidden="true"></i>
                            <a href="https://codepen.io/NicaDago" aria-label="CodePen profile" target="_blank">-@NicaDago</a>
                    </div>
                </li>
            </ul>
            </div>
        </ContactPaperStyled>
    )
}


const ContactPaperStyled = styled.div`
height: 110vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  color: #490f0f;
  padding-top: 3rem;

.container{
    margin-top: 5rem;
}

h1 {
  font-size: 2.5rem;
  font-family: 'Dancing Script', cursive; 
}

p{
  font-size: 1.5rem;
  font-family: 'Dancing Script', cursive; 
  margin-top: 25px;
}

.email{
  font-family: sans-serif;
  margin-top: 40px;
  margin-right: 200px;
}

.topBox {
  position: relative;
  padding: 10px;
  width: 25rem;
  height: 15rem;
  background: radial-gradient( ellipse at center, #ffffff, #f3d9be, #a75202); 
  box-shadow: 1px 0 1px #793c03;
  text-align: center;
}

.line {
  height: 2px;
  border: 0;
  background: var(--main-title);
  margin-left: 100px;
  width: 11rem;
  margin-bottom: 20px;
}

.topBox::before {
  content: "";
  position: absolute;
  left: 5px;
  top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--main-title);
  box-shadow: var(--main-title-shadow1);
}

.topBox::after {
  content: "";
  position: absolute;
  right: 5px;
  top: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: var(--main-title);
  box-shadow: var(--main-title-shadow1);
}

.strips {
  display: flex;
  height: 18rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact {
  position: relative;
  width: 100%;
  border-top: 1px dashed black  ;
  box-shadow: 1px 0 1px #793c03;
  transform-origin: center top;
  background-color: #ce8c4e;
}

.link {
  position: absolute;
  display: flex;
  top: 0;
  transform: rotate(90deg);
  transform-origin: top left;
  font-size: 1.5rem;
  margin-left: 5rem;
  margin-top: 5rem;
  align-items: center;
  color: #490f0f; 
}

.link a {
  font-family: sans-serif;
  color: #490f0f;
}

.contact:nth-child(2) {
  transform: skew(-5deg, 0deg);
  background: radial-gradient( ellipse at top, #ffffff, #f3d9be, #a75202); 
}

.contact:nth-child(2)::after,
.contact:nth-child(4)::after {
  content: "";
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
}

.contact:nth-child(1),
.contact:nth-child(3) {
    background: radial-gradient( ellipse at top, #ffffff, #f3d9be, #a75202); 
}

.contact:nth-child(4) {
  transform: skew(-8deg, 0deg);
  background: radial-gradient( ellipse at top, #ffffff, #f3d9be, #a75202); 
}

.contact:nth-child(5) {
  transform: skew(-3deg, 0deg);
  background: radial-gradient( ellipse at top, #ffffff, #f3d9be, #a75202); 
}


//------------------media queries---------------------
@media screen and (max-width:810px){
  /* padding-top: 3rem; */
}
@media screen and (max-width:920px){
  height: 50vh;
  /* padding-top: 1rem; */
  /* padding: 0; */
  /* margin: 0; */
  padding-bottom: -20rem;

  .container{
    margin-top: 2rem;
}

h1 {
  font-size: 1.5rem;
}

p{
  font-size: 1rem;
  margin-top: 25px;
}


.topBox {
  width: 20rem;
}

.line {
  width: 6rem;
}

.link {
  font-size: 1.5rem;
  margin-left: 4rem;
  margin-top: 3rem;
}

.email{
  margin-right: 100px;
}

    }


    @media screen and (max-width:660px){
      /* height: 50vh;
      padding-top: 1rem;
      padding: 0;
      margin: 0;
      padding-bottom: -50rem; */
    }

`;

export default ContactPaper;
