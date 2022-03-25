import React from 'react';
import Post from '../Post/Post';
import "./PostList.scss";

function PostList({data}) {

	const [postsData, setPostsData] = React.useState(data);
  return (
		<div className="postlist">
			<div className="postlist__title">
				<div className="postlist__main">Posts Interesantes</div>
			</div>
			{postsData &&
				postsData.map((post, index) => (
					<Post key={index} post={post} />
				))}
		</div>
  );
}

export default PostList;