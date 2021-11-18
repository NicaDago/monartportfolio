import React from 'react';
import styled from 'styled-components';
import ContactPaper from '../Components/Contact/ContactPaper';

function ContactPage() {
    return (
        <ContactPageStyled >
             <ContactPaper />
        </ContactPageStyled>
    )
}

const ContactPageStyled = styled.section`
height: 130vh;

@media screen and (max-width:660px){
    height: 100vh;
}
/* 
@media screen and (max-width:810px){
    height: 70vh;
} */

`;

export default ContactPage;
