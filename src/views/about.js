import React from 'react';
import '@/assets/css/about.css';
import logo from '@/assets/img/logo.svg';

const About = () => {
  let handleClick = () => {
    console.log('this is:', this)
  }
  return (
    <div>
      <h1 className="about">关于我们</h1>
      <img className="logo" onClick={handleClick} src={logo} alt="logo"/> 
    </div>
  );
}
export default About;