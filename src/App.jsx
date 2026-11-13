import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./AppRoutes";
import Nav from "./Navbar";
// import Model from "./Portal";
// import React from "react";
// import { useState, Suspense } from "react";
// import Course1 from "./Course1";
// import Course2 from "./Course2";
// import ErrorBoundary from "./ErrorBoundary";
// import FetchCarsData from "./FetchCars";

// Lazy import
// const FetchCars = React.lazy(() => import("./FetchCars"));


export default function App(){


  return (
    <BrowserRouter>
      <div className="container-xxl">
        
        <Header></Header>
        <Nav></Nav>
       
        <main className="p-3">
            <AppRouter>
            </AppRouter>
        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
      </BrowserRouter>
    
  )
}