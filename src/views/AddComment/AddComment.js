import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SimpleInput from '../../components/SimpleInput/SimpleInput';
import { useNavigate } from "react-router-dom";
import {addComentToPost} from "../../features/postSlice"
import moment from "moment";
import "moment/locale/es";
import "./AddComment.scss";
import {selectPostsList} from '../../features/postSlice'

function AddComment(props) {
  const [name,setName] = useState("")
  const [comment,setComment] = useState("")
  const [email,setEmail] = useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  const postsList = useSelector(selectPostsList)

  let postFound = {};
  postsList.forEach((post)=>{
    if(post.id===id){
      postFound= post;
    }
  })

  const propsName = {
		nombre: "Nombre",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: setName,
	};
  const propsComment = {
		nombre: "Comentario",
		tipo: "string",
		max: 200,
		complex: false,
		setProperty: setComment,
	};
  const propsEmail = {
		nombre: "Email",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: setEmail,
	};


  function handleAddComment(event) {
		event.preventDefault();
		moment.locale("es");
		const dateNow = moment().format("D MMM YYYY");
    dispatch(addComentToPost({id,name,comment,email,date: dateNow,}));
    navigate(`/postdetails/${id}`);
	}

  return (
    <div className='comment__container'>
      <form className='add__comment' onSubmit={handleAddComment}>
        <div className='add__comment--title'>Nuevo Comentario en el post:
          <div className='add__comment--main'>
          "{postFound.name}"
          </div>
        </div>
        <SimpleInput {...propsName}/>
        <SimpleInput {...propsComment}/>
        <SimpleInput {...propsEmail}/>
        <button className="add__comment--button">
          publicar comentario
        </button>
      </form>
    </div>
  );
}

export default AddComment;