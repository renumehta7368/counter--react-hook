import React, { useEffect, useState } from "react";
import './Counter.css'
function Counter(){
    // top level management where we always write our hooks
   //const [state, setState] = useState([])
   const [count, setCount ] = useState(0)
   //------------similer to component did mount, empty dependency array
//useEffect(() => {
   // console.log('useEffect called')
//}, [])
///-------------pass a dependency array, similer to component did update

//useEffect(() => {
    //console.log('useEffect called')
//}, [count])
///-----------using a cleanup or a return function , similer to component will unmount
useEffect(() => {
    console.log('useEffect called')
    return ()=> {
        //whatever u pass in the console the component will return in console just before the function is unmount
        console.log('component did unmount is called')
    }
}, [])
   
    return(
        <div>
            <h1>Counter : {count}
                </h1>
                <button onClick={() => 
                setCount(count + 1)}>
                    increment</button>
                </div>
    )
}
export default Counter