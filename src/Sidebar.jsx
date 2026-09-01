import React from 'react'
import {useNavigate} from 'react-router-dom'

function Sidebar() {
  const navigate=useNavigate();
  return (
<div className='m-3 position-fixed'>    

  <div className='d-flex flex-column gap-3'>
     <div><img className="logo-text" src="./src/assets/insta.png" alt="medicine"/></div>
     <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>Home</div>
     <div><i className="bi bi-search"></i> Search</div>
     <div><i className="bi bi-compass"></i> Explore</div>
     <div><i className="bi bi-play-btn"></i> Reels</div>
     <div><i className="bi bi-chat-dots-fill"></i>Messages</div>
     <div><i className="bi bi-bell"></i>Notifications</div>
     <div><i className="bi bi-plus-circle"></i>Create</div>
     <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
    </div>
 <div className='position-fixed bottom-0 d-flex flex-column gap-3 mb-5'>

<div><i className="bi bi-threads-fill"></i>Threads</div>
<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>More</div>
</div>

</div>
  ) 
}

export default Sidebar