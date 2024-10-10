import { useState,useEffect } from "react"
import axios from 'axios'
import './App.css';

function App() {
  const [allAnimals,setAllAnimals] = useState([])
  
  useEffect(()=>{
    const response = axios.get('https://mernapp-dynq--4000--134daa3c.local-corp.webcontainer.io/animals')
    .then(
      console.log()
    )
    setAllAnimals(response.data)
  },[])
  
  return (
    <div className="App">
      {allAnimals && allAnimals.map((animal)=>{

      })}
    </div>
  );
}

export default App;
