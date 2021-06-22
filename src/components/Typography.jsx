import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const textType = {
    h3: {
        fontSize: '2.7em',
        lineHeight: '1.3em',
    },
    h4: {
        fontSize: '2.125em',
        lineHeight: '1em',

    },
    h5: {
        fontSize: '1.5em',
        lineHeight: '1em',
    },
    h6: {
        fontSize: '1.25em',
        lineHeight: '1em',
    },
    b1: {
        fontSize: '1.2em',
        lineHeight: '1.2em',

    }
};

const StyledTypography = styled.div`
    margin: ${props => props.margin || '0px'};
    color: inherit;
    cursor: ${props => props.link && 'pointer'};
    transition-duration: .5s;
    font-size: ${props => textType[props.variant || 'b1'].fontSize};
    line-height: ${props => textType[props.variant || 'b1'].lineHeight};

    &:hover {
        text-decoration: ${props => props.highlight && 'underline'};
        transform: ${props => props.highlight && 'scale(1.1) translateY(1px)'};
    }
`;


function Typography(props) {

    const theme = useContext(ThemeContext);


    return (
        <StyledTypography
            {...props}
            fontColor={theme.fontColor}
        >
            {props.children}
        </StyledTypography>
    )

}

export default Typography
