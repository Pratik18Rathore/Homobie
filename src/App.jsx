import { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import Charts from "./components/Charts";
import ResultCards from "./components/ResultCards";

export default function App() {
  const [input, setInput] = useState({
    loanAmount: "",
    interestRate: "",
    loanTenure: "",
    sipAmount: "",
    sipReturnRate: "",
  });

  const [result, setResult] = useState(null);
  const [darkMode, setDarkMode] = useState(true);

  const calculate = () => {
    const P = parseFloat(input.loanAmount);
    const r = parseFloat(input.interestRate) / 12 / 100;
    const n = parseFloat(input.loanTenure) * 12;

    const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - P;

    const sip = parseFloat(input.sipAmount);
    const sipRate = parseFloat(input.sipReturnRate) / 12 / 100;
    let futureValue = 0;
    for (let i = 0; i < n; i++) {
      futureValue = (futureValue + sip) * (1 + sipRate);
    }

    setResult({
      emi: emi.toFixed(0),
      totalInterest: totalInterest.toFixed(0),
      sipFutureValue: futureValue.toFixed(0),
      netPosition: (futureValue - totalInterest).toFixed(0),
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white p-4 transition-colors">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">🏠 SIP + Home Loan Calculator</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-xl bg-gray-800 text-white dark:bg-white dark:text-black"
            >
              Toggle {darkMode ? "☀️" : "🌙"}
            </button>
          </div>

          <InputForm input={input} setInput={setInput} onCalculate={calculate} />
          <Charts result={result} />
          <ResultCards result={result} />
        </div>
      </div>
    </div>
  );
}
