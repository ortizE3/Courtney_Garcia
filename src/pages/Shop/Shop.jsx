import React, { useContext } from 'react';
import Typography from '../../components/Typography';
import styled, { ThemeContext } from 'styled-components';
import { ToggleContext } from '../../ToggleContext';
import Gray from '../../images/Gray.png'
import CG from '../../images/cg.svg'
import CGWhite from '../../images/cg-white.svg';
import VerticalLine from '../../images/line.svg';
import VerticalWhiteLine from '../../images/line-white.svg';
import { links } from './Links';
import Footer from '../../components/Footer';

const ShopContainer = styled.div`
    display: flex;
    background-image: url(${Gray});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
`;

const LinkContainer = styled.div`
    font-weight: bolder;
    display: flex;
    background-color: ${props => props.backgroundColor};
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 0px 20px 0px 20px;

    @media (max-width: 1000px) {
        width: 100vw;
    }

`;

const ImageContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-basis: 30%;

    @media (max-width: 800px) {
        display: none;
    }
`;

const SpacedTypography = styled(Typography)`
    margin-right: 15px;
    display: inline-block;
    font-weight: 300;
`;

const IndentedText = styled.div`
    margin: 0px 0px 0px 40px;
`

const LineImage = styled.img`
    height: 2rem;
    width: 5px;
    margin-right: 1rem;
`;

const LinkSubContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`;

function Shop() {
    const theme = useContext(ThemeContext);
    const { darkMode } = useContext(ToggleContext);

    return (
        <ShopContainer>

            <ImageContainer>
                <Image src={darkMode ? CGWhite : CG} alt='courtney garcia logo' />
            </ImageContainer>


            <LinkContainer
                backgroundColor={theme.backgroundColor}
            >
                <Typography variant='h2'>AMAZON</Typography>

                <IndentedText>
                    <Typography variant='h2'>STOREFRONT</Typography>
                    <LinkSubContainer>
                        {links.map((link) =>
                            <React.Fragment>
                                <SpacedTypography
                                    highlight={true}
                                    link={true}
                                    variant='h4'
                                    onClick={() => {
                                        window.location.href = link.url;
                                    }}
                                >{link.name}
                                </SpacedTypography>
                                {link.name !== 'BOOKS' && <LineImage src={darkMode ? VerticalWhiteLine : VerticalLine} alt='Black Vertical Line' />}
                            </React.Fragment>
                        )}
                    </LinkSubContainer>
                </IndentedText>
            </LinkContainer>
        </ShopContainer>
    )
}

export default Shop
