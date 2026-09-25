import React ,{useState} from 'react'

function StateHandling() {
const[counter,setCounter]=useState(20);
const[red, setRed] = useState(60);
const[green, setGreen] = useState(0);
const[blue, setBlue] = useState(100);

function increment(){
    setCounter(counter+10);
}

return(
  
        <div style={{backgroundColor:`rgb(${red}, ${green}, ${blue})`,border:'2px solid red',height:'300px',width:'300px'}} >
        <h2 style={{color:'brown'}}>Counter App</h2>
    <h2>Counter={counter}</h2>
    <button onClick={increment}>IncreaseCounter</button>
    <button onClick={()=>setCounter(counter-5)}>DecreaseCounter</button>
    </div>
)
}

export default StateHandling