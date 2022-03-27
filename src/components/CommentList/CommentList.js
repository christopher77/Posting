import React from 'react';
import Comment from '../Comment/Comment';
import './CommentList.scss';

function CommentList({data}) {
	const [commentlist, setCommentlist] = React.useState(data);
  console.log("casd==>",commentlist)
  return (
		<div className="commentlist">
			<div className="commentlist__title">
				<div className="commentlist__main">Comentarios :</div>
			</div>
			{commentlist &&
				commentlist.map((comment, index) => (
          <Comment key={index} comment={comment} />
				))}
      {commentlist.length===0?<div className='no__comments'>Aun no hay comentarios, se el primer@.</div>:null}
		</div>
  );
}

export default CommentList;