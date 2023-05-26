import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import Card from "../../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../../redux/reducers/movie";

const SliderProduct = () => {

    const {data, filter} = useSelector(state => state.movie)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies(filter))
    }, [])


    return (
        <section className="sliderproduct">
            <div className="container">
                <h2>
                    Популярные
                </h2>
                <Swiper
                    navigation={true}
                    spaceBetween={24}
                    slidesPerView={7}
                    modules={[Navigation]}
                    className="mySwiper slidercard"
                style={{marginTop: "20px"}}
                >
                    {
                        data.map((item, idx) => (
                            <SwiperSlide>
                                <Card item={item}/>
                            </SwiperSlide>
                        ))
                    }


                </Swiper>

            </div>

        </section>
    );
};

export default SliderProduct;