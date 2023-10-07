import React from "react";
import { Google, Slack, Atlassian, DropBox, Shopify } from "./imports";
import "./brand.css"

const Brand = () => (
    <div className="gpt3__brand section__padding">
        <img src={Google} alt="Google" />
        <img src={Slack} alt="Slack" />
        <img src={Atlassian} alt="Atlassian" />
        <img src={DropBox} alt="DropBox" />
        <img src={Shopify} alt="Shopify" />
    </div>
);

export default Brand;