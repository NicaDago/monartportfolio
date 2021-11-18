import React from 'react';
import styled from 'styled-components';

function PortfolioButton({filter, button}) {
    return (
        <PortfolioButtonsStyled>
            {
                button.map((but, i) =>{
                    return <PortfolioButtonStyled key={i} onClick={() => filter(but)}>
                        {but}
                    </PortfolioButtonStyled>
                })
            }
        </PortfolioButtonsStyled>
    )
}

const PortfolioButtonStyled = styled.button`
    outline: none;
    border: none;
    border-radius: 8px;
    background-color: var(--background-light-color-2);
    text-shadow: var(--small-title-shadow);
    padding: .4rem 2rem;
    font-family: 'Oswald', sans-serif;
    font-size: 1.5rem;
    color: var(--main-title);
    cursor: pointer;
    transition: all .4s ease-in-out;
    margin-top: 0;
    margin-bottom: .6rem;
    &:active ,&:focus{
        background-color: var(--primary-color);
    }
    &:hover{
        background-color: var(--main-title);
        color: var(--small-title-hover);
    }

    &:not(:last-child){
        margin-right: .6rem;
    }

    
    //-------------------media queries----------------------


    @media screen and (max-width:920px){
        padding: 1rem;
        margin-bottom: 0;
        font-size: 1rem;
    }


    @media screen and (max-width:670px){
        padding: 0;
        margin-bottom: 0;
        font-size: 1rem;
    }
`;
const PortfolioButtonsStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 70%;
    margin: 2.4rem auto;

`;
export default PortfolioButton;
