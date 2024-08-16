// import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import Landing from "./components/Landing";
// import Input from "./components/Input";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  // const  [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/About" element= {< About />}/>
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
