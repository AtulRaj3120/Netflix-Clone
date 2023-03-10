import React from 'react'
import { useSelector } from 'react-redux'
import '../CSS/profileScreen.css'
import NavBar from './NavBar'
import { selectUser } from '../features/counter/userSlice'
import { auth } from '../firebase'

function Profile() {

  const user = useSelector(selectUser)

  return (
    <div className='profileScreen'>
      <NavBar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile