export default function Course2({trainer,reset}){
     return (
          <>
               <h2>Angular</h2>
               <p>Angular Details</p>
               <p>Trainer:{trainer}</p>
               <button className="btn btn-primary" onClick={()=>reset(0)}>Reset</button>
          </>
     )
}