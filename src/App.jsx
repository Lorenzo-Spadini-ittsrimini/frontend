import { useState } from 'react'
import Layout from "@/components/Layout.jsx" 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout></Layout>
    </>
  )
}

export default App
