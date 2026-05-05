import { useState } from "react";

const CounterFBC=(props)=>{
    let [count,setcount]=useState(0);
    return(
        <>
        <h4>Props Data:{props.role},{props.fulldetails}</h4>
        <h3>function baset components</h3>
        <h1>Count:{count}</h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <button onClick={()=>{setcount(count-1)}}>Decrement</button>
        <button onClick={()=>{setcount(0)}}>Reset</button>
        </>
    )
}
export default CounterFBC;                              