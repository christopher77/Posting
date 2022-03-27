import React from 'react';
import './Comment.scss';

function Comment({comment}) {
  console.log("comment==>",comment)
  return (
    <div className="comment">
			<div className="comment__main">
				<div className="comment__main--group">
					<div className="comment__main--name"
          //  onClick={goToPostDetailsView}
           >{comment.name}</div>
					<div className="comment__main--email">
						{comment.email} - {comment.date}
					</div>
				</div>
				<div className="comment__main--content">{comment.comment}</div>
			</div>
		</div>
  );
}

export default Comment;