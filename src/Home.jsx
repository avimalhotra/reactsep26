import { useNavigate } from "react-router-dom"
export default function HomeComp(){

     const navigate=useNavigate();

     function handleNavigate(){
          navigate("/cars");
     }

     return (
          <>
           <h2>Homepage</h2>      
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque numquam repudiandae placeat laborum, a ullam asperiores dolor consectetur porro animi facere eaque labore, incidunt fugit quod cupiditate quidem iusto saepe! </p>
            <button className="btn btn-primary" onClick={handleNavigate}>API</button>
          </>
     )
}