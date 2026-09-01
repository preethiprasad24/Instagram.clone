/*import React from 'react'

function ViewStory() {
  return (
    <div>ViewStory</div>
  )
}

export default ViewStory*/




import React, { useState, useEffect } from "react";
import { useParams,Link,useNavigate } from "react-router-dom";

function ViewStory() {

  //const { id,tot } = useParams();
const [story, setStory] = useState(null);
//const navigate=useNavigate()

useEffect(() => {
    fetch(`http://localhost:3000/story/${id}`)
      .then((data) => data.json())
      .then((data) => setStory(data))
      .catch((err) => console.log(err));
  }, []);

//if (id>tot){
 // navigate('/');
//}

 return (

  <div>
   {story ? (
    <div className="d-flex justify-content-center align-items-center">
    
    <img className="str" src={story.image} alt={story.username} />
     
  </div>
) : (
  <div>Loading...</div>
)}
</div>
 );
}

export default ViewStory;


 
 /*
 <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`} ><i className="bi bi-arrow-left-circle-fill"></i></Link>
  <Link to={`http://localhost:5173/story/${Number(id)+1}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
 */



  
  
  
  
  