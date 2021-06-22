import React, { useContext, useRef } from 'react';
import Typography from './Typography';
import { ToggleContext } from '../ToggleContext';
import styled from 'styled-components';
import { useOnScreen } from '../Hooks/hooks'

const ImageContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    position: relative;
    display: flex;
    color:  ${props => props.mode ? 'white' : 'black'};
`;

const Image = styled.img`
    width: 100%;
    transition-duration: 1s;
    transform: ${props => props.isVisible ? 'translateY(0%)' : 'translateY(100vh)'};
`;

const Details = styled.div`
    position: absolute;
    position: absolute;
    text-align: left;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 999;
    transform: ${props => props.isVisible ? 'translateY(0%)' : 'translateY(100vh)'};


    transition-duration: 1s;

    &:hover {
        opacity: 7;
        background-color: ${props => !props.mode ? '#f1efe985' : '#2222227e'};
    }
`;

const StyledDescription = styled(Typography)`
    &&& {
        position: absolute;
        top: 10%;
        left: 5%;
    }
`;

function ImageHighlight(props) {

    const { darkMode } = useContext(ToggleContext);

    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <ImageContainer
            mode={darkMode}
            ref={ref}
        >
            <Details
                mode={darkMode}
                isVisible={isVisible}
            >
                <StyledDescription>
                    <Typography
                        variant='h4'
                    >
                        {props.header}
                    </Typography>
                    <Typography
                        variant='h6'
                    >
                        {props.description}
                    </Typography>
                </StyledDescription>

            </Details>
            <Image
                isVisible={isVisible}
                src={props.imgUrl}
                alt="Grav Magazine" />

        </ImageContainer>
    )
}

export default ImageHighlight
