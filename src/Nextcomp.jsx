import {TrainerContext, CourseContext} from "./contextapi";
import { useContext } from "react";

export default function NextComp(){
     const teacher=useContext(TrainerContext);
     const reactcourse=useContext(CourseContext);

     return (
          <>
               <div className="card">
                   <div className="card-body">
                         <h4>Next JS</h4>
                         <p>Trainer: {teacher.name}</p>
                         <p>Exp: {teacher.exp}</p>
                         <p>Dur: {reactcourse.dur}</p>
                   </div>
               </div>
          </>
     )
}