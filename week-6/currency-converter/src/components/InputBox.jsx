import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-gray-100 p-6 rounded-lg flex items-center shadow-md ${className}`}
    >
      <div className="w-1/2 pr-2">
        <label
          htmlFor={amountInputId}
          className="text-gray-800 mb-2 inline-block font-semibold"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-white py-2 px-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition text-gray-900"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        />
      </div>
      <div className="w-1/2 pl-2 flex flex-col items-end">
        <label
          htmlFor="currency-select"
          className="text-gray-800 mb-2 inline-block font-semibold"
        >
          Currency
        </label>
        <select
          id="currency-select"
          className="appearance-none w-full py-2 px-3 rounded border border-gray-300 bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition cursor-pointer text-gray-900 "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
