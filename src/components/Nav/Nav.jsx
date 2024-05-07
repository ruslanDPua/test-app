import React from 'react'

import './Nav.scss'

export const Nav = ({navS}) => {
  
  let navLinks = [
    {
      text: "Home",
      href: "./",
    },
    {
      text: "Data",
      href: "./",
    },
    {
      text: "News",
      href: "./",
    },
    {
      text: "About Us",
      href: "./",
    },
    {
      text: "Contact Us",
      href: "./",
    },
    
  ];
  return (
    <nav className={`nav ${navS ? 'active' : ''}`}>
      <ul className="nav_list">
        {navLinks.map((link, index) => (
          <li className="nav_list-item" key={index}>
            <a href={link.href} className='nav_list-link'>
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}






