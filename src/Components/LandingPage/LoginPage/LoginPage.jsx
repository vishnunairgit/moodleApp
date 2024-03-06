import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'
import Logo from "../../Assets/net.america.png"


function LoginPage() {

    const [loginsignup, setloginsignup] = useState('Login')

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
          {/* <button className='button_01' type="button" onClick={handleLogin} >Login</button> */}
        </div>

          </div>
          <div>
      </div>
    <div className=''>
        {loginsignup === 'Login' && <Login setloginsignup ={setloginsignup} />}
        {loginsignup === 'Signup' && <Signup setloginsignup ={setloginsignup} />}
    </div>
    </>
    
  )
}

export default LoginPage