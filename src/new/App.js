import React, { useEffect, useState } from 'react';
import Loading from './compontes/Loading';
import Home from './container/Home';
import Incri from './new/Incri';
import Timmefun from './time/Timmefun';

// const HomeWithLoading = Loading(Home)
function App() {
  
  // const [loading,setLoading]=useState(false);
  // const [data,setdata]=useState([]);

  // let orgdata=[
  //   {id:101, name :"Ashit"},
  //   {id:102,name:"Dishant"},
  //   {id:103,name:"Denshi"}
  // ]

  // useEffect(
  //   ()=>{
  //     setLoading(true);
  //     setTimeout(() => {setLoading(false);setdata(orgdata)}, 2000);
  //   },
  //   [])
  // console.log(loading,data);
  return (
    <>
    {/* <HomeWithLoading  
      isLoading={loading}
      data={data}
      /> */}

      <Incri />
      {/* <Timmefun/> */}
    </>
  );
}

export default App;