import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import cl from "./Photos.module.css";
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from "react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import photo1 from "../../photo/def.jpeg"
import photo2 from "../../photo/gor.jpeg"
import photo3 from "../../photo/sgor.jpeg"
import photo4 from "../../photo/square.jpeg"
import photo5 from "../../photo/svert.jpeg"
import photo6 from "../../photo/ver.jpeg"

const images = [photo1, photo2, photo3, photo4, photo5, photo6];

const Photos = () => {

    const [expandedImage, setExpandedImage] = useState(null);

    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const handleImageClick = (imageSrc) => {
        
        setExpandedImage(imageSrc);
    };

    const handleCloseExpandedImage = () => {
        setExpandedImage(null);
    };

    return (
        <div className={cl.containerSwiper}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={!isMobileDevice ? true : false}
                modules={!isMobileDevice ? [Pagination, Navigation] : [Pagination]}
                className={cl.mySwiper}
            >
                {/* <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo1} alt="Фотка" className={cl.swiperSlideImg} onClick={() => handleImageClick(photo1)} />
                </SwiperSlide> */}
                <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo1} alt="Фотка" className={cl.swiperSlideImg} />
                </SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo2} alt="Фотка" className={cl.swiperSlideImg} />
                </SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo3} alt="Фотка" className={cl.swiperSlideImg} />
                </SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo4} alt="Фотка" className={cl.swiperSlideImg} />
                </SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo5} alt="Фотка" className={cl.swiperSlideImg} />
                </SwiperSlide>
                <SwiperSlide className={cl.swiperSlide}>
                    <img src={photo6} alt="Фотка" className={cl.swiperSlideImg} />
                </SwiperSlide>
            </Swiper>
            {expandedImage && (
                <div className={cl.expandedImageOverlay} onClick={handleCloseExpandedImage}>
                    <img src={expandedImage} alt="Expanded Image" className={cl.expandedImage} />
                </div>
            )}
        </div>
    )
}

export default Photos