import React, { useState } from 'react';
import './landing.css';
import Logo from "../../Assets/net.america.png"
import { useNavigate } from 'react-router-dom';
import Login from '../Login/Login';
import Signup from '../SignUp/Signup';


function Langing() {


  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/LoginPage')
  }


  // signup

  return (
    <>
      <div className='landingNav'>
        <div className='landingLogo'>
          <div className='company_name'>
            net.America
          </div>
          <div>
            <img src={Logo} alt="" />
          </div>
        </div>
        <div>
        </div>
        <div className=''>
          <button className='button_01' type="button" onClick={handleLogin} >Login</button>
        </div>

          </div>
          <div>
      </div>
    </>
  )
}

export default Langing