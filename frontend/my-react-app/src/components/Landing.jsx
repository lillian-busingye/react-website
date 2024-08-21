// import React from 'react';

import { Link } from "react-router-dom";



// import "../App";

function Landing() {
  return (
    
    <div className="navbar flex gap-20 font-serif justify-end m-px">
      <Link to="/"><h1 className="text-3xl font-bold underline text-pink-950">
        LILLY,s STORE.
      </h1></Link>
      <ul className="navbar flex gap-20 font-serif justify-between m-px">
        <button>
          <li className="list"><Link to="/About">ABOUT US</Link></li>
        </button>
        <button>
          <li className="list"><Link to="Contact">CONTACT US</Link></li>
        </button>
        <button>
          <li className="list"><Link to="Products">PRODUCTS</Link></li>
        </button>
        <button>
          <li className="list"><Link to="Order">ORDER</Link></li>
        </button>
      </ul>
    </div>
    
  );
}
export default Landing;
