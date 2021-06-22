import React from 'react';
import styled from 'styled-components';
import Line from './Line'
import breakpoints from '../breakpoints.js';

import Typography from './Typography';

const SectionContainer = styled.div`
    display: flex;
    padding: 40px 20px 80px 20px;

    @media (max-width: ${breakpoints.sm}) {
        flex-direction: column;
        padding: 40px 20px 40px 20px;
    }
`;

const ContactContainer = styled.div`
    width: 50%;

    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`;

const StyledLine = styled(Line)`
    width: 95%;
    margin-left:0;
`;

function ContactMe() {
    return (
        <SectionContainer>
            <ContactContainer>
                <Typography variant='h4'>AVAILABLE</Typography>

                <StyledLine />
                <Typography margin={'20px'} variant='h6'>Youtube Content</Typography>
                <Typography margin={'20px'} variant='h6'>Instagram Content</Typography>
                <Typography margin={'20px'} variant='h6'>Collaborations</Typography>
                <Typography margin={'20px'} variant='h6'>Sponsorships</Typography>
                <Typography margin={'20px'} variant='h6'>Model Inquires</Typography>

            </ContactContainer>

            <ContactContainer>
                <Typography variant='h4'>CONTACT</Typography>
                <StyledLine />

                <Typography margin={'20px'} variant='h6' highlight={true} link={true}>garcialynncourt@gmail.com</Typography>
                <Typography margin={'20px'} variant='h6' highlight={true} link={true}>@courtneylynngarcia</Typography>
                <Typography margin={'20px'} variant='h6'>Based in Austin, Texas</Typography>
            </ContactContainer>

        </SectionContainer>
    )
}

export default ContactMe
