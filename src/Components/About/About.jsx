import React from 'react'
import styled from 'styled-components';
import Title from '../Title';
import BigRedStemAnim from '../Flowers/Red/BigRedStemAnim';

function About() {
    return (
        <AboutStyled>
          <Title title={'About'} />
            <div className="container">
              <div className="flower">
                <BigRedStemAnim />
              </div>
            <div className= "text">
              <p><div className="line"></div><div className="paragraph">I have spent many years in London (UK) NHS IT Departments, first as a trainer and then as a project manager.
            </div></p>
              
            <p> <div className="line"></div><div className="paragraph">I enjoy painting and after a while, working as a project manager became too dry for an artist like me. 
            </div></p>
              
            <p><div className="line"></div><div className="paragraph">At the moment I am exploring Gouache in children illustrations and this website is a 
              reflection of this latest obsession. </div></p>
              
            <p><div className="line"></div><div className="paragraph">I decided to study web design trying to combine my knowledge of 
              IT mixed with art. </div></p>
              
            <p><div className="line"></div><div className="paragraph">If you would like to contact me, please follow the links below.</div></p> 
            </div>
          </div>
        </AboutStyled>
    )
}

const AboutStyled = styled.div`
 height: 120vh;
 display: flex;
 flex-direction: column; 

 .container{
    height: 70vh;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 1;
    margin-top: 3rem;
    margin-bottom: 5rem;
 }

 .flower{
     margin-left: 10rem; 
 }

 .text{
    font-family: 'Dancing Script', cursive;
    margin: 2rem;
    font-weight: 700;
    font-size: 1.5rem;
    text-indent: 50px;
    line-height: 2;  
    margin-top: 3rem;
    margin-bottom: 2rem;
 }

 .line {
  height: 1px;
  border: 0;
  background: black;
  width: 30px;
}

.paragraph{
    margin-top: -2rem;
    margin-bottom: 2rem;
}



//--------------------------tablet-------------------------------

@media screen and (max-width:810px){
  .container{
    height: 30vh;
    display: grid;
    grid-template-columns: 0% 100%;
    grid-template-rows: 1;
    margin-top: 2rem;
    margin-bottom: 0;
 }

}

//--------------------------phone-------------------------------

@media screen and (max-width:810px){
  .text{
    margin: 0;
    font-size: 1rem;
    margin-top: 0;
    margin-bottom: 0;
 }

 .container{
    height: 30vh;
    display: grid;
    grid-template-columns: 0% 100%;
    grid-template-rows: 1;
    margin-top: 2rem;
    margin-bottom: 0;
 }

}

`;

export default About;
