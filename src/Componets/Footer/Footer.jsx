import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Footer = () => {
  return (
    <div class="footer">
    <div class="footer-content">
        <div class="newsletter">
        <img src='./assets/arabgt.png' alt="arabgt" className="footerlogo" />
        <h1><span className="red" style={{color:'red'}} >Subscribe</span> to our newsletter</h1> 
            <p>Stay up to date with the latest news in the automotive world.</p>
            <form class="subscribe-form">
                <input type="email" placeholder="Email..." />
                <div className="fbtn"><button type="submit">Subscribe</button></div>
            </form>
        </div>
        <div class="social-media">
            <h2>Follow Us</h2>
            <div class="social-icons">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram/></a>
            </div>
        </div>
    </div>
</div>

  )
}

export default Footer
