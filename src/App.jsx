import { useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const [quantity, setQuantity] = useState(10000);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;
  console.log(quantity);

  function handleChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  function handleClickMinus() {
    const value = quantity - STEP;

    if (value < MIN) {
      alert("Quantity not valid");
      return;
    }

    setQuantity(value);
  }

  function handleClickAdd() {
    const value = quantity + STEP;

    if (value > MAX) {
      alert("Quantity not valid");
      return;
    }

    setQuantity(value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <div className="flex justify-between my-6">
        <Button 
          operator='-'
          fn={handleClickMinus}
        />
        <Button 
          operator='+'
          fn={handleClickAdd}
        />

      </div>
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
