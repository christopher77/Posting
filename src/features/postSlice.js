import {createSlice } from '@reduxjs/toolkit';

const  initialState = {
  value:[{
    id:"123",
    name:"Primer Post titulo",
    content:"Comentario contenido del primer post de ejemplo",
    email:"ejemplo@mail.com",
    comments:[],
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
    addComentToPost:(state, action)=>{
      state.value.forEach((post)=>{
        if(post.id===action.payload.id){
          const {name,comment,email}=action.payload;
          post.comments.push({name,comment,email})
        }
      })
    }
  }
})
export const selectPostsList = (state)=>state.posts.value;
export const {addPost,addComentToPost} = postSlice.actions
export default postSlice.reducer;