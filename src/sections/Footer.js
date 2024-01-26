import React from 'react'
import logo from '../images/logo.png'
import "../styles/Footer.css";
function Footer() {
    return (
      <>
        <div className="footer">
          <img src={logo} alt="Logo" className="logo" />
          <p className="text">
            @{new Date().getFullYear()} Corbett Nature Retreat
          </p>
        </div>
      </>
    );
}

export default Footer