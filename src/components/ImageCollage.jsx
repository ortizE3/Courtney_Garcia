import React from 'react';
import styled from 'styled-components';

import col1 from '../images/col1.jpg';
import col2 from '../images/col2.jpg';
import col3 from '../images/col3.jpg';
import col4 from '../images/col4.jpg';
import col5 from '../images/col5.jpg';
import col6 from '../images/col6.jpg';

const Image = styled.img`
    max-height: 300px;
    width: auto;
    margin: 30px 20px 30px 20px;
    align-self: ${props => props.alignSelf || 'center'};
    padding-left: ${props => props.paddingLeft || 0};
    padding-right: ${props => props.paddingRight || 0};

    @media (max-width: 460px) {
        width: ${props => props.horizontal ? '100%' : 'auto'};;
        height: auto;
        padding: 0px;
        margin: 10px 0px;
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
                src={col1}
                alignSelf={'start'}
            />

            <Image
                src={col2}
                alignSelf={'center'}
                horizontal={true}
            />

            <Image
                src={col3}
                alignSelf={'start'}
                paddingLeft={'calc(.2 * 100vw)'}
            />

            <Image
                src={col4}
                alignSelf={'flex-end'}
                paddingRight={'calc(.1 * 100vw)'}
            />

            <Image
                src={col5}
                alignSelf={'start'}
                paddingLeft={'calc(.1 * 100vw)'}
            />

            <Image
                src={col6}
                alignSelf={'center'}
                horizontal={true}

            />
        </ImageContainer>
    )
}

export default ImageCollage
