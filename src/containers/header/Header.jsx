import React from "react";
import "./header.css"

import ai from "../../assets/ai.png";
import people from "../../assets/people.png";
const Header = () => (
    <div className="gpt3__header">
        <div className="gpt3__header-content">
            <h1>
                Let's create something amazing with OpenAI's GPT3
            </h1>
            <p>
                Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing.
                Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <div className="gpt3__header-input">
                <input type="email" placeholder="Enter Your Email" />
                <button type="signup">Get Started</button>
            </div>
            <div className="gpt3__header-people">
                <img src={people} />
                <p>1,600 people requested access a visit in last 24 hours</p>
            </div>
        </div>
        <div className="gpt3__header-image">
            <img src={ai} />
        </div>
    </div>
);

export default Header;