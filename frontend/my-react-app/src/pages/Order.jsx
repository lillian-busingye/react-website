// import React from 'react'
// import Landing from "../components/Landing";
// import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

function Order() {
  return (
    <div className="flex bg-red-100 justify-between h-40">
      {/* <Landing /> */}
      {/* <Outlet /> */}
      <div className="justify-center">
      <h1 className="text-red-600 text-lg italic">Convenient Delivery to Your Doorstep.</h1>
      <img src="./src/assets/guy.jpg" className="w-50 h-30 place-self-center" alt="guy" />
      </div>
       
        <div>
          <label htmlFor="options">Choose Item</label>
          <select name="options" id="choose">
            <option value="wines">WINES</option>
            <option value="whisky">WHISKY</option>
            <option value="gin">GIN</option>
            <option value="rum">RUM</option>
            <option value="tequila">TEQUILA</option>
            <option value="soft">SOFT DRINKS</option>
            <option value="vodka">VODKA</option>
            </select>
          
        </div>
        {/* <button className="bg-red-500 px-px"><Link to="/">BACK</Link></button> */}
    </div>
  );
}

export default Order;