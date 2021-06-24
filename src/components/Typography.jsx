import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const textType = {
    h3: {
        fontSize: '2.7rem',
        lineHeight: '3rem',
    },
    h4: {
        fontSize: '2.125rem',
        lineHeight: '2rem',

    },
    h5: {
        fontSize: '1.5rem',
        lineHeight: '2rem',
    },
    h6: {
        fontSize: '1.25rem',
        lineHeight: '2rem',
    },
    b1: {
        fontSize: '1.2rem',
        lineHeight: '2rem',

    },
    b2: {
        fontSize: '.8rem',
        lineHeight: '2rem',
    }
};

const StyledTypography = styled.div`
    margin: ${props => props.margin || '0px'};
    color: inherit;
    cursor: ${props => props.link && 'pointer'};
    transition-duration: .5s;
    font-size: ${props => textType[props.variant || 'b1'].fontSize};
    line-height: ${props => textType[props.variant || 'b1'].lineHeight};
    font-weight: ${props => props.fontWeight || 'inherit'};

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
