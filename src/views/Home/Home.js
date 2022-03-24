import React from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../components/PostList/PostList';
import {selectPostsList} from '../../features/postSlice'

function Home(props) {
  const postsList = useSelector(selectPostsList)

  console.log("postsList==>",postsList)
  return (
    <div className='postscontainer'>
      {/* {postsList && postsList.map((post,index)=>{
        return <div key={index}>
          <div>{post.name}</div>
          <div>{post.content}</div>
          <div>{post.email}</div>
        </div>
      })} */}
      {postsList && <PostList data={postsList}/>}
    </div>
  );
}

export default Home;