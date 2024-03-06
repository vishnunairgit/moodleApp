import React, { useEffect, useState } from 'react'
import AlljobCard from '../Job Card/AlljobCard'
import AxiosInstance from '../../../../config/AxiosInstance'

function Alljob() {

  const [alljob, setalljob] = useState([])


  useEffect(() => {
    getallJOB()
  }, [])

  const getallJOB = async (userId) => {
    try {
      const responce = await AxiosInstance.get('users/getallJob', { params: { userId: userId } })
      debugger
      setalljob(responce.data)


    } catch (error) {

      console.error('Error fetching data:', error)


    }
  }



  return (
    <div>

      {alljob.map((allJobsss) => (<AlljobCard job={allJobsss} />))}




    </div>
  )
}

export default Alljob