import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            email: ''
        }
    },
    reducers: {
        loginUser: (state, {payload}) => {
            state.user = payload
        },
        logOutUser: (state,{payload}) => {
            state.user = {
                email: ''
            }
        }
    }
})

export const {loginUser, logOutUser} = userSlice.actions
export default userSlice.reducer