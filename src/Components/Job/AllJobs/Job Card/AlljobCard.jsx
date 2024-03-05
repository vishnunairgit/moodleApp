import React from 'react'
import './alljobcard.css'

function AlljobCard({alljob}) {

  return (
    <div className='p-2'>

        <div className='cardMain'>
          <div>{alljob?.Experience}</div>
          <div>{alljob?.location}</div>
          <div>{alljob?.qualifications}</div>
          <div>{alljob?.employmentType}</div>
          <div>{alljob?.openings}</div>

          <div>{alljob?.date}</div>
          <div>{alljob?.Requirements}</div>

        </div>


    </div>
  )
}

export default AlljobCard