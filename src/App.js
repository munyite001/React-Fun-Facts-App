import Header from './components/Header.js'
import Main from './components/Main.js'
import React from 'react';

export default function App() {
  const [darkmode, setDarkmode] = React.useState(false)
  return (
    <div style={!darkmode ? { boxShadow: '0 0 3px 3px #ccc' } : {}}>
      <Header dark={darkmode} setDark={setDarkmode}/>
      <Main dark={darkmode} setDark={setDarkmode}/>
    </div>
  );
}
