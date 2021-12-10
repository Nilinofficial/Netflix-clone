import React,{useRef,useEffect, useState} from 'react';
import "./LoginScreen.css"
import SignInScreen from './SignInScreen';

function LoginScreen() {
    
          const [signIn,setSignIn]=useState(false)

    const inputRef = useRef(null)

    useEffect(() => {
              inputRef.current.focus()
    },[])




    return (
        <div className="loginscreen">
            <div className="loginscreen__background">
                <img className="loginscreen__logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />

                  {
                      signIn ? <> </> :   <button 
                      onClick={() => setSignIn(true)}
                      className="loginscreen__button"> 
                      Sign in
                      </button>
                  }

              
            </div>

          <div className="loginscreen__gradient">

          </div>

                 <div className="loginscreen__body">
                    {signIn ? <SignInScreen/> : 
              (
                <>
                <h1>Unlimited films,TV programmes and more.</h1>
             
              <h2>Watch anywhere.Cancel any time.</h2>

              <h3>
                  Ready to watch?Enter your email to create or restart your membership.
              </h3>

             <div  className="loginscreen__input">
                 <form>

                 <input ref={inputRef} type="email" placeholder="Email address" />
                 <button onClick={() => setSignIn(true)} className="loginscreen__getstarted">GET STARTED</button>
                 </form>
                 
             </div>

                </>    
              )
                }
                 </div>
        </div>
    )
}

export default LoginScreen
