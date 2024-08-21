// import Landing from "../components/Landing";
// import { Outlet } from "react-router-dom";

// import { Link } from "react-router-dom";

// import React from 'react'

function About() {
  return (
    <div className="flex bg-red-200 m-8 p-10 gap-5">
      {/* <Landing /> */}
      {/* <Outlet /> */}
      <div className="block">
        <div className="bg-slate-400">
        <h1>“WELCOME TO LILLY,s STORE”</h1>
        <h2>Your Destination for Fine Wines and Spirits.</h2>
        </div>
      <h3>OUR STORY</h3>
      <p>
        Welcome Lillys Store, your destination for the finest selection of wines
        and spirits. Established in 2019, our store has been a cornerstone of
        the community, offering exceptional products and unparalleled customer
        service. Our journey began with a simple mission: to provide a curated
        collection of high-quality liquors from around the world, making them
        accessible to enthusiasts and connoisseurs alike. Over the years, we
        have built strong relationships with renowned vineyards, distilleries,
        and breweries, ensuring that our shelves are stocked with both timeless
        classics and exciting new discoveries. Our team of knowledgeable and
        passionate staff is dedicated to helping you find the perfect bottle for
        any occasion, whether you are celebrating a special milestone or simply
        enjoying a quiet evening at home. At Lillys Store, we believe in the
        power of a great drink to bring people together, create memorable
        experiences, and celebrate lifes moments, big and small. Our commitment
        to quality, community, and education drives everything we do. We invite
        you to explore our store, engage with our experts, and discover the
        exceptional world of wines and spirits that awaits you.
      </p>
      <footer className="flex w-40 items-center gap-5">
        <button><img src="./src/assets/x.png" alt="x" /></button>
        <button><img src="./src/assets/linkedin.png" alt="linkedin" /></button>
        <button><img src="./src/assets/instagram.webp" alt="instagram" /></button>
        <button><img src="./src/assets/facebook.png" alt="facebook" /></button>

      </footer>
      </div>
      <div>
        <button className="bg-violet-950 rounded-full text-white p-5">OUR GALLERY</button>
      </div>
      
      {/* <button className="bg-red-500 px-px"><Link to="/">BACK</Link></button> */}
    </div>
  );
}

export default About;
