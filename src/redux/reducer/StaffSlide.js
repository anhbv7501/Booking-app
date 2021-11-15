import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import * as StaffService from "../../services/StaffService";

export  const getList = createAsyncThunk("staff/getList",async ()=> {
    const response = StaffService.getList();
    return response.data;
})

export const staffSlide = createSlice({
    name:"staff",
    initialState:{
        value:[],
    },
    reducers:{},
    extraReducers:{
        [getList.pending] : ()=>{},
        [getList.fulfilled] : (state,action) =>{
            state.value = action.payload;
        },
        [getList.rejected] : (state,error) => {
            console.log(error);
            state.value = state;
        }
    }
});

export const {getListStaff} = staffSlide.actions;
export  default staffSlide.reducer;

