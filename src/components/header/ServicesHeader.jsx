import React from "react";
import { Title1, Subheadline2Semibold } from "../../textStyles/TextStyleComponents";
import cl from "./ServicesHeader.module.css";

const ServicesHeader = ({ children }) => {

    return (
        <div className={cl.header}>
            <Title1>{children}</Title1>
        </div>
    )
}

//window.Telegram.WebApp.hint_color

export default ServicesHeader;