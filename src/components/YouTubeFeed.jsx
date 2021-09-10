import React, { useRef, useEffect, useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import SectionHeader from './SectionHeader';
import breakpoints from '../breakpoints.js';
import { useOnScreen } from '../Hooks/hooks'

const SectionContainer = styled.div`
    padding: 50px 20px;
    overflow-x: hidden;
`;

const VideoContainer = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    padding: 20px 0px;
    transition-duration: 1s;
    transform: ${props => (props.isVisible || props.moveCounter > 0) ? 'translateX(0%)' : 'translateX(100vw)'};

    &::-webkit-scrollbar {
        height: 7px;         
    }

    &::-webkit-scrollbar-thumb {
        background-color: black;
    }
`;

const Video = styled.iframe`
    display: inline-block;
    transition-duration: .5s;
    margin-right: 10px;
    transition-duration: 1s;

    &:hover {
        transform: translateY(-15px);
    }

    @media (max-width: ${breakpoints.sm}) {
        height: 250px;
        width: 350px;
    }

    @media (max-width: 400px) {
        height: 200px;
        width: 300px;
    }
`;

function YouTubeFeed() {

    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const [moveCounter, setMoveCounter] = useState(0);
    const theme = useContext(ThemeContext);

    useEffect(() => {
        if (isVisible) {
            setMoveCounter(moveCounter => moveCounter + 1)
        }
    }, [isVisible]);



    return (

        <SectionContainer
            ref={ref}
        >
            <SectionHeader
                title='CHANNEL'
                isVisible={isVisible}
            />

            <VideoContainer
                isVisible={isVisible}
                moveCounter={moveCounter}
                theme={theme}
            >
                <Video frameBorder="0" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/xh8W8G-ZNLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Video frameBorder="0" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/esQZ5V-wDjY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Video frameBorder="0" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/w0yvZhLjU4I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
            </VideoContainer>

        </SectionContainer>
    )
}

export default YouTubeFeed
