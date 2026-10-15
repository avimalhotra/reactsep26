import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function App(){

  const [counter,setCounter]=useState(0);
  const [name,setName]=useState("");
  const [age,setAge]=useState("");

  // console.log( counter );

  function updateCounter(){
    
    // setCounter(counter+counter);
    // setCounter(counter+1);
    // setCounter(counter+2);
    // setCounter(counter+3);

    setCounter(prev=>prev+1);
    setCounter(prev=>prev+2);
    setCounter(prev=>prev+3);

  }


 
  return (

      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph</p>
            <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter+1)}>Increment</button>
            <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter-1)}>Deccrement</button>
            <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(0)}>Reset</button>
            <output>{counter}</output>

            <hr />

            <button className="btn btn-outline-primary me-3" onClick={updateCounter}>Update</button>

            <hr />

            <label>Name: <input type="text" value={name} onChange={e=>setName(e.target.value)} /> </label>
            <label>Age: <input type="number" value={age} onChange={e=>setAge(e.target.value)} /> </label>
            <br /> <br />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            
        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
    
  )
}