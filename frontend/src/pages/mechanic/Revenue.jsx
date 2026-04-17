const earnings = [
  {
    date: "15 Mar 2026",
    client: "Rahul Sharma",
    service: "Battery Repair",
    amount: "₹1500",
  },
  {
    date: "14 Mar 2026",
    client: "Amit Patel",
    service: "Tyre Puncture",
    amount: "₹300",
  },
  {
    date: "12 Mar 2026",
    client: "Priya Mehta",
    service: "Engine Work",
    amount: "₹2500",
  },
  {
    date: "10 Mar 2026",
    client: "Neha Shah",
    service: "Oil Change",
    amount: "₹800",
  },
  {
    date: "08 Mar 2026",
    client: "Karan Dave",
    service: "Brake Repair",
    amount: "₹1200",
  },
];

const Revenue = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Revenue Overview</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-xl p-5" style={{ background: "#166534" }}>
          <p className="text-green-200 text-xs font-medium mb-1">
            Total Revenue
          </p>
          <p className="text-white text-2xl font-bold">₹25,000</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#1d4ed8" }}>
          <p className="text-blue-200 text-xs font-medium mb-1">This Month</p>
          <p className="text-white text-2xl font-bold">₹8,500</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#b45309" }}>
          <p className="text-yellow-200 text-xs font-medium mb-1">Total Jobs</p>
          <p className="text-white text-2xl font-bold">42</p>
        </div>
      </div>

      {/* Recent Earnings */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: "#1e293b" }}
      >
        <div className="px-5 py-4 border-b border-gray-700">
          <h4 className="text-white font-semibold">Recent Earnings</h4>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0f172a" }}>
                {["Date", "Client", "Service", "Amount"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-3 text-gray-400 font-medium text-xs uppercase tracking-wide"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {earnings.map((e, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-800 hover:bg-slate-800 transition-colors"
                >
                  <td className="px-5 py-3 text-gray-400 text-xs">{e.date}</td>
                  <td className="px-5 py-3 text-white">{e.client}</td>
                  <td className="px-5 py-3 text-gray-300">{e.service}</td>
                  <td
                    className="px-5 py-3 font-semibold"
                    style={{ color: "#f97316" }}
                  >
                    {e.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden flex flex-col divide-y divide-gray-800">
          {earnings.map((e, i) => (
            <div
              key={i}
              className="px-4 py-3 flex items-center justify-between"
            >
              <div>
                <p className="text-white text-sm font-medium">{e.client}</p>
                <p className="text-gray-400 text-xs">
                  {e.service} • {e.date}
                </p>
              </div>
              <p className="font-semibold text-sm" style={{ color: "#f97316" }}>
                {e.amount}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Revenue;
