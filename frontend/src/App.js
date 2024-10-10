import { useState,useEffect } from "react"
import axios from 'axios'
import './App.css';

function App() {
  const url = "https://mernapp-dynq--5000--134daa3c.local-corp.webcontainer.io/animals"
  const [allAnimals,setAllAnimals] = useState([])
  
  useEffect(()=>{
    const response = axios.get({url})
    .then(
      console.log(response.data)
    )
    setAllAnimals(response.data)
  },[])
  
  return (
    <div className="App">
      {allAnimals && allAnimals.map((animal)=>{
        <div key={animal._id}>
          <h2>{animal.name}</h2>
          <h3>{animal.species}</h3>
        </div>
      })}
    </div>
  );
}

export default App;
