import React from 'react';
import logo1 from "../../images/react-movie-logo.svg"
import logo2 from "../../images/tmdb_logo.svg"
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles"
import { Link } from "react-router-dom";
import { Button } from 'antd';
function Header(props) {
    return (
        <Wrapper>
            <Content>
                <Link to="/">
                    <LogoImg src={logo1} alt="menu1" />
                </Link>
                <TMDBLogoImg src={logo2} alt="menu2" />
                {/* <Link to="/login">
                <Button type="primary" shape="round">Log in for rated</Button>
                </Link> */}
            </Content>
        </Wrapper>
    );
}

export default Header;