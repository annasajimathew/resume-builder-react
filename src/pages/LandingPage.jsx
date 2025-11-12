import React from 'react' //rfce
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
   <div>
    {/* Landing Part */}
      <section style={{width:'100%',height:'100vh',backgroundImage:"url('https://www.cpasitesolutions.com/cpa-websites/wp-content/uploads/2024/06/local-seo-for-bookeepers-1.png')",backgroundAttachment:'fixed',backgroundPosition:'top',backgroundSize:'cover'}} className='container-fluid row align-items-center'>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow border py-5 rounded mt-5 text-center" style={{backgroundColor:'rgba(255,255,255,0.5)'}}>
            <h3>Designed to get hired.
              Your skills, your story, your next job - all in one.</h3>
              <Link to={'/resume'} className='btn text-white' style={{backgroundColor:'purple'}}>Make Your Resume</Link>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      {/* Tools */}
      <section className='m-5'>
        <h1 className='text-center'>Tools</h1>
        <div className="container row align-items-center">
          <div className="col-md-6">
            <div className='my-3'>
              <h4>Resume</h4>
              <p>Create unliited new resumes and easily edit the afterwards</p>
            </div>
            <div className='my-3'>
              <h4>Cover Letters</h4>
              <p>Easily write professional cover letters.</p>
            </div>
            <div className='my-3'>
              <h4>Jobs</h4>
              <p>Automatically receive new and relevant job postings.</p>
            </div>
            <div className='my-3'>
              <h4>Applications</h4>
              <p>Effortlessly manage and track your job applications in an organized manner.</p>
            </div>
          </div>
          <div className="col-md-6">
            <img className='img-fluid' src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png" alt="" />
          </div>
        </div>

      </section>
      {/* Image */}
      <section style={{height:'500px',width:'100%',backgroundImage:'url("https://www.icu.ac.jp/en/assets/img/academics/ph_gs_ma_01.jpg ")',backgroundPosition:'top',backgroundAttachment:'fixed',backgroundSize:'cover'}}>

      </section>
      {/* testimony */}
      <section className='m-5'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className="row container">
          <div className="col-md-6">
            <h4 className='my-5'>Trusted by professionals worldwide.</h4>
            <p className='my-4'>At LiveCareer, we don't just help you create resumes — we help you land the job. Whether you're a seasoned professional or just starting out, our tools are designed to get results.</p>
            <p className='my-4'>In fact, users who used LiveCareer reported getting hired an average of 48 days faster</p>
            <p className='my-4'>Join thousands of job-seekers who've fast-tracked their careers with a résumé that truly stands out</p>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
              <div className="col-md-3"><img style={{height:'100%',width:'100%'}} src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000" alt="" /></div>
            </div>
            
            
          </div>
          
        </div>
      </section>
    </div>
  )
} 

export default LandingPage