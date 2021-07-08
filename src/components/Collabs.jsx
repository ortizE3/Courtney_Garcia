import React from 'react'
import Typography from './Typography';
import SectionHeader from './SectionHeader';
import styled from 'styled-components';
import ImageCollage from './ImageCollage'

const SectionContainer = styled.div`
    background-color: #a5bdaba8;
    backdrop-filter: blur(3px);
    padding: 20px;
`;

function Collabs() {
    return (
        <React.Fragment>
            <SectionContainer>
                <SectionHeader title='COLLABS' />
                <Typography margin={'20px'} variant='h6'>BAREFOOT SCIENTIST</Typography>
                <Typography margin={'20px'} variant='h6'>TROPHY SKIN</Typography>
                <Typography margin={'20px'} variant='h6'>HYLETE</Typography>
                <Typography margin={'20px'} variant='h6'>MERMADE HAIR</Typography>
                <Typography margin={'20px'} variant='h6'>LUNYA</Typography>
            </SectionContainer>
            <ImageCollage />
        </React.Fragment>

    )
}

export default Collabs
