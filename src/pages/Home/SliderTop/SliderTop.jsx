
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";




import { Navigation } from "swiper";
const SliderTop = () => {
        return (
            <>
                <Swiper
                    navigation={true}
                    spaceBetween={24}
                    loop={true}
                    modules={[Navigation]}
                    centeredSlides={true}
                    className="mySwiper slidertop">
                    <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage28/contents/7/e/cb23c9545912be5ab5922915f029b9.jpg/1216x370/?q=85)`}}></SwiperSlide>
                    <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage28/contents/7/e/cb23c9545912be5ab5922915f029b9.jpg/1216x370/?q=85)`}}></SwiperSlide>
                    <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage28/contents/7/e/cb23c9545912be5ab5922915f029b9.jpg/1216x370/?q=85)`}}></SwiperSlide>
                    <SwiperSlide style={{background: `url(https://thumbs.dfs.ivi.ru/storage28/contents/7/e/cb23c9545912be5ab5922915f029b9.jpg/1216x370/?q=85)`}}></SwiperSlide>

                </Swiper>
            </>

    );
};

export default SliderTop;