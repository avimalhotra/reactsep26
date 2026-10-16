import Header from "./Header";
import Footer from "./Footer";
import { use, useState } from "react";

export default function App(){



  const [counter,setCounter]=useState(0);
  // const [name,setName]=useState("");
  // const [age,setAge]=useState("");

  // const [car,setCar]=useState({ name:"swift", fuel:"petrol" });      // object
  // const [cars,setCars]=useState(["alto","brezza"]);           // array

  const [form,setForm]=useState({name:"", age:"", email:""});
  const [todo,setTodo]=useState(["alto","swift","brezza"]);


  function updateCar(){
      // setCar(i=>({...i, power:88, torque:120}));
      // setCars(i=>([...i,"swift"]));
  }

  function updateForm(e){
    e.preventDefault();

    // console.log( e.target.name.value, e.target.age.value );
      // const { name, age }={e.target.name.value, e.target.age.value};

      console.log("form submited");
      

  }

  function insertData(e){
      const {name,value}=e.target;
      
      setForm( i=>({...i, [name]: value }));

  }

  function addCar(e){
      e.preventDefault();

      const item=e.target.car.value;

      setTodo(i=>([...i,item]));
      
  }

  function removeCar(e){
      const car=e.target.parentNode.textContent.trim();        // string

      setTodo( todo.filter(i=>i!=car) );
      
  }


 
  return (

      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph</p>
            <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter+1)}>Increment</button>
            <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(counter-1)}>Deccrement</button>
            <button className="btn btn-outline-primary me-3" onClick={()=>setCounter(0)}>Reset</button>
            <output>{counter}</output>

            <hr />

            <button className="btn btn-outline-primary me-3" onClick={updateCar}>Update</button>

            <hr />

            <form onSubmit={updateForm}>
               <label>Name: <input type="text" name="name" value={form.name} required onChange={insertData} /> </label>
              <label>Age: <input type="number" name="age" required value={form.age} onChange={insertData} /> </label>
              <label>Email: <input type="email" name="email" required value={form.email} onChange={insertData} /> </label>
              <button>Update</button>
            </form>
           
            <br /> <br />
            <p>Name: {}</p>
            <p>Age: {}</p>

            <hr />

          <form onSubmit={addCar} > <label>car: <input type="search" name="car" required /></label> <button>Add car</button> </form>
          
          <ol className="list-group">
            {
              todo.map((num,ind)=>(
                <li className="list-group-item" key={ind}> {num} <button onClick={removeCar} className="btn-close float-end"></button> </li>
              ))
            }
            </ol>

            
        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
    
  )
}