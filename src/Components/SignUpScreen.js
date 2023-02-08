import React, { useRef } from 'react'
import '../CSS/SignUpScreen.css'
import { auth } from '../firebase'

function SignUpScreen() {

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (event) => {
    // Prevent Reloading
    event.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value, passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  const signIn = (event) => {
    // Prevent Reloading
    event.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value, passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch((error) => {
      alert(error.message)
    })
  }

  return (
    <div className='SignUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type='email' />
        <input ref={passwordRef} placeholder='Password' type='password' />
        <button onClick={signIn} type='submit'>Submit</button>

        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span onClick={register} className='signupScreen__link'>Sign up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen