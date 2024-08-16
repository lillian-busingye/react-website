// import React from 'react';

import { Link } from "react-router-dom";



// import "../App";

function Landing() {
  return (
    
    <div className="navbar flex gap-20 font-serif justify-end m-px">
      <h1 className="text-3xl font-bold underline text-pink-950">
        LILLY,s STORE.
      </h1>
      <ul className="navbar flex gap-20 font-serif justify-between m-px">
        <button>
          <li className="list"><Link to="/About">ABOUT US</Link></li>
        </button>
        <button>
          <li className="list">CONTACT US</li>
        </button>
        <button>
          <li className="list">PRODUCTS</li>
        </button>
        <button>
          <li className="list">ORDER</li>
        </button>
      </ul>
    </div>
  );
}
export default Landing;
