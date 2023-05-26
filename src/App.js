import logo from './logo.svg';
import './App.css';
import { Auth } from './components/auth';
import { db } from './config/Firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

function App() {
  const [teamList, setTeamList] = useState([])
  const teamsCollectionRef = collection(db, 'teams')
  
  useEffect(() =>{
    const getTeamList = async () =>{

      try{
      const data = await getDocs()
      console.log(data());
      }catch (err){
        console.error(err)
      }
    }

    getTeamList();
  }, [])

  return (
    <div className='app'>
      <Auth/>
    </div>
  );
}

export default App;
