import React from 'react'
import './Logo.scss'
import logo from '../../assets/svg/logo.svg'




export const Logo = () => {
  



  return (
    <a href="./" className="logo">
      <img src={logo} alt="logo" className="logo_icon" />
      <span className="logo_text krona">Cryptodata.live</span>
    </a>
  );
}
