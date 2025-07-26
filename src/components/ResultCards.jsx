export default function ResultCards({ result }) {
  if (!result) return null;

  const cardStyle =
    "bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-md p-4 text-center";

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className={cardStyle}>
        <p className="text-sm">🏦 EMI</p>
        <h2 className="text-xl mt-1 font-bold text-yellow-400">₹{result.emi}</h2>
      </div>
      <div className={cardStyle}>
        <p className="text-sm">💸 Total Interest Paid</p>
        <h2 className="text-xl mt-1 font-bold text-red-400">₹{result.totalInterest}</h2>
      </div>
      <div className={cardStyle}>
        <p className="text-sm">📈 SIP Future Value</p>
        <h2 className="text-xl mt-1 font-bold text-green-400">₹{result.sipFutureValue}</h2>
      </div>
      <div className={cardStyle}>
        <p className="text-sm">📊 Net Financial Position</p>
        <h2 className="text-xl mt-1 font-bold text-blue-400">₹{result.netPosition}</h2>
      </div>
    </div>
  );
}
