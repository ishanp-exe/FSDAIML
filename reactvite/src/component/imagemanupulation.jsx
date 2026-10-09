import React, { useState } from 'react';
import cat from '../images/cat.jpg';

function Imagemanipulation() {
    const[catHeight, setCatHeight] = useState(200);

    function setHeight(){
        setCatHeight(catHeight+10);
    }
  return (
    <div>
      <h2 style={{ color: 'red', backgroundColor: 'black' }}> Image Manipulation</h2>
      <div style={{border: '2px solid red', height: '400px', width: '400px', marginLeft: '10px', }}>
        <img src={cat} height={200} width={200} alt="Cat" />  
      </div>
    </div>
  );
}

export default Imagemanipulation;