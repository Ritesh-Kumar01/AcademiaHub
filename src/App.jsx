import { useState } from 'react'
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Navbar />
  <Hero/>

    </>
  )
}

export default App
