import React from "react";

import { Logo } from "../../components/Logo/Logo";

import { Nav } from "../../components/Nav/Nav";

import facebook from "../../assets/svg/social/facebook.svg";
import linkedIn from "../../assets/svg/social/linked-in.svg";
import instagram from "../../assets/svg/social/instagram.svg";
import twitter from "../../assets/svg/social/twitter.svg";
import mastercard from "../../assets/img/payment-systems/mastercard.png";
import mastercardCircus from "../../assets/img/payment-systems/mastercard-circus.png";
import visa from "../../assets/img/payment-systems/visa.png";
import paypal from "../../assets/img/payment-systems/paypal.png";
import americanExpress from "../../assets/img/payment-systems/american-express.png";

import "./Footer.scss";

export const Footer = () => {
  let socialLinks = [
    {
      urlImg: facebook,
      href: "./",
      name: "facebook",
    },
    {
      urlImg: linkedIn,
      href: "./",
      name: "linkedIn",
    },
    {
      urlImg: instagram,
      href: "./",
      name: "instagram",
    },
    {
      urlImg: twitter,
      href: "./",
      name: "twitter",
    },
  ];

  let paymentLogo = [
    mastercard,
    mastercardCircus,
    visa,
    paypal,
    americanExpress,
  ];

  return (
    <footer className="footer">
      <div className="footer_top">
        <div className="container">
          <Logo />
          <div className="footer_top-content">
            <Nav />
            <ul className="footer_top-social-list">
              {socialLinks.map((link, index) => (
                <li className="footer_top-social-item" key={index}>
                  <a href={link.href} className="footer_top-social-link">
                    <img src={link.urlImg} alt={link.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
         
          <p className="footer_copyright">2020 Cryptodata.live</p>
          <ul className="footer_payment-systems">
            {paymentLogo.map((e, i) => (
              <li className="footer_payment-systems-item" key={i}>
                <img
                  src={e}
                  alt="icon payment system"
                  className="footer_payment-systems-img"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
