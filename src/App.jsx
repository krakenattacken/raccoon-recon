import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/dashboard-page/Dashboard'
import SubmissionForm from './components/submissions/submission-form/SubmissionsForm';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <Router basename='/raccoon-recon'>
      <div className='pageContainer'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/submissions' element={<SubmissionForm />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
export default App;
