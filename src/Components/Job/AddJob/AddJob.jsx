import React, { useState } from 'react'
import './addjob.css'
import AxiosInstance from '../../../config/AxiosInstance'
import { useNavigate } from 'react-router-dom'

function AddJob() {


    const  navigate =useNavigate()




    const [addJobs, setaddJobs] = useState({
        CreatedBy: "",
        JobTitle: '',
        Experience: '',
        location: '',
        qualifications: '',
        employmentType: '',
        openings: '',
        date: '',
        Requirements: '',
        // Jobdescription: '',
    })

   

    const handleAddJOb = (e) => {

        setaddJobs({ ...addJobs, [e.target.name]: e.target.value })

    }

    const handleaddpost = (e) => {
        e.preventDefault(); 

        const userId=JSON.parse(localStorage.getItem("user")).userId

        try {
            AxiosInstance.post('admin/addJobpost',{...addJobs, CreatedBy:userId})
                .then((res) => {
                    if (res.data.message === 'job added successful') {
                        alert('job added successful')
                        navigate('/alljob')
                    }
                    else{
                        alert('Internal Server Error')
                    }
                    
                })
        } catch (error) {
            console.log(error);
        }

    
    }
// ---------------------------Cancel button---------------------------
const handleCancel = ()=>{
    navigate(-1)

}



// ---------------------------Reset button---------------------------


const handleReset = () => {
    setaddJobs({
        CreatedBy: "",
        JobTitle: '',
        Experience: '',
        location: '',
        qualifications: '',
        employmentType: '',
        openings: '',
        date: '',
        Requirements: '',
    });
};



    return (//////////
        <div>
            <div className="addjob">
                <h2> POST JOB </h2>
                <form
                 onSubmit={handleaddpost}
                >
                    <div className="container">
                        <div className="leftSide-container">

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="JobTitle">
                                        JOB TITLE <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>

                                <div className="col-75">
                                    <input
                                        value={addJobs.JobTitle}
                                        type="text"
                                        id="JobTitle"
                                        name="JobTitle"
                                        placeholder="JobTitle.."
                                        onChange={handleAddJOb}
                                        required
                                    />
                                    <span> </span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Experience ">
                                        EXPERIENCE <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                
                                        value={addJobs.Experience}
                                        type="text" 
                                        id="Experience"
                                        name="Experience"
                                        placeholder="3-4.."
                                        onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="location ">
                                        JOB LOCATION <span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                        value={addJobs.location}
                                        type="text"
                                        id="location"
                                        name="location"
                                        placeholder="location.."
                                        onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="qualifications">EDUCATIONAL QUALIFICATION
                                    <span className="mandatory-indicator">*</span></label>
                                </div>
                                <div className="col-75">
                                    <select
                                    type="text"
                                    name="qualifications"
                                        id="qualifications"
                                        placeholder="location..."
                                        value={addJobs.qualifications}
                                        onChange={handleAddJOb}
                                        required

                                    >
                                        <option value="">Select qualifications</option>
                                        <option value="B-Tech">B-Tech</option>
                                        <option value="M-Tech">M-Tech</option>
                                        <option value="MBA">MBA</option>

                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Employment Type">EMPLOYMENT TYPE
                                    <span className="mandatory-indicator">*</span></label>
                                </div>
                                <div className="col-75">
                                    <select
                                        type="text"
                                        name="employmentType"
                                        id="employmentType"
                                        value={addJobs.employmentType}
                                        onChange={handleAddJOb}
                                        required
                                    >
                                        <option value="">Select Employment Type</option>
                                        <option value="Remote">Remote</option>
                                        <option value="Hybrid">Hybrid</option>
                                        <option value="Work From Office">Work From Office</option>

                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="openings">OPENINGS</label>
                                </div>
                                <div className="col-75">
                                    <input
                                        value={addJobs.openings}
                                        type="number"
                                        id="openings"
                                        name="openings"
                                        placeholder="3.."
                                        onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="date">
                                        JOB POST DATE<span className="mandatory-indicator">*</span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                        value={addJobs.date}
                                        type="date"
                                        id="date"
                                        name="date"
                                        placeholder="date.."
                                        onChange={handleAddJOb}
                                        required

                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Requirements">REQUIREMENTS
                                    <span className="mandatory-indicator">*</span></label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                    type="text"
                                        value={addJobs.Requirements}
                                        id="Requirements"
                                        name="Requirements"
                                        placeholder="Enter Requirements, each point on a new line..."
                                        onChange={handleAddJOb}
                                        required
                                    />
                                </div>
                            </div>

                            {/* <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Jobdescription">JOB DESCRIOTION</label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                    type="text"
                                        value={addJobs.Jobdescription}
                                        id="Jobdescription"
                                        name="Jobdescription"
                                        placeholder="Enter Jobdescription, each point on a new line..."
                                        onChange={HandleAddJOb}
                                        required
                                    />
                                </div>
                            </div> */}



                        </div>

                    </div>

                    {/* {error && <ErrorMessage message={error} />} */}
                    <div className="buttonHolder">
                        {/* <span><h3></h3></span> */}
                        <button
                            className="button_03"
                            onClick={handleCancel}
                            // style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}
                        >
                            Back
                        </button>
                      
                        <button
                            className="button_02"
                            onClick={handleReset}
                            // style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}
                        >
                            Reset
                        </button>
                       

                        <button
                            className="button_01"
                            type="submit"
                                            //  onClick={habdleaddpost}

                            // style={{ backgroundColor: "rgb(10, 150, 250)", color: "white" }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>






        </div>
    )
}

export default AddJob