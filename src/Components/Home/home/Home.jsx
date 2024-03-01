import React from 'react'
import Navbar from '../navBar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Employers from '../../EmployersPage/Employers'
import Account from '../../Account/Account'

function Home() {
  return (
    <>
      <Navbar />
      {/* <Employers /> */}
      <div>
        <Routes>
        <Route path="/home" element={<Employers /> } />

        <Route path="/account" element={<Account />} />
        
        </Routes>
      </div>
    </>
  )
}

export default Home