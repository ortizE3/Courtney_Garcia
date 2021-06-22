import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import GravMagazine from '../images/GravMagazine.png';
import ImageHighlight from './ImageHighlight';
import Line from './Line';
import SectionHeader from './SectionHeader';

const ExperienceContainer = styled.div`
    padding: 0px 20px 0px 20px;
    margin-top: 30px;
`;

function Experience() {

    return (
        <ExperienceContainer>
            <SectionHeader title='MODELING' />
            <ImageHighlight
                imgUrl={GravMagazine}
                header={'GRAV'}
                description={'2021 Spring Catalog Photoshoot'}
            />
        </ExperienceContainer>
    )
}

export default Experience
