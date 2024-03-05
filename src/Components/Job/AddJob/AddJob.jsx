import React, { useState } from 'react'
import './addjob.css'
import AxiosInstance from '../../../config/AxiosInstance'

function AddJob() {

    const [addJobs, setaddJobs] = useState({
        JobTitle: '',
        Experience: '',
        location: '',
        qualifications: '',
        employmentType: '',
        openings: '',
        date: '',
        Requirements: '',
        Jobdescription: '',
    })



    const HandleAddJOb = (e) => {

        setaddJobs({ ...addJobs, [e.target.name]: e.target.value })

    }

    const habdleaddpost = () => {
        const userId=JSON.parse(localStorage.getItem("user")).userId

        try {
            AxiosInstance.post('admin/addJobpost',{...addJobs, cretedBy:userId})
                .then((res) => {
                    console.log(res);
                    console.log(res.data);
                    if (res.data.message === 'jon added successful') {
                    }
                    
                })
        } catch (error) {
            console.log(error);
        }



    }



    return (//////////
        <div>
            <div className="addjob">
                <h2> POST JOB </h2>
                <form
                //  onSubmit={handleSubmit}
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
                                        onChange={HandleAddJOb}
                                        
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
                                        onChange={HandleAddJOb}
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
                                        onChange={HandleAddJOb}
                                        
                                        required
                                    />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="qualifications">EDUCATIONAL QUALIFICATION</label>
                                </div>
                                <div className="col-75">
                                    <select
                                    type="text"
                                    name="qualifications"
                                        id="qualifications"
                                        placeholder="location..."
                                        value={addJobs.qualifications}
                                        onChange={HandleAddJOb}

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
                                    <label htmlFor="Employment Type">EMPLOYMENT TYPE</label>
                                </div>
                                <div className="col-75">
                                    <select
                                        type="text"
                                        name="employmentType"
                                        id="employmentType"
                                        value={addJobs.employmentType}
                                        onChange={HandleAddJOb}
                                    >
                                        <option value="">Select Employment Type</option>
                                        <option value="Full Time">Full Time</option>
                                        <option value="Part Time">Part Time</option>
                                        <option value="Permanent">Permanent</option>
                                        <option value="Work From Home">Work From Home</option>
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
                                        onChange={HandleAddJOb}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="date">
                                        JOB POST DATE <span className="mandatory-indicator"></span>
                                    </label>
                                </div>
                                <div className="col-75">
                                    <input
                                        value={addJobs.date}
                                        type="date"
                                        id="date"
                                        name="date"
                                        placeholder="date.."
                                        onChange={HandleAddJOb}

                                    />
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-25">
                                    <label htmlFor="Requirements">REQUIREMENTS</label>
                                </div>
                                <div className="col-75">
                                    <textarea
                                    type="text"
                                        value={addJobs.Requirements}
                                        id="Requirements"
                                        name="Requirements"
                                        placeholder="Enter Requirements, each point on a new line..."
                                        onChange={HandleAddJOb}

                                    />
                                </div>
                            </div>

                            <div className="row">
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

                                    
                                    />
                                </div>
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
                            onClick={habdleaddpost}
                        >
                            Submit
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

export default AddJob