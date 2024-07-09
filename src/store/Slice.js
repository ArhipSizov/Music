import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'email',
    initialState:{
        todos:[]
    },
    reducers:{
        addUser(state, action) {
            console.log(state);
            console.log(action);
            state.todos.push({
                text: action.payload.text,
            })
        },
        removeUser() {},
        toggleUser() {},
    }
})