import React from "react";
import { HeadlineBody } from "../../textStyles/TextStyleComponents";
import ServicesHeader from "../../components/header/ServicesHeader";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../Services.json"
import cl from "./Info.module.css"
import Photos from "../../components/info/Photos";
import { observer } from "mobx-react-lite";
import { useCheckboxStore } from "../../store/CheckboxStore";


const Info = observer(() => {



  // const [currentIndex, setCurrentIndex] = useState(0);

  // const showNextImage = () => {
  //   const nextIndex = (currentIndex + 1) % images.length;
  //   setCurrentIndex(nextIndex);
  // };


  let tg = window.Telegram.WebApp;
  const navigate = useNavigate();
  const { id } = useParams();
  const checkboxStore = useCheckboxStore();

  // const [itemId, setItemId] = useState('');
  const [itemInfo, setItemInfo] = useState({
    name: '',
    img: '',
    time: '',
    info: ''
  });


  useEffect(() => {
    tg.BackButton.show();
    tg.BackButton.onClick(() => {
      navigate("*");
      if (checkboxStore.getSelectedCheckboxCount() !== 0) {
        tg.MainButton.show();      
      }
    });
  }, []);

  useEffect(() => {
    const getItemById = () => {
      let selectedItem = { name: '', img: '', time: '', description: '' };
      data.forEach(category => {
        const foundItem = category.items.find(item => item.id === id);
        if (foundItem) {
          selectedItem = {
            name: foundItem.name,
            img: foundItem.img,
            time: foundItem.time,
            description: foundItem.description
          };
        }
      });
      return selectedItem;
    };

    setItemInfo(getItemById());
  }, [id]);




  return (
    <div>
      <Photos />

      <ServicesHeader>{itemInfo.name}</ServicesHeader>

      <HeadlineBody className={cl.time}>Длительность: {itemInfo.time} </HeadlineBody>

      <HeadlineBody className={cl.description}>{itemInfo.description}</HeadlineBody>
    </div>
  )
})

export default Info;