import React, { useEffect, useState } from 'react'
import Navbar from '../Dashboard/Navbar'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const UserProfile = () => {
  const location = useLocation()
  const userId = location.pathname.split('/')[2]

  const [userData, setuserdata] = useState()

  useEffect(() => {
    if(!userId) return;

    try {
    axios.get(`http://localhost:4000/users/${userId}`).then((response) => {
      console.log(response.data)
      setuserdata(response?.data[0])
    });

    } catch (error) {
      console.log({error})
    }

    
  }, [userId])
  
  
  return (
    <>
      <Navbar />
      <div className="container">
      <div className='profile'>

        {userData && Object.entries(userData)?.map(([key, val]) => {
          if(key === '_id' || !val) return;

          return <div key={key} className='profile-card'>
            <span className='profile-attr'>{key}</span>
            <span className='profile-val'>{val}</span>
          </div>
        })}
      </div>
      </div>
    </>
  )
}

export default UserProfile