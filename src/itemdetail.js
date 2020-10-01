import React,{useState, useEffect} from 'react';
import './App.css';
function ItemDetail({match}) { 
    //console.log(match);
    // match is a property that is accesible when we use router and go to this page
    //match has lot of info like the path and url which we use to uniquily render that 'id' page
  const [itm, setitm] = useState({
    images :{}
  });
  
  useEffect(()=>{
    fetchdata();
  },[])
  const fetchdata = async()=>{
    const data = await fetch(`https://fortnite-public-api.theapinetwork.com/items/get?id=${match.params.id}`)
    const items = await data.json();
    //console.log(items.data.item);
    setitm(items.data.item);
  }
  return (
    <div >
     <h1> {itm.name} </h1>
     <img src={itm.images.information} alt=""></img>
    </div>
  );
}

export default ItemDetail;
