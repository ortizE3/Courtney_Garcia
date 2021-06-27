import React from 'react';
import Typography from '../components/Typography';
import styled from 'styled-components';
import Gray from '../images/Gray.png'
import CG from '../images/cg.svg'

const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 40%;
    justify-content: center;
    text-align: center;
    position: relative;
    background-image: url(${Gray});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
`;

const Image = styled.img`
    height: 50vh;
    position: absolute;
    left: 20%;
`;

function Shop() {
    return (
        <ShopContainer>
            <Image src={CG} alt='courtney garcia logo' />
        </ShopContainer>
    )
}

export default Shop
