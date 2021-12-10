import React from 'react';
import Navbar from '../components/Navbar';
import "./ProfileScreen.css"
import {useSelector} from 'react-redux'
import {logout, selectUser} from '../features/userSlice'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

function ProfileScreen() {

    const user = useSelector(selectUser)
    const history = useHistory()
    const signout = () => {
        auth.signOut().then(()=> history.push("/"))
    }
    

    return (
        <div className='profileScreen'>
            <Navbar/>
          
          <div className="profileScreen__body">
              <h1>Edit Profile</h1>
              <div className="profileScreen__info">
                  <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
              
              <div className="profileScreen__details">
                  <h2>{user.email}</h2>
                  <div className="profileScreen__plans">
                      <h3>Plans</h3>
                      <div className="profileScreen__plansdetails">
                          <p>Renewal Date: 04/05/2022</p>
                          <div className="profiledetails__block">
                              <h4>Netflix Standard <span>1080p</span></h4>
                              <button>Subscribe</button>
                            
                          </div>

                          <div className="profiledetails__block">
                              <h4>Netflix Basic <span>480p</span></h4>
                              <button>Subscribe</button>
                          </div>

                          
                          <div className="profiledetails__block">
                              <h4>Netflix Premium <span>4k+HDR</span></h4>
                              <button>Current Package</button>
                          </div>

                      </div>

                      <button onClick={signout} className='profileScreen__signout'>Sign Out</button>
                  </div>
              </div>
              </div>
          </div>


        </div>
    )
}

export default ProfileScreen
