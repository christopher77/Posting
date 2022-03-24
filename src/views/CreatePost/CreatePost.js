import React, { useState } from "react";
import "./CreatePost.scss";
import SimpleInput from "../../components/SimpleInput/SimpleInput";

function CreatePost(props) {
  const [namePost,setNamePost] = useState("")
  const [emailPost,setEmailPost] = useState("")
  const [contentPost,setContentPost] = useState("")
	const [isEnabled, setIsEnabled] = React.useState(false);

  const propsName = {
		nombre: "Nombre",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: namePost,
	};
  const propsContent = {
		nombre: "Contenido",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: contentPost,
	};
  const propsEmail = {
		nombre: "Email",
		tipo: "string",
		max: 50,
		complex: false,
		setProperty: emailPost,
	};
  function handleSubmit(event) {
		event.preventDefault();
	}
  return (
    <div>
      <form className="create__post" onSubmit={handleSubmit} >
        <div className="create__post--title">Nuevo Post</div>
        <SimpleInput {...propsName} />
        {/* <input className="create__post--name" value={namePost} onChange={(e)=>setNamePost(e.target.value)}/> */}
        {/* <div className="create__post--content">contenido</div> */}
        <SimpleInput {...propsContent} />
        <SimpleInput {...propsEmail} />
        {/* <input className="create__post--email" value={emailPost} onChange={(e)=>setEmailPost(e.target.value)}/> */}

        <button type="submit" className="create__post--button" disabled={!isEnabled}>
          Crear Post
        </button>
      </form>
    </div>
  );
}

export default CreatePost;