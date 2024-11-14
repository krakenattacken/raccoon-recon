import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard'
import SubmissionForm from './components/submissions/SubmissionForm/Submissions';
import Behaviour from './components/submissions/behaviour/Behaviour';

function App() {
  return (
    <Router>
      <div className='App'>
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
