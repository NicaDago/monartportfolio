import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h1>{title} <b><span>{span}</span></b></h1>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h1{
        color: var(--main-title);
        text-shadow: var(--main-title-shadow);
        font-family: 'Oswald', sans-serif;
        font-size: 4rem;
        font-weight: 400;
        position: relative;
        padding-top: 2rem;

        @media screen and (max-width:920px){
          font-size: 2.8rem;
    }

        @media screen and (max-width: 496px){
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            font-size: 2rem;
        }
    }
`;

export default Title;
