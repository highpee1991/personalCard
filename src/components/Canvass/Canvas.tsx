import React from 'react';
import pic from '../img/Whap.jpeg';
import { FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Canvas = () => {
  return <div className='canvass-main'>
    <div className='innerCanvas'>
      <div className='nameInfo'>
        <img src={pic} alt="my-img" />
        <h3 className='text'>Ipadeola Taiwo</h3>
        <div className='text2'>Front End Developer</div>
        <div className='connect'>Connect With Me</div>
        <div className='icons-wrapper' >
          <a href="https://ipadeola.it@gmail.com" target="_blank" rel="noreferrer"> <div id='email'><FaEnvelope /> E-Mail </div> </a>
          <a href="https://www.linkedin.com/in/ipadeola-taiwo-295544195" target="_blank" rel="noreferrer"> <div id='linkedIn'><FaLinkedin /> Linked-in </div> </a>
        </div>
        <div className='text3'>
          <h4 id='h4first'>About Me</h4>
          <p className='ptag'>Hello my name is Ipadeola Taiwo,Experienced software engineer
            with a passion for developing innovative
            programs that expedite the efficiency and effectiveness of organizational
            success.</p>
          <h4 id='h4second'>Interest</h4>
          <p className='ptag'>I enjoy volunteering weekly at the local Boys and Girls club where I teach youth how to write code.</p>
        </div>
        <div className='iconsSet'>
          <a className='anchoricon' href="https://twitter.com/bobziroll/status/1458825175919575044?t=XlppL1NfLwb8m7CHqNwVHQ&s=19" target="_blank" rel="noreferrer">< FaTwitter /></a>
          <a className='anchoricon' href="https://github.com/highpee1991/quiz-game.git" target="_blank" rel="noreferrer">< FaGithub /></a>
          <a className='anchoricon' href="https://www.instagram.com/fratiapad_multimedia/" target="_blank" rel="noreferrer">< FaInstagram /></a>
        </div>
      </div>
    </div>
  </div>
};

export default Canvas;
