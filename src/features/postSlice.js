import {createSlice } from '@reduxjs/toolkit';

const  initialState = {
  value:[{
    name:"nombre ejemplo",
    content:"contenido ejemplo",
    email:"ejemplo@mail.com"
  }],
  // name:string
  // content:string
  // email:string
}

export const postSlice = createSlice({
  name:"posts",
  initialState,
  reducers:{
    addPost:(state,action)=>{
      state.value.push(action.payload)
    },
  }
})
export const selectPostsList = (state)=>state.posts.value;
export const {addPost} = postSlice.actions
export default postSlice.reducer;