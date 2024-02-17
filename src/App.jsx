import { useState, useEffect } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import { formatMoney, totalPay } from "./helpers/index.js";

function App() {
  const [quantity, setQuantity] = useState(10000);
  const [months, setMonths] = useState(6);
  //  const [total, setTotal] = useState(totalPay(quantity, months));
  const [total, setTotal] = useState(0);
  const [pay, Setpay] = useState(0);

  useEffect(() => {
    console.log("Component... Quantity change");

    const resultPay = totalPay(quantity, months);
    setTotal(resultPay);

    //month payment
    Setpay(total / months);
  }, [quantity, months, total]);

  useEffect(() => {
    //month payment
    Setpay(total / months);
  }, [total]);

  const MIN = 0;
  const MAX = 20000;
  const STEP = 100;

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
        <Button operator="-" fn={handleClickMinus} />
        <Button operator="+" fn={handleClickAdd} />
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
        {formatMoney(quantity)}
      </p>

      <h2 className="text-2xl font-extrabold text-gray-600 text-center">
        Choose <span className="text-indigo-700">payment term</span>
      </h2>

      <select
        className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-600"
        value={months}
        onChange={(e) => setMonths(+e.target.value)}
      >
        <option value="6">6 months</option>
        <option value="12">12 months</option>
        <option value="24">24 months</option>
      </select>

      <div className="my-5 space-y-3 bg-gray-50 p-5">
        <h2 className="text-2xl font-extrabold text-gray-600 text-center">
          Payment <span className="text-indigo-700">Summary</span>
        </h2>
        <p className="text-xl text-gray-600 text-center font-bold">
          {months} Months
        </p>
        <p className="text-xl text-gray-600 text-center font-bold">
          {formatMoney(total)} Ammount
        </p>
        <p className="text-xl text-gray-600 text-center font-bold">
          {formatMoney(pay)} Month
        </p>
      </div>
    </div>
  );
}

export default App;
