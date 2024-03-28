import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer'
import { useLocation } from 'react-router-dom';
import './Notice.css'
const Notice = () => {

  return (
    <div> 
        <Header />
        <br></br>
        <div className="notice">
            <h1>Notice:</h1>
            <p>Appreciate for submitting the forum!</p>
            <a  href="/" className="btn btn-primary">Go back to Home</a>
        </div>
        <Footer/>
    </div>
  )
}

export default Notice