import React from "react";
import styled, { keyframes } from 'styled-components';

const GlowContainer = styled.div`
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
`

const glow = keyframes`
    0% {
      box-shadow: 0px 0px 5px 5px white;
    }

    50% {
      box-shadow: 0px 0px 5px 5px black;
    }

    100% {
      box-shadow: 0px 0px 5px 5px white;
    }
`;

const HorizontalGlow = styled.div`
    height: 10px;
    width: 100px;
    background-color: black;
    animation: ${glow} 1s infinite;
    margin: 20px;
`

const LoadingGlow = (props) => {
    return (
        <GlowContainer style={{
            display: props.isLoading ? '' : 'none',
            opacity: props.isLoading ? 1 : 0,

        }}>
            <div>
                <HorizontalGlow style={{ animationDelay: ".1s" }}></HorizontalGlow>
                <HorizontalGlow style={{ animationDelay: ".2s" }}></HorizontalGlow>
                <HorizontalGlow style={{ animationDelay: ".3s" }}></HorizontalGlow>
                <HorizontalGlow style={{ animationDelay: ".4s" }}></HorizontalGlow>
                <HorizontalGlow style={{ animationDelay: ".5s" }}></HorizontalGlow>
                <HorizontalGlow style={{ animationDelay: ".6s" }}></HorizontalGlow>
            </div>
        </GlowContainer>
    );
};

export default LoadingGlow;
