import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from './Register.js';
import Home from './Home.js';
import Class from './Class.js';
import Food from './Food.js';
import Title from './Title.js';
import Correct from "./Correct.js";
import SignInSide from "./login.js";

function App() {
  return (
  <div>
  <Routes>
      <Route path='/Title' element={<Title />} />
      <Route path='/' element={<Title />} />
      <Route path='/home' element={<Title />} />
      <Route path='/register' element={<Register />} />
      <Route path='/class' element={<Class />} />
      <Route path='/food' element={<Food />} />
      <Route path='/correct' element={<Correct />} />
      <Route path='/login' element={<SignInSide />} />
  </Routes>
  </div> 
  );
}

export default App;
