import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import API from "../../API";
import { Context } from "../../context";
import Button from "../Button";
import { Wrapper } from "./login.styles";
function Login(props) {
    const handleChangeInput = (e) => {

    }
    const handleSubmit = () => {

    }
    return (
        <Wrapper>
            <label>Username:</label>
            <input type="text" value="state value" name="username" onChange={handleChangeInput} />
            <label>Pass:</label>
            <input type="password" value="state value" name="password" onChange={handleChangeInput} />
            <Button text="Log in" callBack={handleSubmit}></Button>
        </Wrapper>
    );
}

export default Login;