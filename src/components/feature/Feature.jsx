import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => (
    <div className="gpt3__feature">
        <div className="gpt3__feature-title">
            <div className="gpt3__feature-divider" />
            <h1>{title}</h1>
        </div>
        <div className="gpt3__feature-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Feature;