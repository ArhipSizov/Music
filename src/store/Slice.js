import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'email',
    initialState:{
        email:[]
    },
    reducers:{
        addUser(state, action) {
            console.log(state);
            console.log(action.payload);
            state.email.push({
                email: action.payload,
            })
        },
        removeUser() {},
        toggleUser() {},
    }
})

export const {addUser} = slice.actions

export default slice.reducer