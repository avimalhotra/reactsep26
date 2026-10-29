export default function Course1({trainer,reset}){


     return (
          <>
               <h2>React JS</h2>
               <p>React JS  Details</p>
               <p>Trainer:{trainer}</p>
               <button className="btn btn-primary" onClick={()=>reset(0)}>Reset</button>
          </>
     )
}