import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import AllVideos from '../components/Allvideos'
import Category from '../components/Category'


function Home() {
  const [addStatus , setAddStatus] = useState({})
  const [categoryVDStatus , setcategoryVDStatus] = useState({})
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
        <Add setAddStatus={setAddStatus}/>
        <Link to={'/watchhistory'} style={{ textDecoration:'none' }}><h5><span className='d-md-inline d-done'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} className='me-2' /></h5></Link>
      </div>

      <div className="container-fluid p-4">
        <div className="row"> 
          <div className="col-md-9">
            <AllVideos addStatus={addStatus} setcategoryVDStatus={setcategoryVDStatus}/> 
          </div>
          <div className="col-md-3">
            <Category categoryVDStatus={categoryVDStatus}/>
          </div>
        </div>
      </div>
    </> 
  )
}

export default Home

