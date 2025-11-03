import React from 'react' //rfce
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoDownloadSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';


function ResumeGenerator() {
  return (
    <div className='container-fluid'>
      <h2 className='text-center mt-5'>Create a Job-Winning Resume in Minutes</h2>
      <div style={{height:'60vh'}} className="row justify-content-center align-items-center">
        <div className="col-md-1"></div>
        <div className="col-md-4 border rounded shadow text-center p-5">
          <IoDocumentTextOutline className='text-primary fs-1 mb-3'/>
          <h4>Add Your Informations</h4>
          <p>Add pre-written examples to each section</p>
          <h5>Step 1</h5>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-4 border rounded shadow text-center p-5">
          <IoDownloadSharp  className='text-danger fs-1 mb-3'/>
          <h4>Download Your Resume</h4>
          <p>Download and start applying</p>
          <h5>Step 2</h5>
        </div>
        <div className="col-md-1"></div>

      </div>
      <div className="text-center mb-5">
        <Link to={'/form'} className='btn text-white' style={{backgroundColor:'purple'}}>LET'S START</Link>
      </div>
    </div>
    
  )
}

export default ResumeGenerator