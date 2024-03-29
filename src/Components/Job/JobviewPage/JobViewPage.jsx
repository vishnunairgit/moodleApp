import React, { useEffect, useState } from 'react'
import AxiosInstance from '../../../config/AxiosInstance'
import { useParams } from 'react-router-dom';
import { calculateTimeAgo, formatDate } from '../../../helpers/helpers';
import location from "../../Assets/icons8-location-24.png"
import { useNavigate } from 'react-router-dom'

import './jobviewpage.css'


function JobViewPage() {

  const navigate = useNavigate()
  const { id } = useParams();




  const [singleJobdata, setsingleJobdata] = useState([])

  useEffect(() => {

    getSingleJob()

  }, [])

  const getSingleJob = async () => {
    try {

      const response = await AxiosInstance.get('/admin/getSingleJobdata', { params: { jobId: id } })
      debugger
      setsingleJobdata(response.data)
      console.log(response.data, '----------singleJobdata------------');

    } catch (error) {
      console.log(error);
    }

  }

  const handleApplicants = () => {
    navigate('/listApplicants')
  }


  const handleeditJob = () => {
    navigate(`/editjob/${id}`);
  }

  const handleback = ()=>{
    navigate(-1)
  }




  return (
    <div>
      <div className='jobView'>
        <div className="job-card" >

          <div className='title'>
            <div className='job-title'>
              <div>{singleJobdata.JobTitle}</div>
            </div>

            <div className='Active'>
              <p>{singleJobdata.status === "active" ? (
                <button style={{ backgroundColor: 'green' }} type="button">Active</button>
              ) : (
                <button style={{ backgroundColor: "red" }} type="button">Inactive</button>
              )}</p>
            </div>




          </div>



          <div className='Job-Description'>
            <div>

            </div>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>location</strong>
              </div>
              <div className="jobLabel">: {singleJobdata.location} </div>
            </div>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>Qualifications</strong>
              </div>
              <div className="jobLabel">: {singleJobdata.qualifications} </div>
            </div>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>Experience</strong>
              </div>
              <div className="jobLabel">: {singleJobdata.Experience} years</div>
            </div>
            <div className="jobRow Applicants " onClick={handleApplicants} >
              <div className="jobLabel">
                <strong>No of Applicants</strong>
              </div>
              <div className="jobLabel">: 2 </div>
            </div>



          </div>


        </div>

      </div>

      <div className='jobView'>
        <div className="job-card" >
          <h5> <strong>Job description</strong></h5>


          <div className='Requirements'>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>role:</strong>
              </div>
              <div className="jobLabel">: {singleJobdata?.JobTitle} </div>
            </div>



            <div className="jobRow">
              <div className="jobLabel">
                <strong>Openings</strong>
              </div>
              <div className="jobLabel">: {singleJobdata.openings} </div>
            </div>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>Employment Type:</strong>
              </div>
              <div className="jobLabel">: {singleJobdata?.employmentType} </div>
            </div>



            <div className='Requirements'>
              {singleJobdata?.Requirements && (
                <div >
                  <strong >Requirements:</strong>
                  <ul>
                    {singleJobdata?.Requirements?.split('\n').map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          <div className='date' >
            <div><strong>Date Posted:</strong>{formatDate(singleJobdata?.date)}</div>
            <div><strong>Date Posted:</strong>{calculateTimeAgo(singleJobdata?.date)}</div>

          </div>

          <div className='bottum_button'>
          <button className='button_01' type="button" onClick={handleback}>Back</button>
          <button className='button_02' type="button" onClick={handleeditJob}>Edit</button>

          </div>



        </div>
      </div>




    </div>
  )
}

export default JobViewPage