import React from 'react'
import Navbar from './Components/navbar'
import Hero from './Components/hero'
import About from './Components/about'
import Types from './Components/types'
import Footer from './Components/footer'
import Form from './form'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Hero/> 
    <About/>
    <Types/>
    <Footer/>
    <Form/>
    </div>
  )
}


// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleCount = () => {
//     setCount(count + 5);
//   };

//   const hoverCount = () => {
//     setCount(count + 5);
//   };

//   return (
    
//     <div className="flex flex-col gap-2 justify-center items-center h-screen">
      
//       <div>
//     <p className="text-lg font-semibold">Count: {count}</p>
//     </div>

      
//       <button 
//         onClick={handleCount} 
//         className="bg-gray-500 hover:bg-blue-900
//          text-white font-bold py-3 px-5 rounded-xl 
//          transition duration-300">Click me
//       </button>

//       <button 
//         onMouseOver={hoverCount} 
//         className="bg-red-500 hover:bg-red-900
//          text-white font-bold py-3 px-5 rounded-xl 
//          transition duration-300"> Hover me
//       </button>
//     </div>
//   );
// }

export default App;
