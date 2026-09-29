import logo from "./assets/vite.svg";

export default function Header(){
     return (
          <header className="p-3">
               <h1> <img src={logo} /> Header</h1>
          </header>
     )
}