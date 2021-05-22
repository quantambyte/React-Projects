import React , {useState} from 'react'

function Counter() {
    
    const[counterValue , changeValue] = useState(0)

    const add = () =>{
        changeValue(counterValue+1)
    }

    const subtract = () =>{
        changeValue(counterValue - 1)
    }
    
    return (
        <div>
            <h1>{counterValue}</h1>

            <button onClick={add}>ADD</button>
            <button onClick={subtract}>SUBTRACT</button>
        </div>
    )
}

export default Counter
