import React from 'react';
import { Wrapper } from "./Button.styles";
function Button({ text, callBack }) {
    return (
        <Wrapper type="button" onClick={callBack}>
            {text}
        </Wrapper>
    );
}

export default Button;