import React from 'react'
import Hero from '../components/Hero';
import YouTubeFeed from '../components/YouTubeFeed';
import Experience from '../components/Experience';
import ContactMe from '../components/ContactMe';
import styled from 'styled-components';
import MainPicture from '../components/MainPicture';
import Collabs from '../components/Collabs';

const MainContainer = styled.div`
    max-width: 900px;
    margin: auto;
`

function About() {
    return (
        <div>
            <MainPicture />
            <MainContainer>
                <Hero />
                <YouTubeFeed />
                <Experience />
                <Collabs />
                <ContactMe />
            </MainContainer>
        </div>
    )
}

export default About
