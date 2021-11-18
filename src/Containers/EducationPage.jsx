import React from 'react'
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import Education from '../Components/Education/Education';

function EducationPage() {
    return (
        <EducationPageStyled>
          <Education />
        </EducationPageStyled>
    )
}

const EducationPageStyled = styled.div`
 
`;

export default EducationPage;
