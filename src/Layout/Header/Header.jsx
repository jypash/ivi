import React from 'react';
import logo from "./logo.svg"
import {Link} from "react-router-dom"
import {AiOutlineSearch} from "react-icons/ai";
import {BiUser} from "react-icons/bi";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <div className="header__left">
                        <Link to={"/"}>
                            <h1>
                                <img src={logo} alt="Ivi"/>
                            </h1>
                        </Link>
                        <div className="header__menu">
                            <Link to={"/movies"} className="header__link">
                                Фильмы
                            </Link>
                            <Link to={"/series"} className="header__link">
                                Сериалы
                            </Link>
                            <Link to={"/cartoons"} className="header__link">
                                Мультфильмы
                            </Link>
                        </div>
                    </div>
                    <div className="header__right">
                        <button className="header__search">
                            <AiOutlineSearch/>
                            Поиск
                        </button>
                        <div className="header__user">
                            <Link to={"/register"}>
                                <BiUser/>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
            
        </header>
    );
};

export default Header;