import React from 'react'
import logo from '../logo.svg';

export default function Header(props) {

  function handleChange() {
    props.setDark(prevTheme => !prevTheme)
  } 
  return (
    <header className={props.dark ? "header" : "light"}>
      <nav className={props.dark ? "nav":"nav light"}>
        <div className="logo-container">
          <div className="react-logo-container">
            <img src={logo} alt="react logo" className="react-logo"/>
          </div>
          <p className='logo-text'>ReactFacts</p>
        </div>
        <div className="toggle">
          <input 
          type="range" 
          name="toggle-theme" 
          min={1} max={2}
          style={{ "--thumb-background": "#21222A"}}
          onChange={handleChange}
          />
        </div>
      </nav>
    </header>
  );
}