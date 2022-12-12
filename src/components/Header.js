import React from 'react'
import logo from '../logo.svg';

export default function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <div className="logo-container">
          <div className="react-logo-container">
            <img src={logo} alt="react logo" className="react-logo"/>
          </div>
          <p className='logo-text'>ReactFacts</p>
        </div>
        <p className="ProjectTitle">React - Project 1</p>
      </nav>
    </header>
  );
}