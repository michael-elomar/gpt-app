import React from "react";
import { CTA, Article, Brand, NavBar, Feature } from "./components";
import { Footer, Header, Features, Blog, WhatGPT4, Possibility } from "./containers";
import "./App.css"

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <NavBar />
            <Header />
        </div>
        <Brand />
        <WhatGPT4 />
        <Features />
        < Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
);

export default App;