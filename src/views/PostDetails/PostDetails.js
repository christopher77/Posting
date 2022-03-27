import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CommentList from '../../components/CommentList/CommentList';
import Post from '../../components/Post/Post';
import {selectPostsList} from '../../features/postSlice'
import "./PostDetails.scss";
import { useNavigate } from "react-router-dom";

function PostDetails(props) {
  const postsList = useSelector(selectPostsList)
  const navigate = useNavigate();
  const {id} = useParams();
  let postFound = {};
  postsList.forEach((post)=>{
    if(post.id===id){
      postFound= post;
    }
  })
  function backToHome(){
    navigate("/");
  }
  
  return (
    <div className='postdetails__container'>
      <button className='backhome' onClick={backToHome}>Ir a Posts</button>
      <Post post={postFound}/>
      <CommentList data={postFound.comments}/>
    </div>
  );
}

export default PostDetails;