import React, { useState } from 'react';
import App from '../App';

function container(props) {

    const [Country , setCountry]=useState('india');
    const [Gdp,setGdp]=useState(0);

    const Change = ()=>{
        setCountry('UK')
    }
 
    
    return (
        <div>
            <p>Country:{Country}</p>
            <button onClick={()=>Change()}>Change</button>

            <p>GDP :{Gdp}</p>
            <button onClick={()=>setGdp(5.5)}>Change GDP</button>
        </div>
    );
}

export default container;