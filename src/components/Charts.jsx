const Charts = ({ result }) => {
  const boxStyle =
    "bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-md p-5 h-56 flex items-center justify-center text-white";

  if (!result) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className={boxStyle}>📉 Loan Journey - EMI ₹{result.emi}</div>
      <div className={boxStyle}>📈 SIP Future Value ₹{result.sipFutureValue}</div>
      <div className={`${boxStyle} md:col-span-2`}>
        📊 Net Position ₹{result.netPosition}
      </div>
    </div>
  );
};

export default Charts;
