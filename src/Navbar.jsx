import { Link } from "react-router-dom";

export default function Nav(){
     return (
         <nav>
          <ul className="nav">
               <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
               </li>
               <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
               </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cars">Cars API</Link>
               </li>
          </ul>
         </nav>
     )
}