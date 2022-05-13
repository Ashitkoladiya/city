import React, { useEffect, useState } from 'react';

function Timmefun(props) {
    const [time , setTime] = useState(new Date());

    const tick=()=>{
        setTime(new Date())
    }

    useEffect(()=>{
        const timeId = setInterval(()=>tick(),1000);

        return ()=>{
            clearInterval(timeId)
        }
    },[time])
    return (
        <h1>
            {time.toLocaleTimeString()}
        </h1>
    );
}

export default Timmefun;