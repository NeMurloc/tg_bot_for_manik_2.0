import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServicesHeader from "../components/header/ServicesHeader";
import Calendar from "../components/selectTime/Calendar";


const SelectTime = () => {
  let tg = window.Telegram.WebApp;
  const navigate = useNavigate();

  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      navigate("*");
      tg.MainButton.show();      
    });
  }, []);


  return (
    <div>


      <ServicesHeader>Выберите время</ServicesHeader>
      <Calendar/>

    </div>
  )
}

export default SelectTime;