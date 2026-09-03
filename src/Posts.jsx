

/*import React from 'react'

function Posts() {
  return (
    <div>Posts</div>
  )
}

export default Posts*/

import React,{ useEffect, useState } from 'react'

function Posts() {

const[posts,setPosts]=useState([]);

useEffect(()=>{
fetch(`${import.meta.env.BASE_URL}db/db.json`).
then((data)=> data.json()).
then((data=>setPosts(data))).
catch(err=>console.log(err))

},[]);

  return ( 
    <div className='d-flex justify-content-center'>
    {posts.length>0?(
      <div>
        {posts.map((post)=>(
          <div className="my-3" key={post.id}>

            <div className="d-flex">  
            <img className="dp rounded-circle" src={`${import.meta.env.BASE_URL}${post.profileImage}`}alt="profile picture"/>
            <h6>{post.username}</h6>
            </div>
<img className="image" src={post.postImage} alt="posts"/>
         <div>
         <i className="bi bi-heart"></i>
         <i className="bi bi-chat"></i>
         <i className="bi bi-send"></i>
         </div>
         <div> 
           <b>{post.likes}likes</b>
         </div>
         <p>{post.caption}</p>
          </div>
        ))}
      </div>
   ):(
     <div>
        Loading Posts
    </div>
   )}
      </div>
  )
}
export default Posts

/*npx json-server --watch insta/db/db.json --port 3000 --static ./data*/