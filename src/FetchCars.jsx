import {  useEffect, useState } from "react";


export default function FetchCarsData(){
     const [data,setData]=useState([]);
     const [error,setError]=useState(null);
     const [loading,setLoading]=useState(true);
     
     useEffect(()=>{

               async function fetchCars(){

                   try{
                         const x=await fetch("https://techaltum.com/node/api");
                         if(!x.ok){ throw new Error(x.status) }
                         const y=await x.json();
                         // console.log( y );
                         setData(y);
                   }
                   catch(err){
                         // console.warn(err);
                         setError(err);
                   }
                   finally{
                         setLoading(false);
                   }

               }

               fetchCars();
     },[]);

     if(loading){ return <h2>Loading Data</h2> }
     if(error){ return <h2>Error while fetching data</h2> }

     return (
          <>
               <table className="table table-bordered">
                    <thead>
                         <tr>
                              <th>S No</th>
                              <th>Name</th>
                              <th>Type</th>
                              <th>Price</th>
                         </tr>
                    </thead>
                    <tbody>
                         {
                              data.map((elem,ind)=>(
                                   <tr key={ind}>
                                        <td>{++ind}</td>
                                        <td>{elem.name}</td>
                                        <td>{elem.type}</td>
                                        <td>{elem.price}</td>
                                   </tr>
                              ))
                         }
                    </tbody>

               </table>
          </>
     )
}