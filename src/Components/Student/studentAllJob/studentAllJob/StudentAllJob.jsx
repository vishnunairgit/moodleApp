
import React, { useEffect, useState } from 'react';
import StudentJobCard from '../studentjobcard/StudentJobCard';
import AxiosInstance from '../../../../config/AxiosInstance';
import StudentFilter from '../studentfilter/StudentJobFilter';
import './studentalljob.css';

function StudentAllJob() {
    const [studentAllJob, setstudentAllJob] = useState([]);
    // const [filter, setFilter] = useState(null); 
    const [filters, setFilters] = useState({workMode: [], location: [], experience: [], education: []});


    useEffect(() => {
        getAllJob();
    }, []);

    const getAllJob = async () => {
        try {
            const response = await AxiosInstance.get('users/getAllJob');
            setstudentAllJob(response.data);
            console.log(response.data,'---------response.dataresponse.data--------');
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };


    const filteredJobs = studentAllJob.filter(job => {
        return (
            (filters.workMode.length === 0 || filters.workMode.includes(job.employmentType)) &&
            (filters.location.length === 0 || filters.location.includes(job.location)) &&
            (filters.experience.length === 0 || filters.experience.includes(job.Experience)) && // Assuming experience is a string; adjust if necessary
            (filters.education.length === 0 || filters.education.includes(job.qualifications))
        );
    });

   


    return (
        <>
            <h3><strong> job search</strong></h3>
    
        <div className='StudentAllJob'>
            <div className='jobfilter'>
               
            <StudentFilter onFilterChange={handleFilterChange} />
            </div>
            <div className='JobCard'>
                {filteredJobs.length > 0 ? (
                    filteredJobs.map((job) => (<StudentJobCard key={job.id} studentJobs={job} />))
                ) : (
                    <h4>No job found</h4> 
                )}
            </div>
        </div>
        </>
    );
}

export default StudentAllJob;
