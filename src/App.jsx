import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function App(){

  const [count,setCount]=useState(0);
 
  console.log( count );
  
  return (

      <div className="container-xxl">
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph</p>
           
            <hr />

            <button className="btn btn-primary me-3" onClick={()=>setCount(count+1)}>Increment</button>
            <button className="btn btn-primary me-3" onClick={()=>setCount(count-1)}>Decrement</button>
            <button className="btn btn-primary me-3" onClick={()=>setCount(0)}>Reset</button>
            <output>{count}</output>

        </main>
        
        <Footer year={2026} ></Footer>
      </div>
    
  )
}