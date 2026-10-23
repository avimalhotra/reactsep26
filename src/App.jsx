import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import Course1 from "./Course1";
import Course2 from "./Course2";
import FetchCarsData from "./FetchCars";

export default function App(){

  const [counter,setCounter]=useState(0);
  const [counter2,setCounter2]=useState(0);
  const [course,setCourse]=useState(false);



  const [form,setForm]=useState({name:"", age:"", terms:false, gender:"", city:"" });
  const [msg,setMsg]=useState("");

  function sendData(e){
      e.preventDefault();
      setMsg("Thanks")
  }

  // useEffect(()=>{

  //         fetch("https://techaltum.com/node/api")
  //         .then(i=>i.json())
  //         .then(i=>console.log(i))
  //         .catch(e=>console.warn(e));

  // },[]);
  

  return (

      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph </p>
            <button onClick={()=>setCounter(counter+1)} className="btn btn-primary mx-2">Counter</button>
            <button onClick={()=>setCounter2(counter2+1)} className="btn btn-primary mx-2">Counter2</button>
            <span className="mx-2">{counter}</span>
            <span>{counter2}</span>

            <hr />

            <div className="row align-items-center">
              <div className="col-auto">React</div>
              <div className="col-auto">
                <div className="form-check form-switch"><input checked={course} onChange={e=>setCourse(e.target.checked)} className="form-check-input" type="checkbox" role="switch" /></div>
              </div>
              <div className="col-auto">Angular</div>
            </div>
            { !course && <Course1 />  }
            { course && <Course2 />  }

            <hr />
            
            <FetchCarsData></FetchCarsData>



            {/* <form onSubmit={sendData}>
                <input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /> 
                <input type="number" value={form.age} onChange={e=>setForm({...form,age:e.target.value})} />
                <label><input type="checkbox" checked={form.terms} onChange={e=>setForm({...form,terms:e.target.checked})} />: Terms</label>
                <label><input type="radio" name="gender" value="female" checked={ form.gender==="female" } onChange={e=>setForm({...form,gender:e.target.value})} /> : Female</label>
                <label><input type="radio" name="gender" value="male" checked={ form.gender==="male"} onChange={e=>setForm({...form,gender:e.target.value})} /> : Male</label>
                <select defaultValue="" onChange={e=>setForm({...form,city:e.target.value})}>
                  <option value="" disabled>--Choose City--</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>

                <button>Send</button>
                <output>{msg}</output>

                <hr />
                <output>{form.name}</output>
                <output>{form.age}</output>
                <output>{form.terms}</output>
                <output>{form.gender}</output>
                <output>{form.city}</output>


            </form> */}

            
        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
    
  )
}