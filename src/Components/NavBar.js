import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../CSS/NavBar.css"

function NavBar() {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    // Event Handler Function
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    // Everytime we scroll we want to listen to that event (Component Did Mount)
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        // CleanUp - Just for sanity
        // Removes an event handler from the window
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className={`NavBar ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img onClick={() => navigate('/')} className="nav__logo"
                    src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                    alt="" />

                <img onClick={() => navigate('/profile')} className='nav__avatar'
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="" />
            </div>
        </div>
    )
}

export default NavBar