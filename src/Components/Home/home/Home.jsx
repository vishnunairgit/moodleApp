import React from 'react'
import Navbar from '../navBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Employers from '../../EmployersPage/Employers'
import AddJob from '../../Job/AddJob/AddJob'
import Alljob from '../../Job/AllJobs/All Jobs/AllJob'
import EditCompany from '../../Company Details/edit Company/EditCompany'
import CompanyView from '../../Company Details/View company/CompanyView'
import JobViewPage from '../../Job/JobviewPage/JobViewPage'

function Home() {
  return (
    <>
      <Navbar />
      {/* <Employers /> */}
      <div>
        <Routes>
        <Route path="/home" element={<Employers /> } />
        <Route path="/companyDetails" element={<CompanyView />} />
        <Route path="/addJob" element={<AddJob /> } />
        <Route path='/alljob' element={<Alljob />} />
        <Route path="/editCompany/:mailID"  element={<EditCompany/>} />
        <Route path='/JobViewPagj/:_id' element={<JobViewPage />} />
        
        </Routes>
      </div>
    </>
  )
}

export default Home