import React from 'react';
import ExperienceSkills from '../Components/Skills/ExperienceSkills';
import styled from 'styled-components';

function SkillsPage() {
    return (
        <SkillsPageStyled>
            <ExperienceSkills />
        </SkillsPageStyled>
    )
}

const SkillsPageStyled = styled.div`
height: 140vh;
padding: 3rem;

/* @media screen and (min-width: 800px){
    height: 80vh;
} */

/* @media screen and (max-width: 900px){
    height: 80vh;
} */
`;

export default SkillsPage;
