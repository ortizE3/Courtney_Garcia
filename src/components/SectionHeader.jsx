import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import breakpoints from '../breakpoints';

const SectionHeaderContainer = styled.div`
    overflow-y: hidden;

    @media (max-width: ${breakpoints.sm}) {
        padding-right: 0px;
        margin-right: 0px;
    }
`

function SectionHeader(props) {
    return (
        <SectionHeaderContainer>
            <Typography
                variant='h3'
                fontColor
            >{props.title}
            </Typography>
        </SectionHeaderContainer>
    )
}

export default SectionHeader
