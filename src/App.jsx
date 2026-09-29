import Header from "./Header";
import Footer from "./Footer";

export default function App(){

  const pi=Math.PI;

  return (
      
      <div className="container-xxl">
        <Header></Header>
       
        <main className="p-3">
           <h2>Main</h2>      
          <p>PI is {2+3} </p>
        </main>

        <Footer></Footer>
      </div>
    
  )
}