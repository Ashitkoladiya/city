import React, { useState } from 'react';

function container(props) {

    const [Country , setcountry]=useState('india');
    const [gdp,setGDP]=useState(0);

    const Change = ()=>{
        setcountry('UK');
    }
    const ChangeGDP =()=>{
        setGDP('5.5');
    }
    return (
        <div>
            <p>Country[function based componets]:{Country}</p>
            <button onClick={()=>Change()}>Change</button>

            <p>GDP[function based componets]:{gdp}</p>
            <button onClick={()=>ChangeGDP}>Change</button>
        </div>
    );
}

export default container;