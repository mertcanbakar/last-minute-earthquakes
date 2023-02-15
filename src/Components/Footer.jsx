import React from "react";
//ICONS
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="message">
        <p className="bas-sagligi">
          Ülkemizde yaşanan ve 11 ilimizi etkileyen büyük depremde hayatını
          kaybedenlere Allah'tan rahmet yaralılara acil şifalar diliyoruz.
        </p>
        <p>Veriler kandilli rasathanesinden anlık olarak çekilmektedir.</p>
        <p>Ticari amaçlı kullanılmaz.</p>
      </div>
      <div className="contact">
        <p>
          <AiOutlineMail className="icons" /> mertcanbakar@outlook.com
        </p>
        <a href="https://twitter.com/merttcanbakar" target='_blank'>
          <AiOutlineTwitter className="icons" /> twitter.com/merttcanbakar
        </a>
        <a href="https://www.linkedin.com/in/mert-can-bakar-18a881248" target='_blank'>
          <FaLinkedinIn className="icons" /> in/mertcanbakar
        </a>
      </div>
    </div>
  );
};

export default Footer;
