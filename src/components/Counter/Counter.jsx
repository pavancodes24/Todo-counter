import React from 'react';
import { useState } from 'react';

function Counter() {
    const [counter,setCounter] = useState(10);
    const handleCounter = (value)=>{
        setCounter(counter + value)
    }
    return (
        <>
        <div>Counter:{counter} </div>
        <button onClick={()=>handleCounter(1)}>ADD</button>
        <button onClick={()=>handleCounter(-1)}>RED</button>

        </>
    )
}

export default Counter