import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from "./BreadCrumb.styles";
function BreadCrumb({ movieTitle }) {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <span>Home</span>
                </Link>
                <span>|</span>
                <span style={{ color: "cadetblue" }}>{movieTitle}</span>
            </Content>
        </Wrapper>
    );
}

export default BreadCrumb;