import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name:'Open',
    initialState:{
        open:0,
        emails:[],
        selectedEmail:null,
        searchText:"",
        user:""

    },
    reducers:{
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        setEmails:(state,action)=>{
            state.emails=action.payload;

        },
        setselectedEmail:(state,action)=>{
            state.selectedEmail=action.payload;
        },
        setSearchText:(state,action)=>{
            state.searchText=action.payload;
        },
        setUser:(state,action)=>{
            state.user=action.payload
        }
    }
});
export const {setOpen,setEmails,setselectedEmail,setSearchText,setUser}=appSlice.actions
export default appSlice.reducer