import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState, useRef, useContext } from "react";
import FetchCarsData from "./FetchCars";
import Course1 from "./Course1";
import Course2 from "./Course2";
import {TrainerContext} from "./contextapi";

export default function App(){

  const trainer={name:"Avinash Malhotra", exp:15};

  const [counter,setCounter]=useState(0);

  return (
      <TrainerContext.Provider value={trainer}>
      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph </p>
          
            <button onClick={()=>setCounter(counter+1)} className="btn btn-primary mx-2">Counter</button>
            <span className="mx-2">{counter}</span>
        
            <hr />
            <div className="row">
                <div className="col-md-6">
                  <Course1></Course1>
                </div>
                <div className="col-md-6">
                  <Course2></Course2>
                </div>

            </div>

        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
      </TrainerContext.Provider>
    
  )
}