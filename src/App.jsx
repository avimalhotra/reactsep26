import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState, useRef, useContext, useReducer, useMemo, useCallback } from "react";
// import FetchCarsData from "./FetchCars";
import Course1 from "./Course1";
// import Course2 from "./Course2";
import {TrainerContext} from "./contextapi";
import useFetch from "./useFetch";


export default function App(){

  const trainer={name:"Avinash Malhotra", exp:15};
  const [counter,setCounter]=useState(0);

  
  // const expensiveCalculation = useMemo(() => {
  //   // Simulate an expensive calculation
  //   let result = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     result += i;
  //   }
  //   return result;
  // },[]);

  
  
  // const initialVal={ count:0 };

  // function reducer(state,action){
  //     switch(action.type){
  //       case "inc" : return { count: state.count+1 };
  //       case "dec" : return { count: state.count-1 };
  //       case "res" : return { count: initialVal.count };
  //       default: return state;
  //     }
  // }

  // const [state,dispatch]=useReducer(reducer,initialVal);

  // const handleClick=useCallback(()=>{
  //   console.log(new Date().toLocaleString());
  // },[counter]);
  

  const handleClick=useCallback(()=>{
    setCounter(()=>counter+1);
  },[]);

  const {data,loading,error}=useFetch("https://www.techaltum.com/node/api");

  if( loading){ return <h2>Loading</h2>}
  if( error){ return <h2>Error</h2>}


  return (
      <TrainerContext.Provider value={trainer}>
      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph </p>
          
            <button onClick={()=>setCounter(counter+1)} className="btn btn-primary mx-2">Inc</button>
            <button onClick={()=>setCounter(counter-1)} className="btn btn-primary mx-2">Dec</button>
            <button onClick={()=>setCounter(0)} className="btn btn-primary mx-2">Res</button>
            <span className="mx-2">{counter}</span>
        
            <hr />

        {/* 
            <button onClick={()=>dispatch({type:"inc"})} className="btn btn-primary mx-2">Increment</button>
            <button onClick={()=>dispatch({type:"dec"})} className="btn btn-primary mx-2">Decrement</button>
            <button onClick={()=>dispatch({type:"res"}) } className="btn btn-primary mx-2">Reset</button> */}

              {/* <output>{state.count}</output> */}

              <hr />
              {/* <p>Result: {expensiveCalculation } </p> */}
              {/* <hr /> */}

              {/* <UseCB onClick={handleClick}></UseCB> */}
              <button onClick={handleClick}>Add</button>

              <hr />

              
          {/* <Course1></Course1> */}
          <table className="table">
          <tbody>
            {
            data.map((elem,ind)=>(
              <tr key={ind}><td>{elem.name}</td><td>{elem.type}</td><td>{elem.price}</td></tr>
            ))
          }
          </tbody>
          </table>


        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
      </TrainerContext.Provider>
    
  )
}