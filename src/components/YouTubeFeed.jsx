import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import SectionHeader from './SectionHeader';
import breakpoints from '../breakpoints.js';
import { useOnScreen } from '../Hooks/hooks'


const SectionContainer = styled.div`
    padding: 0px 20px 0px 20px;
    overflow-x: hidden;
    margin-top: 30px;

`;

const VideoContainer = styled.div`
    overflow-x: auto;
    white-space: nowrap;
    padding: 20px 0px 20px 0px;
    transition-duration: 1s;
    transform: ${props => (props.isVisible || props.moveCounter > 0) ? 'translateX(0%)' : 'translateX(100vw)'};

    &::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;
`;

const Video = styled.iframe`
    display: inline-block;
    transition-duration: .5s;
    margin-right: 10px;
    border-radius: 20px;
    transition-duration: 1s;

    &:hover {
        transform: translateY(-15px);
    }

    @media (max-width: ${breakpoints.sm}) {
        height: 250px;
    }

    @media (max-width: ${400}) {
        height: 0px;
    }
`;

function YouTubeFeed() {

    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const [moveCounter, setMoveCounter] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setMoveCounter(moveCounter + 1)
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
            >
                <Video frameBorder="0" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/xh8W8G-ZNLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Video frameBorder="0" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/xh8W8G-ZNLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
                <Video frameBorder="0" allowFullScreen width="560" height="315" src="https://www.youtube.com/embed/xh8W8G-ZNLI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></Video>
            </VideoContainer>

        </SectionContainer>
    )
}

export default YouTubeFeed
