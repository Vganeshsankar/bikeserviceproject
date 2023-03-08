import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register01 } from "./BikeServiceForm";
import { ListallbikeDetails } from "./ListallBikeValues";
import { ListallbServiceDetails } from "./ListallServiceDetails";
import { Login } from "./LoginPage";

import { Newservicedetail } from "./NewserviceDetails";
import {  Homepage } from "./PageinHome";



function App() {
  return (
    <>
    {
      (sessionStorage.getItem("auth"))?
      <>
      <BrowserRouter>
    <Homepage/>
    <Routes>
      <Route path="createbikedetails" exact element={<Register01/>}/>
      <Route path="listallbikedetails" exact element={<ListallbikeDetails/>}/>
      <Route path="createservicedetail" exact element={<Newservicedetail/>} />
      <Route path="listallservicedetails" exact element={<ListallbServiceDetails/>}/>
      <Route />
    </Routes>
    </BrowserRouter>
      </>
      :
      <>
      <Login/>
      </>
    }
   
      
    </>
  );
}

export default App;
