import React from 'react';
import { useSelector } from 'react-redux';
import {selectPostsList} from '../../features/postSlice'

function Home(props) {
  const postsList = useSelector(selectPostsList)

  console.log("postsList==>",postsList)
  return (
    <div className='postscontainer'>
      HOME-PostList
      <div className='postslist'>
        {postsList.map((post,index)=>{
          return <div key={index}>
            <div>{post.name}</div>
            <div>{post.content}</div>
            <div>{post.email}</div>
          </div>
        })}
      </div>
    </div>
  );
}

export default Home;