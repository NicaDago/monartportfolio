import React, { useState } from 'react';
import {MainLayout} from '../Styles/Layouts';
import styled from 'styled-components';
import portfolioData from '../Data/portfolioData';
import Title from '../Components/Title';
import PortfolioButton from '../Components/Portfolio/PortfolioButton';
import PortfolioItems from '../Components/Portfolio/PortfolioItems'

const allButtons = ['All', ...new Set(portfolioData.map(item => item.category))]

function PortfolioPage() {
    const [menuItem, setMenuItems] = useState(portfolioData);
    const [button] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(portfolioData);
            return;
        }

        const filteredData = portfolioData.filter(item => item.category === button);
        setMenuItems(filteredData);
    }
    return (
        <PortfolioPageStyled>
        <MainLayout>
            <Title title={'Portfolio'} id="Portfolio"/>
                <PortfolioButton filter={filter} button={button} />
                <PortfolioItems menuItem={menuItem} />
        </MainLayout>
        </PortfolioPageStyled>
    )
}

const PortfolioPageStyled = styled.div`

`;

export default PortfolioPage;
