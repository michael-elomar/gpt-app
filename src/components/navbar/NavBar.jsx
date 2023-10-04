import { React, useState } from "react";
import {RiMenu3Line, RiCloseLine } from "react-icons/ri"
import "./navbar.css";
import logo from  "../../assets/logo.svg"

// BEM -> Block Element Modifier

const Menu = () => (
    <>
        <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT</a></p>
        <p><a href="#possibility">OpenAI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
)

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <></>
    );
}

export default NavBar;