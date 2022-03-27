import React, { useState } from "react";
import likeCheck from "../../images/heart-solid.svg";
import like from "../../images/heart-regular.svg";
import dislikeCheck from "../../images/dislike-solid.svg";
import dislike from "../../images/dislike.svg";
import commentIcon from "../../images/comment-regular.svg";
import { useNavigate } from "react-router-dom";
import "./Post.scss";

function Post(props) {
	const likes = 15;
	const dislikes = 3;
	const [postLiked, setPostLiked] = useState(false);
	const [postDisliked, setPostDisliked] = useState(false);
	const [likeNumber, setLikeNumber] = useState(likes);
	const [dislikeNumber, setDislikeNumber] = useState(dislikes);
	const navigate = useNavigate();

	const { post } = props;
	const changeLike = () => {
		setPostLiked(!postLiked);
		setLikeNumber(postLiked ? likes : likes + 1);
	};

	const changeDislike = () => {
		setPostDisliked(!postDisliked);
		setDislikeNumber(postDisliked ? dislikes : dislikes + 1);
	};

	function goToAddCommentView() {
		navigate(`/addcomment/${post.id}`);
	}

  function goToPostDetailsView() {
		navigate(`/postdetails/${post.id}`);
	}
	return (
		<div className="post">
			<div className="post__main">
				<div className="post__main--group">
					<div className="post__main--name" onClick={goToPostDetailsView}>{post.name}</div>
					<div className="post__main--email">
						{post.email} - {post.date}
					</div>
				</div>
				<div className="post__main--content">{post.content}</div>
				<div className="post__main--image">imagen</div>
			</div>
			<div className="post__punctuation">
				<div className="post__punctuation--comment">
					<img
						className="post__punctuation--comment-img"
						src={commentIcon}
						alt="comments"
						onClick={goToAddCommentView}
					/>
					15
				</div>
				<div className="post__punctuation--likes">
					<img
						className="post__punctuation--likes-img"
						src={postLiked ? likeCheck : like}
						alt="like"
						onClick={() => changeLike()}
					/>
					<span className="hola">{likeNumber}</span>
				</div>
				<div className="post__punctuation--dislikes">
					<img
						className="post__punctuation--dislikes-img"
						src={postDisliked ? dislikeCheck : dislike}
						alt="dislike"
						onClick={() => changeDislike()}
					/>
					{dislikeNumber}
				</div>
			</div>
		</div>
	);
}

export default Post;
