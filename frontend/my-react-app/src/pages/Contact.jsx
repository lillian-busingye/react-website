// import React from 'react'
// import Landing from "../components/Landing";
// import { Outlet} from "react-router-dom";
// import { Link } from "react-router-dom";


function Contact() {
  return (
    <div className="flex bg-red-200 h-100 w-90 size-full py-10 gap-40 justify-center">
      {/* <Landing /> */}
      {/* <Outlet /> */}
      {/* <h1>Contact Us</h1> */}
      <div>
        <p>OUR ADDRESS: NTINDA, KAMPALA UGANDA.</p>
        <p>PHONE NO: 256 700123456.</p>
        <p>EMAIL ADDRESS: lillystore11@gmail.com. </p>
        <footer className="flex w-40 items-center gap-5 mt-20">
        <button><img src="./src/assets/x.png" alt="x" /></button>
        <button><img src="./src/assets/linkedin.png" alt="linkedin" /></button>
        <button><img src="./src/assets/instagram.webp" alt="instagram" /></button>
        <button><img src="./src/assets/facebook.png" alt="facebook" /></button>
      </footer>
      </div>
      <div className="block">
        <h1>WE LOVE TO HEAR FROM YOU</h1>
        <form action="#">
          <h1>NAME:</h1>
          <input type="text" />
          <h1>EMAIL:</h1>
          <input type="email" />
          <h1>PHONE NUMBER:</h1>
          <input type="number" />
          <h1>MESSAGE</h1>
          <input type="text" />
          <div>
          <button type="submit" className="bg-purple-950 text-white rounded-full py-2 m-4">SUBMIT</button>
          </div>
          
        </form>

      </div>
      {/* <button className="bg-red-500 px-px"><Link to="/">BACK</Link></button> */}
    </div>
  );
}

export default Contact;
