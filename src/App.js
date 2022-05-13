import logo from './logo.svg';
import './App.css';
import Time from './time/time';
import City from './ashit/city';
import Timmefun from './time/Timmefun';
import { useEffect, useState } from 'react';
import Loading from './compontes/Loading';
import Home from './container/Home';

const HomeWithLoading = Loading(Home)
function App() {
 

  const [Loading,setLoading]=useState(false);
  const [Data,setData]=useState([]);

  let orgdata=[
    {
      id :101,
      name:'ashit'
    },
    {
      id:102,
      name:'koladiya'
    }
  ]

  useEffect (
    ()=>
    {
      setLoading(true);
      setTimeout(()=>{setLoading(false);setData(orgdata)},2000);
    },[]
  )

 
  return (
   <>
    <HomeWithLoading 
    isLoading={Loading}
    data={Data}
    />

   </>
  );
}

export default App;
