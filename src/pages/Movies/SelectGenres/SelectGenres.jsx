import React, {useEffect, useState} from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useDispatch, useSelector} from "react-redux";
import {changeGenres} from "../../../redux/reducers/movie";

const genres = [
    'драма','комедия','боевик','биография',
    'ужасы','триллер','детектив','приключения',
    'фэнтези','фантастика','семейный','мелодрама',
    'криминал','дорама','музыкальные','спортивные',
]

const SelectGenres = () => {

    const {filter} = useSelector(store => store.movie)

    const [genre, setGenre] = useState( filter.genre || '')
    const  dispatch = useDispatch()

    const handleChange = (event) => {
        setGenre(event.target.value);
    };

    useEffect(() => {
        dispatch(changeGenres(genre))
    },[genre])

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-simple-select-autowidth-label"
                            style={{color: 'white'}}
                >
                    Жанр
                </InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={genre}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    className="movies__select"
                >

                    {genres.map((genre) => (
                        <MenuItem
                            key={genre}
                            value={genre}
                            className="movies__item"
                        >
                            {genre}
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

export default SelectGenres;