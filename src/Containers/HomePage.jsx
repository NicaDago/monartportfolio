import React from 'react' 
import styled from 'styled-components';
import LandingPage from './LandingPage';
import PortfolioPage from './PortfolioPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import EducationPage from './EducationPage';
import ContactPage from './ContactPage';
import FooterPage from './FooterPage';
import FlowerStringPage from './FlowerStringPage';

function HomePage() {
    return(
        <HomePageStyled>
            <LandingPage />
            <FlowerStringPage />
            <PortfolioPage />
            <FlowerStringPage />
            <AboutPage />
            <FlowerStringPage />
            <SkillsPage />
            <FlowerStringPage />
            <EducationPage />
            <FlowerStringPage />
            <ContactPage />
            <FlowerStringPage />
            <FooterPage />
        </HomePageStyled>
    )
}

const HomePageStyled = styled.div`
    
`;

export default HomePage;
