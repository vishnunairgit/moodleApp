import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
// import { loginUser } from '../../../API/LoginAPI'
import AxiosInstance from '../../../config/AxiosInstance'

function Login({ setloginsignup }) {

  const [LoginUserData, setLoginUserData] = useState({
    email: '',
    password: '',

  })

  const navigate = useNavigate()

  const handlelogin = () => {
    setloginsignup('Signup')
  }

  // const loginData = (e) => {
  //   setLoginUserData({ ...LoginUserData, [e.target.name]: e.target.value })
  // }

  const handleUserLogin = () => {
    try {
      if (LoginUserData.email && LoginUserData.password) {

        AxiosInstance.post('/auth/Login', LoginUserData).then((res) => {

          console.log(res, '---------res---------------');

          if (res.data.message === "Login successful" && res.data.token) {
            localStorage.setItem('token', res.data.token)
            const parsedToken = parseJwt(res.data.token)

            console.log(parsedToken, '----lllll-----');

            localStorage.setItem('user', JSON.stringify(parsedToken))
            console.log(parsedToken);
            // navigate('/home')
            navigate('/StudentHome')

            alert('Login successful')
          }
          if (res.data.message === "Invalid user credentials") {
            alert('Invalid user credentials')
          }
          if (res.data.message === 'Internal server error') {
            alert('something went wrong')
          }
          // debugger
        })
      }
    } catch (error) {
      alert('user credentials not filled')
      console.log(error);
    }

  }


  function parseJwt(token) {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  }



  return (
    // <div>

    //   <div className='loginContainers'>

    //     {/* <div className='loginContainers' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> */}
    //     <div className='login' style={{ border: '1px solid #ccc' }}>
    //       <div className="container">
    //         <h1 className='m-3'>Login</h1>

    //         <label htmlFor="email"><b>Email</b></label>
    //         <input type="text"
    //           placeholder="Enter Email"
    //           name="email"
    //           value={LoginUserData.email}
    //           required
    //           // onChange={loginData}
    //           onChange={(e)=> {setLoginUserData({ ...LoginUserData, [e.target.name]: e.target.value })}
    //         }

    //         />


    //         <label htmlFor="psw"><b>Password</b></label>
    //         <div className='password-container' >
    //           <input
    //             // type={showPassword ? 'text' : 'password'}
    //             // type={ showPwd ? "text" : "password"}
    //             type='password'
    //             placeholder="Enter Password"
    //             name="password"
    //             value={LoginUserData.password}
    //             required
    //             onChange={(e)=> {setLoginUserData({ ...LoginUserData, [e.target.name]: e.target.value })}}

    //             // onChange={loginData}
    //             />


    //         </div>

    //         {/* </div> */}

    //         <div className="clearfix">
    //           {/* <button type="button" className="cancelbtn">Cancel</button> */}
    //           <button type="submit"
    //             className="button_01"
    //             onClick={handleUserLogin}
    //           >Log In</button>
    //         </div>

    //         <div>
    //           <div className='donthaveaccount'>
    //             <span>Don't have an account? <a onClick={() => handlelogin()} style={{ color: 'blue', fontWeight: '600' }}>Sign up</a> </span>

    //           </div>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='login'>
      <div className='main'>

        <div className='mainheading'>
          <p>Log in to net.America</p>
        </div>

        <div className='input'>
          <input type="text"
            placeholder='Username'
            name="email"
            value={LoginUserData.email}
            onChange={(e) => { setLoginUserData({ ...LoginUserData, [e.target.name]: e.target.value }) }}

          />

          {/* <br /> */}


          <input
            type='password'
            placeholder='Password'
            name="password"
            value={LoginUserData.password}
            required
            onChange={(e) => { setLoginUserData({ ...LoginUserData, [e.target.name]: e.target.value }) }}

          />
        </div>

        <div className='loginbutton'>
          <button className='button_02' type="button" onClick={handleUserLogin}
          >Log In</button>
        </div>
        <div href="">Lost password</div>

        <div className='border'></div>

        <div className='signupbutton'>
          <h5>Is this your first time here?</h5>
          <p>For full access to this site, you first need to create an account.</p>
          <button className='button_01' type="button" onClick={() => handlelogin()}>Create new account</button>
        </div>
        {/* <div className='border'></div> */}

        {/* <div>
          <h2>Some courses may allow guest access</h2>
          <button type="button">Access as a guest</button>

        </div> */}

        {/* <div className='border'></div> */}

        {/* <div>
        <button type="button">Access as a guest</button>

        </div> */}

      </div>




    </div>




  )
}

export default Login