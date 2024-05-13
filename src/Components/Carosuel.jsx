import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import s1 from "../images/s1.webp"
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
const Carosuel = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <Avatar src={s1} variant='square' sx={{position:"absolute",top:"10%",width:"100%",height:"100%"}}></Avatar>
            </SwiperSlide>
            <SwiperSlide>
                Slide 2
            </SwiperSlide>
        </Swiper>
    )
}

export default Carosuel