import React, { useEffect } from "react";
import ServicesHeader from "../components/header/ServicesHeader";
import ServicesBlocks from "../components/services/blocks/ServicesBlocks";

const Services = () => {
    let tg = window.Telegram.WebApp;
    
    useEffect(()=> {
        tg.BackButton.hide();
    }, [])
    
    return (
        <div>
            <ServicesHeader>Выберите услугу</ServicesHeader>
            <ServicesBlocks/>
        </div>
    )
}

export default Services;