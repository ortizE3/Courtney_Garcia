import React from 'react';
import styled from 'styled-components';
import GravMagazine from '../images/GravMagazine.png';
import ImageHighlight from './ImageHighlight';
import SectionHeader from './SectionHeader';

const ExperienceContainer = styled.div`
    margin: 0px 20px;
    padding-top: 50px;
    overflow-x: hidden;
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
