export default function UseCB({onClick}){
     console.log( "clicked" );
     
     return (
          <>
          <h2>Use Callback</h2>
          <button onClick={onClick}>Click</button>
          </>
     )
}