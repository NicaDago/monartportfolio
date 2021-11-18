import React from "react";
import styled from 'styled-components';
import Sidebar from '../Components/Sidebar/Sidebar';

function SidebarPage() {
    return (
        <SidebarStyled>
            <Sidebar />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`

`;

export default SidebarPage;
