import React from 'react';
import HeroImg from '../images/Hero.jpg'
import styled from 'styled-components';
import Typography from './Typography';
import { BsChevronDown } from 'react-icons/bs'

const Image = styled.div`
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow-x: hidden;
    background-position: 50% 50%;
    position: relative;
`

const ImageContainer = styled.div`
    overflow-x: hidden;
    max-width: none;
    color: white;
`;

const Title = styled.div`
    position: absolute;
    top: 40%;
    left: 20%;
`;

const ViewMore = styled.div`
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%);
`;

const DownArrow = styled(BsChevronDown)`
    padding: 20px;
    background-color: #f0f8ff42;
    border-radius: 100px;
    color: white;
    font-size: 1.5em;
    transition-duration: .5s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
        font-size: 1.6em;
    }
`

function MainPicture() {
    return (
        <ImageContainer>
            <Image>
                <Title>
                    <Typography variant='h3'>COURTNEY GARCIA</Typography>
                    <Typography>Content Creator and Model</Typography>
                </Title>
            </Image>
        </ImageContainer>
    )
}

export default MainPicture
