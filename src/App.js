import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Teleoperated from "./components/Teleoperated.jsx";

function App() {
  return (
    <div className='app'>
      <Teleoperated />
    </div>
  );
}

export default App;
