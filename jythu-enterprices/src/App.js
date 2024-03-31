import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import heroImg from './images/gto-hero-4-img-1 1.png';
import FrameImg from './images/Frame 22.png';
import Btn from './components/Btn/Btn';
import google from './images/google.png';
import amazon from './images/amazon.png';
import spotify from './images/spotify.png';
import slack from './images/slack.png';
import linkedin from './images/linkedin.png';
import walmart from './images/walmart.png';
import About from './components/aboutUS/About'
import { AiOutlineArrowRight } from 'react-icons/ai'

function App() {
  return (
    <div >
      <Navbar />
      <div className='hero'>
        <div className='left-container'><img src={heroImg} alt="" /><img src={FrameImg} alt="" /></div>
        <div className='right-container'>
          <div className='right-container2'> < AiOutlineArrowRight style={{ height: "25", width: "30", color: "#3AAA81" }} />WELCOME TO JYTHU</div>
          <div className='right-container3'>A Marketing <br /> <span className='span'>Agency</span> To Grow <br /> Your Business</div>
          <div className='right-container4'>We are 100+ professional software engineers with more than 10 year of <br /> experience in delivering superior products Believe it because you have <br /> seen it. Here are real numbers</div>
          <Btn />
        </div>
      </div>
      <div className='partner'>
        <div>200+ <span className='inline'>Trusted Partners</span></div>
        <div className='brands'>
          <img src={google} alt="" />
          <img src={amazon} alt="" />
          <img src={spotify} alt="" />
          <img src={slack} alt="" />
          <img src={linkedin} alt="" />
          <img src={walmart} alt="" />
        </div>
      </div>
      <About/>
    </div>
  );
}

export default App;
