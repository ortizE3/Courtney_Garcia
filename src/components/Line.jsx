import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const StyledLine = styled.hr`
    border-color: ${props => props.borderColor};
    border-style: solid;
`;

function Line({ className }) {

    const theme = useContext(ThemeContext);

    return (
        <StyledLine className={className} borderColor={theme.secondary}></StyledLine>
    )
}

export default Line
