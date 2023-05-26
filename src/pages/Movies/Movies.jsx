import React, {useEffect} from 'react';
import Card from "../../components/Card";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../redux/reducers/movie";
import SelectGenres from "./SelectGenres/SelectGenres";
import SelectYears from "./SelectYears/SelectYears";
import SelectCountries from "./SelectCountries/SelectCountries";

const Movies = () => {

    const {data, filter} = useSelector(state => state.movie)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMovies(filter))
    }, [filter.genre, filter.year, filter.country])



    return (
        <section className="movies">
            <div className="container">
                <SelectGenres/>
                <SelectYears/>
                <SelectCountries/>

                <div className="movies__row">
                    {
                        data.map((item) => (
                            <Card item={item}/>
                        ))
                    }

                </div>
            </div>
            
        </section>
    );
};

export default Movies;