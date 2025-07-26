export default function InputForm({ input, setInput, onCalculate }) {
  const handle = (e) => setInput({ ...input, [e.target.name]: e.target.value });

  const inputs = [
    { name: "loanAmount", label: "Home Loan Amount" },
    { name: "interestRate", label: "Interest Rate (%)" },
    { name: "loanTenure", label: "Loan Tenure (Years)" },
    { name: "sipAmount", label: "SIP Monthly Amount" },
    { name: "sipReturnRate", label: "SIP Return Rate (%)" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {inputs.map(({ name, label }) => (
        <div
          key={name}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4"
        >
          <input
            name={name}
            type="number"
            placeholder={label}
            value={input[name]}
            onChange={handle}
            className="w-full bg-transparent focus:outline-none placeholder-gray-300 text-white"
          />
        </div>
      ))}
      <button
        onClick={onCalculate}
        className="col-span-full bg-blue-600 hover:bg-blue-500 rounded-xl py-3 font-semibold"
      >
        Calculate
      </button>
    </div>
  );
}
