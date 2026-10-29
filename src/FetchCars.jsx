import {  useEffect, useState } from "react";


export default function FetchCarsData(){
     const [data,setData]=useState([]);
     const [error,setError]=useState(null);
     const [loading,setLoading]=useState(true);
     const [sort,setSort]=useState("");

   
     function sortData(e){
          const x=e.target.value;
          setSort(x);
          
          data.sort((a,b)=>{
               if(a[x] < b[x]){ return -1 }
               else{ return 1}
          });
     
     }
     
     useEffect(()=>{

               async function fetchCars(){

                   try{
                         const x=await fetch("https://techaltum.com/node/api");
                         if(!x.ok){ throw new Error(x.status) }
                         const y=await x.json();
                         setData(y);
                   }
                   catch(err){
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
               <div className="row justify-content-between mb-3">
                    <div className="col-auto">
                         <h3>Data From API</h3>
                    </div>
                    <div className="col-auto">
                         <select className="form-select" onChange={sortData} defaultValue="">
                              <option value="" disabled>--Choose Sort--</option>
                              <option value="name">Name</option>
                              <option value="type">Type</option>
                              <option value="price">Price</option>
                         </select>
                    </div>
               </div>
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