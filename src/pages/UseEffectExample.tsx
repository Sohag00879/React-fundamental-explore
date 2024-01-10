import { useEffect, useState } from "react";

function UseEffectExample() {
    const [hidden, setHidden] = useState(false);
  return (
    <div>
        <button onClick={()=> setHidden((prev)=> !prev)} className="bg-green-700 hover:bg-green-800 p-3 ml-3 mt-5 border rounded">{hidden ? 'Show':'Hide'}</button>
        {!hidden && <Counter/>}
    </div>
  )
}

const Counter = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCount((prev)=>prev + 1)
        },1000);
        return()=>{{
            clearInterval(intervalId)
        }}
      
    },[]);
    return <h1 className="border border-red-50">{count}</h1>
}

export default UseEffectExample;