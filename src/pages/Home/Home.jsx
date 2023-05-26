import React, {useEffect} from 'react';
import SliderTop from "./SliderTop/SliderTop";
import SliderProduct from "./SliderProduct/SliderProduct";

const Home = () => {

    // useEffect(() => {
    //     axios.get('http://kinopoisk.dev/v1.3/movie', {
    //         headers: {
    //             "X-API-KEY": "RBBN5EQ-GAWM489-MH8NRDW-TYN5Z2J"
    //         }
    //     }).then((res) => console.log(res))
    // }, [])
    return (
        <>
            <SliderTop/>
            <SliderProduct/>
        </>
    );
};

export default Home;