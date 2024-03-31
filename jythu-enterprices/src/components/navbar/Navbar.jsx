import React from "react"
import './Navbar.css'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineShopping ,AiOutlineArrowRight } from 'react-icons/ai'
import Logo from '../../images/jythu logo.png'

const Navbar = () => {
    return (
        <header className="navbar">
            <img src={Logo} alt="/" />
            <nav>
                <ul className="menu">
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/">About Us</a>
                    </li>

                    <li>
                        <a href="/">Pages</a>
                    </li>

                    <li>
                        <a href="/">Services</a>
                    </li>

                    <li>
                        <a href="/">News & Event</a>
                    </li>

                    <li>
                        <a href="/">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <ul className="right-container1">
                <li>
                    <div className="circle"><p style={{ fontSize: 10 }}>0</p></div>
                    < AiOutlineShopping style={{ height: "25", width: "30", color: "black" }} />

                </li>

                <li>
                    <AiOutlineSearch />
                </li>

                <li>
                    <div className="quote">
                        <a href="/" style={{color:"white"}}>GET QUOTE</a>
                        <AiOutlineArrowRight /> 
                    </div>
                </li>
            </ul>
            {/* <div className="styles.mobile_btn">
                <AiOutlineMenu size={25} />
            </div> */}
        </header>
    )
}
export default Navbar