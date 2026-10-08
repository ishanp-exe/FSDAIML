import React from 'react'
import cat from '../images/cat.png';
function Imagemanipulation() {
  return (
    <div>
        <h2 style={{color:'red', backgroundColor:'black'}}>Imagemanipulation</h2>
        <div style={{border:'2px solid red', height:'400px', width:'400px', marginLeft:'300px'}}>
        <img src={cat} height={200} width={200}></img>
        </div>

        <div>


        </div>
        
        
        </div>
  )
}

export default Imagemanipulation