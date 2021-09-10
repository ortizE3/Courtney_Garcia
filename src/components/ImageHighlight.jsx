import React, { useRef, useState, useEffect } from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { useOnScreen } from '../Hooks/hooks'

const ImageContainer = styled.div`
    text-align: center;
    margin-top: 20px;
    position: relative;
    display: flex;
    color: 'black';
`;

const Image = styled.img`
    width: 100%;
    transition-duration: 1s;
    transform: ${props => (props.isVisible || props.moveCounter > 0) ? 'translateX(0%)' : 'translateX(-100vh)'};
`;

const Details = styled.div`
    position: absolute;
    position: absolute;
    text-align: left;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 999;
    transform: ${props => (props.isVisible || props.moveCounter > 0) ? 'translateX(0%)' : 'translateX(-100vh)'};

    transition-duration: 1s;

    &:hover {
        opacity: 7;
        background-color: #b5acac63;
    }
`;

const StyledDescription = styled(Typography)`
    position: absolute;
    top: 10%;
    left: 5%;
`;

function ImageHighlight(props) {

    const ref = useRef();
    const isVisible = useOnScreen(ref);
    const [moveCounter, setMoveCounter] = useState(0);

    useEffect(() => {
        if (isVisible) {
            setMoveCounter(moveCounter => moveCounter + 1)
        }
    }, [isVisible])

    return (
        <ImageContainer
            ref={ref}
        >
            <Details
                isVisible={isVisible}
                moveCounter={moveCounter}
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
                moveCounter={moveCounter}
                src={props.imgUrl}
                alt="Grav Magazine" />

        </ImageContainer>
    )
}

export default ImageHighlight
