import React, { useRef } from 'react'
import "./signUpScreen.css";
import { auth } from '../firebaseHandler';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  const register = (e) => { 
    e.preventDefault();   
    
    createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)           
          .then((authUser)=>{
            console.log(authUser)
        }).catch(error=>{
          alert(error.message)
        });

  }
  const signIn = (e) => { 
    e.preventDefault();

    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
    .then((authUser)=>{
      console.log(authUser);
    }).catch(error=>{
      alert(error.message)
    });

}

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="input"/>
        <input ref={passwordRef} placeholder='Password' type="password"/>
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>New to Netflix? <strong onClick={register}>Sign up now.</strong></h4>
      </form>
    </div>
  )
}

export default SignUpScreen