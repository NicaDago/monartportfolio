import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../../Styles/Layouts';
import Title from '../Title';
import ExperienceSkillsBar from './ExperienceSkillsBar';

function ExperienceSkills() {
    return (
        <ExperienceSkillsStyled>
                <Title title={'Skills'}  />
                <InnerLayout>
                    <div className="skills">
                        <ExperienceSkillsBar 
                            title={'HTML5'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ExperienceSkillsBar 
                            title={'CSS3'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ExperienceSkillsBar 
                            title={'JAVASCRIPT'}
                            width={'30%'}
                            text={'30%'}
                        />
                        <ExperienceSkillsBar 
                            title={'REACT'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ExperienceSkillsBar 
                            title={'PHOTOSHOP'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ExperienceSkillsBar 
                            title={'ILLUSTRATOR'}
                            width={'50%'}
                            text={'50%'}
                        />
                        <ExperienceSkillsBar 
                            title={'INDESIGN'}
                            width={'90%'}
                            text={'90%'}
                        />
                         <ExperienceSkillsBar 
                            title={'XD'}
                            width={'60%'}
                            text={'60%'}
                        />
                    </div>
                </InnerLayout>
        </ExperienceSkillsStyled>
    )
}

const ExperienceSkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default ExperienceSkills;
