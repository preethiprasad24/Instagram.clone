import React,{useEffect,useState} from 'react'

function stories() {

  const[Stories,setStories]=useState([]);
  useEffect(()=>{
fetch(`${import.meta.env.BASE_URL}db/db.json`).
then(data=>data.json()).
then(data=>setStories(data)).
catch(err=>console.log(err))
},[]);

  return (
    <div className="story d-flex">
      {Stories.length>0?(
      Stories.map((story)=>(
     <div key={story.id} className="mx-1">
      <div className="gradient-border">
      <img src={`${import.meta.env.BASE_URL}${story.profileImage}`} alt="dp" className="dp-story rounded-circle"/>
      </div>
     
     <p className="text-truncate" style={{width:"50px"}}>{story.username}</p>
     </div>

      ))
):(
<p>Loading</p>
      )}
     </div>
  )
}

export default stories

/*import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from'react-router-dom'
const router=createBrowserRouter(
  [

{
  path:'/',
  element:<App/>
},
{
path:'/story',
element:<ViewStory/>
}

  ]
)

createRoot(document.getElementById('root')).render(

   <RouterProvider router={router}/>
 
)
//npm install react-router-dom*/