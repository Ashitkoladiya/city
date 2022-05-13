import React, { useState } from 'react';

function City(props) {
    const[contryname,setCountry]=useState('india')
    const[cityname,setCity]=useState('surat')

    const changeCountry=()=>{
        setCountry('us')
        setCity('chicago')
       
    }
    return (
        <div>
            <p>state:{contryname}</p>
            <button onClick={()=>changeCountry()}>Change</button>

            <p>cityname:{cityname}</p>
            
        </div>
    );
}

export default City;