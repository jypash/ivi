import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {getOneFilm} from "../../redux/reducers/oneFilm";
import store from "../../redux";

const OneFilm = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const {product} = useSelector(store => store.oneFilm)
    useEffect(() => {
        dispatch(getOneFilm(params.id))
    }, [])
    return (
        <div>
            <div className="container">
                <h2>{product.name}</h2>
                <img src={product.poster && product.poster.url} alt=""/>
            </div>

        </div>
    );
};

export default OneFilm;