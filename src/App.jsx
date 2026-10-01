import Header from "./Header";
import Footer from "./Footer";

export default function App(){

  function sayHi(){ console.log("Hello") }
  function sayHello(x){ console.log(`Hello ${x}`) }

  const title="Avi";
  const id=212;

  return (
      
      <div className="container-xxl">
        <Header username={title} userid={id} userisvalid={true}></Header>
       
        <main className="p-3">
            <h2>Main</h2>      
            <p>Paragraph</p>
            <p>Hello {title}</p>
            
            <hr />

            <button onClick={ sayHi } className="btn btn-primary me-2">Hi</button>
            <button onClick={ e=>sayHello(e.target.textContent) } className="btn btn-primary me-2">Hello</button>
            <button onClick={ e=>sayHello(e.target.textContent) } className="btn btn-primary me-2">Hola</button>


        </main>

        
        <Footer year={2026} ></Footer>
      </div>
    
  )
}