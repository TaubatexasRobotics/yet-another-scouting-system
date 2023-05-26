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
      const data = await getDocs(teamsCollectionRef)
      const filteredData = data.docs.map((doc) => ({...doc.data()}));
      setTeamList(filteredData);
      }catch (err){
        console.error(err)
      }
    }

    getTeamList();
  }, [])

  return (
    <div className='app'>
      <Auth/>
      <div>
        {teamList.map((teams) => (
          <div>
            <h1>{teams.FrcCode}</h1>
            <h2>Habilidades</h2>
            <p>{teams.Habilidades}</p>
            <h2>Debilidades</h2>
            <p>{teams.Debilidades}</p>
            <h2>Comportamentos gerais</h2>
            <p>{teams.Behaviours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
