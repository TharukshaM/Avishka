import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avishkaImg from '../assets/images/avishka.jpg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avishkaImg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://www.instagram.com/__butterscotch_____/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Avishka WickramaSinghe</h1>
          <p>Fashion Designer</p>

          <div className="mobile_social_icons">
            <a href="https://www.instagram.com/__butterscotch_____/" target="_blank" rel="noreferrer"><InstagramIcon/></a>
            <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;