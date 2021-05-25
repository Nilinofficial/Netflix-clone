import './Navbar.css'
import {useState,useEffect} from 'react'

function Navbar() {

   const [show,handleShow] = useState(false)

   const transitionNavbar = () => {
       if (window.scrollY >100)
       {
               handleShow(true)
       }
       else {
          handleShow(false)
       }
   }




           useEffect( ()=> {
              window.addEventListener('scroll' , transitionNavbar)
              return () => 
              {
                  window.removeEventListener('scroll' , transitionNavbar)
              }
           } ,[])

        

    return (
        <div className={`navbar  ${show && "navbar__black"}`}>

            <div className="navbar__content">

                <img className="navbar__logo" src="https://pngimg.com/uploads/netflix/netflix_PNG26.png" alt="" />


                <img className="navbar__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            </div>



        </div>
    )
}

export default Navbar
