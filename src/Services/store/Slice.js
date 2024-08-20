import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'email',
    initialState:{
        email:[]
    },
    reducers:{
        addUser(state, action) {
            state.email.push({
                id: new Date().toISOString(),
                email: action.payload.email,
                password: action.payload.pasvord,
                name: action.payload.name,
                number: action.payload.number,
                key: action.payload.key,
                favorites: action.payload.favorites,
                card: action.payload.card,
                rooms: action.payload.rooms,
            })
        },
    }
})

export const {addUser} = slice.actions

export default slice.reducer