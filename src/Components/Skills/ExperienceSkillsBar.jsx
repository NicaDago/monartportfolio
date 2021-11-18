import React from 'react'
import styled from 'styled-components';

function ExperienceSkillsBar({title, width, text}) {
    return (
        <ExperienceSkillsBarStyled>
            <h6>{title}</h6>
            <div className="skills-bar">
                <p>{text}</p>
                <div className="skillsB">
                    <span style={{width: width}}></span>
                </div>
            </div>
        </ExperienceSkillsBarStyled>
    )
}

const ExperienceSkillsBarStyled = styled.div`
      h6{
        font-family: 'Oswald', sans-serif;
        font-size: 2rem;
        color: #502345d5;
        text-shadow: var(--main-title-shadow);
        }
    
    .skills-bar{
        display: flex;
        align-items: center;

        p{
            padding-right: 1.1rem;
            color: #964682d6;
        }

        .skillsB{
            position: relative;
            width: 100%;
	        height: 10px;
            padding: 6px;
            background: rgba(0, 0, 0, 0.25);  
            border-radius: 30px;
	        border:1px solid #731eb8;
	        text-align: center;
	        color: black;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25), 0 1px rgba(255, 255, 255, 0.08);
            span{ 
                position: absolute;
	            left: 0%;
	            top: 0%;
                bottom: 0;
	            max-width: 100%;
	            height: 100%;
                border-radius: 30px;
                background-color: #964682d6;
            }
            span:after {
                content: '';
	            position: absolute;
	            left: 0%;
	            top: 0%;
	            width: 100%;
	            height: 100%;
                border-radius: 30px;
	            background:linear-gradient(-45deg,rgba(255,255,255,0.4) 33.33%,transparent 33.33%,transparent 66.66%,rgba(255,255,255,0.4) 66.66%);
	            background-size: 30px 15px;
	            animation: progressBarStrip 1s linear infinite;
            } 
        }
    }

@keyframes progressBarStrip{
	0%{background-position: 0 15px;}
	100%{background-position: 30px 15px;}
}
`;

export default ExperienceSkillsBar;
