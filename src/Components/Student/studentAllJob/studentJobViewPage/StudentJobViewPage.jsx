import React, {useEffect,  useState } from 'react'
import AxiosInstance from '../../../../config/AxiosInstance'
import { useNavigate, useParams } from 'react-router-dom';
import { calculateTimeAgo, formatDate } from '../../../../helpers/helpers';
import './studentjobview.css'
import { BASE_URL } from '../../../../constants/BaseUrl';




function StudentJobViewPage() {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { jobId } = useParams();

    const [singleJob, setsingleJob] = useState([])
    

    useEffect(() => {
  
      getSingleJob()
  
    }, [])
  
    const getSingleJob = async () => {
        try {
          setLoading(true);
          const response = await AxiosInstance.get('/users/getSingleJob', { params: { jobId } });
          setsingleJob(response.data);
          setLoading(false);
        } catch (error) {
          console.error(error);
          setError('Failed to fetch job details.');
          setLoading(false);
        }
      };

    const handleback = ()=>{
        navigate(-1)
    }

    const handleapplyJob = () =>{
        navigate('/JobApply')

    }




  return (
    <>

<div className='jobView-student'>
        <div className="job-card" >

          <div className='title'>
            <div className='job-title'>
              <div>{singleJob.JobTitle}</div>
            </div>
          </div>



          <div className='Job-firstbox'>

            <div className='firstbox-leftside'>
         
                <div className="jobRow">
                    <div className="jobLabel">
                        <strong>location</strong>
                    </div>
                    <div className="jobLabel">: {singleJob.location} </div>
                </div>

                <div className="jobRow">
                <div className="jobLabel">
                    <strong>Qualifications</strong>
                </div>
                <div className="jobLabel">: {singleJob.qualifications} </div>
                </div>

                <div className="jobRow">
                <div className="jobLabel">
                    <strong>Experience</strong>
                </div>
                <div className="jobLabel">: {singleJob.Experience} years</div>
                </div>

                <div className="jobRow Applicants">
                    <div className="jobLabel">
                        <strong>No of Applicants</strong>
                    </div>
                    <div className="jobLabel">: 2 </div>
                </div>

            </div>

            <div className='firstbox-rightside'>

                <div className="jobRow">
                    <div className="jobLabel">
                        <strong>Company Name</strong>
                    </div>
                    <div className="jobLabel">: {singleJob.CreatedBy?.CompanyName} </div>
                </div>

                <div className="jobRow">
                    <div className="jobLabel">
                        <strong>location</strong>
                    </div>
                    <div className="jobLabel">: {singleJob.CreatedBy?.Address} </div>
                </div>




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
              <div className="jobLabel">: {singleJob?.JobTitle} </div>
            </div>



            <div className="jobRow">
              <div className="jobLabel">
                <strong>Openings</strong>
              </div>
              <div className="jobLabel">: {singleJob.openings} </div>
            </div>

            <div className="jobRow">
              <div className="jobLabel">
                <strong>Employment Type:</strong>
              </div>
              <div className="jobLabel">: {singleJob?.employmentType} </div>
            </div>



            <div className='Requirements'>
              {singleJob?.Requirements && (
                <div >
                  <strong >Requirements:</strong>
                  <ul>
                    {singleJob?.Requirements?.split('\n').map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

          </div>

          <div className='date' >
            <div><strong>Date Posted:</strong>{formatDate(singleJob?.date)}</div>
            <div><strong>Date Posted:</strong>{calculateTimeAgo(singleJob?.date)}</div>

          </div>

          <div className='bottum_button'>
          <button className='button_01' type="button" onClick={handleback}>Back</button>
          <button className='button_02' type="button" onClick={handleapplyJob}>apply Now</button>

          </div>



        </div>
      </div>
    </>

  )
}

export default StudentJobViewPage