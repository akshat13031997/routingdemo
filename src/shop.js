import React,{useState, useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
function Shop() {
  const [item, setitem] = useState([]);
  useEffect(()=>{
    fetchdata();
  },[])
  const fetchdata = async()=>{
    const data = await fetch('https://fortnite-public-api.theapinetwork.com/upcoming/get')
    const items = await data.json();
    //console.log(items.data);
    setitem(items.data);
  }
  return (
    <div >
     {item.map(items=>(
       <h1 key={items.itemId}>
         <Link to={`shop/${items.itemId}`}>{items.item.name}</Link>
       </h1>
     ))}
    </div>
  );
}

export default Shop;
