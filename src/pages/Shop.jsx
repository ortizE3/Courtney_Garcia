import React from 'react';
import Typography from '../components/Typography';
import styled from 'styled-components';

const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    justify-content: center;
    text-align: center;
    position: relative;
    top: 175px;
`;

function Shop() {
    return (
        <ShopContainer>
            <Typography variant='h3'>Coming Soon...</Typography>
        </ShopContainer>
    )
}

export default Shop
