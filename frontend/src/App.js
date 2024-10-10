import { useState,useEffect } from "react"
import axios from 'axios'
import './App.css';

function App() {
  const host = process.env.HOST
  const [allAnimals,setAllAnimals] = useState([])
  
  useEffect(()=>{
    const response = axios.get({host}/'animals')
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
