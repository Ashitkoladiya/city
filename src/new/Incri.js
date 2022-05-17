import React, { useState } from 'react';
const Incri=()=>{
const incNum=()=>{
    if(num < 10){
    setNum(num+1);
    }else{
        setNum(10);
    }
} 
const decNum=()=>{
    if(num > 0){
    setNum(num-1);
    }else{
        setNum(0);
    }
}
const [num , setNum]=useState(0)
    return (
        <>
        <center>
        <h1>{num}</h1>
        <button onClick={incNum}>+</button>
        <button onClick={decNum}>-</button>
        </center>
        
        </>
    );
}


export default Incri;