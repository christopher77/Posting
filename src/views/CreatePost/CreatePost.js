import React, { useState } from "react";
import "./CreatePost.scss";
import SimpleInput from "../../components/SimpleInput/SimpleInput";
import {addPost} from '../../features/postSlice'
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid"
import moment from 'moment';
import 'moment/locale/es';

function CreatePost(props) {
  const [namePost,setNamePost] = useState("")
  const [emailPost,setEmailPost] = useState("")
  const [contentPost,setContentPost] = useState("")
	const [isEnabled, setIsEnabled] = React.useState(true);

  const propsName = {
		nombre: "Nombre",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: setNamePost,
	};
  const propsContent = {
		nombre: "Contenido",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: setContentPost,
	};
  const propsEmail = {
		nombre: "Email",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: setEmailPost,
	};

  const dispatch = useDispatch();

  function handleAddPost(event) {
		event.preventDefault();
    moment.locale('es')
    const dateNow = moment().format('D MMM YYYY');
    console.log("datenow==>", dateNow)
    dispatch(addPost({id:uuid(),name:namePost,content:contentPost,email:emailPost,date:dateNow,comments:[],}));
    // cleanForm();
	}
  return (
    <div>
      <form className="create__post" onSubmit={handleAddPost} >
        <div className="create__post--title">Nuevo Post</div>
        <SimpleInput {...propsName} />
        <SimpleInput {...propsContent} />
        <SimpleInput {...propsEmail} />
        <button type="submit" className="create__post--button" disabled={!isEnabled}>
          Crear Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;