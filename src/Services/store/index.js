import { configureStore} from '@reduxjs/toolkit'
import reducer from './Slice'
import firebaseConfig from "../../../firebaseConfig";
import firebase from "firebase/compat/app";
import { initializeApp } from 'firebase/app';
import "firebase/compat/database";

export const database = firebase.initializeApp(firebaseConfig).database();

export default configureStore({
    reducer: {
        email: reducer,
    }
})