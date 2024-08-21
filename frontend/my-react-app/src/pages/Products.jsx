// import React from 'react'
// import Landing from "../components/Landing";
// import { Outlet } from "react-router-dom";
// import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      {/* <Landing /> */}
      {/* <Outlet /> */}
        {/* <h1>Our Products</h1> */}
        <div className="block bg-red-300 w-100 h-90">
          <h1 className="text-red-600 text-lg">EXPLORE OUR COLLECTION</h1>
          <div className="block ">
          <button className="p-6">
            WINES 
            <img src="./src/assets/wine.jpeg" alt="wine" />
            </button>
          <button className="p-6">WHISKY
            <img src="./src/assets/whisky.jpg" className="w-20" alt="whisky" />
          </button>
          <button className="p-6">SPIRITS
            <img src="./src/assets/spirit.jpeg" className="w-20" alt="spirit" />
          </button>
          <button className="p-6">RUM
            <img src="./src/assets/rum.jpg" className="w-20" alt="rum" />
          </button>
          <button className="p-6">OTHERS <img src="./src/assets/others.jpg" alt="others" /></button>
          </div>
          
        </div>
        {/* <button className="bg-red-500 px-px"><Link to="/">BACK</Link></button> */}
    </div>
  )
}

export default Products;