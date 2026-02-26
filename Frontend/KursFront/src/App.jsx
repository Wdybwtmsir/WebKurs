import { useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Section1 from './Section1/Section1'
import Section2 from './Section2/Section2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Section1/>
    <Section2/>
    </>
  )
}

export default App
