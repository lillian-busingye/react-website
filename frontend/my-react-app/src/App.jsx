import { useState } from 'react'
// import Landing from './components/Landing'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='navbar flex gap-20 font-serif justify-end m-px'>
      <h1 className="text-3xl font-bold underline text-pink-950">
    LILLY,s STORE
    </h1>
        <ul className='navbar flex gap-20 font-serif justify-between m-px'>
          <button><li className='list'>ABOUT US</li></button>
          <button><li className='list'>CONTACT US</li></button>
          <button><li className='list'>ITEMS</li></button>
          <button><li className='list'>ORDER</li></button>
          </ul>
      </div>
      <form className='box flex justify-between mt-10'>
      <div className='form font-serif block'>
        <h2 className='heading font-serif text-white'>LOG IN</h2>
        <h3 className='heading font-serif text-white'>Enter Email:</h3>
        <input type="email" name="" id="email" className='input'/>
        <h4 className='heading font-serif text-white'>Enter Password:</h4>
        <input type="password" name="" id="password" className='input'/>
        <div>
        <button type='submit' className='btn'>LOGIN</button>
        </div>
      </div>
      <img src="./src/assets/bottle.png" alt="bottle" className='img'/>
      </form>
      

    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
           {count}
        </button> 
      </div>
    </>
  )
}

export default App
