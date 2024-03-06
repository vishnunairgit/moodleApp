import React, { useState } from 'react'
import "./signup.css"
// import { signUpUser } from '../../../API/SignUp'
import AxiosInstance from '../../../config/AxiosInstance'

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


    const handleSignUp = () => {
        setloginsignup("Login")
    }

    const handieUserSignUp = () => {
        if (signupData.CompanyName.length < 2) {
            alert('Please enter a company name')
            return;
        }if (signupData.registrationNumber.length < 15) {
            alert('Please enter registration number ')
            return;
        } if (signupData.phonenumber.length<5) {
            alert('Please enter a phonenumber number ')
        }
        if (
            !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                signupData.email
            )
          ) {
            alert('Please enter a valid email address');
            return;
        }if (signupData.password.length<5) {
            alert('Password must contain at least 5 characters.');
            return;
        }if (signupData.password !== signupData.confirmPassword ) {
            alert('Your password and confirmation password do not match')
            return;
        }
        
        


        try {
            AxiosInstance.post('auth/signUp', signupData)
                .then((res) => {
                    console.log(res);
                    if (res.data.message === 'signUp successful') {
                        setloginsignup('Login')
                        alert('signUp successful')
                        
                    }
                    if (res.data.message === 'email is already exist') {
                        alert('email is already exist')
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <>

            {/* <div className='TypeOflogin'>
        <div className='buttonContainer'>
            <button type="button">Candidate</button>
            <button type="button">Employer</button>
        </div>
    </div> */}


            <div className='signupContainers'>
                <div style={{ border: "1px solid #ccc" }} className="signUp">
                    <div className="container">
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account.</p>
                        {/* <form onSubmit={handleSignUp}> */}


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
                            //   onChange={userData}
                            onChange={(e) => { setsignupData({ ...signupData, CompanyName: e.target.value }) }}

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
                            //   onChange={userData}
                            onChange={(e) => { setsignupData({ ...signupData, registrationNumber: e.target.value }) }}

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
                            // onChange={userData}
                            onChange={(e) => { setsignupData({ ...signupData, phonenumber: e.target.value }) }}

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
                            //   onChange={userData}
                            onChange={(e) => { setsignupData({ ...signupData, email: e.target.value }) }}
                            required
                        />

                        <label htmlFor="password">
                            <b>Password</b>
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            value={signupData.password}
                            // onChange={userData}
                            onChange={(e) => { setsignupData({ ...signupData, password: e.target.value }) }}
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
                            // onChange={userData}
                            onChange={(e) => { setsignupData({ ...signupData, confirmPassword: e.target.value }) }}
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