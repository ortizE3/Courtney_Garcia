import React from 'react';
import styled from 'styled-components';

import beach1 from '../images/beach1.JPG';
import beach2 from '../images/beach2.JPG';
import beach3 from '../images/beach3.JPG';
import cement1 from '../images/cement1.JPG';
import cement2 from '../images/cement2.JPG';
import black from '../images/black.JPG'

const Image = styled.img`
    max-height: 300px;
    width: auto;
    margin: 30px 20px 30px 20px;
    align-self: ${props => props.alignSelf || 'center'};
    padding-left: ${props => props.paddingLeft || 0};
    padding-right: ${props => props.paddingRight || 0};

    @media (max-width: 400px) {
        width: 100%;
        height: auto;
        padding: 0px;
        margin: 0px;
    }
`

const ImageContainer = styled.div`
    backdrop-filter: blur(1px);
    display: flex;
    flex-direction: column;
    height: 100%;
`;

function ImageCollage() {
    return (
        <ImageContainer>
            <Image
                src={beach1}
                alignSelf={'start'}
            />

            <Image
                src={cement1}
                alignSelf={'center'}
            />

            <Image
                src={black}
                alignSelf={'start'}
                paddingLeft={'calc(.2 * 100vw)'}
            />

            <Image
                src={beach2}
                alignSelf={'flex-end'}
                paddingRight={'calc(.1 * 100vw)'}
            />

            <Image
                src={cement2}
                alignSelf={'start'}
                paddingLeft={'calc(.1 * 100vw)'}
            />

            <Image
                src={beach3}
                alignSelf={'center'}
            />
        </ImageContainer>
    )
}

export default ImageCollage
