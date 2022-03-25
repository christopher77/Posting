import React,{useState} from 'react';
import likeCheck from "../../images/heart-solid.svg";
import like from "../../images/heart-regular.svg";
import dislikeCheck from "../../images/dislike-solid.svg";
import dislike from "../../images/dislike.svg";
import commentIcon from "../../images/comment-regular.svg";
import link from "../../images/link-solid.svg";
import Modal from "../Modal/Modal";
import "./Post.scss";
import SimpleInput from '../SimpleInput/SimpleInput';
import {addComentToPost} from "../../features/postSlice"
import { useDispatch } from 'react-redux';
import {v4 as uuid} from "uuid"

function Post(props) {
  console.log("post props==>",props)
  const likes= 0;
  const dislikes= 0;
	const [postLiked, setPostLiked] = useState(false);
	const [postDisliked, setPostDisliked] = useState(false);
	const [likeNumber, setLikeNumber] = useState(likes);
	const [dislikeNumber, setDislikeNumber] = useState(dislikes);
	const [showModal, setShowModal] = React.useState(false);
  const [name,setName] = useState("")
  const [comment,setComment] = useState("")
  const [email,setEmail] = useState("")

  const {post} = props;
  const changeLike = () => {
		setPostLiked(!postLiked);
		setLikeNumber(postLiked ? likes : likes + 1);
	};

  const changeDislike = () => {
		setPostDisliked(!postDisliked);
		setDislikeNumber(postDisliked ? dislikes : dislikes + 1);
	};
  const openModal = () => {
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
	};

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

  const dispatch = useDispatch();
  function handleAddComment(event) {
		event.preventDefault();
    console.log("post props ==>",props)
    dispatch(addComentToPost({id:post.id,name,comment,email}));
    closeModal()
	}
  return (
    <div className='post'>
      <div className='post__owner'>Posted by: {post.email}</div>
      <div className='post__main'>
        <div className='post__main--name'>{post.name}</div>
        <div className='post__main--image'>imagen</div>
        <div className='post__main--content'>{post.content}</div>
      </div>
      <div className='post__punctuation'>
        <div className="post__punctuation--likes">{likeNumber} Me gusta</div>
        <div className="post__punctuation--dislikes">{dislikeNumber} No me gusta</div>
      </div>
      <div className='post__sub'>
        <img
          className='post__sub--img'
					src={postLiked ? likeCheck : like}
					alt="like"
					onClick={() => changeLike()}
        />
        <img
          className='post__sub--img'
					src={postDisliked ? dislikeCheck : dislike}
					alt="dislike"
					onClick={() => changeDislike()}
        />
				<img className="post__sub--comment" src={commentIcon} alt="comments" onClick={() => openModal()} />
        <img className="post__sub--link" src={link} alt="link" />
      </div>
      <div className='post__date'>Posted: 12/08/2019</div>
      {showModal && (
				<Modal>
          <div>Nuevo Comentario</div>
          <SimpleInput {...propsName}/>
          <SimpleInput {...propsComment}/>
          <SimpleInput {...propsEmail}/>
					<button className="modal__button" onClick={handleAddComment}>
						AGREGAR
					</button>
					<button className="modal__button" onClick={() => closeModal()}>
						CANCEL
					</button>
				</Modal>
			)}
    </div>
  );
}

export default Post;