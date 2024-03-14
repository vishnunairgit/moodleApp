import React, { useEffect, useState } from 'react'
import './alljobcard.css'
import location from "../../../Assets/icons8-location-24.png"
import {calculateTimeAgo , formatDate} from "../../../../helpers/helpers"
import { useNavigate, useParams } from 'react-router-dom'
import student  from "../../../Assets/icons8-student-24.png"
// import AxiosInstance from '../../../../config/AxiosInstance'

function AlljobCard({ job }) {


  const  navigate =useNavigate()

  const handlejobViewPage = ()=>{
    navigate(`/jobViewPage/${job._id}`)
  }





  return (
    <div className='job'>
      <div className="job-card" onClick={handlejobViewPage} >

        <div className='title'>
            <h4><strong><div>{job.JobTitle}</div></strong></h4>

          <p><strong><img src={location} alt="" /></strong> ;{job.location}</p>
          <p><strong> <img src={student} alt="" /></strong> : 2 </p>



            <div className='Active'>
            <p>{job.status === 1 ? (
              <button style={{backgroundColor:'green'}} type="button">Active</button>
            ):(
              <button style={{backgroundColor:"red"}} type="button">Inactive</button>
            )}</p>

              
            </div>
           
        </div>

        <div className='Location'>
          <p><strong>Experience:</strong> {job.Experience}  years</p>
          <p><strong>Openings:</strong> {job.openings}</p>
          <p><strong>Date Posted:</strong> {calculateTimeAgo(job?.date)}</p>
          <p><strong>Qualifications:</strong> {job.qualifications}</p>
          

        </div>
        
      </div>
    </div>

  )
}

export default AlljobCard