import { useState } from "react";
import { InputBox } from "./components";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";

// SVG for swap icon
const SwapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="size-6 fill-none stroke-current stroke-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
    />
  </svg>
);

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => setConvertedAmount(amount * currencyInfo[to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-violet-500 to-blue-500 p-4">
      <div className="w-full max-w-lg mx-auto shadow-lg rounded-lg px-6 py-8 bg-white text-gray-800 backdrop-filter backdrop-blur-lg bg-opacity-80">
        <h1 className="text-3xl font-semibold text-center mb-6 text-teal-600">
          Currency Converter
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-5">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>
          <div className="flex items-center justify-center mb-5">
            <button
              type="button"
              className="w-full flex justify-center items-center bg-blue-500 px-4 py-3 shadow-md shadow-blue-500/50 rounded-lg hover:bg-blue-600 transition text-white"
              onClick={swap}
            >
              <SwapIcon />
              <span>Swap</span>
            </button>
          </div>
          <div className="w-full mb-5">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-3 rounded-lg shadow-md  shadow-blue-500/50 hover:bg-blue-600 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
