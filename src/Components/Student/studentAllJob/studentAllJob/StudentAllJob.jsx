// import React, { useEffect, useState } from 'react'
// import StudentJobCard from '../studentjobcard/StudentJobCard'
// import AxiosInstance from '../../../../config/AxiosInstance';
// import StudentFilter from '../studentfilter/StudentJobFilter';
// import './studentalljob.css'

// function StudentAllJob() {
//     const [studentAllJob, setstudentAllJob] = useState([])

//     const [remotefilter, setremotefilter] = useState("Remote")


//     useEffect(()=>{
//         getAllStudentJob();
//     },[])

//     const getAllStudentJob = async () =>{
//         try {
            
//             const responce = await AxiosInstance.get('users/getAllStudentJob')
//             debugger
//             setstudentAllJob(responce.data)

//         } catch (error) {
//             console.error('Error fetching data:', error)
            
//         }
//     }

// const filteredremoteJobs = setstudentAllJob.filter (studentAllJobs =>remotefilter ==="All" || studentAllJobs.workMode  === filter  )




//   return (
//     <div className='StudentAllJob'>

//         <div className='jobfilter'>
//             <StudentFilter onFilterChange={setremotefilter}/>
//         </div>

//         <div className='JobCard'>
//             {filteredremoteJobs.map((studentAllJobs)=>(<StudentJobCard studentJobs={studentAllJobs}/>))}
//         </div>


    
//     </div>
//   )
// }

// export default StudentAllJob




import React, { useEffect, useState } from 'react';
import StudentJobCard from '../studentjobcard/StudentJobCard';
import AxiosInstance from '../../../../config/AxiosInstance';
import StudentFilter from '../studentfilter/StudentJobFilter';
import './studentalljob.css';

function StudentAllJob() {
    const [studentAllJob, setstudentAllJob] = useState([]);
    const [filter, setFilter] = useState(null); 

    useEffect(() => {
        getAllStudentJob();
    }, []);

    const getAllStudentJob = async () => {
        try {
            const response = await AxiosInstance.get('users/getAllStudentJob');
            setstudentAllJob(response.data);
            console.log(response.data,'---------response.dataresponse.data--------');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const filteredJobs = studentAllJob.filter(job => filter === null || job.workMode === filter);
    console.log(filteredJobs,'--------filteredJobs---------filteredJobs-----------');

    const handleFilterChange =(isSelected) => {
        setFilter(isSelected? "Remote" : null)
    }

    return (
        <div className='StudentAllJob'>
            <div className='jobfilter'>
            <StudentFilter onFilterChange={handleFilterChange} />
            </div>
            <div className='JobCard'>
                {filteredJobs.map((job) => (<StudentJobCard key={job.id} studentJobs={job} />))}
            </div>
        </div>
    );
}

export default StudentAllJob;
