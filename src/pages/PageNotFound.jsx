import React from 'react'
import { Link } from 'react-router-dom'


function PageNotFound() {
  return (
    <div style={{height:'80vh'}} className='d-flex justify-content-center align-items-center my-3 p-5 flex-column'>
      <img width={'40%'} src="https://www.urban-concept.be/assets/images/404Error.gif" alt="page not found" />
      <h1>404!</h1>
      <h4>Page Not Found</h4>
      <Link className='btn btn-success' to={'/'}>Go to Home</Link>
    </div>
    
  )
}

export default PageNotFound