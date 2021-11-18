import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled >
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled >
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    font-family: 'Oswald', sans-serif;
    p{
        padding-right: 1rem;
        padding-top: 2.5rem;
        color: var(--main-title);
        svg{
            font-size: 5rem;
        }
    }
    h3{
        font-size: 2rem;
    }

    //---------------------Small Title Media Queries ---------------
    @media screen and (max-width: 660px) {

        p{
        svg{
            font-size: 3rem;
        }
    }

    h3{
        font-size: 0.5rem;
    }

    }
`;

export default SmallTitle
