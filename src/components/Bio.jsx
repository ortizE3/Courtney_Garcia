import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Courtney from '../images/about1.jpg';
import SectionHeader from './SectionHeader';
import Typography from './Typography';
import PlaceHolder from '../images/placeholder.jpg'

const BackgroundContainer = styled.div`
    background-color: black;
    color: white;
    padding: 50px 20px;
    display: flex;
`

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    overflow-x: hidden;
    max-width: 1200px;

    @media (max-width: 760px) {
        flex-direction: column-reverse;
    }
`;

const WordSection = styled.div`
    line-height: 1.5em;
    padding-right: 20px;
    transition-duration: 1s;


    @media (max-width: 760px) {
        width: 100%;
        height: auto;
        padding-right: 0px;
        margin-right: 0px;
        margin-top: 20px;
    }
`;

const BioImage = styled.img`
    height: 500px;

    @media (max-width: 760px) {
        height: 400px;
    }
`;

const PlaceHolderImage = styled.img`
    height: 500px;
    width: 330px;

    @media (max-width: 760px) {
        height: 400px;
        width: 330;
    }
`



function Bio() {

    const [imgLoaded, setImgLoaded] = useState(false)

    useEffect(() => {
        const img = new Image()
        img.src = Courtney
        img.onload = () => setImgLoaded(true)
    }, [])

    return (
        <BackgroundContainer>
            <SectionContainer >
                <WordSection
                >
                    <SectionHeader title='ABOUT' />
                    <Typography variant='b1'>'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'</Typography>
                </WordSection>
                {imgLoaded ?
                    <BioImage
                        src={Courtney}
                        alt="Courtney"
                    /> :
                    <PlaceHolderImage
                        src={PlaceHolder}
                        alt="PlaceHolder"
                    />
                }
            </SectionContainer>
        </BackgroundContainer>
    )
}

export default Bio
