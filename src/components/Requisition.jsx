import React from 'react';
import { db } from '../config/Firebase';
import { useEffect, useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';

function Requisition(){

    const [teamList, setTeamList] = useState([])
    const teamsCollectionRef = collection(db, 'betterTeams')
    
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
    }, []);

    return(
        <div>
        {teamList.map((betterTeams) => (
          <div>
            <h1>{betterTeams.TeamNumber}</h1>
            <h2>Habilidades</h2>
            <p>{betterTeams.autChargeStt}</p>
            <p>{betterTeams.ciclesTeleop}</p>
            <p>{betterTeams.easeCSTeleop}</p>
            <p>{betterTeams.initGP}</p>
            <p>{betterTeams.leftComunity}</p>
            <p>{betterTeams.match}</p>
            <p>{betterTeams.obs}</p>
            <p>{betterTeams.teleopMainGP}</p>
            <p>{betterTeams.teleopPointLvl}</p>
            <p>{betterTeams.threeCS}</p>
          </div>
        ))}
      </div>
    )
}
export default Requisition