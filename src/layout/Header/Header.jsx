import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './header.scss'
import {Logo} from '../../components/Logo/Logo'
import {Nav} from '../../components/Nav/Nav'
export const Header = () => {

  let [navS, setNavS] = useState(false);

  const toggleNav = () => {
    setNavS(!navS);
    console.log(navS);
  };

  const options = [
    { value: 0, label: "UAH" },
    { value: 1, label: "EUR" },
    { value: 2, label: "USD" },
    { value: 3, label: "PLN" },
  ];

  return (
    <header className="header">
      <Logo />
      <button className='header_toggle' onClick={toggleNav}>X</button>
      <Nav navS = {navS}/>
      <div className="header_profile">
        <div className="header_profile-btns">
          <a className="header_profile-btn pricing" href="./">
            Pricing
          </a>
          <a className="header_profile-btn login" href="./">
            Log In
          </a>
        </div>
        <span></span>
        <Select
          options={options}
          defaultValue={options[3]}
          isSearchable={false}
          className="header_profile-select"
          classNamePrefix='header_profile-select'
        />
      </div>
    </header>
  );
}
