import React, { useEffect, useState } from 'react'
import './companydetails.css'
import AxiosInstance from '../../../config/AxiosInstance'
import { useNavigate } from 'react-router-dom'



function CompanyView() {
    const  navigate =useNavigate()

    const [companyDetails, setcompanyDetails] = useState([])
  
    useEffect(()=>{
  
      GetUserData()
  
    },[])
  
     const GetUserData = async () => {
      
      const userId=JSON.parse(localStorage.getItem("user")).userId
  
      debugger
      try {
        const response = await AxiosInstance.get('/admin/GetUser' , {params:{userId}})
        debugger
        setcompanyDetails(response.data);
        console.log(setcompanyDetails, '------------------setSingleuser--------------');
      } catch (error) {
        console.log(error, '-----------error-----------');
        console.error('Error fetching data:', error)
      }
    };
  
    // ------------edit company----------------------
  
    const mailID = companyDetails.email
    
    const handleedit = ()=>{
      navigate(`/editCompany/${mailID}`)
    }
  
  
    return (
      <div>
        <div className="Account">
          <h2> COMPANY DETAILS </h2>
          <form
          //  onSubmit={handleSubmit}
          >
            <div className="container">
              <div className="leftSide-container">
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="CompanyName">
                      COMPANY NAME <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
  
                  <div className="col-75">
                    <input
                      type="text"
                      id="CompanyName"
                      name="CompanyName"
                      placeholder="Company Name.."
                      value={companyDetails?.CompanyName}
                      required
                    />
                    <span> </span>
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="registration-Number">
                      REGISTRATION NO <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="registration-Number"
                      name="registrationNumber"
                      placeholder="RegistrationNumber.."
                      value={companyDetails?.registrationNumber}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="email">EMAIL</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="email.."
                      value={companyDetails?.email}
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="email">PHONE NUMBER</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="number"
                      id="phonenumber"
                      name="phonenumber"
                      placeholder="email.."
                      value={companyDetails?.phonenumber}
  
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Address">
                      ADDRESS <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="Address"
                      name="Address"
                      placeholder="Address.."
                   
                    />
                  </div>
                </div>
  
              
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="website">
                      WEBSITE <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="website"
                      name="website"
                      placeholder="website.."
                      
                      required
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="LinkedIn ">
                      LINKEDLN ID  <span className="mandatory-indicator">*</span>
                    </label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="LinkedIn "
                      name="LinkedIn "
                      placeholder="LinkedIn .."
                     
                      required
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Industry">TYPE INDUSTRY</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="Industry"
                      name="Industry"
                      placeholder="Industry.."
                    
                    />
                  </div>
                </div>
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="Founded">INCORPORATION DATE</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="date"
                      id="Incorporationdate"
                      name="Incorporationdate"
                      placeholder="ncorporation date.."
                   
                    />
                  </div>
                </div>
  
  
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="about">ABOUT</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      type="text"
                      id="about"
                      name="about"
                      placeholder="about the comapny..."
                   
                    />
                  </div>
                </div>
  
  
              </div>
  
  
              <div className="rightSide-container">
                <div className="rightSide-container-2">
  
                  {/* <div className="text">
                    <h5>UPLOAD Logo</h5>
                  </div>
                  <div className="fileupload">
                    <label htmlFor="imageUpload">SELECT AN IMAGES</label>
                    <input
                      type="file"
                      id="imageUpload"
                      name="imageUpload"
                      accept="image/*"
                    />
                    <br />
  
                  </div>
                  <div className="text">
                    <h5>UPLOAD FILES</h5>
                  </div>
                  <div className="fileupload">
                    <label htmlFor="imageUpload">SELECT AN IMAGES</label>
                    <input
                      type="file"
                      id="imageUpload"
                      name="imageUpload"
                      accept="image/*"
                    />
                    <br />
                  </div>
   */}
  
  
  
                </div>
              </div>
  
            </div>
  
            {/* {error && <ErrorMessage message={error} />} */}
            <div className="buttonHolder">
              {/* <span><h3></h3></span> */}
              <button
                className="button-17"
                type="submit"
                style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
                onClick={handleedit}
              >
                Edit
              </button>
              <button
                className="button-17"
                // onClick={handleReset}
                style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}
              >
                Reset
              </button>
              <button
                className="button-17"
                // onClick={handleCancel}
                style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
  
  
  
  
  
  
      </div>
    )
  }
export default CompanyView