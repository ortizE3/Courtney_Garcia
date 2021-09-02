import React, { useContext } from 'react';
import Typography from '../../components/Typography';
import styled, { ThemeContext } from 'styled-components';
import shopImage from '../../images/col6.jpg'
import VerticalLine from '../../images/line.svg';
import VerticalWhiteLine from '../../images/line-white.svg';
import { links } from './Links';

const Image = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${shopImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    background-position: 50% 50%;
    position: relative;
`;


const LinkContainer = styled.div`
    box-shadow: rgb(165 170 172) 0px 0px 15px 5px;
    background-color: rgba(223, 231, 225, 0.66);

    padding: 20px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    @media (max-width: 1000px) {
        width: 100vw;
    }
    @media (max-width: 330px) {
        padding: 10px;
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

    return (
        <Image>
            <LinkContainer
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
                                {link.name !== 'BOOKS' && <LineImage src={VerticalLine} alt='Black Vertical Line' />}
                            </React.Fragment>
                        )}
                    </LinkSubContainer>
                </IndentedText>
            </LinkContainer>
        </Image>
    )
}

export default Shop
