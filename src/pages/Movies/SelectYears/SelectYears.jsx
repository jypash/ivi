import React, {useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changeYears} from "../../../redux/reducers/movie";

const years = [
    '2010','2011','2012','2013',
    '2014','2015','2016','2017',
    '2018','2019','2020','2021',
    '2022','2023'
]

const SelectYears = () => {

    const {filter} = useSelector(store => store.movie)

    const [year, setYear] = useState( filter.year || '')
    const  dispatch = useDispatch()

    const handleChange = (event) => {
        setYear(event.target.value);
    };

    useEffect(() => {
        dispatch(changeYears(year))
    },[year])

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label"
                            style={{color: 'white'}}
                >
                    Годы
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={year}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    className="movies__select"
                >

                    {years.map((year) => (
                        <MenuItem
                            key={year}
                            value={year}
                            className="movies__item"
                        >
                            {year}
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

export default SelectYears;