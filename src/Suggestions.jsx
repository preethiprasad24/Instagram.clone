
import React, { useState, useEffect } from "react";


function Suggestions() {
const[profile,setProfile]=useState(null);
const [suggestions,setSuggestions]=useState([]);

useEffect(()=>{
fetch(`${import.meta.env.BASE_URL}db.json`).
then (data => data.json()).
then(data => setProfile(data.suggestions)).
catch(err => console.log(err))


fetch(`${import.meta.env.BASE_URL}db.json`).
then (data => data.json()).
then(data => setSuggestions(data.suggestions)).
catch(err => console.log(err))

},[]);


  return (
    <div>
      <div className="suggestions w-75 m-4">
        {profile?
   <div className="d-flex">  
            <img className="dp rounded-circle" src={profile.profileImage}alt="profile picture"/>
            <h6>{profile.username}</h6>
            <small className="ms-auto text-primary">Switch</small>
            </div>
         :<p>Loading</p>}
<div className="d-flex">
  <p>Suggested for you </p>
  <b className='ms-auto'> See All</b>
</div>
{suggestions.length>0?(
      <div>
        {suggestions.map((suggestion)=>(
          <div  key={suggestion.id}>
            <div className="d-flex">  
            <img className="dp rounded-circle" src={suggestion.profileImage}alt="profile picture"/>
            <h5>{suggestion.username}</h5>
            <p className="ms-auto text-primary">Follow</p>
            </div>
          </div>
        ))}
      </div>
   ):(
     <div>
        Loading 
    </div>
   )}
      </div>
    
            </div>
  )
}

export default Suggestions