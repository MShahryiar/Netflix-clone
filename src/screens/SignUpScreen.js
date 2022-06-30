import React from 'react'
import "./signUpScreen.css";

function SignUpScreen() {

  const register = (e) => { 
        e.preventDefault();
  }
  const signIn = (e) => { 
    e.preventDefault();
}

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type="input"/>
        <input placeholder='Password' type="password"/>
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>New to Netflix? <strong onClick={register}>Sign up now.</strong></h4>
      </form>
    </div>
  )
}

export default SignUpScreen