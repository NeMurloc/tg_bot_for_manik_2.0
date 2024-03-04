import React from "react";
import cl from "./Calendar.module.css";
import { HeadLineSemibold, HeadLineMonoNumbers } from "../../textStyles/TextStyleComponents";


const Calendar = () => {


  return (
    <div className={cl.container}>


      <HeadLineSemibold>Февраль</HeadLineSemibold>
      <HeadLineMonoNumbers>2024</HeadLineMonoNumbers>

    </div>
  )
}

export default Calendar;