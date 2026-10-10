import Header from "./Header";
import Footer from "./Footer";

export default function App(){

   const cars = ['Toyota', 'Suzuki', 'Honda', 'Ford', 'BMW'];
   const swift={ name:"swift", power:83, torque:113, price:800000};
   const data=[{"name":"swift","type":"hatchback","price":870000},{"name":"dzire","type":"sedan","price":980000},{"name":"ciaz","type":"sedan","price":1100000},{"name":"baleno","type":"hatchback","price":880000},{"name":"fronx","type":"hatchback","price":1150000},{"name":"brezza","type":"suv","price":1250000},{"name":"grand vitara","type":"suv","price":1990000},{"name":"invicto","type":"mpv","price":2990000},{"name":"alto","type":"hatchback","price":380000},{"name":"s presso","type":"hatchback","price":350000},{"name":"wagon r","type":"hatchback","price":500000},{"name":"jimny","type":"suv","price":1400000}];


  //  const hatch=data.filter(i=>i.type=="hatchback");

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const even=numbers.filter(i=>i%2==0);
    const total=numbers.reduce((x,y)=>x+y);


    // console.log(numbers);
    // console.log(even);
    // console.log( hatch );
    // console.log( total );


    const admin=true;

    const day=1;
    let dayval; 

    switch(day){
        case  1 : dayval="Sunday" ; break;
        case  2 : dayval="Monday" ; break;
        default : dayval="invalid";

    }
    
  
  
  return (

      <div className="container-xxl">
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph</p>
            <p>{dayval}</p>

            {/* { admin && <p>Hello Admin</p>}
            { !admin && <p>Hello User</p>} */}

            {(admin) ? <p>Admin</p> : <p>User</p> }

            <hr />
            <h3>Array</h3>
           <ol>
            {
              cars.map(elem=>(
                <li key={elem}>{elem}</li>
              ))  
            }
           </ol>
           <h3>Object</h3>

           <ol>
            {
              Object.entries(swift).map(([key,val])=>(
                <li key={key}>{key} - {val}</li>
              ))
            }
           </ol>
           <h2>JSON</h2>
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

        </main>
        
        <Footer year={2026} ></Footer>
      </div>
    
  )
}