import React, { useState } from 'react'
import "./login.css"
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../API/LoginAPI'

function Login({ setloginsignup }) {

const [LoginUserData, setLoginUserData] = useState({
    email:'',
    password: '',

})

const  navigate =useNavigate()

const handlelogin = ()=>{
  setloginsignup('Signup')
}

const loginData =(e)=>{
  setLoginUserData({...LoginUserData, [e.target.name]: e.target.value }) 
}


const handleUserLogin = async () => {

const userData = await  loginUser(LoginUserData)
setLoginUserData({ ...LoginUserData, error:null});

  if (userData && userData.token) {
    debugger
    localStorage.setItem("token", userData.token )
    const parsedToken = parseJwt(userData.token)

    console.log(userData.token);
    console.log(parsedToken, '----parsedToken-----');

    localStorage.setItem("user", JSON.stringify(parsedToken));

    alert('Login Successful')
    navigate('/home')



        // Clear password from state
        setLoginUserData({ ...LoginUserData, password: '' });

      }else if (userData && userData.error) {
        alert(userData.error)
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

// const handleUserLogin = ()=>{
//   navigate('/home')
// }

  return (
    <div>

    <div className='loginContainers'>

{/* <div className='loginContainers' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}> */}
      <div className='login' style={{ border: '1px solid #ccc' }}>
        <div className="container">
          <h1>Login</h1>

          <label htmlFor="email"><b>Email</b></label>
          <input type="text"
            placeholder="Enter Email"
            name="email"
            value={LoginUserData.email}
            required
            onChange={loginData}
            />


          <label htmlFor="psw"><b>Password</b></label>

          <div className='password-container' > 
          
              <input 
                  // type={showPassword ? 'text' : 'password'}
                // type={ showPwd ? "text" : "password"}
                type='password'
                placeholder="Enter Password"
                name="password"
                required
                value={LoginUserData.password}
                onChange={loginData}
              />
              
              {/* {shouldShowImg &&
                <img 
                src={showPwd ? pwd.hidepwd :pwd.showpwd } 
                alt={showPwd ? "pwd.hidepwd" :"pwd.showpwd" } 
                className='pwd-img'
                onClick={()=> setShowPwd(!showPwd)}
                />} */}

                  {/* <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Hide" : "Show"}
                  </button> */}

          </div>
          
          {/* </div> */}

       



          <div className="clearfix">
            {/* <button type="button" className="cancelbtn">Cancel</button> */}
            <button type="submit"
              className="button_01"
              onClick={handleUserLogin}
            >Log In</button>
          </div>

          <div>
            <div>
            <span>Don't have an account? <span onClick={() => handlelogin()} style={{ color: 'blue', fontWeight: '600' }}>Sign up</span> </span>

              
            </div>

          </div>
        </div>
      </div>


    </div>


    </div>

    


  )
}

export default Login