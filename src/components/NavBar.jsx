import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { useHistory } from "react-router-dom";

import Typography from './Typography';

import { ImPinterest2 as PinterestIcon } from 'react-icons/im';
import { CgInstagram as InstagramIcon } from 'react-icons/cg';
import { AiOutlineYoutube as YouTubeIcon } from 'react-icons/ai';
import { BiMoon as MoonIcon } from 'react-icons/bi';
import { FiSun as SunIcon } from 'react-icons/fi'
import { VscThreeBars as ThreeBarsIcon } from 'react-icons/vsc'
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

    @media (max-width: ${breakpoints.sm}) {
        font-size: 12px;
        padding: 15px;
    }
`;

const HeaderContainer = styled.div`
        display: flex;
        align-items: center;
`;

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

const NavBarIcon = styled(Icon)`
    &&& {
        @media (max-width: ${breakpoints.sm}) {
            display: none;
        }
    }
`;

const SideBarIcon = styled(Icon)`
    margin: 0px;
    
    &&& {
        @media (min-width: ${breakpoints.sm}) {
            display: none;
        }
    }
`;


function NavBar() {

    const { darkMode, setDarkMode } = useContext(ToggleContext);
    const theme = useContext(ThemeContext);
    const history = useHistory();


    const toggleMode = () => {
        setDarkMode(!darkMode);
    }

    return (
        <NavBarContainer>
            <SideBarIcon >
                <ThreeBarsIcon />
            </SideBarIcon>
            <LinkContainer>
                <Typography
                    margin={'0px 10px 0px 0px'}
                    highlight={true}
                    link={true}
                    onClick={() => {
                        history.push("/shop");
                    }}
                >
                    SHOP
                </Typography>
                <Typography
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
                        window.location.replace("https://www.youtube.com/user/garcialynncourt");
                    }} />
                </NavBarIcon>

                <NavBarIcon >
                    <InstagramIcon onClick={() => {
                        window.location.replace("https://www.instagram.com/courtneylynngarcia/");
                    }} />
                </NavBarIcon>

                <NavBarIcon>
                    <PinterestIcon />
                </NavBarIcon>

                <NavBarIcon>
                    {!darkMode ? <MoonIcon onClick={toggleMode} /> : <SunIcon onClick={toggleMode} />}
                </NavBarIcon>

            </IconContainer>

        </NavBarContainer>
    )
}

export default NavBar
