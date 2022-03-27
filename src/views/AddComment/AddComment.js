import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SimpleInput from '../../components/SimpleInput/SimpleInput';
import {addComentToPost} from "../../features/postSlice"
import moment from "moment";
import "moment/locale/es";
import "./AddComment.scss";

function AddComment(props) {
  const [name,setName] = useState("")
  const [comment,setComment] = useState("")
  const [email,setEmail] = useState("")

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
		max: 50,
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

  const {id} = useParams();

  const dispatch = useDispatch();
  function handleAddComment(event) {
		event.preventDefault();
		moment.locale("es");
		const dateNow = moment().format("D MMM YYYY");
    dispatch(addComentToPost({id,name,comment,email,date: dateNow,}));
	}

  return (
    <div className='comment__container'>
      <form className='add__comment' onSubmit={handleAddComment}>
        <div>Card del post</div>
        <div>Nuevo Comentario</div>
        <SimpleInput {...propsName}/>
        <SimpleInput {...propsComment}/>
        <SimpleInput {...propsEmail}/>
        <button className="modal__button">
          AGREGAR
        </button>
      </form>
    </div>
  );
}

export default AddComment;