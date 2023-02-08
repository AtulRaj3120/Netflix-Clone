import React, { useState } from 'react'
import '../CSS/Login.css'
import SignUpScreen from './SignUpScreen'

function Login() {
    const [signIn, setSignIn] = useState(false)
    return (
        <div className='loginScreen'>
            <div className="loginScreen__background">
                <img className='loginScreen__logo' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
                <button onClick={() => setSignIn(true)} className='loginScreen__button'>Sign In</button>
                <div className="loginScreen__gradient" />
            </div>
            <div className="loginScreen__body">
                {signIn ? (<SignUpScreen />) :
                    <>
                        <h1>Unlimited Films, TV Programmes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to create or restart your membership</h3>

                        <div className="loginScreen__input">
                            <form >
                                <input type="email" placeholder='Email Address' />
                                <button onClick={() => setSignIn(true)} className='loginScreen__getStarted'>Get Started</button>
                            </form>
                        </div>
                    </>}
            </div>
        </div>
    )
}

export default Login