import React from 'react'
import { AiOutlineArrowRight, AiOutlineCheckCircle } from 'react-icons/ai';
import Group17 from '../../images/Group17.png'


function About() {
    return (
        <div>
            <div className='about'>
            <div className='aboutLeft1'>< AiOutlineArrowRight style={{ height: "25", width: "30", color: "#3AAA81" }} />ABOUT US
                <div className='aboutLeft2'>We Want To Give You<br /> The best Service </div>
                <div className='aboutLeft3'>
                </div>
                <div>We are 100+ professional software engineers with more <br />
                    than 10 year of experience in delivering superior products <br />
                    Believe it because you have seen it. Here are real numbers
                </div>
                <div className='aboutRight'><img src={Group17} alt="" /></div>
                </div>
            </div>
            
        
        </div>

    )
}

export default About


