import { createPortal } from "react-dom";

export default function Model({children}){
     const root=document.getElementById("root-model");
     return createPortal(children,root);
}