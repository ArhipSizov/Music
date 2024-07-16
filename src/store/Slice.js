import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'email',
    initialState:{
        email:[]
    },
    reducers:{
        addUser(state, action) {
            state.email.push({
                email: action.payload,
            })
        },
    }
})

export const {addUser} = slice.actions

export default slice.reducer