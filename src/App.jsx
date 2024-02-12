import { useState } from "react"

import Header from "./components/Header"

function App() {

  const [quantity, setQuantity] = useState(10000);
  console.log(quantity)

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input 
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-700"
        onChange={e => console.log(e.target.value)} 
      />
    </div>
  )
}

export default App
