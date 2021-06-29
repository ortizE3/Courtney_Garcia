import React from 'react'
import Hero from '../components/Hero';
import YouTubeFeed from '../components/YouTubeFeed';
import Experience from '../components/Experience';
import ContactMe from '../components/ContactMe';
import styled from 'styled-components';
import MainPicture from '../components/MainPicture';
import Collabs from '../components/Collabs';
import Footer from '../components/Footer'

const MainContainer = styled.div`
    max-width: 1100px;
    margin: auto;
    overflow-x: hidden;
`

function About() {
    return (
        <React.Fragment>
            <MainPicture />
            <MainContainer>
                <Hero />
                <YouTubeFeed />
                <Experience />
                <Collabs />
                <ContactMe />
            </MainContainer>
        </React.Fragment>
    )
}

export default About
