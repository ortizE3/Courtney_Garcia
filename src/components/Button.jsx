import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 6px 16px;
    border-radius: 5px;
    border: none;
    margin: 5px;
    background-color: ${props => props.color || 'transparent'};
    text-transform: uppercase;

    color: inherit;
    font-family: inherit;
    font-weight: inherit;
    font-style: inherit;
    font-size: inherit;
    

    &:hover {
        background-color: ${props => props.hover || 'transparent'};
    }
    `;

function Button(props) {

    return (
        <StyledButton
            color={props.color}
            hover={props.hover}
        >
            {props.children}
        </StyledButton>
    )
}

export default Button
