import React from 'react'
import './Btn.css'
import Frame16 from '../../images/Frame16.png'
import  Group46 from '../../images/Group46.png'


const Btn = () => {
  return (
    
    <div className='btn'>
      
      <div style={{display:"flex"}}>
      <div className='get' >
      GET STARTED 
    </div>
    <img src={Frame16} alt="" />
    </div>

    <div className='video'>
      <img src={Group46} alt="" />
      <div>
      WATCH VIDEO
    </div>
    </div>
    </div>
  )
}

export default Btn