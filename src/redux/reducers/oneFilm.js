import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../utils/axios";




export const getOneFilm = createAsyncThunk(
    'oneFilm/getOneFilm',
    async (id,{rejectWithValue}) => {
        try {

            const res = await instance(`/movie/${id}`)
            if (res.status !== 200) {
                throw new Error('request error')
            }
            return res.data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)



const movieSlice = createSlice({
    name: 'movie',
    initialState: {
       product: [],

    },
    reducers: {


    },
    extraReducers: (builder) => {
        builder.addCase(getOneFilm.pending, (state, {payload}) => {
            state.status = 'loading'
            state.error = ''
        })
        builder.addCase(getOneFilm.rejected, (state, {payload}) => {
            state.status = 'error'
            state.error = payload
        })
        builder.addCase(getOneFilm.fulfilled, (state, {payload}) => {
            state.status = 'resolve'
            state.error = ''
            state.product = payload
        })
    }
})




export const {} = movieSlice.actions
export  default movieSlice.reducer