import React from 'react';
import { useSelector } from 'react-redux';
import PostList from '../../components/PostList/PostList';
import {selectPostsList} from '../../features/postSlice'

function Home(props) {
  const postsList = useSelector(selectPostsList)
  console.log("postlist==>",postsList)
  return (
    <div className='postscontainer'>
      {postsList && <PostList data={postsList}/>}
    </div>
  );
}

export default Home;