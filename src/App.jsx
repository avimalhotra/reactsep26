import Header from "./Header";
import Footer from "./Footer";
import Model from "./Portal";
import React from "react";
import { useState, Suspense } from "react";
import Course1 from "./Course1";
import Course2 from "./Course2";
import ErrorBoundary from "./ErrorBoundary";
// import FetchCarsData from "./FetchCars";

// Lazy import
const FetchCars = React.lazy(() => import("./FetchCars"));


export default function App(){

  const [open,setOpen]=useState(false);


  return (
      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph </p>

            <button className="btn btn-primary" onClick={()=>setOpen(true)}>Popup</button>
      
            {
              open && (<Model>
                <div className="overlay">
                    <div className="popup">
                      <button className="btn btn-close float-end" aria-label="close" onClick={()=>setOpen(false)}></button>
                      <h2>Popup</h2>
                     <iframe width="560" height="315" src="https://www.youtube.com/embed/Ct1LkNxgx9s?si=SE64NiyM_PRhgpLN" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
              </Model>)
            }

            <hr />
            
            <div className="row">
              <div className="col-md-6">
                 <ErrorBoundary>
                    <Course1></Course1>
                 </ErrorBoundary>
              </div>
              <div className="col-md-6">
                <ErrorBoundary>
                    <Course2></Course2>
                </ErrorBoundary>
              </div>
            </div>
            <hr />
           <Suspense fallback={<img src="loader.svg" alt="" width={150} height={150} />}>
                 <FetchCars></FetchCars>
           </Suspense>


        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
    
    
  )
}