import React from 'react'
import './About.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
const About = () => {
  return (
        <div>
        <Header/>
      
  <div className="container-fluid">
    <section className="col-lg-12 ">
      <div id="section1" className="row bg-warning">
        <div className="col-md-10">
          <div id="self-description">
            <h2>Self Introduction</h2>
            <p>II'm Hongxin Ouyang, a dedicated student with a passion for learning. The name 'Hongxin' encapsulates a Mandarin belief in steadfast convictions. </p>
            <p>Faith is the substance of things hoped for, the evidence of things not seen. -- Hebrews 11:1</p>
          </div>
        </div>
        <div className="col-md-2">
          <img id="img-index" src="img/myself-round.png" alt="Hands on" title="Hands on keyboard" height={150} />
        </div>
      </div>
      <div id="section2" className="row">
        <h2>My Advantages &amp; Abilities</h2>
        <div className="col-sm-6 col-md-3 ability-col" id="col1">
          <img className="ability-img" src="img/Creativity.png" alt="Creativity" />
          <h2 className="ability-tag"> &nbsp;Creativity</h2>
        </div>
        <div className="col-sm-6 col-md-3 ability-col" id="col2">
          <img className="ability-img" src="img/TroubleShooting.png" alt="Trouble Shooting" />
          <h2 className="ability-tag">Trouble Shooting</h2>
        </div>
        <div className="col-sm-6 col-md-3 ability-col" id="col3">
          <img className="ability-img" src="img/TimeManagement.png" alt="Time Management" />
          <h2 className="ability-tag">Time Management</h2>
        </div>
        <div className="col-sm-6 col-md-3 ability-col" id="col4">
          <img className="ability-img" src="img/TeamPlayer.png" alt="TeamPlayer" />
          <h2 className="ability-tag"> TeamPlayer</h2>
        </div>
      </div>
    </section>
  </div>
  <br />
  <Footer/>
</div>

  )
}

export default About