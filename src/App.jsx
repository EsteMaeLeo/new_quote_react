import { useState } from "react";

import Header from "./components/Header";

function App() {
  const [quantity, setQuantity] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  console.log(quantity);

  function handleChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-700"
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />
      <p className="text-center my-10 text-5xl font-extrabold text-indigo-700">
        {quantity}
      </p>
    </div>
  );
}

export default App;
