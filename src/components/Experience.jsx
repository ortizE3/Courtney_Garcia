import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import GravMagazine from '../images/GravMagazine.png';
import ImageHighlight from './ImageHighlight';
import Line from './Line';
import SectionHeader from './SectionHeader';

const ExperienceContainer = styled.div`
    margin: 0px 20px 0px 20px;
    margin-top: 30px;
`;

function Experience() {

    return (
        <div>
            <ExperienceContainer>
                <SectionHeader title='MODELING' />
            </ExperienceContainer>
            <ImageHighlight
                imgUrl={GravMagazine}
                header={'GRAV'}
                description={'2021 Spring Catalog Photoshoot'}
            />
        </div>
    )
}

export default Experience
