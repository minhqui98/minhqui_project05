import React from 'react';
import { Wrapper, Image } from "./Actor.styles";
function Actor({ name, character, image }) {
    return (
        <Wrapper>
            <Image src={image} />
            <h3>{name}</h3>
            <p>{character}</p>
        </Wrapper>
    );
}

export default Actor;