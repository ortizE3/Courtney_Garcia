import React, { useContext } from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import { ToggleContext } from '../ToggleContext';

const FooterContainer = styled.div`
    padding: 40px 20px 40px 20px;
    text-align: left;
    text-transform: uppercase;
    color: white;
    background-color: ${props => props.mode === 'true' ? '#3b3b3b' : 'black'};
`;

const EmailContainer = styled(Typography)`
    text-transform: lowercase;
    font-size: 1.1rem;
    cursor: pointer;
    display: inline-block;
`;

const SpaceTypography = styled(Typography)`
    margin-top: 25px;
`;

function Footer() {

    const { darkMode } = useContext(ToggleContext);

    return (
        <FooterContainer
            mode={darkMode}
        >
            <Typography variant='b2'>Thank you for visiting</Typography>
            <SpaceTypography variant='b2'>Developed by Ethan Ortiz</SpaceTypography>
            <SpaceTypography variant='b2'>For business inquiries <EmailContainer
                onClick={() => {
                    window.location.href = "mailto:ortizethan3@gmail.com";
                }}
            >
                ortizethan3@gmail.com
            </EmailContainer>
            </SpaceTypography>
        </FooterContainer>
    )
}

export default Footer
