import React, {useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changeCountries} from "../../../redux/reducers/movie";

const countries = [
    'США','Франция','Германия','Великобритания',
    'Россия','Япония','Корея','Китай',
    'Канада','Бразилия','Турция','Казахстан',

]

const SelectCountries = () => {

    const {filter} = useSelector(store => store.movie)

    const [country, setCountry] = useState( filter.country || '')
    const  dispatch = useDispatch()

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    useEffect(() => {
        dispatch(changeCountries(country))
    },[country])

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label"
                            style={{color: 'white'}}
                >
                    Страна
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={country}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    className="movies__select"
                >

                    {countries.map((country) => (
                        <MenuItem
                            key={country}
                            value={country}
                            className="movies__item"
                        >
                            {country}
                        </MenuItem>
                    ))}
                    <MenuItem
                        className="movies__item"
                        value={''}
                    >
                        Не выбрано
                    </MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default SelectCountries;