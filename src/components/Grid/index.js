import React from 'react';
import { Wrapper, Content } from "./Grid.styles";
function Grid({ children, header }) {
    return (
        <Wrapper>
            <h1>{header}</h1>
            <Content>
                {children}
            </Content>
        </Wrapper>
    );
}

export default Grid;