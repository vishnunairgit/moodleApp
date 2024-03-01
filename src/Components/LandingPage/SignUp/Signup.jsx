import React, { useState } from 'react'
import "./signup.css"
import { signUpUser } from '../../../API/SignUp'

function Signup({ setloginsignup }) {

// ----------------signUp data--------------

    const [signupData, setsignupData] = useState({
        CompanyName: '',
        registrationNumber: '',
        email: '',
        phonenumber: '',
        password: '',
        confirmPassword: "",
    })


const handleSignUp = ()=>{
    setloginsignup("Login")
}

const userData = (e)=>{
    setsignupData({...signupData, [e.target.name]: e.target.value })
}

// const handieUserSignUp = async ()=>{
//     try {
//         const response = await signUpUser(signupData)
//         .then((res)=>{
//             console.log(res);
//             if (res.data.message==='signUp successful') {
//                 setloginsignup("Login")
//                 alert('signUp successful')   
//             }
//             if (res.data.message==='email is already exist') {
//                 alert('email is already exist')

                
//             }
//         })
       
//         console.log(response,'signUp successful');

//     } catch (error) {
//         console.error('Signup error:', error);
//         alert('Signup error')

//     }
// }
const handieUserSignUp = async () => {
    try {
        const response = await signUpUser(signupData);
        console.log(response);

        if (response.data.message === 'signUp successful') {
            setloginsignup("Login");
            alert('Sign up successful');
        } if (response.data.message === 'email is already exist') {
            alert('Email is already exist');
        }

    } catch (error) {
        console.error('Signup error:', error);
        alert('Signup error');
    }
};



    return (

        <>

            {/* <div className='TypeOflogin'>
        <div className='buttonContainer'>
            <button type="button">Candidate</button>
            <button type="button">Employer</button>
        </div>
    </div> */}


            <div className='signupContainers '>
                <div style={{ border: "1px solid #ccc" }} className="signUp">
                    <div className="container">
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account.</p>
                        {/* <form onSubmit={handleSignUp}> */}

                        {/* <div className="namefullname">

                            <div className="input-group">
                                <label htmlFor="firstName">
                                    <b>First Name</b>
                                </label>{" "}
                                <br />
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstName"
                                    value={signupData.firstName}
                                    required
                                    onChange={userData}
                                // pattern="[A-Za-z]+"
                                // minLength="4"
                                // title="Please enter only alphabetic characters with"

                                />
                            </div>
                           

                        </div> */}
                          <label htmlFor="CompanyName">
                            <b>Company Name</b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Company Name"
                            // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            // title="Please enter a valid email address"
                            name="CompanyName"
                              value={signupData.CompanyName}
                              onChange={userData}
                            required
                        />
                          <label htmlFor="registrationNumber">
                            <b>registration number </b>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter registration number"
                            // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            // title="Please enter a valid email address"
                            name="registrationNumber"
                              value={signupData.registrationNumber}
                              onChange={userData}
                            required
                        />

                            <label htmlFor="phonenumber">
                            <b>phone number </b>
                             </label>
                        <input
                            type="number"
                            placeholder="Enter phone number"
                            name="phonenumber"
                            value={signupData.phonenumber}
                            onChange={userData}
                            required
                        />

                        <label htmlFor="email">
                            <b>Email</b>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            // title="Please enter a valid email address"
                            name="email"
                              value={signupData.email}
                              onChange={userData}
                            required
                        />

                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={userData}

                            // minLength="8"
                            // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                            // title="Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, and one number."
                              value={signupData.password}
                            //   onChange={(e)=>{setsignUpData({...signUpData, password:e.target.value})}}
                            required
                        />

                        <label htmlFor="confirm Password">
                            <b>confirm Password</b>
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm Password"
                            value={signupData.confirmPassword}
                            onChange={userData}

                            //   onChange={(e)=>{setsignUpData({...signUpData, confirmPassword:e.target.value})}}
                            required
                        />

                        {/* <label>
                    <input
                        type="checkbox"
                        checked="checked"
                        name="remember"
                        style={{ marginBottom: "15px" }}
                    />{" "}
                    Remember me
                    </label> */}

                        {/* <p>
                            By creating an account, you agree to our{" "}
                            <a href="#" style={{ color: "dodgerblue" }}>
                                Terms & Privacy
                            </a>
                        </p> */}

                        <div className="clearfix">
                            {/* <button type="button" className="cancelbtn">Cancel</button> */}
                            <button type="button" className="signupbtn"
                              onClick={handieUserSignUp}
                            >
                                Sign Up
                            </button>
                        </div>
                        {/* </form> */}
                        <div>
                            <div>
                                <span>
                                    Have an account?{" "}
                                    <span
                                        // both onClik are correct. once we clik the function that time only we need call the function 
                                        // onClick={handilSignUp}
                                          onClick={() => handleSignUp()}
                                        style={{ color: "blue", fontWeight: "600" }}>
                                        Log in
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}
 
export default Signup