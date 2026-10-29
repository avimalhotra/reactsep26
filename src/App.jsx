import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState, useRef } from "react";
import FetchCarsData from "./FetchCars";
import Course1 from "./Course1";
import Course2 from "./Course2";

export default function App(){

  const [counter,setCounter]=useState(0);
  const ref=useRef(0);
  const ref2=useRef("");

  function changeRef(){
    ref.current=ref.current+1;
    console.log( ref );
  }

  function focusRef(){
    ref2.current.focus();
  }


  return (

      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph </p>

            <button onClick={()=>setCounter(counter+1)} className="btn btn-primary mx-2">Counter</button>
            <span className="mx-2">{counter}</span>
        
            <hr />

            <button onClick={changeRef} className="btn btn-primary mx-2">Change Ref</button>
            <button onClick={focusRef} className="btn btn-primary mx-2">Focus Ref</button>
            <input type="text" ref={ref2} />


            <hr />
            <div className="row">
                <div className="col-md-6">
                  <Course1 trainer={counter} reset={setCounter}></Course1>
                </div>
                <div className="col-md-6">
                  <Course2 trainer={counter} reset={setCounter}></Course2>
                </div>

            </div>

            

            {/* <FetchCarsData></FetchCarsData> */}

            
        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
    
  )
}