import React from "react";
import { CTA, Brand, NavBar } from "./components";
import { Footer, Header, Features, Blog, WhatGPT3, Possibility } from "./containers";
import "./App.css"

const App = () => (
    <div className="App">
        <div className="gradient__bg">
            <NavBar />
            <Header />
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    </div>
);

export default App;