import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'  
import ResumeGenerator from './pages/ResumeGenerator'  
import UserForm from './pages/UserForm'  
import History from './pages/History'  
import PageNotFound from './pages/PageNotFound'  
import Header from './component/Header'  
import Footer from './component/Footer'  

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<LandingPage />} /> 
        <Route path='/resume' element={<ResumeGenerator />} /> 
        <Route path='/form' element={<UserForm />} /> 
        <Route path='/history' element={<History />} /> 
        <Route path='/*' element={<PageNotFound />} /> 
      </Routes>
      <Footer/>
    </>
  )
}

export default App
