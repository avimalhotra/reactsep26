import { Routes, Route } from "react-router-dom";
import HomeComp from "./Home";
import AboutUs from "./About";
import ContactUs from "./Contact";
import FetchCarsData from "./FetchCars";
import NotFound from "./NotFound";

export default function AppRouter(){
     return (
          <>
               <Routes>
                    <Route path="/" element={<HomeComp></HomeComp>} />
                    <Route path="/about" element={<AboutUs></AboutUs>} />
                    <Route path="/contact" element={<ContactUs></ContactUs>} />
                    <Route path="/cars" element={<FetchCarsData></FetchCarsData>} />
                    <Route path="*" element={<NotFound></NotFound>} />
               </Routes>
          </>
     )
}