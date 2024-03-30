import { createSlice } from "@reduxjs/toolkit";


export const empleosSlice=createSlice({
    name:'empleos',
    initialState:{
        empleos:[]
    },
    reducers:{
        setEmpleos:(state,action)=>{
            state.empleos=action.payload
        }
    }
});

export default empleosSlice.reducer;

export const {setEmpleos}=empleosSlice.actions