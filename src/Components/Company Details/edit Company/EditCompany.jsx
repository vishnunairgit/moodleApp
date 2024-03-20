import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../config/AxiosInstance'
import { useNavigate, useParams } from 'react-router-dom'
import { Alert } from 'bootstrap'


function EditCompany() {
  const navigate = useNavigate()

  // const [companyDetails, setcompanyDetails] = useState([])
  const [editcompanyData, seteditcompanydata] = useState({
    CompanyName: '',
    registrationNumber: '',
    email: '',
    phonenumber: '',
    Address: '',
    website: '',
    LinkedIn: '',
    Industry: '',
    Incorporationdate: '',
    about: '',
    password: '',
    confirmPassword: "",

  })

  const [EditcompanyFiles, setEditcompanyFiles] = useState({
    logoUpload: null,
    imageUpload: null
  });

  useEffect(() => {
    GetUserData()
  }, [])

  const GetUserData = async () => {

    const userId = JSON.parse(localStorage.getItem("user")).userId

    try {
      const response = await AxiosInstance.get('/admin/GetUser', { params: { userId } })
      // debugger
      seteditcompanydata(response.data)
    } catch (error) {
      console.log(error, '-----------error-----------');
      console.error('Error fetching data:', error)
    }
  };


  const editdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    seteditcompanydata({ ...editcompanyData, [name]: value })

  }


  const Editcompanyfile = (e) => {
    const file = e.target.files[0];
    const fieldName = e.target.name;

    setEditcompanyFiles({ ...EditcompanyFiles, [fieldName]: file });
  }

  const handleeditSubmit = async () => {

    let fileData = new FormData();
    fileData.append('CompanyName', EditcompanyFiles?.CompanyName);
    fileData.append('registrationNumber', EditcompanyFiles?.registrationNumber);
    fileData.append('email', EditcompanyFiles?.email);
    fileData.append('phonenumber', EditcompanyFiles?.phonenumber);
    fileData.append('Address', EditcompanyFiles?.Address);
    fileData.append('website', EditcompanyFiles?.website);
    fileData.append('LinkedIn', EditcompanyFiles?.LinkedIn);
    fileData.append('Industry', EditcompanyFiles?.Industry);
    fileData.append('Incorporationdate', EditcompanyFiles?.Incorporationdate);
    fileData.append('about', EditcompanyFiles?.about);
    fileData.append('password', EditcompanyFiles?.password);

    fileData.append('confirmPassword', EditcompanyFiles?.confirmPassword);




      fileData.append('logoUpload', EditcompanyFiles?.logoUpload);
      fileData.append('imageUpload', EditcompanyFiles?.imageUpload);
  
    try {
      debugger;
      const response = await AxiosInstance.post('admin/GetEditcompany', fileData, {
        // params: editcompanyData, // This typically wouldn't work as expected with a multipart/form-data request.
        headers: { 'Content-Type': "multipart/form-data" }, // You might not need to manually set this header when using FormData with Axios.
      });
      debugger;
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }

  const handleCancel = () => {
    navigate(-1)
  }






  return (
    <>
      <div>
        <div className="Account">
          <h2> COMPANY DETAILS </h2>
          {/* <form
           onSubmit={handleeditSubmit}
          > */}
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
                    value={editcompanyData?.CompanyName}
                    required
                    onChange={editdata}
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
                    value={editcompanyData?.registrationNumber}
                    required
                    onChange={editdata}

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
                    value={editcompanyData?.email}
                    onChange={editdata}

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
                    value={editcompanyData?.phonenumber}
                    onChange={editdata}

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
                    value={editcompanyData?.Address}
                    onChange={editdata}


                  />
                </div>
              </div>


              <div className="row">
                <div className="col-25">
                  <label htmlFor="website">
                    WEBSITE ID<span className="mandatory-indicator">*</span>
                  </label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="website"
                    name="website"
                    placeholder="website.."
                    value={editcompanyData?.website}
                    onChange={editdata}

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
                    value={editcompanyData?.LinkedIn}
                    onChange={editdata}

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
                    value={editcompanyData?.Industry}
                    onChange={editdata}

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
                    value={editcompanyData?.Incorporationdate}
                    onChange={editdata}

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
                    value={editcompanyData?.about}
                    onChange={editdata}

                  />
                </div>
              </div>


            </div>


            <div className="rightSide-container">
              <div className="rightSide-container-2">

                <div className="text">
                  <h5>UPLOAD Logo</h5>
                </div>
                <div className="fileupload">
                  <label htmlFor="logoUpload">SELECT AN IMAGES</label>
                  <input
                    type="file"
                    id="logoUpload"
                    name="logoUpload"
                    accept="image/*"
                    onChange={Editcompanyfile}

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
                    onChange={Editcompanyfile}
                  />
                  <br />
                </div>

                {EditcompanyFiles.logoUpload && (
                  <img
                    src={URL.createObjectURL(EditcompanyFiles.logoUpload)}

                    // src={petFiles.petThumbnails}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                )}
                {EditcompanyFiles.imageUpload && (
                  <img
                    src={URL.createObjectURL(EditcompanyFiles.imageUpload)}

                    // src={petFiles.petThumbnails}
                    alt=""
                    style={{ width: "100px", height: "100px" }}
                  />
                )}




              </div>
            </div>

          </div>

          {/* {error && <ErrorMessage message={error} />} */}
          <div className="buttonHolder">
            {/* <span><h3></h3></span> */}
            <button
              className="button_01"
              type="submit"
              style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
              onClick={handleeditSubmit}
            >
              submit
            </button>

            {/* <button
                className="button-17"
                // onClick={handleReset}
                style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}
              >
                Reset
              </button> */}

            <button
              className="button_03"
              onClick={handleCancel}
              style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}
            >
              Cancel
            </button>
          </div>
          {/* </form> */}
        </div>






      </div>
    </>

  );



}


export default EditCompany