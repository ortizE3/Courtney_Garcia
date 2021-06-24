import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { useHistory } from "react-router-dom";

import Typography from './Typography';

import { ImPinterest2 as PinterestIcon } from 'react-icons/im';
import { CgInstagram as InstagramIcon } from 'react-icons/cg';
import { AiOutlineYoutube as YouTubeIcon } from 'react-icons/ai';
import { BiMoon as MoonIcon } from 'react-icons/bi';
import { FiSun as SunIcon } from 'react-icons/fi'
import { VscThreeBars as ThreeBarsIcon } from 'react-icons/vsc'
import { ImCross as Exit } from 'react-icons/im';
import breakpoints from '../breakpoints';
import Icon from './Icon'
import { ToggleContext } from '../ToggleContext';

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    transition-duration: .5s;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
`;

const SideBarContainer = styled.div`
    position: fixed;
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    background-color: ${props => props.backgroundColor};

    transition: transform 1s;
    transform: ${props => props.toggleSideBar ? 'translateX(0%)' : 'translateX(100%)'};
`;

const SideBarLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: inherit;
    margin-top: 30%;
`;

const ExitContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
`;

const LinkContainer = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: ${breakpoints.sm}) {
        display: none;
    }
`;

//Hide the navbar icons
const NavBarIcon = styled(Icon)`

    @media (max-width: ${breakpoints.sm}) {
        display: none;
    }
`;

const SideBarIcon = styled(Icon)`
    margin: 0px;
    
    @media (min-width: ${breakpoints.sm}) {
        display: none;
    }
`;

const SpacedTypography = styled(Typography)`
    margin-top: 10%;
    margin-bottom: ${props => props.marginBottom || 0};
`;


function NavBar() {

    const { darkMode, setDarkMode } = useContext(ToggleContext);
    const theme = useContext(ThemeContext);
    const history = useHistory();
    const [toggleSideBar, setToggleSideBar] = useState(false)


    const toggleMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <NavBarContainer>
            <SideBarIcon >
                <ThreeBarsIcon onClick={() => {
                    setToggleSideBar(true);
                }} />
            </SideBarIcon>

            <SideBarContainer
                toggleSideBar={toggleSideBar}
                backgroundColor={theme.backgroundColor}
            >
                <ExitContainer onClick={() => {
                    setToggleSideBar(false);
                }}>
                    <Icon>
                        <Exit />
                    </Icon>
                </ExitContainer>
                <SideBarLinkContainer>
                    <SpacedTypography
                        variant='h3'
                        highlight={true}
                        link={true}
                        onClick={() => {
                            history.push("/");
                            setToggleSideBar(false);
                        }}
                    >
                        ABOUT
                    </SpacedTypography>
                    <SpacedTypography
                        variant='h3'
                        highlight={true}
                        link={true}
                        onClick={() => {
                            history.push("/shop");
                            setToggleSideBar(false);
                        }}
                    >
                        SHOP
                    </SpacedTypography>

                    <SpacedTypography
                        variant='h3'
                        onClick={() => {
                            window.location.href = "https://www.youtube.com/user/garcialynncourt";
                            setToggleSideBar(false);
                        }}>YOUTUBE</SpacedTypography>

                    <SpacedTypography
                        variant='h3'
                        onClick={() => {
                            window.location.href = "https://www.instagram.com/courtneylynngarcia/";
                            setToggleSideBar(false);
                        }}>INSTAGRAM</SpacedTypography>

                    <SpacedTypography
                        variant='h3'
                        onClick={() => {
                            window.location.href = "https://www.pinterest.com/lovelyloveslove/";
                            setToggleSideBar(false);
                        }}>PINTEREST</SpacedTypography>
                </SideBarLinkContainer>
            </SideBarContainer>

            <LinkContainer>
                <Typography
                    margin={'0px 10px 0px 0px'}
                    fontWeight={'bolder'}
                    highlight={true}
                    link={true}
                    onClick={() => {
                        history.push("/shop");
                    }}
                >
                    SHOP
                </Typography>
                <Typography
                    fontWeight={'bolder'}
                    highlight={true}
                    link={true}
                    onClick={() => {
                        history.push("/");
                    }}
                >
                    ABOUT
                </Typography>
            </LinkContainer>

            <IconContainer>
                <NavBarIcon >
                    <YouTubeIcon onClick={() => {
                        window.location.href = "https://www.youtube.com/user/garcialynncourt";
                    }} />
                </NavBarIcon>

                <NavBarIcon >
                    <InstagramIcon onClick={() => {
                        window.location.href = "https://www.instagram.com/courtneylynngarcia/";
                    }} />
                </NavBarIcon>

                <NavBarIcon>
                    <PinterestIcon onClick={() => {
                        window.location.href = "https://www.pinterest.com/lovelyloveslove/";
                        setToggleSideBar(false);
                    }} />
                </NavBarIcon>

                <Icon>
                    {!darkMode ?
                        <MoonIcon onClick={toggleMode} />
                        :
                        <SunIcon onClick={toggleMode} />
                    }
                </Icon>

            </IconContainer>

        </NavBarContainer >
    )
}

export default NavBar
