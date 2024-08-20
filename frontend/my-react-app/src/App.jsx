// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Landing from "./components/Landing";
// import Input from "./components/Input";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Order from "./pages/Order";

import { Routes, Route } from "react-router-dom";

function App() {
  // const  [count, setCount] = useState(0)

  return (
    <>
    <Landing />
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/About" element= {< About />}/>
      <Route path="/Contact" element= {< Contact />}/>
      <Route path="/Products" element= {< Products />}/>
      <Route path="/Order" element= {< Order />}/>
    </Routes>
    
   

      {/* <Landing /> */}
      {/* <Input /> */}

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
           {count}
        </button> 
      </div> */}
    </>
  );
}

export default App;
