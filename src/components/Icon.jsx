import React from 'react';
import styled from 'styled-components';

const StyledIcon = styled.div`
    margin-left: 12px;
    font-size: 1.5em;
    transition-duration: .5s;
    cursor: pointer;

    &:hover {
        transform: scale(1.2) translateY(1px);
    }
`;

function Icon(props) {
    return (
        <StyledIcon className={props.className}>
            {props.children}
        </StyledIcon>
    )
}

export default Icon
