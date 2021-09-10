import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import Courtney from '../images/about1.jpg';
import CourtneySecond from '../images/about2.jpg';
import { useOnScreen } from '../Hooks/hooks'
import SectionHeader from './SectionHeader';
import Typography from './Typography';

const BackgroundContainer = styled.div`
    background-color: black;
    color: white;
    padding: 50px 20px;
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
    transform: ${props => (props.isVisible || props.moveCounter > 0) ? 'translateX(0%)' : 'translateX(-100vw)'};


    @media (max-width: 760px) {
        width: 100%;
        height: auto;
        padding-right: 0px;
        margin-right: 0px;
        margin-top: 20px;
    }
`;

const Image = styled.img`
    height: 500px;
    transition-duration: 1s;
    transform: ${props => (props.isVisible || props.moveCounter > 0) ? 'translateX(0%)' : 'translateX(100vw)'};

    @media (max-width: 760px) {
        height: 400px;
    }
`;



function Bio() {

    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const [moveCounter, setMoveCounter] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setMoveCounter(moveCounter => moveCounter + 1)
        }
    }, [isVisible]);

    return (
        <BackgroundContainer>
            <SectionContainer ref={ref}>
                <WordSection
                    isVisible={isVisible}
                    moveCounter={moveCounter}
                >
                    <SectionHeader title='ABOUT' />
                    <Typography variant='b1'>'lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'</Typography>
                </WordSection>

                <Image
                    src={Courtney}
                    alt="Courtney"
                    isVisible={isVisible}
                    moveCounter={moveCounter}
                    onMouseEnter={e => (e.currentTarget.src = CourtneySecond)}
                    onMouseLeave={e => (e.currentTarget.src = Courtney)}
                />
            </SectionContainer>
        </BackgroundContainer>
    )
}

export default Bio