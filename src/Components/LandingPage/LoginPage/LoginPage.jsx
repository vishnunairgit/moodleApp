import React, { useState } from 'react'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'

function LoginPage() {

    const [loginsignup, setloginsignup] = useState('Login')

  return (
    <div className='bg-primary'>
        {loginsignup === 'Login' && <Login setloginsignup ={setloginsignup} />}
        {loginsignup === 'Signup' && <Signup setloginsignup ={setloginsignup} />}
    </div>
  )
}

export default LoginPage