import React from 'react'
import Typography from './Typography';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';

const SectionContainer = styled.div`
    padding: 0px 20px 0px 20px;
    margin-top: 30px;
`

function Collabs() {
    return (
        <SectionContainer>
            <SectionHeader title='COLLABS' />
            <Typography margin={'20px'} variant='h6'>BARE FOOT</Typography>
            <Typography margin={'20px'} variant='h6'>TROPHY SKIN</Typography>
            <Typography margin={'20px'} variant='h6'>HYLETE</Typography>
            <Typography margin={'20px'} variant='h6'>GENIUS GOURNMET</Typography>

        </SectionContainer>
    )
}

export default Collabs
