import React from 'react';
import Post from '../Post/Post';
import "./PostList.scss";

function PostList({data}) {

	const [postsData, setPostsData] = React.useState(data);
  return (
		<div className="postlist">
			<div className="postlist__title">
				{/* <img className="postlist__image" src={paw} alt="paw" /> */}
				<div className="postlist__main">Nuestros Posts</div>
			</div>
			{postsData &&
				postsData.map((post, index) => (
					// <Post key={index} post={post} setItemFilter={setItemFilter} />
					<Post key={index} post={post} />
				))}
		</div>
  );
}

export default PostList;