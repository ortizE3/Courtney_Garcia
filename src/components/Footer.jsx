import React from 'react';
import styled from 'styled-components';
import Typography from './Typography';
import { ImPinterest2 as PinterestIcon } from 'react-icons/im';
import { CgInstagram as InstagramIcon } from 'react-icons/cg';
import { AiOutlineYoutube as YouTubeIcon } from 'react-icons/ai';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 40px 20px 40px 20px;
    text-align: left;
    text-transform: uppercase;
    color: white;
    background-color: black;
`;

const AuthorContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;`

const EmailContainer = styled(Typography)`
    text-transform: lowercase;
    font-size: 1.1rem;
    cursor: pointer;
    display: inline-block;
`;

const SpaceTypography = styled(Typography)`
    margin-top: 25px;
`;

const SocialContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    align-content: space-between;
    flex-wrap: wrap;
    color: white;
`;

const TitleContainer = styled.div`
    display: flex;
    align-content: flex-end;
    justify-content: flex-end;
    flex-basis: 100%;
    flex-wrap: wrap;
`

const IconContainer = styled.div`
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: flex-end;
`;

const FooterIcon = styled.div`
    font-size: 1.5rem;
    margin-left: 8px;
`


function Footer() {


    return (
        <FooterContainer>
            <AuthorContainer>
                <Typography variant='b2'>Thank you for visiting</Typography>
                <SpaceTypography variant='b2'>Developed by Ethan Ortiz</SpaceTypography>
                <SpaceTypography variant='b2'>For business inquiries <EmailContainer
                    onClick={() => {
                        window.location.href = "mailto:ortizethan3@gmail.com";
                    }}
                >
                    ortizethan3@gmail.com
                </EmailContainer>
                </SpaceTypography>
            </AuthorContainer>


            <SocialContainer>
                <TitleContainer>
                    <Typography>Courtney</Typography>
                </TitleContainer>

                <IconContainer>
                    <FooterIcon>
                        <YouTubeIcon onClick={() => {
                            window.location.href = "https://www.youtube.com/user/garcialynncourt";
                        }} />
                    </FooterIcon>
                    <FooterIcon>
                        <InstagramIcon onClick={() => {
                            window.location.href = "https://www.instagram.com/courtneylynngarcia/";
                        }} />
                    </FooterIcon>
                    <FooterIcon>
                        <PinterestIcon onClick={() => {
                            window.location.href = "https://www.pinterest.com/lovelyloveslove/";
                        }} />
                    </FooterIcon>
                </IconContainer>
            </SocialContainer>
        </FooterContainer>
    )
}

export default Footer
