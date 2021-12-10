import React, { useState } from 'react';
import "./SignInScreen.css"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'


function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")


  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      })
  }

  return (
    <div className="signupscreen">
      <form >

        <h1>Sign In</h1>
        <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button
          onClick={signIn}
          className="sigupscreen__button"
          type="submit">Sign In</button>
        <h4>New to Netflix? <span onClick={register}>Sign up now</span></h4>
      </form>
    </div>
  )
}

export default SignInScreen
