import {createSlice } from '@reduxjs/toolkit';

const  initialState = {
  value:[{
    id:"456",
    name:"Restaurantes criollos",
    content:"Comentario contenido del primer post de ejemplo",
    email:"chefcriollo@mail.com",
    comments:[
      {name:"rocotero",
       comment:"le falto mas rocoto! =)",
       email:"rocotero@mail.com",
       date:"23 feb. 2022"},
      {name:"@comidalista",
      comment:"buen post, muy original!",
      email:"comidalista@gmail.com",
      date:"25 feb. 2022"}
    ],
    date:"23 feb. 2022",
  },{
    id:"159",
    name:"Flurry Pets",
    content:"Comentario contenido del primer post de ejemplo",
    email:"petsforever@mail.com",
    comments:[],
    date:"22 feb. 2022",
  },{
    id:"125",
    name:"technology",
    content:"Comentario contenido del primer post de ejemplo",
    email:"techman@mail.com",
    comments:[],
    date:"8 feb. 2022",
  },{
    id:"123",
    name:"Primer Post titulo",
    content:"Comentario contenido del primer post de ejemplo",
    email:"ejemplo@mail.com",
    comments:[],
    date:"5 feb. 2022",
  }],
}

export const postSlice = createSlice({
  name:"posts",
  initialState,
  reducers:{
    addPost:(state,action)=>{
      state.value.unshift(action.payload)
    },
    addComentToPost:(state, action)=>{
      state.value.forEach((post)=>{
        if(post.id===action.payload.id){
          const {name,comment,email,date}=action.payload;
          post.comments.push({name,comment,email,date})
        }
      })
    }
  }
})
export const selectPostsList = (state)=>state.posts.value;
export const {addPost,addComentToPost} = postSlice.actions
export default postSlice.reducer;