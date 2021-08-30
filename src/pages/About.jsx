import React from 'react'
import Hero from '../components/Hero';
import YouTubeFeed from '../components/YouTubeFeed';
import Experience from '../components/Experience';
import ContactMe from '../components/ContactMe';
import styled from 'styled-components';
import MainPicture from '../components/MainPicture';
import Collabs from '../components/Collabs';
import Typography from '../components/Typography';

const MainContainer = styled.div`
    max-width: 1200px;
    margin: auto;
`

const CourtneyContainer = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    margin-bottom: 10vh;
`;

const CenterContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    align-items: center;
    align-content: center;
    z-index: -1;

    @media (max-width: 450px) {
        text-align: center;
    }
`


function About() {
    return (
        <React.Fragment>
            <MainPicture />
            <MainContainer>
                <Hero />
                <YouTubeFeed />
                <Experience />

                <CourtneyContainer>
                    <CenterContainer>
                        <Typography variant='h2'>COURTNEY GARCIA</Typography>
                    </CenterContainer>
                </CourtneyContainer>
                <Collabs />
                <ContactMe />
            </MainContainer>
        </React.Fragment>
    )
}

export default About
