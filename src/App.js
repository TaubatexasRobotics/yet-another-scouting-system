import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/Firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
import Requisition from './components/Requisition';

function App() {

  return (
    <div className='app'>
      <Auth/>
      <Requisition/>
    </div>
  );
}

export default App;
