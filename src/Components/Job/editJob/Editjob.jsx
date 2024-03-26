import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../config/AxiosInstance';
import { useNavigate, useParams } from 'react-router-dom';
import { formatDate, formatDateForInput } from '../../../helpers/helpers';

function Editjob() {
    const  navigate =useNavigate()

    const [Jobeditdata, setJobeditdata] = useState({})

    const { id } = useParams();


    useEffect(() => {
        getSingleJobeditData()

    }, [])

    const getSingleJobeditData = async () => {
        try {
            const response = await AxiosInstance.get('/admin/getSingleJobdata', { params: { jobId: id } })
            debugger
            setJobeditdata(response.data)
            console.log(response.data, '----------singleJobdata------------');
        } catch (error) {
            console.log(error);


        }
    }

    const handleEditJOb = (e)=>{
       const name = e.target.name;
       const  value = e.target.value
        setJobeditdata({...Jobeditdata, [name]: value}) 
    }

    const handleEditJobs = async ()=>{

        try {
            const response = await AxiosInstance.post('/admin/editJob',Jobeditdata)
            debugger
            console.log(response.data);
            alert('Job successfully updated.');
            getSingleJobeditData()
        } catch (error) {
            // Network errors
            if (!error.response) {
                console.error('Error: Network Error');
                alert('Unable to connect to the server. Please try again later.');
            } else {
                // API responded with an error status code
                console.error('API Error:', error.response.data.message);
                alert(`Error updating job: ${error.response.data.message}`);
            }
        }

    }


    const handleDeleteJob = async () =>{
        if (window.confirm('Are you sure you want to delete this job?')) {
           try {
             const response = await AxiosInstance.delete('/admin/Deletejob', { params: {jobId: id}}) 
             if (response.status === 200) {
                console.log(response.data);
                alert('The job has been successfully deleted.');
                navigate('/alljob');
            } else {
                // If the response status is not 200, handle accordingly
                console.error('Unexpected response status:', response.status);
                alert('There was an unexpected issue deleting the job.');
            }

           } catch (error) {
            console.error('Failed to delete the job:', error);
            alert('There was an issue deleting the job.');
        }
    }
    
}






    const handleCancel = () => {
        navigate('/alljob');
    };
    


    return (

        <>

            <div>
                <div className="addjob">
                    <h2> EDIT JOB </h2>
                    <form
                     onSubmit={handleEditJobs}
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
                                            value={Jobeditdata.JobTitle}
                                            type="text"
                                            id="JobTitle"
                                            name="JobTitle"
                                            placeholder="JobTitle.."
                                            onChange={handleEditJOb}
                                            // required
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

                                            value={Jobeditdata.Experience}
                                            type="text"
                                            id="Experience"
                                            name="Experience"
                                            placeholder="3-4.."
                                            onChange={handleEditJOb}
                                            // required
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
                                            value={Jobeditdata.location}
                                            type="text"
                                            id="location"
                                            name="location"
                                            placeholder="location.."
                                            onChange={handleEditJOb}
                                            // required
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
                                            value={Jobeditdata.qualifications}
                                            onChange={handleEditJOb}
                                            // required

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
                                            value={Jobeditdata.employmentType}
                                            onChange={handleEditJOb}
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
                                            value={Jobeditdata.openings}
                                            type="number"
                                            id="openings"
                                            name="openings"
                                            placeholder="3.."
                                            onChange={handleEditJOb}
                                            // required
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
                                            value={formatDateForInput(Jobeditdata?.date)}
                                            type="date"
                                            id="date"
                                            name="date"
                                            placeholder="DD MMM YYYY"  
                                            onChange={handleEditJOb}
                                            // required

                                        />
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-25">
                                        <label htmlFor="status">STATUS
                                            </label>
                                    </div>
                                    <div className="col-75">
                                        <select
                                            type="text"
                                            name="status"
                                            id="status"
                                            value={Jobeditdata.status}
                                            onChange={handleEditJOb}
                                            
                                        >
                                            <option value="" disabled>Select status</option>
                                            <option value="status">Active</option>
                                            <option value="Hybrid">Inactive</option>

                                        </select>
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
                                            value={Jobeditdata.Requirements}
                                            id="Requirements"
                                            name="Requirements"
                                            placeholder="Enter Requirements, each point on a new line..."
                                            onChange={handleEditJOb}
                                            // required
                                        />
                                    </div>
                                </div>

        


                            </div>

                        </div>

                        {/* {error && <ErrorMessage message={error} />} */}
                        <div className="buttonHolder">
                            {/* <span><h3></h3></span> */}
                            <button
                                className="button_02"
                            onClick={handleCancel}
                            // style={{ backgroundColor: "rgb(200, 0, 0)", color: "white" }}
                            >
                                Back
                            </button>

                            <button
                                className="button_03"
                            onClick={handleDeleteJob}
                            // style={{ backgroundColor: "rgb(0, 150, 0)", color: "white" }}
                            >
                             Delete   
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








        </>
    )
}

export default Editjob