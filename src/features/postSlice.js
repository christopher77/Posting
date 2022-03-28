import {createSlice } from '@reduxjs/toolkit';

const  initialState = {
  value:[{
    id:"456",
    name:"El señorio",
    content:"Con 35 años de vida, El Señorío es uno de los estandartes de las artes culinarias de Lima. Fundado por la socióloga Isabel Álvarez, y bajo la dirección de su hijo, el chef Flavio Solórzano, este restaurante miraflorino combina lo mejor de la cocina criolla con toques de autor, en un espacio privilegiado frente al mar de Grau.",
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
    name:"Mascotas Peludas",
    content:"Nuestras mascotas pueden ser de todas las formas y tamaños, pero lo que nunca pasa de moda es ser peludo. Especialmente en las noches frías de invierno, ¡ya que no hay nada mejor que acurrucarse con uno de estos pequeños amigos! Combinan el calor de un animal de peluche con el amor de un mejor amigo.",
    email:"petsforever@mail.com",
    comments:[],
    date:"22 feb. 2022",
  },{
    id:"125",
    name:"Tecnologia",
    content:"La tecnología es el conjunto de conocimientos y técnicas que se aplican de manera ordenada para alcanzar un determinado objetivo o resolver un problema.",
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