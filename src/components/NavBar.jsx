import React, { useState } from 'react';
import styled from 'styled-components';

import { useHistory } from "react-router-dom";

import Typography from './Typography';

import { VscThreeBars as ThreeBarsIcon } from 'react-icons/vsc'
import { ImCross as Exit } from 'react-icons/im';
import breakpoints from '../breakpoints';
import Icon from './Icon'

const NavBarContainer = styled.div`
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
    background-color: #ffffffac;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    backdrop-filter: blur(5px);
    transition: transform .5s;
    transform: ${props => props.toggleSideBar ? 'translateX(0%)' : 'translateX(100%)'};
`;

const SideBarLinkContainer = styled.div`
    text-align: center;
`;

const ExitContainer = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
`

const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    color: white;

    @media (max-width: ${breakpoints.sm}) {
        display: none;
    }
`;

const SideBarIcon = styled(Icon)`
    margin: 0px;
    color: white;

    @media (min-width: ${breakpoints.sm}) {
        display: none;
    }
`;

const SpacedTypography = styled(Typography)`
    margin-top: 10%;
    margin-bottom: ${props => props.marginBottom || 0};
`;


function NavBar() {

    const history = useHistory();
    const [toggleSideBar, setToggleSideBar] = useState(false)

    return (
        <NavBarContainer>
            <SideBarIcon >
                <ThreeBarsIcon onClick={() => {
                    setToggleSideBar(true);
                }} />
            </SideBarIcon>

            <SideBarContainer
                toggleSideBar={toggleSideBar}
            >
                <ExitContainer onClick={() => {
                    setToggleSideBar(false);
                }}>
                    <Icon>
                        <Exit />
                    </Icon>
                </ExitContainer>
                <div>
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
                </div>
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

        </NavBarContainer >
    )
}

export default NavBar
