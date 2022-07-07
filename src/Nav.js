import React, { useEffect, useState } from 'react'
import "./Nav.css"
import Netflix from './assets/images/netflix-logo.png';
import Avatar from './assets/images/avatar.png';
import {Link} from 'react-router-dom';

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar=()=>{
        if (window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar);
        return ()=> window.removeEventListener('scroll',transitionNavBar)
    },[])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className='nav__contents' to={"/profile"}> 
            <Link to={"/"}>
            <img src={Netflix}  className="nav__logo" alt="netflix"/>
            </Link>
            <Link to={"/profile"}>
            <img src={Avatar} className="nav__avatar" alt="netflix"/>
            </Link>
        </div>  
    </div>
  )
}

export default Nav