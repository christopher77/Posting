import React,{useState} from 'react';
import likeCheck from "../../images/heart-solid.svg";
import like from "../../images/heart-regular.svg";
import dislikeCheck from "../../images/dislike-solid.svg";
import dislike from "../../images/dislike.svg";
import comment from "../../images/comment-regular.svg";
import link from "../../images/link-solid.svg";
import "./Post.scss";

function Post(props) {
  console.log("post props==>",props)
  const likes= 0;
  const dislikes= 0;
	const [postLiked, setPostLiked] = useState(false);
	const [postDisliked, setPostDisliked] = useState(false);
	const [likeNumber, setLikeNumber] = useState(likes);
	const [dislikeNumber, setDislikeNumber] = useState(dislikes);

  const {post} = props;
  const changeLike = () => {
		setPostLiked(!postLiked);
		setLikeNumber(postLiked ? likes : likes + 1);
	};

  const changeDislike = () => {
		setPostDisliked(!postDisliked);
		setDislikeNumber(postDisliked ? dislikes : dislikes + 1);
	};

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
				<img className="post__sub--comment" src={comment} alt="comments" />
        <img className="post__sub--link" src={link} alt="link" />
      </div>
      <div className='post__date'>Posted: 12/08/2019</div>
    </div>
  );
}

export default Post;