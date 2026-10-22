import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

export default function App(){

  // const [name,setName]=useState("");
  const [form,setForm]=useState({name:"", age:"", terms:false, gender:"", city:"" });

  console.log( form.name, form.age, form.terms, form.gender, form.city );


  return (

      <div className="container-xxl">
        
        <Header></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph </p>

            <form>
                <input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} /> 
                <input type="text" value={form.age} onChange={e=>setForm({...form,age:e.target.value})} />
                <label><input type="checkbox" checked={form.terms} onChange={e=>setForm({...form,terms:e.target.checked})} />: Terms</label>
                <label><input type="radio" name="gender" value="female" checked={ form.gender==="female" } onChange={e=>setForm({...form,gender:e.target.value})} /> : Female</label>
                <label><input type="radio" name="gender" value="male" checked={ form.gender==="male"} onChange={e=>setForm({...form,gender:e.target.value})} /> : Male</label>
                <select defaultValue="" onChange={e=>setForm({...form,city:e.target.value})}>
                  <option value="" disabled>--Choose City--</option>
                  <option>Delhi</option>
                  <option>Mumbai</option>
                </select>

                <hr />
                <output>{form.name}</output>
                <output>{form.age}</output>
                <output>{form.terms}</output>
                <output>{form.gender}</output>
                <output>{form.city}</output>



            </form>
        
            
        </main>
        
        <Footer year={new Date().getFullYear()}></Footer>
      </div>
    
  )
}