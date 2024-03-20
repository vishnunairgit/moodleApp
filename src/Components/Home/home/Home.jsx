import React from 'react'
// import Navbar from '../navBar/Navbar'
import Test from '../navBar/Test'

import { Route, Routes } from 'react-router-dom'
import Employers from '../../EmployersPage/Employers'
import AddJob from '../../Job/AddJob/AddJob'
import Alljob from '../../Job/AllJobs/All Jobs/AllJob'
import EditCompany from '../../Company Details/edit Company/EditCompany'
import CompanyView from '../../Company Details/View company/CompanyView'
import JobViewPage from '../../Job/JobviewPage/JobViewPage'
import ListApplicants from '../../Job/listofApplicants/ListApplicants'
import './home.css'

function Home() {
  return (
    <>
    <div className='homeNavbar' >
    {/* <Navbar /> */}
    <Test />


    </div>
      {/* <Employers /> */}
      <div>
        <Routes>
        <Route path="/home" element={<Employers /> } />
        <Route path="/companyDetails" element={<CompanyView />} />
        <Route path="/addJob" element={<AddJob /> } />
        <Route path='/alljob' element={<Alljob />} />
        <Route path="/editCompany/:id"  element={<EditCompany/>} />
        <Route path='/jobViewPage/:id' element={<JobViewPage />} />
        <Route path='/listApplicants' element={<ListApplicants/>}/>
        
        </Routes>
      </div>
    </>
  )
}

export default Home