import React from 'react';
import {Link} from "react-router-dom"

const Card = ({item}) => {

    return (
        <div className="product">
            <Link to={`/film/${item.id}`}>
            <img className="product__img" src={item.poster && item.poster.url} alt=""/>
            <h2 className="product__title">{item.name}</h2>
            <p className="product__desc">Подписка</p>
        </Link>
        </div>
    );
};

export default Card;
