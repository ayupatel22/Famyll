import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";
import MyPlan from "./components/MyPlan";
import Home from "./components/Home";


const App = () => {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Signup />}></Route>
        <Route path="/SignIn" exact element={<SignIn />}></Route>
        <Route path="/forgotPass" element={<ForgotPassword />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="Signup" element={<Signup />}></Route> 
       <Route path="/Sidebar" element={<Sidebar />}></Route>
       <Route path="/Searchbar" element={<Searchbar />}></Route>
       <Route path="/home" element={<Home />}></Route>
       <Route path="/MyPlan" element={<MyPlan />}></Route>

     </Routes>
     </BrowserRouter>
  );
};
export default App;
