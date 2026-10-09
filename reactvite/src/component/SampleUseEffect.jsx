import React, { useeffect } from 'react'

function SampleUseEffect() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        //console.log("Hey... using UseEffect")
        console.log("Counter=" + counter)
    })
    
    function setCount() {
      setCounter(counter+5);
    }

    return (
        <div>
            <h2 style={{ color: 'brown' }}>SampleUseEffect</h2>
            <h2>Counter Value = [counter]</h2>
            <button onClick={setCount}>Counter</button>
        </div>
    )
}
export default SampleUseEffect;