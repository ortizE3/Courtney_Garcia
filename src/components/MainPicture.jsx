import React, { useState, useEffect } from 'react';
import HeroImg from '../images/front2.jpg'
import styled from 'styled-components';
import Typography from './Typography';
import Loading from './Loading';

const MainImage = styled.div`
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-position: 25% 50%;
    position: relative;
    overflow-x: hidden;
`

const ImageContainer = styled.div`
    max-width: none;
    color: white;
`;

const Title = styled.div`
    position: absolute;
    top: 40%;
    left: 20%;

    @media (max-width: 600px) {
        left: 10%;
    }

    @media (max-width: 450px) {
        left: 5%;
    }
`;

function MainPicture() {

    const [imgLoaded, setImgLoaded] = useState(true)

    useEffect(() => {
        const img = new Image()
        img.src = HeroImg
        img.onload = () => setImgLoaded(false)
    }, [])


    return (
        <ImageContainer>
            <Loading isLoading={imgLoaded} />
            <MainImage>
                <Title>
                    <Typography variant='h3'>COURTNEY GARCIA</Typography>
                    <Typography>CONTENT CREATOR AND MODEL</Typography>
                </Title>
            </MainImage>
        </ImageContainer>
    )
}

export default MainPicture
