import React, { useState } from 'react';
import {MainLayout} from '../Styles/Layouts';
import styled from 'styled-components';
import Blog from '../Components/Blog/Blog';
import blogData from '../Data/blogData';
import Title from '../Components/Title';

function BlogPage() {
    const [menuItem] = useState(blogData);
    return (
        <BlogPageStyled>
            <MainLayout>
                <Title title={'Blog'} />
                <Blog menuItem={menuItem} />
            </MainLayout>
        </BlogPageStyled>
    )
}

const BlogPageStyled = styled.div`

`;

export default BlogPage;
