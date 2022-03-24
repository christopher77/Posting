import {createSlice } from '@reduxjs/toolkit';

const  initialState = {
  value:[{
    name:"Primer Post titulo",
    content:"Comentario contenido del primer post de ejemplo",
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