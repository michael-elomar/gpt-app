import React from "react";
import logo from "../../assets/logo.svg"
import "./footer.css";

const Footer = () => (
    <div className="gpt3__footer">
        <div className="gpt3__footer-heading">
            <h1>Time to step in to the future before others.</h1>
        </div>
        <div className="gpt3__footer-button">
            <button type="Access">Request Early Access</button>
        </div>
        <div className="gpt3__footer-content">
            <div className="gpt3__footer-content_groupA">
                <img src={logo} />
                <h5>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</h5>
            </div>
            <div className="gpt3__footer-content_groupB">
                <div className="gpt3__footer-content_subgroupB">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="gpt3__footer-content_subgroupB">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Careers</p>
                </div>

                <div className="gpt3__footer-content_subgroupB">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>john.doe@example.com</p>
                </div>
            </div>
        </div>
        <div className="gpt3__footer-rights">
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
    </div>
);

export default Footer;