// export default function Header(a){
//      console.log( a );                              // object
//      return (
//           <>
//                <header className="p-3">
//                     <h1>  Header</h1>
//                     <p>Name: {a.username}</p>
//                     <p>id: {a.userid}</p>
//                </header>
//           </>
//      )
// }

export default function Header( {username="", userid=0 , userisvalid=false} ){
     return (
          <>
               <header className="p-3">
                    <h1>Header</h1>
                    <p>Name: {username}</p>
                    <p>id: {userid}</p>
                    { userisvalid && <p>Valid</p> }
                    { !userisvalid && <p>Invalid</p> }
               </header>
          </>
     )
}