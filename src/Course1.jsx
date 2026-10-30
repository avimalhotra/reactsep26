// import TrainerContext from "./contextapi";
// import { useContext } from "react";
import { CourseContext } from "./contextapi";

import NextComp from "./Nextcomp";

export default function Course1(){

     const react={name:"React 19", dur:4};

     // const teacher=useContext(TrainerContext);                   // use context

     return (
          <>
              <CourseContext.Provider value={react}>
                <div className="card">
                    <div className="card-body">
                         <h2>React JS</h2>
                         <p>React JS  Details</p>
                         {/* <p>Trainer:{teacher.name}</p> */}
                         <NextComp></NextComp>
                    </div>
               </div>
              </CourseContext.Provider>
          </>
     )
}